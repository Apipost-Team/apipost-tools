apipost-tools 是一个一致性、模块化、高性能的 JavaScript 实用工具库。

# 安装

```shell
npm i apipost-tools
```

# 基础使用
需引入：

```js
import ATools from 'apipost-tools';
let json='{"name":"我是一名ApiPost用户"}';
let email='1030698842@qq.com';

ATools.isJson(json); //true
ATools.isEmail(email); //true

目前支持:
array2Tree //扁平数据转树状结构
formatXml //格式化xml数据
getUrlQuery //获取url中的query数据（对象）。
getUrlQueryArray //获取url中的query数据（数组）。
isEmail //验证邮箱格式
isJson //验证是否为json格式
isJson5 //验证是否为json5格式
isJsonp //验证是否为jsonp格式
isHtml //验证是否为html格式
ms2second //毫秒时间戳转秒时间戳
```


# 开源协议

apipost-tools 遵循 [MIT 协议](https://github.com/Apipost-Team/apipost-tools)。
