"use strict"
const {getAgentsController, getAgentByIdController} = require('../controllers/agent.controller')

exports.agentsRoute = (server) => {
    return server.route(
        [
            {
                method: 'GET',
                path: '/agents',
                options: {
                    cors: {
                        credentials: true
                    },
                    handler: getAgentsController
                }
            },
            {
                method: 'GET',
                path: '/agents/{id}',
                options: {
                    cors: {
                        credentials: true
                    },
                    handler: getAgentByIdController
                }
            }
        ])
    
    
    
}