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
  * Notes: 字符相关操作函数
  * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY www.code942.com
  * Date: 2020-09-05 04:00:00
  * Version : CCMiniCloud Framework Ver 2.0.1 ALL RIGHTS RESERVED BY 明章科技
  */


 const genRandomNum = (min, max) => (Math.random() * (max - min + 1) | 0) + min;

 const genRandomString = len => {
 	const text = 'abcdefghijklmnopqrstuvwxyz0123456789';
 	const rdmIndex = text => Math.random() * text.length | 0;
 	let rdmString = '';
 	for (; rdmString.length < len; rdmString += text.charAt(rdmIndex(text)));
 	return rdmString;
 }

 function str2Arr(str, sp) {
 	if (str && Array.isArray(str)) return str;

 	if (sp == undefined) sp = ',';

 	str = str.replace(/，/g, ",");
 	let arr = str.split(',');
 	for (let i = 0; i < arr.length; i++) {
 		arr[i] = arr[i].trim();

 		if (isNumber(arr[i])) {
 			arr[i] = Number(arr[i]);
 		}

 	}
 	return arr;
 }

 function isNumber(val) {
 	var reg = /^[0-9]+.?[0-9]*$/;
 	if (reg.test(val)) {
 		return true;
 	} else {
 		return false;
 	}
 }


 function getArrByKey(arr, key) {
 	if (!Array.isArray(arr)) return;
 	return arr.map((item) => {
 		return item[key]
 	});
 }

 function fmtText(content, len = -1) {
 	let str = content.replace(/[\r\n]/g, ""); //去掉回车换行
 	if (len > 0) {
 		str = str.substr(0, len);
 	}
 	return str.trim();
 }

 function spArr(arr, size) {
 	if (!arr || !Array.isArray(arr) || arr.length == 0) return arr;

 	let newArray = [];
 	let index = 0;
 	while (index < arr.length) {
 		newArray.push(arr.slice(index, index += size));
 	}
 	return newArray;
 }

 function checkObjArrExist(arr, obj, fields = []) {
 	let result = arr.some(item => {
 		if (fields.length == 1 &&
 			item[fields[0]] == obj[fields[0]]) {
 			return true;
 		} else if (fields.length == 2 &&
 			item[fields[0]] == obj[fields[0]] &&
 			item[fields[1]] == obj[fields[1]]) {
 			return true;
 		} else if (fields.length == 3 &&
 			item[fields[0]] == obj[fields[0]] &&
 			item[fields[1]] == obj[fields[1]] &&
 			item[fields[2]] == obj[fields[2]]) {
 			return true;
 		} else if (fields.length == 4 &&
 			item[fields[0]] == obj[fields[0]] &&
 			item[fields[1]] == obj[fields[1]] &&
 			item[fields[2]] == obj[fields[2]] &&
 			item[fields[3]] == obj[fields[3]]) {
 			return true;
 		} else if (fields.length == 5 &&
 			item[fields[0]] == obj[fields[0]] &&
 			item[fields[1]] == obj[fields[1]] &&
 			item[fields[2]] == obj[fields[2]] &&
 			item[fields[3]] == obj[fields[3]] &&
 			item[fields[4]] == obj[fields[4]]) {
 			return true;
 		} else if (fields.length == 6 &&
 			item[fields[0]] == obj[fields[0]] &&
 			item[fields[1]] == obj[fields[1]] &&
 			item[fields[2]] == obj[fields[2]] &&
 			item[fields[3]] == obj[fields[3]] &&
 			item[fields[4]] == obj[fields[4]] &&
 			item[fields[5]] == obj[fields[5]]) {
 			return true;
 		}
 	});

 	return result;
 }

 module.exports = {
 	str2Arr,
 	spArr,
 	isNumber,
 	getArrByKey,
 	genRandomString,
 	genRandomNum,
 	fmtText,
 	checkObjArrExist
 }