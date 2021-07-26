const alerts = require('../data/alerts.json');
const {pagination} = require('../shared/utils');

exports.alertController =  async (request, h) => {
    const data = JSON.parse(JSON.stringify(alerts));
    const alertsData = [];
    data.map(currentAlert => alertsData.push(currentAlert));                       
    return h.response({
        total_items: alertsData.length, 
        data: pagination(alertsData, request.query.offset, request.query.limit)
    })
}

exports.getAlertsByAgent = async (request, h) => {
    const data = JSON.parse(JSON.stringify(alerts));
    
    //only agents
    const onlyAgents = data.map(alert => alert._source.agent);
   
    //delete agents duplicates
    let agentsWithoutDuplicates = deleteDuplicates(onlyAgents, 'id')

    //build skeleton alertsByAgent
    let objAlertsByAgent = agentsWithoutDuplicates.map(agent => {return {'label': parseInt(agent.id), 'numberOfAlerts': 0}});
    
    //fill skeleton alertsByAgent
    data.map(alert => { 
        objAlertsByAgent.map(agent => {
            if(parseInt(alert._source.agent.id) === parseInt(agent.label)) {
                agent.numberOfAlerts = agent.numberOfAlerts + 1;
            } 
        })
    })
    
    return h.response(objAlertsByAgent);
}

function deleteDuplicates(arr, prop) {
    var newArray = [];
    var lookup  = {};

    for (var i in arr) {
        lookup[arr[i][prop]] = arr[i];
    }

    for (i in lookup) {
        newArray.push(lookup[i]);
    }

    return newArray;
}