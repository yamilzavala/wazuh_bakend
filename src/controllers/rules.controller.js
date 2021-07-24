const alerts = require('../data/alerts.json');
const {pagination} = require('../shared/utils');

exports.getRulesController = async (request, h) => {
    const data = JSON.parse(JSON.stringify(alerts));
    const rules = [];
    let total_alerts_data = 0;
    data.map(currentAlert => {
        rules.push(currentAlert._source.rule);
        total_alerts_data = total_alerts_data + 1;
    })
    return h.response({
        total_items: rules.length, 
        data: {
            rules: pagination(rules, request.query.offset, request.query.limit), 
            total_alerts: total_alerts_data
        }
    });
} 

exports.getRuleByIdController = async (request, h) => {            
    const data = JSON.parse(JSON.stringify(alerts));  
    let total_alerts_data = 0;
    data.map(curretAlert => total_alerts_data = total_alerts_data + 1);
    const filterRule = data
        .filter(currentAlert => currentAlert._source.rule.id === request.params.id)
        .map(key => key._source.rule);            
    return h.response({
        data: {
            filterRule,
            total_alerts: total_alerts_data,
            alerts: data
        }
    });
} 