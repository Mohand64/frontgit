let next  = document.querySelector(".next");
let prev = document.querySelector(".prev");
let images = Array.from(document.querySelectorAll(".img"));
let counter  = 0;
images.forEach((slide , index)=>{
    slide.style.left = `${index * 100}%`;
})


next.addEventListener("click" , function(){
    counter++;
   
    carsoul();

   
})


prev.addEventListener("click" , function(){
    counter--;
    carsoul();

})



function carsoul()
{
    if (counter === images.length)
    {
        counter = 0;
    }

    else if (counter < 0) 
    {
        counter = images.length - 1;
    }
    images.forEach((slide) => {
        slide.style.transform = `translate(-${counter * 100}%)`;
    })
}