import axios from './api'
import store from '../store'
import * as actions from '../actions'

class API {
  //GET
  static get = (url) => {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(res => resolve(res))
        .catch(err => {
          if(err.response) {
            if(err.response.data.message)
              store.dispatch(actions.dangerToast(err.response.data.message))
            else
              store.dispatch(actions.dangerToast('Error occurred while fetching data'))
          } else {
            store.dispatch(actions.dangerToast('Error occurred while fetching data'))
          }

          reject(err)
        })
    })
  }

  //POST
  static post = (url, payload) => {
    return new Promise((resolve, reject) => {
      axios.post(url, payload)
        .then(res => {
          if(res.status && res.data.message)
            store.dispatch(actions.successToast(res.data.message))

          resolve(res)
        })
        .catch(err => {
          if(err.response) {
            if(err.response.data.message)
              store.dispatch(actions.dangerToast(err.response.data.message))
            else
              store.dispatch(actions.dangerToast('Error occurred while fetching data'))
          } else {
            store.dispatch(actions.dangerToast('Error occurred while fetching data'))
          }

          reject(err)
        })
    })
  }

  //POST
  static put = (url, payload) => {
    return new Promise((resolve, reject) => {
      axios.put(url, payload)
        .then(res => {
          if(res.status && res.data.message)
            store.dispatch(actions.successToast(res.data.message))

          resolve(res)
        })
        .catch(err => {
          if(err.response) {
            if(err.response.data.message)
              store.dispatch(actions.dangerToast(err.response.data.message))
            else
              store.dispatch(actions.dangerToast('Error occurred while fetching data'))
          } else {
            store.dispatch(actions.dangerToast('Error occurred while fetching data'))
          }

          reject(err)
        })
    })
  }

  //POST
  static delete = (url) => {
    return new Promise((resolve, reject) => {
      axios.delete(url)
        .then(res => {
          if(res.status && res.data.message)
            store.dispatch(actions.successToast(res.data.message))
          else
            store.dispatch(actions.successToast('Successfully deleted'))
          
          resolve(res)
        })
        .catch(err => {
          if(err.response) {
            if(err.response.data.message)
              store.dispatch(actions.dangerToast(err.response.data.message))
            else
              store.dispatch(actions.dangerToast('Error occurred while fetching data'))
          } else {
            store.dispatch(actions.dangerToast('Error occurred while fetching data'))
          }

          reject(err)
        })
    })
  }
}

export default API