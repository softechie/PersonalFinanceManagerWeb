import moment from 'moment'
import { createBrowserHistory } from 'history';

const getFormatedDate = (date) => {
  return moment(new Date(date)).format('ll')
}

const getFormatedDateForApi = (date) =>{
  return moment(new Date(date)).format()
}
 
const history = createBrowserHistory();

export {
  getFormatedDate,
  getFormatedDateForApi,
  history
}