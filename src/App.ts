import { Environment } from './config/environment';

// Catch unhandling unexpected exceptions
process.on('uncaughtException', (error: Error) => {
  console.error(`uncaughtException ${error.message}`);
  process.exit(1);
});

// Catch unhandling rejected promises
process.on('unhandledRejection', (reason: any) => {
  console.error(`unhandledRejection ${reason}`);
  process.exit(1);
});

async function main(): Promise<void> {
  const env: Environment = new Environment();
  return;
}

// Execute main function
main().then(() => {
  process.exit(0);
}).catch((e) => {
  console.error(e);
  process.exit(1);
});
