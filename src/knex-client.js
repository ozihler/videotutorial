const Bluebird = require('bluebird');
const knex = require('knex');

function createKnexClient({connectionString, migrationTableName}) {
    console.log("connection string: ", connectionString);
    const client = knex(connectionString);
    const migrationOptions = {
        tableName: migrationTableName || 'knex_migrations'
    }
    // Wrap a bluebird.resolve to guarantee a bluebird promise down the chain
    return Bluebird.resolve(client.migrate.latest(migrationOptions))
        .then(() => client);
}

module.exports = createKnexClient;
