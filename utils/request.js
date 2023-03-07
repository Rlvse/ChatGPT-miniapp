// const app = getApp()

// const request = (url, options) => {
//   return new Promise((resolve, reject) => {
//     wx.request({
//       url: app ? app.globalData.host, //域名接口地址
//       method: options.method, //配置method方法
//       data: options.method === 'GET' ? options.data : JSON.stringify(options.data), //如果是GET,GET自动让数据成为query String,其他方法需要让options.data转化为字符串
//       header: {
//         'Content-Type': 'application/json; charset=UTF-8',
//       }, //header中可以添加token值等
//       success(request) { //监听成功后的操作
//         if (request.statusCode === 200) {
//           resolve(request.data)
//         } else {
//           reject(request.data)
//         }
//       },
//       fail(error) {  //返回失败也同样传入reject()方法
//         reject(error.data)
//       }
//     })
//   })
// }

// //封装get方法
// const get = (url, options = {}) => {
//   return request(url, {
//     method: 'GET',
//     data: options
//   })
// }

// //封装post方法
// const post = (url, options = {}) => {
//   return request(url, {
//     method: 'POST',
//     data: options
//   })
// }

// //封装put方法
// const put = (url, options) => {
//   return request(url, {
//     method: 'PUT',
//     data: options
//   })
// }
// //封装remove方法，DELETE关键字不能声明
// const remove = (url, options = {}) => {
//   return request(url, {
//     method: 'DELETE',
//     data: options
//   })
// }

// module.exports = {
//   get,
//   post,
//   put,
//   remove
// }