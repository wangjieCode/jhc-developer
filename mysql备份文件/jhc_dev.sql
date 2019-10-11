-- MySQL dump 10.13  Distrib 5.7.26, for Win64 (x86_64)
--
-- Host: localhost    Database: jhc_dev
-- ------------------------------------------------------
-- Server version	5.7.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `2myqlb9v`
--

DROP TABLE IF EXISTS `2myqlb9v`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `2myqlb9v` (
  `id` int(11) NOT NULL,
  `name` varchar(5) COLLATE utf8_bin NOT NULL,
  `sex` tinyint(4) NOT NULL,
  `edu` varchar(45) COLLATE utf8_bin NOT NULL,
  `email` varchar(45) COLLATE utf8_bin NOT NULL,
  `address` varchar(45) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `2myqlb9v`
--

LOCK TABLES `2myqlb9v` WRITE;
/*!40000 ALTER TABLE `2myqlb9v` DISABLE KEYS */;
INSERT INTO `2myqlb9v` VALUES (20181010,'王杰',0,'本科','1787612871@qq.com','山西长治');
/*!40000 ALTER TABLE `2myqlb9v` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `userName` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `article` text COLLATE utf8_unicode_ci NOT NULL,
  `times` int(11) NOT NULL,
  `tag` varchar(45) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(45) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1029320,'root','# app',2019101010,'',' 使用md语法分享文章'),(71908824,'20191010','# 使用md语法分享文章',2019101022,'',' 使用md语法分享文章'),(71914956,'20191010','# 使用md语法分享文章',2019101022,'',' 使用md语法分享文章'),(102932223,'root','## 增强函数组件的功能16.8后\r\n\r\n#### useState\r\n- 函数返回一个数组\r\n  - 0 得到的状态的值\r\n  - 1 改变状态的函数\r\n#### useEffect\r\n- 处理副作用，传入副作用处理函数\r\n  - 定时器，缓存，异步请求\r\n- 异步，会在ui已经展现后执行**注意等待时间过长**\r\n\r\n#### 自定义HOOK\r\n- 常用的跨越多个组件hook功能抽离出来\r\n  - 名字use开头\r\n\r\n使用类组件抽离公共生命周期函数\r\n- 高阶组件\r\n  - 使用一个中介组件，通过传递属性的方式抽离\r\n- ',2019101010,'前端','react16.8+, 新属性hook '),(102932232,'root','## 旧版 **16.0前**\r\n1. 函数组件\r\n>		没有生命周期，只有调用挂载没有过多的操作\r\n2. 类组件\r\n### 初始化阶段\r\n   -  初始化	constructor ```禁止更新组件状态```\r\n   -  即将被挂载	componentWillMount ```禁止更新组件状态,ssr会使运行多次```\r\n   -  渲染虚拟dom	rander ```不能更新状态```\r\n   -  渲染真实的dom **componentDidMount** ```网络请求，定时器时器```\r\n### 等待更新状态\r\n   - 属性发生改变 componentWillReceiveProps\r\n   - 是否要更新 **shouldComponentUpdate**\r\n	 - d\r\n	 - rander\r\n\r\n### 组件销毁\r\n   - **componentWillUnmount** ```清空组件占用定时器等异步任务```\r\n   - ![旧版react生命周期](./toolUi/旧版react.PNG)\r\n## 新版 **16以后**\r\n1. getDerivedStateFromProps\r\n	1. 通过参数获取新的属性喝状态\r\n	2. 静态函数，this指向本身\r\n	3. 返回值覆盖之前的组建的状态\r\n2. getSnapshotBefreUpdate\r\n	4. 操作真实的dom，\r\n	5. 返回值会成为componentDidUpdate的第3个参数\r\n3. - ![新版react生命周期](./toolUi/旧版react.PNG)',2019101010,'前端','react生命周期'),(102932233,'root',' # jsx的渲染流程\r\n1. 闭合的jsx标签会找到React.createElement()函数\r\n2. React.createElement(type,props,children...)执行 ==> vNode对像**描述当前元素**\r\n3. render函数将vNode  ==> 渲染到页面\r\n- React.createElement函数\r\n```\r\nconst React = {\r\n	createElement(type, props, ...children){\r\n		return {\r\n			type,\r\n			props,\r\n			children\r\n		}\r\n	}\r\n}\r\n```\r\n- reander函数\r\n```\r\nconst render = (vNode, container) => {\r\n	const {\r\n		type,\r\n		props,\r\n		children\r\n	} = vNode;\r\n	const ele = document.createElement(type);\r\n	if(typeof vNode == \"string\"){								// div，span会被转化成vNode对象\r\n		return container.appendChild(document.createTextNode(vNode))\r\n	}\r\n	children.forEach( item => render(item,ele) ) //渲染所有子节点\r\n	\r\n	container.appendChild(ele);\r\n}\r\n```\r\n- 测试\r\n```\r\nlet text = <div> jsx渲染流程 <span>mmp</span> </div>\r\nrender(text, window.root || document.getElementById(\'root\'))\r\n```',2019101010,'前端','jsx的渲染流程'),(102932234,'root','## 前端单元测试\r\n- chai: 断言库， 判断比对程序的预期运行结果\r\n	> 三种断言分格：should,expect,assert\r\n## exoect语法\r\n* 判断相等\r\n	> 判断基本类型 expect(结果).to.be.equal(预期);\r\n\r\n	> 判断引用类型 to.be.deep.equal => 深度对比键值对\r\n\r\n* 判断不等\r\n  > expect(结果).to.be.not.equal(1);\r\n\r\n* 判断大于\r\n	> expect(结果).to.be.above(预期);\r\n\r\n	> expect(结果).to.be.greaterThan(预期);\r\n* 判断小于\r\n  > expect(5).to.be.below(10);\r\n\r\n  > expect(5).to.be.lessThan(10);\r\n\r\n* 判断大于等于\r\n  > expect(10).to.be.at.least(10);\r\n\r\n  > expect(10).to.be.not.lessThan(10);\r\n\r\n* 判断小于等于\r\n  > expect(5).to.be.at.most(5);\r\n\r\n  > expect(5).to.be.not.greaterThan(5);\r\n\r\n* 判断长度\r\n  > expect([1, 2, 3]).to.be.lengthOf(3);\r\n\r\n* 判断为truthy，(除了false、undefined、null、正负0、NaN、\"\"的值)\r\n  > expect(1).to.be.ok;\r\n\r\n* 判断为true、false、null、undefined、NaN\r\n  > expect(true).to.be.true;\r\n\r\n  > expect(false).to.be.false;\r\n\r\n  > expect(null).to.be.null;\r\n\r\n  > expect(undefined).to.be.undefined;\r\n\r\n  > expect(NaN).to.be.NaN;\r\n\r\n* 判断包含\r\n  > expect(\'目标\').to.be.include(\'目\'); 包含\r\n\r\n  > expect(\'目标\').to.be.contain(\'目\'); 包含\r\n\r\n  > expect(\'目标\').to.be.match(/目/); 匹配\r\n',2019101010,'前端','前端单元测试mocha+chai基本语法'),(102932235,'root','## 单例模式\r\n![](./iamge/单例模式.png)\r\n\r\n\r\n\r\n## 代理模式\r\n* > 安全代理：把开销比较大的对象延迟到需要的时候创建\r\n* > 虚拟代理：控制对象的真实访问权限\r\n* > 远程代理：一个对象将不同的对象空间的对象进行局部代理\r\n* > 智能代理：比如垃圾回收机制',2019101010,'前端','js设计模式');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student`
--

DROP TABLE IF EXISTS `student`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student` (
  `id` int(11) NOT NULL,
  `name` varchar(5) COLLATE utf8_bin NOT NULL,
  `sex` tinyint(4) NOT NULL,
  `edu` varchar(45) COLLATE utf8_bin NOT NULL,
  `email` varchar(45) COLLATE utf8_bin NOT NULL,
  `address` varchar(45) COLLATE utf8_bin NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student`
--

LOCK TABLES `student` WRITE;
/*!40000 ALTER TABLE `student` DISABLE KEYS */;
INSERT INTO `student` VALUES (12938,'关羽',0,'jdew','djawei','hjk'),(20101,'王杰',0,'本科','1787612871@qq.com','山西长治'),(20831,'张峰1号',0,'128837218@qq.com','安徽村','博士'),(120938,'张飞',0,'jdew','djawei','hjk'),(201810101,'王杰',0,'本科','1787612871@qq.com','山西长治');
/*!40000 ALTER TABLE `student` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usename` varchar(18) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(18) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `usename_UNIQUE` (`usename`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'root','wj1314hhxxttxs'),(3,'mmp','mmppp'),(5,'dawe','aewraew'),(6,'dawedadwe','aewraew'),(7,'xiaoqiang','122342'),(9,'xiaoqiangmmp','122342'),(10,'1234556','1234556'),(21,'12345561','1234556'),(22,'123455610909','1234556'),(24,'jsakhjsjkw','1234556'),(29,'jsakhjsjkww','1234556'),(32,'jsakhjsjkwww','1234556'),(44,'123456','123456'),(56,'nzfdsnkd','nzfdsnkd');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user2table`
--

DROP TABLE IF EXISTS `user2table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user2table` (
  `user` varchar(18) COLLATE utf8_unicode_ci NOT NULL,
  `userId` varchar(18) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`user`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user2table`
--

LOCK TABLES `user2table` WRITE;
/*!40000 ALTER TABLE `user2table` DISABLE KEYS */;
INSERT INTO `user2table` VALUES ('mmp','mmp2'),('xiaoqiangmmp','2MyQlB9v');
/*!40000 ALTER TABLE `user2table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-10-11 15:44:44
