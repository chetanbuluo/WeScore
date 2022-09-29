const NewsBiz = require('../../../biz/news_biz.js');
const AdminNewsBiz = require('../../../biz/admin_news_biz.js');
const AdminBiz = require('../../../biz/admin_biz.js');
const ccminiPageHelper = require('../../../helper/ccmini_page_helper.js');
const ccminiCloudHelper = require('../../../helper/ccmini_cloud_helper.js');

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

		//设置搜索菜单
		await this._getSearchMenu();

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
	onShow: async function () {

		// 获取当前小程序的页面栈
		let pages = getCurrentPages();
		// 数组中索引最大的页面--当前页面
		let currentPage = pages[pages.length - 1];
		// 附加参数 

		if (currentPage.options && currentPage.options.title) {
			this.setData({
				title: currentPage.options.title
			});
		}

		if (currentPage.options && currentPage.options.id) {

			this.setData({
				_params: {
					id: currentPage.options.id
				}
			});
		}

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

	url: async function (e) {
		ccminiPageHelper.url(e);
	},

	myCommListListener: function (e) {
		ccminiPageHelper.commListListener(this, e);
	},


	bindDelTap: async function (e) {

		let id = e.currentTarget.dataset.id;

		if (!id) return;

		let params = {
			id
		}

		let that = this;
		let callback = async function () {
			try {
				let opts = {
					title: '删除中'
				}
				await ccminiCloudHelper.callCloudSumbit('admin/grade_del', params, opts).then(res => {
					ccminiPageHelper.delListNode(id, that.data.dataList.list, '_id');
					that.data.dataList.total--;
					that.setData({
						dataList: that.data.dataList
					});
					ccminiPageHelper.showSuccToast('删除成功');
				});
			} catch (e) {
				console.log(e);
			}
		}
		ccminiPageHelper.showConfirm('确认删除？删除不可恢复', callback);

	},

	bindClearTap: async function (e) {

		let id = this.data.id;

		if (!id) return;

		let params = {
			id
		}

		let that = this;
		let callback = async function () {
			try {
				let opts = {
					title: '清空中'
				}
				await ccminiCloudHelper.callCloudSumbit('admin/grade_clear', params, opts).then(res => {
					that.setData({
						dataList: []
					});
					ccminiPageHelper.showSuccToast('清空成功');
				});
			} catch (e) {
				console.log(e);
			}
		}
		ccminiPageHelper.showConfirm('确认清空？清空不可恢复', callback);

	},

	_getSearchMenu: async function () {

		let sortItems = [];
		let sortMenus = [{
				label: '全部',
				type: '',
				value: ''
			},
			{
				label: '学号正序',
				type: 'num',
				value: 'asc'
			},
			{
				label: '学号倒序',
				type: 'num',
				value: 'desc'
			},
			{
				label: '成绩从小到大',
				type: 'score',
				value: 'asc'
			},
			{
				label: '成绩从大到小',
				type: 'score',
				value: 'desc'
			}
		];

		this.setData({
			sortItems,
			sortMenus
		})

	}

})