const packageJson = require('package.json');

function requireFromEnv(key) {
    if (!process.env[key]) {
        return process.exit(1)

    }
    return process.env[key]

}

module.exports = {
    appName: requireFromEnv('APP_NAME'),
    env: requireFromEnv('NODE_ENV'),
    port: parseInt('PORT' |> requireFromEnv, 10),
    version: packageJson.version
}
