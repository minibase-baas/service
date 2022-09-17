import chalk from 'chalk';

export default (event: string, logData: any) => {
  switch (event) {
    case 'startup':
      if (!logData.port) {
        console.error(
          chalk.red(`[ERR] logData.port not set in log event startup`),
        );
        break;
      }

      console.log(
        `Started server at ${chalk.green(`0.0.0.0:${logData.port}`)}`,
      );
      break;
    case 'request':
      if (!logData.method) {
        console.error(
          chalk.red(`[ERR] logData.method not set in log event request`),
        );
        break;
      }

      if (!logData.route) {
        console.error(
          chalk.red(`[ERR] logData.route not set in log event request`),
        );
        break;
      }

      console.log(
        `${chalk.green(logData.method)} ${chalk.yellow(logData.route)}`,
      );
      break;
    default:
      console.error(chalk.red(`[ERR] Unknown log event ${event}`));
      break;
  }
};
