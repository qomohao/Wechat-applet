//项目URL相同部分，减轻代码量，同时方便项目迁移
//这里因为我是本地调试，所以host不规范，实际上应该是你备案的域名信息
// export const baseUrl = 'http://localhost:3000/';
export const baseUrl = 'http://v.juhe.cn/';

/**
 * 统一的请求封装
 * @param {String} api 请求的api地址
 * @param {JSON} params 请求携带的参数
 * @param {String} methods 请求方式，默认GET
 * @param {boolean} [loading=true] 是否显示loading，默认true
 */

 function $get(api, params, method = 'GET', loading = true) {
  return new Promise((resolve, reject) => {
    // 请求开始，显示loading
    if (loading) {
      wx.showLoading({
        title: 'loading...'
      })
    }
    console.log("请求参数",params)
    params.key="6fd2b3366e7a6dc2da85fccc259b2e89";
    // 请求
    wx.request({
      url: baseUrl + api,
      data: params,
      method: method,
      dataType: 'json',
      success: function(res) {
        if (res.statusCode === 200) {
          resolve(res) // 接收res并传到then的参数中去
          wx.hideLoading() // 结束加载
        } else {
          wx.hideLoading()
          reject()
        }
      },
      error: function(e) {
        reject(e)
      }
    })
  })
};
 function $post(api, params, method = 'POST', loading = true) {
  return new Promise((resolve, reject) => {
    // 请求开始，显示loading
    if (loading) {
      wx.showLoading({
        title: 'loading...'
      })
    }
    params.key="6fd2b3366e7a6dc2da85fccc259b2e89";
    // 请求
    wx.request({
      url: baseUrl + api,
      data: params,
      method: method,
      dataType: 'json',
      success: function(res) {
        if (res.statusCode === 200) {
          resolve(res) // 接收res并传到then的参数中去
          wx.hideLoading() // 结束加载
        } else {
          wx.hideLoading()
          reject()
        }
      },
      error: function(e) {
        reject(e)
      }
    })
  })
}

export {
  $get,
  $post
}
