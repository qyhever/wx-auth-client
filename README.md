微信公众号示例 demo

### 可用的命令

```shell
# run application
npm run dev
# or
npm run start

# build
npm run build

# fix the eslint errors
npm run lint:fix

```

### 开发微信公众号的配置
因为微信网页授权和js-sdk的调用必须要在 微信公众平台 配置的域名下进行，所以开发环境需要额外配置。
- 修改 webpack 的 devServer 的 port 和 host 属性
  ```javascript
  devServer: {
    port: 80,
    host: 'wx.qyhever.com'
    // ...
  }
  ```
- 因为 启动本地服务为 域名形式，需要在 C 盘 hosts 文件 (C:/Windows/System32/drivers/etc/hosts) 做对应的映射配置，在文件最下面添加如下配置：
  ```
  127.0.0.1 wx.qyhever.com
  ```
做完配置后就可以正确的 获取网页授权 和 js-sdk 的调用了