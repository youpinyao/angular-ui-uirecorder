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

// 录制scripts
"recorder:menu": "uirecorder sample/menu.spec.js"

// 测试scripts
"test:menu": "source run.sh sample/menu.spec.js"

// 录制
npm run recorder:menu

// 测试
npm run server
npm run test:menu
```
