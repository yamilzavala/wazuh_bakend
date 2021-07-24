"use strict"
const {getRulesController, getRuleByIdController} = require('../controllers/rules.controller');

exports.rulesRoute = (server) => {
    return server.route([
        {
            method: 'GET',
            path: '/rules',
            options: {
                handler: getRulesController
            }
        },
        {
            method: 'GET',
            path: '/rules/{id}',
            options: {
                handler: getRuleByIdController
            }
        }
    ]);
}