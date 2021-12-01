const changeImage1 = document.getElementById("changeImg1");
const changeImage2 = document.getElementById("changeImg2");
const changeImage3 = document.getElementById("changeImg3");
const changeImage4 = document.getElementById("changeImg4");
const changeImage5 = document.getElementById("changeImg5");
const thumbnail = document.getElementById("thumb")


changeImage1.addEventListener("click", function(){
    $(thumbnail).attr("src","files/products/laptop/1-1.jpg")
});
changeImage2.addEventListener("click", function(){
    $(thumbnail).attr("src","files/products/laptop/1-2.jpg")
});
changeImage3.addEventListener("click", function(){
    $(thumbnail).attr("src","files/products/laptop/1-3.jpg")
});
changeImage4.addEventListener("click", function(){
    $(thumbnail).attr("src","files/products/laptop/1-4.jpg")
});
changeImage5.addEventListener("click", function(){
    $(thumbnail).attr("src","files/products/laptop/1-5.jpg")
});
