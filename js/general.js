// Loading
$(document).ready(function() {
  setTimeout(function(){
      $('.loading').addClass('loaded');
      $(".fluid-container").removeClass('disable')
  }, 3500);
});

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
  $("main").toggleClass('deactive');
  $("footer").toggleClass('deactive');
  $("header").toggleClass('move')
}