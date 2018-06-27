import moment from 'moment'

const getFormatedDate = (date) => {
  return moment(new Date(date)).format('ll')
}

export {
  getFormatedDate
}