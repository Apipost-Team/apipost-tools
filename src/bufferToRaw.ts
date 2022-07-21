const Buffer = require('buffer/').Buffer,
    pako = require('pako');

const bufferToRaw = function (buffer: any, mime: any) {
    let _inflateBuffer: any = null;

    try {
        _inflateBuffer = Buffer.from(pako.inflate(buffer))
    } catch (e) {
        _inflateBuffer = Buffer.from(buffer);
    }

    return {
        buffer: _inflateBuffer,
        raw: _inflateBuffer.toString(),
        base64: `data:${mime['mime']};base64,${_inflateBuffer.toString('base64')}`
    }
}

export default bufferToRaw;
