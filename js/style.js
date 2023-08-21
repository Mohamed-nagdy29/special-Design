document.querySelector(".icon i").onclick = function(){
    this.classList.toggle("fa-spin")

    document.querySelector(".seeting").classList.toggle("open")

}

const colorli= document.querySelectorAll(".colors li");

colorli.forEach(li=>{
    li.addEventListener("click", (e)=>{
        document.documentElement.style.setProperty("--main-color", e.target.dataset.color)
    })
})

//switch back ground

let bacgroudoption= true;

let bacgroudintraval;


document.querySelectorAll(".random-back span").forEach(span=>{
    span.addEventListener("click", (e)=>{

        e.target.parentElement.querySelectorAll(".active").forEach(Element =>{
            Element.classList.remove("active")
        })

        e.target.classList.add("active")

        if(e.target.dataset.bacgroud==="yes"){

            bacgroudoption= true;
            randomiz()


        }else{
            bacgroudoption= false;
            clearInterval(bacgroudintraval)


        }
    })
})




let ladingpage=document.querySelector(".lading-page");

let imgArry=["5.jpg", "2.jpg","pexels-photo-633409.webp", "pexels-photo-792345.webp"];



function randomiz(){

    if(bacgroudoption===true){
        bacgroudintraval= setInterval(() => {
            //random number 
            let randomNumber= Math.floor(Math.random() * imgArry.length) 
        // change background
            ladingpage.style.backgroundImage='url("imgs/'+ imgArry[randomNumber] +'")'
        
        
        }, 3000);
        
    }
}


//skillllls

let ourskils=document.querySelector(".skills")
window.onscroll=function(){
    
    let skillsoffsettop = ourskils.offsetTop;

    let skillsouterheight =ourskils.offsetHeight;

    let windowheight =this.innerHeight;

    let windowscrolltop = this.pageYOffset;

    if(windowscrolltop> (skillsoffsettop+ skillsouterheight - windowheight)){

        let allskills = document.querySelectorAll(".skills-box .skills-progras span")

        allskills.forEach(skill =>{

            skill.style.width = skill.dataset.progras;


        })
    }

}

//gallery
let ourgallery = document.querySelectorAll(".gallary img")

ourgallery.forEach(img =>{
    img.addEventListener("click", (e) =>{
        //creat overly علشان الخلفيه 
        let overlay = document.createElement("div")
        overlay.className="pop-over"
        //append overlay in body علشان الضيف العنصر في الصفحه
        document.body.appendChild(overlay)

        //creat popbox
        let popbox =document.createElement("div")
        popbox.className="pop-box"

        if(img.alt !==null){
            //creat heading
            let imghead = document.createElement("h3")
            //creat text
            let imgtext = document.createTextNode(img.alt)
            //append  text in head
            imghead.appendChild(imgtext)
            //append head in popbox 
            popbox.appendChild(imghead)
        }

        //creat img
        let popimage=document.createElement("img")
        //change src
        popimage.src=img.src
        //appendedimage in box
        popbox.appendChild(popimage)
        //add popbox in body
        document.body.appendChild(popbox)

        //creat close span

        let closeButton = document.createElement("span")

        //creat text close

        let buttontext = document.createTextNode("X")
        //add buttontext in closeButton
        closeButton.appendChild(buttontext)

        //add class name in closeButton
        closeButton.className = "closeButton"

        //add closeButton in popbox علشتان تظهر في الشاشه

        popbox.appendChild(closeButton)



    })
})
//close pop box

document.addEventListener("click", function(e){
    if(e.target.className=="closeButton"){
        //remove cuttent   علشان تشيل البوب بس مش هتشيل الover
        e.target.parentNode.remove()

        //remove overlr
        document.querySelector(".pop-over").remove()

    }
})

let togglebtn = document.querySelector(".mennu")
let tlinks = document.querySelector(".links")

togglebtn.onclick = function(){
    // add and remove الشكل العملينوا
    this.classList.toggle("menu-active")
//add the list
    tlinks.classList.toggle("open")

}
// click any where close menuu
document.addEventListener('click', (e)=>{

    if(e.target !== togglebtn && e.target !== tlinks){

            // add and remove الشكل العملينوا
            togglebtn.classList.toggle("menu-active")
    //add the list
        tlinks.classList.toggle("open")
    

    }

})
