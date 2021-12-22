## 简介

基于 vue2 和 datav 的大屏可视化模板

## 特别说明

> 该模板默认你有 vue2 + vuex + vue-router + axios  项目基础

> 如果你只关注大屏页面本身，即 views -> dashboard -> index.vue，那么只需要你有 vue2 基础即可

完全基于花裤衩大佬的 [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template) 进行精简改造，没什么技术含量。

大屏代码在 views -> dashboard -> index.vue，而其他文件（比如 api、store、utils）只是备用，该模板暂时还没有用到。

## 开发

```bash
# 克隆项目
git clone https://github.com/un-pany/v2-datav-template.git

# 进入项目目录
cd v2-datav-template

# 安装依赖
yarn

# 启动服务
yarn dev
```

## 多环境打包

```bash
# 构建预发布环境
yarn build:stage

# 构建生产环境
yarn build:prod
```

## 代码格式检查

```bash
# 代码格式检查并自动修复
yarn lint
```

## Git 提交规范

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中
- `mod` 不确定分类的修改

## 站在巨人的肩膀上

- [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template)
- [DataV](https://github.com/DataV-Team/DataV)

## 📄 License

[MIT](https://github.com/un-pany/v2-datav-template/blob/main/LICENSE)

Copyright (c) 2021 UNPany