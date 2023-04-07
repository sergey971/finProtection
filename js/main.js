// Выпадающее меню
var dropdown = document.getElementById("dropdown");
var dropdownContent = document.getElementById("dropdown-content");
dropdown.addEventListener("mouseover", function() {
  dropdownContent.style.display = "block";
});
dropdown.addEventListener("mouseout", function() {
  dropdownContent.style.display = "none";
});
