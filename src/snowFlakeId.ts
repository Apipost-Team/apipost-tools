/**
 * 雪花算法生成唯一ID
 */

/**
 * 生成 Snowflake ID
 * @param seed - 用于生成 Snowflake ID 的种子字符串,如果为空，自动生成。建议使用项目id
 * @param base - hash范围，2或16，2进制或16进制
 * @returns 以2进制或16进制表示的64位ID
 */
export const snowflakeId = (seed="" , base=16): string => {
    //base 支持2,16 需要验证
    base = (base === 2 || base === 16) ? base : 16;
    seed = seed || genSeed();
    if (typeof seed !== 'string') {
        seed = seed + ""; //强制转字符串
    }

    let sequence: number = next_id(); //一直自增id
    const timestamp = new Date().getTime() - 1671537188000; //和后端约定时间戳起始时间,2022-12-20

    if (sequence > 4095) {
        sequence = sequence % 4095; //12位序列号
    }

    // 64位ID的划分
    // 0 - 41位时间戳 - 12位序列号 - 10位机器标识 - 12位序号
    const binstring = '0' + leftpad(dec2bin(timestamp), 41) + "1" + simpleHash(seed) + leftpad(dec2bin(sequence), 12);

    if (base === 2) {
        return binstring;
    } else {
        let chunks = splitN(binstring, 4);
        let binHexMap:{ [key: string]: string } = { "0000": "0", "0001": "1", "0010": "2", "0011": "3", "0100": "4", "0101": "5", "0110": "6", "0111": "7", "1000": "8", "1001": "9", "1010": "a", "1011": "b", "1100": "c", "1101": "d", "1110": "e", "1111": "f" };
        //用map转换chunks
        let hexChunks = chunks.map(function (item) {
            return binHexMap[item];
        });
        return hexChunks.join("");
    }


    //10进制转2进制
    function dec2bin(dec: number): string {
        return (dec >>> 0).toString(2);
    }

    //左边补0
    function leftpad(str: string, len: number): string {
        str = str + '';
        len = len - str.length;
        if (len <= 0) {
            return str;
        }
        return Array(len + 1).join('0') + str;
    }
    //右边补0
    function rightpad(str: string, len: number): string {
        str = str + '';
        len = len - str.length;
        if (len <= 0) {
            return str;
        }
        return str + Array(len + 1).join('0');
    }

    //9位hash
    function simpleHash(str: string): string {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = (hash << 5) - hash + str.charCodeAt(i);
        }

        let strhash = rightpad(dec2bin(hash), 9);
        if (strhash.length > 9) {
            strhash = strhash.substring(0, 9);
        }

        return strhash;
    }

    //gen seed
    function genSeed(): string {
        let seed = "";
        try {
            //默认使用进程id
            //@ts-ignore
            if (typeof process === 'object' && process + '' === '[object process]') {
                //@ts-ignore
                seed = process.pid + "";
            } else if (typeof window === 'object' && window.navigator && window.navigator.userAgent) {
                seed = window.navigator.userAgent + window.navigator.language + window.screen.colorDepth + window.screen.width + window.screen.height;
            }
        } catch (e) { }

        //如果为空，生成32位随机字符串
        if (!seed) {
            let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            for (let i = 0; i < 32; i++) {
                seed += str.charAt(Math.floor(Math.random() * str.length));
            }
        }

        return seed;
    }

    //切分字符串
    function splitN(inputString: string, chunkSize: number): string[] {
        let chunks = [];
        for (let i = 0; i < inputString.length; i += chunkSize) {
            chunks.push(inputString.substring(i, i + chunkSize));
        }
        return chunks;
    }
}


const generateIncrementalFunction:() => () => number = () => {
    let counter: number  = 0;
    return () => {
        return counter++;
    };
};

//生成唯一id
const next_id = generateIncrementalFunction();


export default snowflakeId;
