import axios from 'axios';
const service = axios.create({
    // 基础路径url配置
    // baseURL: 'http://localhost:8010',
    //5秒未响应提示
    timeout: 5000,
})

export default service;