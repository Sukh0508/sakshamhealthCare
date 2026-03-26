document.addEventListener("DOMContentLoaded",function () {
    let readbtn = document.querySelectorAll(".btn-more");
// let datashow = document.querySelector(".hide-data")
readbtn.forEach(read=>{
    read.addEventListener('click',function (p) {
        let secl = read.getAttribute("data-target");
        let sshow = document.getElementById(secl)
      
        if(sshow.style.display === "none"){
        sshow.style.display  = "block";
         sshow.style.cursor = "pointer"
            // read.className= "fas fa-book-reader"
            // read.style.font = "18px"
            // sshow.style.border = "2px solid  #B48C2C";
            // sshow.style.padding = "10px 20px";
            // sshow.style.color = " #B48C2C";
            // sshow.style.width = "25%"
            // sshow.style.borderRadius = "20px"/
        }else{
            sshow.style.display = "none";
        
           

        }
        
    })
})
    
})


document.addEventListener("DOMContentLoaded",function () {
    
let selectitem = document.querySelectorAll(".show")


selectitem.forEach(item=>{
    item.addEventListener('click',function (p) {
        console.log(p)


        let current = item.closest(".que-con").querySelector(".answer")
        
        if(current.style.display === "block" ){
            current.style.display = "none";
        }else{
            current.style.display= "block";
        }
         item.classList.toggle("ri-add-line");
      item.classList.toggle("ri-subtract-line");
    })

})    
})


let navopen = document.querySelector(".mobile-menu")
let navbar = document.querySelector(".nav-links")

navopen.addEventListener('click',function (p) {
    console.log(p)
    navbar.classList.toggle("active")
})