<template>
  <div class="interface" style="width: 100%;">
    接口中心
    <mavon-editor
      class="md"
      :value="value"
      :subfield="false"
      :defaultOpen="'preview'"
      :toolbarsFlag="false"
      :editable="false"
      :scrollStyle="true"
      :ishljs="true"
    ></mavon-editor>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

export default {
  components: {
    mavonEditor,
  },
  data() {
    return {
      value: `# 学生信息管理系统后端接口
## 一 基础说明
> 基础域名 www.jhc-dev.cn/
> 
|字段|类型|是否必须|备注|
|:-: |:-: |:-: |:-: | 
|userId|string|是|数据操作依据|
|data|object|非必须|返回给后端的数据（添加信息，翻页分组）|

## 二 接口文档
### 1. 查询所有学生
- 接口: stu/queryAll
- method: get
- 请求参数

|字段|类型|是否必须|备注|
|:-: |:-: |:-: |:-: | 
|userId|string|是|数据操作依据|



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

### 3. 删除学生信息
- 接口: stu/editStu
- method: get
- 请求参数: 学号

|字段|类型|是否必须|备注|
|:-: |:-: |:-: |:-: | 
|id|string|是|要删除学生的学号|

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

			`, // markdown语法
    };
  },
  created() {},
};
</script>

<style lang="scss">
.md {
  border: 1px solid;
}
</style>
