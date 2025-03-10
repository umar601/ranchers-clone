let hero=document.querySelector(".herosection")

let forward=document.querySelector("#forward")

let backword=document.querySelector("#backword")

let count=0

let current = "first.webp"; // Initialize to the current background image

function call() {
     
    if (current === "first.webp") {
        hero.style.backgroundImage = 'url("second.webp")';
        current = "second.webp";
    } else if (current === "second.webp") {
        hero.style.backgroundImage = 'url("first.webp")';
        current = "first.webp";
    }
}



 forward.onclick=function(){

call()

}

backword.onclick=function(){

    call()



}



let firstcard=document.querySelector(".card1")
let secondcard=document.querySelector(".card2")
let thirdcard=document.querySelector(".card3")


let firstimage=document.querySelector("#im1")
let secondimage=document.querySelector("#im2")
let thirdimage=document.querySelector("#im3")
let fourthimage=document.querySelector("#im4")



let place=document.querySelector("#count")




firstcard.onclick=function(){

    count++
place.textContent=count

}

secondcard.onclick=function(){

    count++
place.textContent=count

}
thirdcard.onclick=function(){

    count++
place.textContent=count

}

firstimage.onclick=function(){

    count++
place.textContent=count

}

secondimage.onclick=function(){

    count++
place.textContent=count

}

thirdimage.onclick=function(){

    count++
place.textContent=count

}

fourthimage.onclick=function(){

    count++
place.textContent=count

}



        
        
        firstcard.addEventListener("click", function(event) {

            event.preventDefault();
    
        });


        secondcard.addEventListener("click", function(event) {

            event.preventDefault();
    
        });


        thirdcard.addEventListener("click", function(event) {

            event.preventDefault();
    
        });



        firstimage.addEventListener("click", function(event) {

            event.preventDefault();
    
        });


        secondimage.addEventListener("click", function(event) {

            event.preventDefault();
    
        });


        thirdimage.addEventListener("click", function(event) {

            event.preventDefault();
    
        });


        fourthimage.addEventListener("click", function(event) {

            event.preventDefault();
    
        });