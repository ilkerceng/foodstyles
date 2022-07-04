const fs = require('fs');
const networkInterfaces = require('os').networkInterfaces;

type APP_ENV = 'local' | 'stage' | 'prod';

type IConfigOptions = {
  API_URL: string;
  env: APP_ENV;
};

const API_BASE_PATH = '/graphql';
const PORT = 3000;
let localIP;
if (networkInterfaces().en0) {
  localIP = networkInterfaces().en0.pop().address;
} else {
  localIP = networkInterfaces()['Wi-Fi'].pop().address;
}

const commonOptions = {} as IConfigOptions;

const localUrl = `http://${localIP}:${PORT}`;
const stageUrl = 'https://api-dev.foodstyles.com';
const prodUrl = 'https://api-dev.foodstyles.com';

const createConfig = ({
  apiUrl,
  env,
  defaultOptions = commonOptions,
}: {
  apiUrl: string;
  env: APP_ENV;
  defaultOptions?: IConfigOptions;
}): IConfigOptions => ({
  ...defaultOptions,
  API_URL: apiUrl + API_BASE_PATH,
  env,
});

const localConfig = createConfig({apiUrl: localUrl, env: 'local'});
const stageConfig = createConfig({apiUrl: stageUrl, env: 'stage'});
const prodConfig = createConfig({apiUrl: prodUrl, env: 'prod'});

const environments: any = {
  local: `const appConfig = ${JSON.stringify(localConfig, undefined, 2)};
export default appConfig;
`,
  stage: `const appConfig = ${JSON.stringify(stageConfig, undefined, 2)};
export default appConfig;
`,
  prod: `const appConfig = ${JSON.stringify(prodConfig, undefined, 2)};
export default appConfig;
`,
};

const code = environments[process.argv[2]];

fs.writeFileSync('./src/config/dev-config.ts', code);

export {localIP};
