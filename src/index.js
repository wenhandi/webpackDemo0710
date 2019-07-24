
import _ from 'lodash'

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['hello', 'webpack2'], ' ')

  return element
}

document.body.appendChild(component())


if('serviceWorker' in navigator){
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(regist => {
      console.log('SW registered', regist)
    }).catch(registError => {
      console.log('SW registration failed', registError)
    })
  })
}





