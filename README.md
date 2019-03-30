# dApp Store

### 使用vue/cli 3.x
```bash
yarn global add @vue/cli
```

### 找回配置文件
> 因为vue-cli3改变了项目结构，之前的配置文件方式改变了，需要自己新建几个文件

新建 .env、 .env.local 文件
> 在项目中，也就是src中使用环境变量的话，必须以VUE_APP_开头。例如我们可以在main.js中直接输出：console.log(process.env.VUE_APP_SECRET)

新建 vue.config.js 文件


## Project setup

```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```
