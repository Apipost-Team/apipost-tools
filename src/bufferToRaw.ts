const BufferO = require('buffer/').Buffer
const zlib = require('zlib');

const bufferToRaw = function (buffer:any, mime:any) {
    let _inflateBuffer = null;
    try {
        _inflateBuffer = zlib.inflateSync(BufferO.from(buffer))
    } catch (e) {
        _inflateBuffer = BufferO.from(buffer);
    }
    return {
        buffer: _inflateBuffer,
        raw: _inflateBuffer.toString(),
        base64: `data:${mime['mime']};base64,${_inflateBuffer.toString('base64')}`
    }
}

export default bufferToRaw;