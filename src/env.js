const packageJson = require('../package.json');
process.env['APP_NAME'] = "myApp";
process.env['PORT'] = "3210";
process.env['NODE_ENV'] = "eobedefined";

function requireFromEnv(key) {
    if (!process.env[key]) {
        console.error("Could not find key " + key + ", end process");
       // return process.exit(1)
    }
    return process.env[key]

}

module.exports = {
    appName: requireFromEnv('APP_NAME'),
    env: requireFromEnv('NODE_ENV'),
    port: parseInt(requireFromEnv('PORT'), 10),
    version: packageJson.version
}
