const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [{ id: '0', name: 'icon' }, { id: '1', name: 'progress' }, { id: '2', name: 'rich-text' }, { id: '3', name: 'text' }]
  },
  click: function(e){
    //获取下标
    var idx = Number(e.currentTarget.id);
    switch(idx){
      case 0:
        this.navigateTo('../component/baseview/icon/icon')
        break;
      case 1:
        this.navigateTo('../component/baseview/progress/progress')
        break;
      case 2:
        this.navigateTo('../component/baseview/rich-text/rchText')
        break;
    }
  },
  navigateTo(val){
    wx.navigateTo({
      url: val,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})