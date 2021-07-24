"use strict"
const {getAgentsController, getAgentByIdController} = require('../controllers/agent.controller')

exports.agentsRoute = (server) => {
    return server.route(
        [
            {
                method: 'GET',
                path: '/agents',
                options: {
                    handler: getAgentsController
                }
            },
            {
                method: 'GET',
                path: '/agents/{id}',
                options: {
                    handler: getAgentByIdController
                }
            }
        ])
    
    
    
}