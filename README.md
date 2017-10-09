# meetyou-angular-ui-uirecorder
test case recorder

---
node 版本必须>= 7.0

---

### 使用文档
[https://github.com/alibaba/uirecorder/blob/master/README_zh-cn.md](https://github.com/alibaba/uirecorder/blob/master/README_zh-cn.md)

---

### 录制

#### 1. npm i
#### 2. npm run installdriver
#### 3. 新增录制项
在package.json 新增 scripts

```
范例：

// 录制
npm run recorder sample/menu.spec.js

// 测试
npm run server

source run.sh sample/menu.spec.js

```
