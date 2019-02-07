"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid = require("uuid");
function catchAllErrorHandler(err, req, res, next) {
    if (!res.headersSent) {
        if (!res.headersSent) {
            const error = {
                id: uuid.v4(),
                code: 'INTERNAL_SERVER_ERROR',
                title: 'Internal server error',
                detail: err.code && err.message
                    ? `Unhandled exception - ${err.code}: ${err.message}`
                    : 'Unhandled exception',
            };
            if (err.stack && process.env.NODE_ENV !== 'production') {
                error.meta = {
                    stack: err.stack,
                };
            }
            res.status(500).json({ errors: [error] });
        }
    }
}
exports.catchAllErrorHandler = catchAllErrorHandler;
//# sourceMappingURL=errors.js.map