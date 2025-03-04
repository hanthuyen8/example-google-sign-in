export interface ICompactLogger {
    append(message: string): void;

    appendError(message: string | Error): void;

    dump(): void;
}

export class CompactLogger implements ICompactLogger {
    constructor(
        private readonly _isGke: boolean,
        private readonly _prefix: string
    ) {
        this._logger = _isGke ? new FluentdLogger() : new LocalLogger();
    }

    private readonly _logger: SLogger;
    private readonly _builder: string[] = [];

    clone(prefix: string): CompactLogger {
        return new CompactLogger(this._isGke, prefix);
    }

    append(message: string): void {
        this._builder.push(`${timestamp()}: ${message}`);
    }

    appendError(message: string | Error): void {
        let msg: string;
        if (typeof message === 'string') {
            msg = message;
        } else {
            msg = (message as Error)?.message;
        }
        if (!msg) {
            return;
        }
        this._builder.push(`${timestamp()} (ERROR): ${msg}`);
    }

    dump(): void {
        this._logger.dump(`[${this._prefix}]\n${this._builder.join('\n')}`);
    }
}

export class NullLogger implements ICompactLogger {
    append(_message: string): void {
    }

    appendError(_message: string | Error): void {
    }

    dump(): void {
    }
}

interface SLogger {
    dump(msg: string): void
}

class LocalLogger implements SLogger {
    dump(msg: string): void {
        console.info(msg);
    }
}

class FluentdLogger implements SLogger {
    dump(msg: string): void {
        console.info(JSON.stringify({
            severity: 'INFO',
            message: msg,
        }));
    }
}

function timestamp(): string {
    const now = new Date();
    return `${now.getMinutes()}:${now.getSeconds()}:${now.getMilliseconds()}`;
}