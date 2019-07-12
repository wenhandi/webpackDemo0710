// 声明模块所需的依赖，webpack能够利用这些信息构建依赖图，然后使用图生成一个优化过的，会以正确顺序执行的bundle
import _ from 'lodash'
import printMe from './print'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button')
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    
    btn.innerHTML = "click and console";
    btn.onclick = printMe;
    

    element.appendChild(btn)


    return element;
  }
  
  document.body.appendChild(component());

  if(module.hot){
    module.hot.accept('./print.js', function(){
      console.log("接收更新的printMe模块")
      printMe()
    })
  }