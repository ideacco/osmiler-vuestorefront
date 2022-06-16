// 使用原生nodejs的crypto模块计算MD5
const crypto = require('crypto')

/**
 * MD5加密方案
 * @param {*} data : 加密的数据
 * @returns
 */

exports.Md5 = function (data) {
  // 以md5的格式创建一个哈希值
  let md5 = crypto.createHash('md5')
  return md5.update(data).digest('hex')
}

/**
 * hmac 加密方案
 * @param {*} data : 加密的数据
 * @returns
 */
exports.Hmac = function hmac(data) {
  let hmac = crypto.createHmac('md5', '后台传入/任意值')
  return hmac.update(data).digest('hex')
}
