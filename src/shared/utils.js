//utils
exports.pagination = (obj, offset, limit) => {  
    if (offset !== undefined && limit !== undefined) {
        return obj.slice(offset, offset + limit)        
    } else if(offset === undefined && limit !== undefined) {
        return obj.slice(0, limit)
    } else if(offset !== undefined && limit === undefined) {
        return obj.slice(offset, obj.length)
    }
    return obj;
}
