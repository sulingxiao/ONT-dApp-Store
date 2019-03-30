# dApp Store
> 原https://dapp.ont.io/项目，后将持续改进成一个支持全平台公链的dApp Store。

### 使用vue/cli 3.x
```bash
yarn global add @vue/cli
```

##### 配置文件
> Vue-CLI3改变了项目结构，之前的配置文件方式改变了，需要自己新建几个文件

新建 .env、 .env.local、vue.config.js 文件
> 在项目中，也就是src中使用环境变量的话，必须以VUE_APP_开头。例如我们可以在main.js中直接输出：console.log(process.env.VUE_APP_SECRET)

新建 


### 项目开发
安装package、运行项目、代码格式校验：
```
yarn
yarn dev
yarn fix
```

### 项目部署
打包编译：
```
yarn build
```
> 复制dist目录下所有文件到apache/nginx指定根目录下即可完成部署。

