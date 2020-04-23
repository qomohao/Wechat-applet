const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
  
// //页面跳转
// const goToPage=(e)=> {
//   let url = e.currentTarget.dataset.url;
//   console.log("url===",url)
//   wx.navigateTo({
//     url: url
//   })
// }
const add = (val)=>{
  console.log(1111)
  return val*2
}
 
module.exports = {
  formatTime: formatTime,
  // goToPage:goToPage ,
  add:add
}
