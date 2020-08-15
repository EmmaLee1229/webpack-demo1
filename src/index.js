import './x.scss'
import './index.less'
import './z.styl'
console.log('hi')
const div = document.getElementById('app')
div.innerHTML = `
<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597507429824&di=a3435a7de98879218d6b4579fc2c0c93&imgtype=0&src=http%3A%2F%2Fn.sinaimg.cn%2Ftranslate%2F20170512%2FZBXs-fyfeutp7388354.jpg">
`
const button = document.createElement('button')
button.innerText = 'lazy'
div.appendChild(button)
button.onclick=()=>{
    const promise = import('./lazy.js')
    promise.then((module)=>{
        module.default()
    },()=>{})
}