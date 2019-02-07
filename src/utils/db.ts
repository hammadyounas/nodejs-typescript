import * as mysql from 'mysql';
interface iDBConfig extends mysql.ConnectionConfig {}
export class DB {
  public connection: null | mysql.Connection = null;
  public config: null | iDBConfig = null;

  constructor(config: iDBConfig) {
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

export const dbConfig: iDBConfig = {
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'adminadmin',
  database: 'justbogos_uat',
  multipleStatements: true,
};

export default new DB(dbConfig);
