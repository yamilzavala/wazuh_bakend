"use strict"
const {alertController} = require('../controllers/alert.controler')

exports.alertRoute = (server) => {
    return server.route([
        {
            method: 'GET',
            path: '/alerts',
            options: {
                handler: alertController
            }
        }
    ]);
}
