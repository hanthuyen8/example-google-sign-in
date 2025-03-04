import {CompactLogger, ICompactLogger, NullLogger} from "../services/Logger";
import {ResponseError} from "../configs/Errors";
import {Request, Response} from "express";
import {z} from "zod";

export const loggerWrapper1 = (
    callback: (logger: ICompactLogger) => Promise<void>,
    onError: ErrCallback,
    cfg: LoggerConfig | undefined = undefined,
) => {
    (async () => {
        const logger = cfg ? new CompactLogger(cfg.isGke, cfg.prefix) : new NullLogger();
        try {
            await callback(logger);
        } catch (e) {
            parseError(logger, onError, e);
        } finally {
            logger.dump();
        }
    })();
}

export const loggerWrapper2 = (
    callback: (logger: ICompactLogger, req: Request, res: Response) => Promise<void>,
    prefix: string | null = null,
) => {
    return (req: Request, res: Response) => {
        const onError = res ? res.sendError.bind(res) : () => {
        };
        const isGke = res ? res.locals.appData.env.isGke : false;
        const logger: ICompactLogger = prefix ? new CompactLogger(isGke, prefix) : new NullLogger();

        return (async () => {
            try {
                await callback(logger, req, res);
            } catch (e) {
                parseError(logger, onError, e);
            } finally {
                logger.dump();
            }
        })();
    };
};

export type LoggerConfig = {
    isGke: boolean,
    prefix: string,
};

type ErrCallback = (msg: string) => void;

function parseError(logger: ICompactLogger, onError: ErrCallback, e: unknown) {
    if (e instanceof z.ZodError) {
        const msg = e.errors.map(e => {
            // @ts-ignore
            return `${e.path.join(',')}: ${e.message} ${e.expected}, received ${e.received}`
        }).join('; ');
        logger.appendError(`Zod: ${msg}`);
        onError(`Missing input data`);
    } else if (e instanceof ResponseError) {
        logger.appendError(e.logMessage ?? e.message);
        onError(e.message);
    } else if (e instanceof Error) {
        const msg = e.message;
        logger.appendError(msg);
        onError(msg);
    } else {
        const msg = 'Unknown error';
        logger.appendError(msg);
        onError(msg);
    }
}