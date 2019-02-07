"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DB {
    constructor(config) {
        this.connection = null;
        this.config = null;
        this.config = config;
    }
    init() {
        // this.connection = mysql.createConnection(this.config);
        // this.connection.connect(err => {
        //   if (err) throw err;
        //   console.log('Connected!');
        // });
        // return this.connection;
    }
}
exports.DB = DB;
exports.dbConfig = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'adminadmin',
    database: 'justbogos_uat',
    multipleStatements: true,
};
exports.default = new DB(exports.dbConfig);
//# sourceMappingURL=db.js.map