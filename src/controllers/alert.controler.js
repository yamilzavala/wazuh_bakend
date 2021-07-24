const alerts = require('../data/alerts.json');
const {pagination} = require('../shared/utils');

exports.alertController =  async (request, h, offset, limit) => {
    const data = JSON.parse(JSON.stringify(alerts));
    const alertsData = [];
    data.map(currentAlert => alertsData.push(currentAlert));                       
    return h.response({
        total_items: alertsData.length, 
        data: pagination(alertsData, request.query.offset, request.query.limit)
    })
}