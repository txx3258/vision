
export function res2ok(data) {
    return {
        'code': 200,
        'msg': '',
        'data': data
    }
}

export function res2msg() {
    return {
        'code': 500,
        'msg': msg,
        'data': {
            
        }
    }
}