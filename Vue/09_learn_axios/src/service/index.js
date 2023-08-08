import axios from 'axios'

class CCRequest {
  constructor(baseURL, timeout=10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  request(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.request({
      ...config, 
      method: "GET"
    })
  }

  post(config) {
    return this.request({
      ...config, 
      methon: "POST"
    })
  }
}

const hmajax = new CCRequest("http://hmajax.itheima.net/api")

export default { hmajax } 