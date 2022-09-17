import chalk from 'chalk';

export default (event: string, logData: any) => {
  switch (event) {
    case 'startup':
      if (!logData.port) {
        console.error(
          chalk.red(
            '[ERR] [unsetData] logData.port not set in log event startup',
          ),
        );
        break;
      }

      console.log(
        `[LOG] [startup] Started server at ${chalk.green(
          `http://0.0.0.0:${logData.port}`,
        )}`,
      );
      break;
    case 'request':
      if (!logData.method) {
        console.error(
          chalk.red(
            '[ERR] [unsetData] logData.method not set in log event request',
          ),
        );
        break;
      }

      if (!logData.route) {
        console.error(
          chalk.red(
            '[ERR] [unsetData] logData.route not set in log event request',
          ),
        );
        break;
      }

      console.log(
        `[LOG] [request] ${chalk.green(logData.method)} ${chalk.yellow(
          logData.route,
        )}`,
      );
      break;
    default:
      console.error(
        chalk.red(`[ERR] [unknownEvent] Unknown log event ${event}`),
      );
      break;
  }
};
