const ccminiCloudHelper = require('../../helper/ccmini_cloud_helper.js');
const ccminiValidate = require('../../helper/ccmini_validate.js');
const ccminiPageHelper = require('../../helper/ccmini_page_helper.js');
const PassportBiz = require('../../biz/passport_biz.js');
const CCMINI_SETTING = require('../../helper/ccmini_setting.js');

Page({

	/**
	 * 页面的初始数据
	 */
	data: { 
		formNum: '',
		formName: ''
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) {
		await PassportBiz.initPage(this);

		if (!await PassportBiz.loginMustRegWin(this)) return;

		if (!ccminiPageHelper.getId(this, options)) return;
		
		if (options && options.title) {
			this.setData({
				title:decodeURIComponent(options.title)
			})
		}

	},
 

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},



	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom: function () {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage: function (res) {
		return {
			title: this.data.news.NEWS_TITLE,
			path: '/' + CCMINI_SETTING.PROJECT_MARK + '/pages/news/grade_query?id=' + this.data.id,
		}
	},

	/** 
	 * 数据提交
	 */
	bindFormSubmit: async function () {

		let data = this.data;

		let CHECK_FORM = {
			name: 'formName|required|string|min:1|max:50|name=姓名',
			num: 'formNum|required|string|min:1|max:50|name=学号'
		};

		// 数据校验 
		data = ccminiValidate.check(data, CHECK_FORM, this);
		if (!data) return;
		data.id = this.data.id;

		this.setData({
			isQ: false,
			score: null,
		})

		try {
			let options = {
				title: '查询中'
			}
			await ccminiCloudHelper.callCloudSumbit('grade/query', data, options).then(res => {
				this.setData({
					isQ: true,
					score: res.data.GRADE_SCORE,
				})
			});

		} catch (err) {
			console.log(err)
		}

	},

})