//axios的二次封装
// import { Indicator } from "mint-ui";
import service from './service';


const $axios = {
    //默认值
    common: {
        method: 'get',
        data: {},
        params: {},
        headers: {}
    },
    /**
     * methods: 请求方式
     * url 请求地址 
     * params 请求参数
     */
    async get(option) {
        option.method = option.method || this.common.method;
        option.data = option.data || this.common.data;
        option.params = option.params || this.common.params;
        option.headers = option.headers || this.common.headers;

        // Indicator.open('加载中...');
        const config = {
            url: process.env.VUE_APP_ENV === 'dev' ? option.url : process.env.VUE_APP_BASE_API + option.url,
            // url: option.url,
            method: 'GET',
            headers: option.headers
        }
        //如果传了参数
        if (option.params) config.params = option.params;
        const data = await service(config);
        // setTimeout(() => {
        //     Indicator.close();
        // }, 500);
        return data.data.data;
    },

    async post(option) {
        option.method = option.method || this.common.method;
        option.data = option.data || this.common.data;
        option.params = option.params || this.common.params;
        option.headers = option.headers || this.common.headers;

        //判断是否携带token,不携带就跳转到登录页
        // if (option.headers.token) {
        //     option.headers.token = store.state.user.token;
        //     if (!option.headers.token) {
        //         router.push('/login');
        //     }
        // }
        // Indicator.open('加载中...');
        const config = {
            url: process.env.VUE_APP_ENV === 'dev' ? option.url : process.env.VUE_APP_BASE_API + option.url,
            // url: option.url,
            method: 'POST',
            headers: option.headers
        }

        console.log(option.url);
        //如果传了参数
        if (option.data) config.data = option.data;
        const data = await service(config);

        // setTimeout(() => {
        //     Indicator.close();
        // }, 500);
        return data.data;
    }
}

export default $axios



