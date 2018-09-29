
export function res2ok(data) {
    return {
        'code': 200,
        'msg': '',
        'data': data
    }
}

export function res2msg(msg, code) {
    return {
        'code': code || 500,
        'msg': msg || 'ERROR',
        'data': {

        }
    }
}