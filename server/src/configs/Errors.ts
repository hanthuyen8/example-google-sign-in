export const ErrorStatusCode = {
    ClientError: 400,
    Unauthorized: 401,
    ServerMaintenance: 503,
};

export class ResponseError extends Error {
    constructor(responseMsg: any, logMessage: string | undefined = undefined) {
        super(responseMsg);
        this.logMessage = logMessage;
    }

    readonly logMessage: string | undefined = undefined;
}