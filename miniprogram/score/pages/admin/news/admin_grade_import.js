const AdminBiz = require('../../../biz/admin_biz.js');
const ccminiPageHelper = require('../../../helper/ccmini_page_helper.js');
const ccminiCloudHelper = require('../../../helper/ccmini_cloud_helper.js');
const ccminiValidate = require('../../../helper/ccmini_validate.js');
const AdminNewsBiz = require('../../../biz/admin_news_biz.js');
const CCMINI_SETTING = require('../../../helper/ccmini_setting.js');
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isLoad: false
	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: async function (options) { 
		if (!AdminBiz.isAdmin(this)) return;

		if (!ccminiPageHelper.getId(this, options)) return;
		
		await this._loadDetail();
	},

	_loadDetail: async function () {
		let id = this.data.id;
		if (!id) return; 

		let params = {
			id
		};
		let opt = {
			hint: false
		};
		let news = await ccminiCloudHelper.callCloudData('admin/news_detail', params, opt);
		if (!news) {
			this.setData({
				isLoad: null
			})
			return;
		};


		this.setData({
			isLoad: true,
			title: news.NEWS_TITLE,
		});
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

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

	url: function (e) {
		ccminiPageHelper.url(e, this);
	},

	bindDownTap:function(e) {
		wx.openDocument({
			filePath: '../../../images/data.xlsx',
			success: function(res) {
				console.log('打开文档成功')
			},
			fail: function(res) {
				console.log(res);
			},
			complete: function(res) {
				console.log(res);
			}
		}) 
	},

	/** 
	 * 数据提交
	 */
	bindFormSubmit: async function () {
		if (!AdminBiz.isAdmin(this)) return;


		wx.chooseMessageFile({
			count: 1,
			type: 'file',
			extension: ['xlsx'],
			success: async (res) => {
				console.log(res)
				let path = res.tempFiles[0].path;

				wx.showLoading({
					title: '上传中',
					mask: true
				});



				// 上传到云空间 
				let cloudId = await ccminiCloudHelper.transTempPicOne(path, CCMINI_SETTING.NEWS_PIC_DIR, 'grade_import', false);
				if (!cloudId) return;

				let params = {
					cloudId,
					id: this.data.id
				};

				try {
					let options = {
						title: '导入中'
					}
					await ccminiCloudHelper.callCloudSumbit('admin/grade_import', params, options).then(res => {
						let data = res.data;
						ccminiPageHelper.showModal('共有数据' + data.total + '条，导入成功' + data.succ + '条')

					});
				} catch (err) {
					ccminiPageHelper.showModal('导入失败，请重新导入');
				}

			}
		});

	},

})