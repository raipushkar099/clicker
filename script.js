// let div = document.querySelector('div')
// setInterval(()=>{
    // let time = new Date();
    // console.log(time.toLocaleTimeString())
    // div.textContent = time.toLocaleTimeString()
// },1000)

const div = document.getElementById('time')
setInterval(()=>{
    let time=new Date();
    div.textContent=time.toLocaleTimeString()

},1000)