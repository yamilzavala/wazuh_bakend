const alerts = require('../data/alerts.json');
const {pagination} = require('../shared/utils');

exports.getAgentsController = async (request, h) => {
    const data = JSON.parse(JSON.stringify(alerts));
    const agents = [];
    data.map(currentAlert => agents.push(currentAlert._source.agent))
    return h.response({
        total_items: agents.length, 
        data: {
            agents: pagination(agents, request.query.offset, request.query.limit),
            total_alerts: data.length
        }
    });
}

exports.getAgentByIdController = async (request, h) => {            
    const data = JSON.parse(JSON.stringify(alerts));  
    const filterAgent = data
        .filter(currentAlert => currentAlert._source.agent.id === request.params.id)
        .map(key => key._source.agent);            
    return h.response({
        data: {
            filterAgent,
            total_alerts: data.length,
            alerts: data
        }
    });
}