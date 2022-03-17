let button = document.getElementById('btn')
let button1 = document.getElementById('btn1')
let image = document.getElementById('img')



function imageBtn(){
    image.src = ('image/image.jpg')
}
function imageBtn1 (){
    image.src = ('image/image1.jpg')
}

button.addEventListener('click', imageBtn)
button1.addEventListener('click', imageBtn1)
