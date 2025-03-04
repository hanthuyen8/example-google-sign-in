import {NextFunction, Request, Response} from 'express';
import {ErrorStatusCode} from "./Errors";

declare module 'express-serve-static-core' {
    interface Response {
        sendRawJson(data: any): void;

        sendSuccess(data: any): void;

        sendSuccessWithHeaders(data: any, additionHeaders: Record<string, string> | null): void;

        sendError(err: string, statusCode?: number): void;

        sendGenericError(): void;
    }
}

export function extMiddleware(_req: Request, res: Response, next: NextFunction) {
    res.sendRawJson = (data: any) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(data);
    }

    res.sendSuccessWithHeaders = function (data: any, additionHeaders: Record<string, string> | null = null) {
        const result: StdResponse = {
            success: true,
            error: "",
            message: data
        };
        res.setHeader('Content-Type', 'application/json');
        try {
            if (additionHeaders) {
                for (const key in additionHeaders) {
                    res.setHeader(key, additionHeaders[key]);
                }
            }
        } catch (e) {
            console.error(e);
        }
        res.status(200).json(result)
    };

    res.sendSuccess = (data: any) => res.sendSuccessWithHeaders(data, null);

    res.sendError = function (err: string, statusCode?: number) {
        const result: StdResponse = {
            success: false,
            error: err,
            message: ""
        };
        res.setHeader('Content-Type', 'application/json');
        res.status(statusCode || ErrorStatusCode.ClientError).send(result)
    }

    res.sendGenericError = function () {
        res.sendError("Something Wrong", ErrorStatusCode.ClientError);
    }

    next();
}

export function lowercaseQueryMiddleware(req: Request, _res: Response, next: NextFunction) {
    req.query = Object.keys(req.query).reduce((acc, key) => {
        acc[key.toLowerCase()] = req.query[key];
        return acc;
    }, {} as { [key: string]: any });
    next();
}

export function dataMiddleware(data: Record<string, any>) {
    return (_req: Request, res: Response, next: NextFunction) => {
        Object.entries(data).forEach(([key, value]) => {
            res.locals[key] = value;
        })
        next();
    };
}

export type StdResponse = {
    success: boolean;
    error: unknown;
    message: string;
}