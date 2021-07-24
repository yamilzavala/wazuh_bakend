const Hapi = require('@hapi/hapi');
const alerts = require('./data/alerts.json');
const {alertRoute} = require('./routes/alerts.route')
const {agentsRoute} = require('./routes/agents.route')
const {rulesRoute} = require('./routes/rules.router')

//server configuration
const server  = Hapi.server({
    port: 3000,
    host: 'localhost'
});

//server init and router register
exports.init = async () => {
    await alertRoute(server);
    await agentsRoute(server);
    await rulesRoute(server);
    await server.start();
    console.log('Server runing it: ' + server.info.uri);
}

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});
