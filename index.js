const msgpack = require('msgpack');
const cloneDeepWith = require('lodash.clonedeepwith');

function serialize(data) {
    data = cloneDeepWith(data, (value, key) => value instanceof Date ? {_type: 'Date', _data: value.toISOString()} : void 0);

    return msgpack.pack(data);
}

function deserialize(data) {
    data = msgpack.unpack(data);

    return cloneDeepWith(data, (value, key) => value && typeof value === 'object' && '_type' in value && '_data' in value && value._type === 'Date' && value._data ? new Date(value._data) : void 0);
}

module.exports = {
    serialize,
    deserialize
};
