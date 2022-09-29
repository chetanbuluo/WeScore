 




# 项目介绍    
- 本小程序包括成绩查询（学科成绩，考级成绩，竞赛成绩，其他成绩），后台成绩科目管理，后台成绩导入，后台成绩管理等功能模块！ 

![image](https://user-images.githubusercontent.com/114638578/192943145-700ceffc-60e2-4fe2-b826-331f75db48ef.png)
# 功能说明
![image](https://user-images.githubusercontent.com/114638578/192943152-c93d501e-2855-4cf0-b8fa-01eac02753e9.png)


# 技术运用

- 项目使用微信小程序平台进行开发。
- 使用腾讯云开发技术，免费资源配额，无需域名和服务器即可搭建。
- 小程序本身的即用即走，适合小工具的使用场景，也适合程序的开发。

# 项目效果截图
![image](https://user-images.githubusercontent.com/114638578/192943157-1bdf9806-bf13-402e-a822-5084622c7abb.png)
![image](https://user-images.githubusercontent.com/114638578/192943166-a8599673-3e85-4625-8b29-1814473772f7.png)
![image](https://user-images.githubusercontent.com/114638578/192943174-f794d24a-58f7-4b18-91e7-c8557cdb6c23.png)

# 项目后台截图
 ![image](https://user-images.githubusercontent.com/114638578/192943186-28711666-220e-4d95-8e9a-45071d134486.png)
![image](https://user-images.githubusercontent.com/114638578/192943193-1e228a7d-e6cc-4267-98b9-841b15fcaba7.png)
![image](https://user-images.githubusercontent.com/114638578/192943196-98d71bee-070b-46b1-90a0-a976c9cd6b4e.png)
![image](https://user-images.githubusercontent.com/114638578/192943204-15810b11-2f71-4f03-bdeb-24e74e9b2472.png)


# 导入数据的Excel文档成绩样本格式
![image](https://user-images.githubusercontent.com/114638578/192943211-73424077-1c4f-43d5-a461-69c6d9d0cd4f.png)

# 部署教程：
### 0. 了解小程序云开发的基础知识
-  参考微信小程序官方文档：
- https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html
- https://developers.weixin.qq.com/miniprogram/dev/wxcloud/quick-start/miniprogram.html

### 1 源码导入微信开发者工具
![image](https://user-images.githubusercontent.com/114638578/192943223-332f276a-f170-4a79-b3dd-edb24da92edc.png)
  


### 2 开通云开发环境
 -  参考微信官方文档：https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html
- 在使用云开发能力之前，需要先开通云开发。 
- 在开发者工具的工具栏左侧，点击 “云开发” 按钮即可打开云控制台，根据提示开通云开发，并且创建一个新的云开发环境。
![image](https://user-images.githubusercontent.com/114638578/192943235-0cb319dd-a0a0-48a0-a0bb-850b877c2f46.png)
- 每个环境相互隔离，拥有唯一的环境 ID(拷贝此ID，后面配置用到)，包含独立的数据库实例、存储空间、云函数配置等资源；
 

#### 3 云函数及配置
- 本项目使用到了一个云函数score_cloud 

 

- 打开cloudfunctions/sport_cloud/comm/ccmini_config.js文件，配置后台管理员账号和密码

![image](https://user-images.githubusercontent.com/114638578/192943249-c4cc3098-f4bb-4103-851a-4ad9992ada4a.png)

 


#### 4  客户端配置
- 打开miniprogram/app.js文件，配置环境ID

![image](https://user-images.githubusercontent.com/114638578/192943268-bef3acaf-7834-40be-a564-4e3b0e9f6584.png)


 

#### 5  上传云函数&指定云环境ID

![image](https://user-images.githubusercontent.com/114638578/192943275-f4df0cb0-21aa-4d97-a4b4-191c269b7fee.png)

#### 6  云函数配置
- 在微信开发者工具-》云开发-》云函数-》对指定的函数添加环境变量 
- [服务端时间时区TZ] =>Asia/Shanghai
- [函数内存] =>128M   
- [函数超时时间] => 60秒
![image](https://user-images.githubusercontent.com/114638578/192943321-2ad92fb1-96d6-456d-a2fe-bc4717d24887.png)

 


### 至此完全部署配置完毕。

### 在线演示：
 ![image](https://user-images.githubusercontent.com/114638578/192943337-ffaec731-935a-44a5-b505-80815d5fb8c3.png)

 


### 如有疑问，欢迎骚扰联系我鸭： 
### 俺的微信:  cclinux0730

### 开发交流群：开发交流，技术分享，问题答疑，功能建议收集，版本更新通知
-
 
![image](https://user-images.githubusercontent.com/114638578/192943357-95eb85db-f11b-43ed-b520-1cf99337f440.png)
