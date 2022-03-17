const image = document.getElementById('images')
const next = document.getElementById('nex')
const preveus = document.getElementById('prev')

let photos = ['image/image.jpg', 'image/image2.jpg', 
'image/image3.jpg', 'image/image4.jpg', 'image/image5.jpg']


count = 0
function nexts(){
    count++
    if(count >= photos.length){
        count =  0
        image.src = photos[count]
    }else{
        image.src = photos[count]
    }
}

function preve(){
    count--
    if(count <= 0){
        count = photos.length - 1
        image.src = photos[count]
    }else{
        image.src = photos[count]
    }
}

next.addEventListener('click', nexts)
preveus.addEventListener('click', preve)