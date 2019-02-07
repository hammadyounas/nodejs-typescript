import * as express from 'express';
export declare type JsonApiError = {
    id?: string;
    status?: string;
    code?: string;
    title?: string;
    detail?: string;
    source?: {
        pointer?: string;
        parameter?: string;
    };
    meta?: any;
};
export declare function catchAllErrorHandler(err: any, req: express.Request, res: express.Response, next: express.NextFunction): void;
