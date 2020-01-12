/**
 * 基于axios 的请求模块
 */

import axios from 'axios'
import jsonBig from 'json-bigint'

// axios.create 方法创建一个和axios本身功能一样的一个对象
const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn/' // 基础路径
})

// axios 开放了定制转换后端返回数据的API
// data 就是后端返回的原始数据
request.defaults.transformResponse = [function (data) {
  try {
    // 现在我们定制使用 json-bigint 来帮我们处理转换原始的JSON 格式字符串
    // 这个放啊发类似于 JSON.parse,只不过他能把数据中的超出js安全范围的数字给处理成正确的
    // 它内部有自己的算法，他会把大数字转为一个对象，我们在使用的时候把对象.toString（）就能得到字符串形式的 id了
    // 如果转换成功则返回成功的结果给请求使用
    // 如果转换失败则进入catch，返回一个空对象
    return jsonBig.parse(data)

    // 他默认是这样的
    // return JSON.parse(data)
  } catch (err) {
    console.log('转换失败')
    return {}
  }
}]
// 请求拦截器

// 响应拦截器

// 导出
export default request
