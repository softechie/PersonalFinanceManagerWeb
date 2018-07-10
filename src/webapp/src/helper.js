import moment from 'moment'

const getFormatedDate = (date) => {
  return moment(new Date(date)).format('ll')
}

const getFormatedDateForApi = (date) =>{
  return moment(new Date(date)).format()
}

export {
  getFormatedDate, getFormatedDateForApi
}