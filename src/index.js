// 声明模块所需的依赖，webpack能够利用这些信息构建依赖图，然后使用图生成一个优化过的，会以正确顺序执行的bundle
import _ from 'lodash'
import './style.css'

function component() {
    var element = document.createElement('div');
  
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    return element;
  }
  
  document.body.appendChild(component());