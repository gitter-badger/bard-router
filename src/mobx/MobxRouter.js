import * as mobx from 'mobx'
import Router from '../Router'
const {observable, action, decorate} = mobx

export default decorate(Router, {
  route: observable,
  params: observable.ref,
  history: observable.ref,
  goTo: action.bound,
  set: action.bound,
})
