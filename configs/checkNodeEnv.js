// @flow
export default function checkNodeEnv(expectedEnv: string) {
  if (!expectedEnv) {
    throw new Error('"expectedEnv" not set');
  }

  if (process.env.NODE_ENV !== expectedEnv) {
    console.log(`"process.env.NODE_ENV" must be "${expectedEnv}" to use this webpack config`); // eslint-disable-line no-console
    process.exit(2);
  }
}
