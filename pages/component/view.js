const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: [
      { name: 'icon' },
      { name: 'progress' }, 
      { name: 'rich-text' }, 
      { name: 'button' },
      { name: 'checkbox'},
      { name: 'editor' },
      { name: 'form' },
      { name: 'input' },
      { name: 'label' },
    ]
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
      case 3:
        this.navigateTo('../component/form/button/button')
        break;
      case 4:
        this.navigateTo('../component/form/checkbox/checkbox')
        break;
      case 5:
        this.navigateTo('../component/form/editor/editor')
        break;
      case 6:
        this.navigateTo('../component/form/form/form')
        break;
      case 7:
        this.navigateTo('../component/form/input/input')
        break;
      case 8:
        this.navigateTo('../component/form/lable/lable')
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