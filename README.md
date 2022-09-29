 # 技术交流 
- 开发交流，技术分享，问题答疑，功能建议收集，版本更新通知！！

 ![输入图片说明](https://gitee.com/minzonetech/CCSmartPhoto/raw/master/cc.png)



# 项目介绍    
- 本小程序包括成绩查询（学科成绩，考级成绩，竞赛成绩，其他成绩），后台成绩科目管理，后台成绩导入，后台成绩管理等功能模块！ 

 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112008_23739fb0_9240987.png "ui.png")
# 功能说明
  ![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112021_93190038_9240987.gif "成绩 (2).gif")


# 技术运用

- 项目使用微信小程序平台进行开发。
- 使用腾讯云开发技术，免费资源配额，无需域名和服务器即可搭建。
- 小程序本身的即用即走，适合小工具的使用场景，也适合程序的开发。

# 项目效果截图
 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112040_41adbdaa_9240987.png "成绩列表.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112048_7e66299d_9240987.png "成绩查询1.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112054_0105dd59_9240987.png "成绩查询.png")

# 项目后台截图
![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112133_aa185db1_9240987.png "后台首页.png")
 
![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112110_15b3c91f_9240987.png "后台成绩管理.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112118_b767de07_9240987.png "后台成绩列表.png")
![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112125_9ec6690b_9240987.png "后台导入成绩.png")

# 导入数据的Excel文档成绩样本格式
![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112444_41cc1ef5_9240987.png "成绩样本.png")

# 部署教程：
### 0. 了解小程序云开发的基础知识
-  参考微信小程序官方文档：
- https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html
- https://developers.weixin.qq.com/miniprogram/dev/wxcloud/quick-start/miniprogram.html

### 1 源码导入微信开发者工具
  ![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112152_4d096b50_9240987.png "导入.png")
  


### 2 开通云开发环境
 -  参考微信官方文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html
- 在使用云开发能力之前，需要先开通云开发。 
- 在开发者工具的工具栏左侧，点击 “云开发” 按钮即可打开云控制台，根据提示开通云开发，并且创建一个新的云开发环境。
![输入图片说明](https://images.gitee.com/uploads/images/2021/0811/232537_8a27b61c_9240987.png "云开发开通环境.png")
- 每个环境相互隔离，拥有唯一的环境 ID(拷贝此ID，后面配置用到)，包含独立的数据库实例、存储空间、云函数配置等资源；
 

#### 3 云函数及配置
- 本项目使用到了一个云函数score_cloud 

 

- 打开cloudfunctions/sport_cloud/comm/ccmini_config.js文件，配置后台管理员账号和密码

 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0911/150146_a9af88e5_9240987.png "设置管理员账号.png")

#### 本系统需要导入Excel文件，需要在云函数安装Excel内库支持，
- 在云函数cloudfunctions文件夹下选择云函数score_cloud , 右键选择在终端中打开,然后执行 
- npm install node-xlsx

![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112334_569b770c_9240987.png "安装xlxs支持.png")


#### 4  客户端配置
- 打开miniprogram/app.js文件，配置环境ID

 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0811/232832_6053aae0_9240987.png "客户端配置.png")


 

#### 5  上传云函数&指定云环境ID

 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0828/115037_1a90791e_9240987.png "上传云函数.png")

#### 6  云函数配置
- 在微信开发者工具-》云开发-》云函数-》对指定的函数添加环境变量 
- [服务端时间时区TZ] =>Asia/Shanghai
- [函数内存] =>128M   
- [函数超时时间] => 60秒
 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0830/112221_319a919f_9240987.png "云函数配置.png")

 


### 至此完全部署配置完毕。

### 在线演示：
 

 ![输入图片说明](https://images.gitee.com/uploads/images/2021/0811/233918_96b29222_9240987.jpeg "Free版-QR.jpg")


### 如有疑问，欢迎骚扰联系我鸭： 
### 俺的微信:  cclinux0730

### 开发交流群：开发交流，技术分享，问题答疑，功能建议收集，版本更新通知
-
 
