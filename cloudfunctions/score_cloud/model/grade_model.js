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
 * Notes: 成绩实体
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY www.code942.com
 * Date: 2021-08-29 19:20:00
 * Version : CCMiniCloud Framework Ver 2.0.1 ALL RIGHTS RESERVED BY 明章科技
 */


const BaseCCMiniModel = require('./base_ccmini_model.js');

class GradeModel extends BaseCCMiniModel {

}

// 集合名
GradeModel.CL = "grade";

GradeModel.CCMINI_DB_STRUCTURE = {
	GRADE_ID: 'string|true',
	GRADE_NEWS_ID: 'string|true',

	GRADE_NAME: 'string|true|comment=',
	GRADE_NUM: 'string|true|comment=',
	GRADE_SCORE: 'string|true|comment=',

	GRADE_ADD_TIME: 'int|true',
	GRADE_EDIT_TIME: 'int|true',
	GRADE_ADD_IP: 'string|false',
	GRADE_EDIT_IP: 'string|false',
};

// 字段前缀
GradeModel.CCMINI_FIELD_PREFIX = "GRADE_";

module.exports = GradeModel;