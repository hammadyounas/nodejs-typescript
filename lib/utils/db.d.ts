import * as mysql from 'mysql';
interface iDBConfig extends mysql.ConnectionConfig {
}
export declare class DB {
    connection: null | mysql.Connection;
    config: null | iDBConfig;
    constructor(config: iDBConfig);
    init(): void;
}
export declare const dbConfig: iDBConfig;
declare const _default: DB;
export default _default;
