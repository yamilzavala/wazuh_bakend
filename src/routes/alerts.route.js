"use strict"
const {alertController, getAlertsByAgent} = require('../controllers/alert.controler')

exports.alertRoute = (server) => {
    return server.route([
        {
            method: 'GET',
            path: '/alerts',
            options: {
                cors: {
                    credentials: true
                },
                handler: alertController
            }
        },
        {
            method: 'GET',
            path: '/alertsByAgent',
            options: {
                cors: {
                    credentials: true
                },
                handler: getAlertsByAgent
            }
        }
    ]);
}
