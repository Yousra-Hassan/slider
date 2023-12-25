var imgs = Array.from(document.querySelectorAll(".img-item"))
var imgIndex = 0

for(var i = 0 ; i<imgs.length ; i++)
{
    imgs[i].addEventListener("click" , function(e){
        imgIndex = imgs.indexOf(e.target)
        var imgSrc = e.target.getAttribute("src")

        document.querySelector("#lightboxcontainer").style.display = "flex"
        document.querySelector("#lightboxitem").style.backgroundImage = `url(${imgSrc})`
    })
   
}


document.querySelector("#close").addEventListener("click" , close )
function close(){
    document.querySelector("#lightboxcontainer").style.display = "none"

}

document.querySelector("#next").addEventListener("click" ,next )
function next(){
    imgIndex++
    if(imgIndex == imgs.length)
    {
        imgIndex = 0
    }
   var imgSrc = imgs[imgIndex].getAttribute("src")
   document.querySelector("#lightboxitem").style.backgroundImage = `url(${imgSrc})`
}


document.querySelector("#prev").addEventListener("click" , prev )
function prev(){
    imgIndex--
    if(imgIndex == -1)
    {
        imgIndex =imgs.length -1
    }
   var imgSrc = imgs[imgIndex].getAttribute("src")
   document.querySelector("#lightboxitem").style.backgroundImage = `url(${imgSrc})`
}



document.body.addEventListener("keyup" , function(e) {
    console.log(e);

    if(e.code == "ArrowRight")
    {
        next()
    }

   else if(e.code == "ArrowLeft")
    {
        prev()
    }

   else if(e.code == "Escape")
    {
        close()
    }
})