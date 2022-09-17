import chalk from 'chalk';

export default (event: string, logData: any) => {
  switch (event) {
    case 'startup':
      console.log(`Started server at ${chalk.green(`0.0.0.0:${logData}`)}`);
      break;
    default:
      console.error(chalk.red(`[ERR] Unknown log event ${event}'`));
      break;
  }
};
