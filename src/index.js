import _ from 'lodash'

function component() {
  var element = document.createElement('div')
  var btn = document.createElement('button')
  var br = document.createElement('br')

  btn.innerHTML = '点击按钮查看控制台'

  element.appendChild(br)
  element.appendChild(btn)

  btn.onclick = () => import(/* webpackChunckName: "print"*/'./print').then(module => {
    module.default()
  })

  return element

}

document.body.appendChild(component())