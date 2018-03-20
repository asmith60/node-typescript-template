import * as bunyan from 'bunyan';
import { config } from '../config';

export class Logger {
  protected bunyanLogger: bunyan = bunyan.createLogger({
    name: config.get('name'),
    level: config.get('logLevel'),
    context: null
  });

  public setContext(): void {
    this.bunyanLogger.fields.context = context;
  }

  public getContext(): any {
    return this.bunyanLogger.fields.context;
  }

  public fatal(msg: any): void {
    this.bunyanLogger.fatal(msg);
  }

  public error(msg: any): void {
    this.bunyanLogger.error(msg);
  }

  public warn(msg: any): void {
    this.bunyanLogger.warn(msg);
  }

  public info(msg: any): void {
    this.bunyanLogger.info(msg);
  }

  public debug(msg: any): void {
    this.bunyanLogger.debug(msg);
  }

  public trace(msg: any): void {
    this.bunyanLogger.trace(msg);
  }
}

export const logger = new Logger();
