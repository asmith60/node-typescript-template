import * as convict from 'convict';

export const config: convict.Config = convict({
  name: {
    doc: 'App Name',
    format: String,
    default: 'node-typescript-template',
    env: 'APP_NAME'
  },
  env: {
    doc: 'Environment',
    format: String,
    default: 'dev',
    env: 'NODE_ENV'
  },
  logLevel: {
    doc: 'The Bunyan log level.',
    format: ['fatal', 'error', 'warn', 'info', 'debug', 'trace'],
    default: 'info',
    env: 'LOG_LEVEL'
  }
});
