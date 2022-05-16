module.exports = {
  // 开发环境
  dev: {
    NODE_ENV: 'development',
    // 统一登录
    LOGIN_URL: 'http://xxx',
    // 请求前缀
    BASE_PREFIX: '/dev-api',
    // 代理的后端请求服务器地址
    SERVER_URL: 'https://xxx.xxx',
    // 前端系统跑的端口
    SYSTEM_PORT: '8888'
  },
  // 测试环境
  test: {
    NODE_ENV: 'test',
     // 统一登录
    LOGIN_URL: 'http://xxx',
    // 请求前缀
    BASE_PREFIX: '/test-api',
    // 代理的后端请求服务器地址
    SERVER_URL: 'https://xxx.xxx',
    // 前端系统跑的端口
    SYSTEM_PORT: '8888'

  },
  // 生产环境
  pro: {
    NODE_ENV: 'production',
    // 统一登录
    LOGIN_URL: 'http://xxx',
    // 请求前缀
    BASE_PREFIX: '/prod-api',
    // 代理的后端请求服务器地址
    SERVER_URL: 'https://xxx.xxx',
    // 前端系统跑的端口
    SYSTEM_PORT: '8888'
  }
}
