// @flow
import chalk from 'chalk';
import HTTP from 'http';
import app from '../app';
class Server {
  _server: any;

  constructor() {
    this._server = HTTP.createServer(app);
  }

  start(traceId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        console.info(chalk.bold(`\nStarting backbay server`));
        this._server.listen(3000);
      } catch (err) {
        reject(err);
      }
    });
  }

  stop(exitCode: number, traceId: string): Promise<void> {
    return new Promise(async (resolve, reject) => {
      try {
        console.info(chalk.bold(`\nStopping backbay server`));
        this._server.close();
        resolve();
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default Server;
