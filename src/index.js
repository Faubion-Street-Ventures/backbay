// @flow
import chalk from 'chalk';
import {v4 as uuid} from 'uuid';
import Server from './server';
const traceId = uuid();
const server = new Server();
let exited = false;

startServer().catch((err) => {
  console.error(err, traceId);
  exitWithCode(1);
});

function startServer() {
  return new Promise(async (resolve, reject) => {
    try {
      await server.start(traceId);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}

// handle ctrl+c event
process.on('SIGINT', () => {
  exitWithCode(0);
});

// handle "kill pid" (nodemon restart)
process.on('SIGUSR1', () => {
  exitWithCode(0);
});
process.on('SIGUSR2', () => {
  exitWithCode(0);
});

// handle uncaught exception
process.on('uncaughtException', (err) => {
  console.error(chalk.red(chalk.bold('Uncaught exception at top-level script!')));
  console.error(err);
  exitWithCode(1);
});

function exitWithCode(code) {
  if (!exited) {
    exited = true;
    stopServer(code)
      .then(() => {
        setTimeout(() => process.exit(code), 1000); // give things time to exit cleanly before process.exit
      })
      .catch((err) => {
        console.error(err);
      });
  }
}

function stopServer(exitCode) {
  return new Promise(async (resolve, reject) => {
    try {
      await server.stop(exitCode, traceId);
      resolve();
    } catch (err) {
      reject(err);
    }
  });
}
