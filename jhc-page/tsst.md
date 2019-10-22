# 学生信息管理系统后端接口
## 一 基础说明
> 基础域名 http://116.62.237.64/
> 
|字段|类型|是否必须|备注|
|:-: |:-: |:-: |:-: | 
|userId|string|非必须|数据操作依据|

## 二 接口文档
### 1. 查询所有学生
- 接口: stu/queryAll
- method: get
- 请求参数: 无

返回结果**status200返回成功**
```javascript
{
	config: {url: "http://127.0.0.1:90/stu/queryAll", method: "get", headers: {…}, baseURL: "http://127.0.0.1:90", transformRequest: Array(1), …}
	data: (5) [{…}, {…}, {…}, {…}, {…}]
	headers: {content-type: "text/html;charset=UTF-8"}
	request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
	status: 200
	statusText: "OK"
}
```



### 2. 添加学生信息
- 接口: stu/addStu
- method: post
- 请求参数:data学生信息对象
>data对象属性

|字段|类型|是否必须|备注|
|:-: |:-: |:-: |:-: | 
|name|string|是|在5个字符内|
|id|string|是|学号|
|sex|number|是|1为男0为女|
|edu|number|是|1为本科以上0为本科以下|
|email|string|是|前端做校验|
|address|string|是|住址|

添加成功示例
```javascript
{
	config: {url: "http://127.0.0.1:90/stu/addStu", method: "post", data: "{"id":211312892,"name":"张峰1号","email":"128837218@qq.com","address":"安徽村","edu":"博士","sex":0}", headers: {…}, baseURL: "http://127.0.0.1:90", …}
	data: "添加成功"
	headers: {content-type: "text/html;charset=UTF-8"}
	request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
	status: 200
	statusText: "OK"
}
```

### 3. 删除学生信息
- 接口: stu/editStu
- method: get
- 请求参数: 学号

|字段|类型|是否必须|备注|
|:-: |:-: |:-: |:-: | 
|id|string|是|要删除学生的学号|

实例
```javascript
{
	config: {url: "http://127.0.0.1:90/stu/editStu?id=211312892", method: "get", headers: {…}, baseURL: "http://127.0.0.1:90", transformRequest: Array(1), …}
	data: "ok"
	headers: {content-type: "text/html;charset=UTF-8"}
	request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
	status: 200
	statusText: "OK"
}
```

### 3. 修改学生信息
- 接口: stu/changeStu
- method: post
- 请求参数: data

#### data字段
> 注： 学生的学号无法修改

|字段|类型|是否必须|备注|
|:-: |:-: |:-: |:-: | 
|id|string|是|学号|
|name|string|否|在5个字符内|
|sex|number|否|1为男0为女|
|edu|number|否|1为本科以上0为本科以下|
|email|string|否|前端做校验|
|address|string|否|住址|

成功实例
```javascript
{
	config: {url: "http://127.0.0.1:90/stu/changeStu", method: "post", data: "{"id":212,"name":"陈啸掭","email":"128837218@qq.com","address":"玩的","edu":"博士","sex":0}", headers: {…}, baseURL: "http://127.0.0.1:90", …}
	data: "修改成功"
	headers: {content-type: "text/html;charset=UTF-8"}
	request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
	status: 200
	statusText: "OK"
}
```