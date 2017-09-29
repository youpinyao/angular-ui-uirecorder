# meetyou-angular-ui-uirecorder
test case recorder

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
"recorder:menu": "uirecorder sample/menu.spec.js"

// 录制后跑测试
"test:menu": "source run.sh sample/menu.spec.js"
```
