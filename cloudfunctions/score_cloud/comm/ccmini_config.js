// +----------------------------------------------------------------------
// | CCMiniCloud [ Cloud Framework ]
// +----------------------------------------------------------------------
// | Copyright (c) 2021 www.code942.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: 明章科技
// +----------------------------------------------------------------------

/**
 * Notes: 配置文件
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY www.code942.com
 * Date: 2021-08-02 19:20:00
 */
module.exports = { 

	CCMINI_ADMIN_NAME: 'ccadmin', // 管理员账号（6-30位)
	CCMINI_ADMIN_PWD: '123456', // 管理员密码（6-30位)

	CCMINI_TEST_MODE: false,

	CCMINI_TEST_TOKEN_ID: 'oTthr5P34HTx5iYLtATaGjNlIxZw',

	CCMINI_ADMIN_LOGIN_EXPIRE: 86400,

	PROJECT_MARK: 'score',
	PROJECT_NAME: 'CC通用成绩查询小程序',
	PROJECT_VER: 'CCScore-Cloud(V1.3 Build20210829)', //升级必须，请勿修改
	PROJECT_SOURCE: 'https://gitee.com/minzonetech',

	CCMINI_CLIENT_CHECK_CONTENT: true,
	CCMINI_ADMIN_CHECK_CONTENT: false,
 
	CCMINI_COLLECTION_NAME: 'setup|user|admin|news|grade',
	CCMINI_SETUP_TITLE: 'CC通用成绩查询小程序',
	CCMINI_SETUP_ABOUT: '   CC通用成绩查询小程序简介！！！',

	CCMINI_NEWS_TITLE: '2021年上半年计算机考试成绩',
	CCMINI_NEWS_CATE: '学科成绩',
	CCMINI_NEWS_DESC: '自2018年3月起，考试结果将以等第形式公布，等第共分优秀、良好、及格、不及格四等',
	CCMINI_NEWS_CONTENT: '自2018年3月起，考试结果将以等第形式公布，等第共分优秀、良好、及格、不及格四等其中90－100分为优秀、80－89分为良好、60－79分为及格、0－59分为不及格。不再显示具体分数。\n\r由于查询人数较多，可能会出现点击获取不到验证码，甚至打不开网页服务器崩溃的情况，希望各位考生能够耐心等待查询。',

}