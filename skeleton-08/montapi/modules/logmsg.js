var swaggerJSON = require('../config/swagger.json');
var logmsgJSON = require('../config/logmsg.json');

function getLogMsg(customMsg) {

    const swaggerProps = swaggerJSON.definitions.LogMsg.properties;
    const logmsgConfig = logmsgJSON.logmsg;

    return msgJSON = {
        "message" : (typeof customMsg.message === "undefined") ? swaggerProps.message.example : customMsg.message,
        "elastic_index" : (typeof customMsg.elastic_index === "undefined") ? swaggerProps.elastic_index.example : customMsg.elastic_index,
        "created" : (typeof customMsg.created === "undefined") ? (new Date()).toISOString() : customMsg.created,
        "class" : (typeof customMsg.class === "undefined") ? swaggerProps.class.example : customMsg.class,
        "owner" : (typeof customMsg.owner === "undefined") ? logmsgConfig.teams[Math.floor(Math.random() * logmsgConfig.teams.length)]: customMsg.owner,
        "severity" : (typeof customMsg.severity === "undefined") ? logmsgConfig.severities[Math.floor(Math.random() * logmsgConfig.severities.length)] : customMsg.severity,
        "prioriy" : (typeof customMsg.priority === "undefined") ? swaggerProps.priority.example : customMsg.priority,
        "category" : (typeof customMsg.category === "undefined") ? logmsgConfig.categories[Math.floor(Math.random() * logmsgConfig.categories.length)] : customMsg.category,
        "correlation_id" : (typeof customMsg.correlation_id === "undefined") ? logmsgConfig.correlation_ids[Math.floor(Math.random() * logmsgConfig.correlation_ids.length)] : customMsg.correlation_id,
        "brief_description" : (typeof customMsg.brief_description === "undefined") ? swaggerProps.brief_description.example : customMsg.brief_description,
        "description" : (typeof customMsg.description === "undefined") ? swaggerProps.description.example : customMsg.description,
        "documentation" : (typeof customMsg.documentation === "undefined") ? swaggerProps.documentation.example : customMsg.documentation,
        "hostname" : (typeof customMsg.hostname === "undefined") ? logmsgConfig.hostnames[Math.floor(Math.random() * logmsgConfig.hostnames.length)] : customMsg.hostname,
        "ip_addr" : (typeof customMsg.ip_addr === "undefined") ? swaggerProps.ip_addr.example : customMsg.ip_addr,
        "container_image" : (typeof customMsg.container_image === "undefined") ? swaggerProps.container_image.example : customMsg.container_image,
        "source" : (typeof customMsg.source === "undefined") ? swaggerProps.source.example : customMsg.source,
        "sub_source" : (typeof customMsg.sub_source === "undefined") ? swaggerProps.sub_source.example : customMsg.sub_source,
        "origin" : (typeof customMsg.origin === "undefined") ? swaggerProps.origin.example : customMsg.origin,
        "sub_origin" : (typeof customMsg.sub_origin === "undefined") ? swaggerProps.sub_origin.example : customMsg.sub_origin,
        "it_service" : (typeof customMsg.it_service === "undefined") ? swaggerProps.it_service.example : customMsg.it_service,
        "business_service" : (typeof customMsg.it_servic === "undefined") ? logmsgConfig.business_services[Math.floor(Math.random() * logmsgConfig.business_services.length)]: customMsg.business_services,
        "tags" : (typeof customMsg.tags === "undefined") ? swaggerProps.tags.example : customMsg.tags
    }
}

module.exports = getLogMsg;