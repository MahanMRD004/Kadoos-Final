// Loading
$(document).ready(function() {
  setTimeout(function(){
      $('.loading').addClass('loaded');
      $(".fluid-container").removeClass('disable')
  }, 3500);
});

//Side Bar

const toggleSideBar = document.getElementById("toggleSidebar")
const sideBar = document.querySelector(".sideBar")

toggleSideBar.addEventListener("click",function() {
  $(sideBar).toggleClass("active")
})

// Search

const searchButton = document.getElementById("searchBtn");
const searchBox = document.querySelector(".searchBox");
const searchIcon = document.getElementById("searchIcon");

searchButton.addEventListener("click", showSearch);

function showSearch() {
  if ($(searchIcon).attr("name") === "search") {
    $(searchIcon).attr("name","close-outline")
  }
  else {
    $(searchIcon).attr("name","search")
  }
  $(searchBox).toggleClass('active');
}

const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

$(leftBtn).click(function(){
  var scrollValue = $(".cardContainer").scrollLeft() - 325;
  $(".cardContainer").scrollLeft(scrollValue);
});

$(rightBtn).click(function(){
  var scrollValue = $(".cardContainer").scrollLeft() + 325;
  $(".cardContainer").scrollLeft(scrollValue);
});



