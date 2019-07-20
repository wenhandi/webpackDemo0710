async function getComponent(){
  var element = document.createElement("div");

  const _ = await import(/* webpackChunkName: "loadsh" */ 'lodash')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')

  return element
}

getComponent().then(com => {
  document.body.appendChild(com)
})