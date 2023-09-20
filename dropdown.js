document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const menuList = document.getElementById("menuList");
  
    menuButton.addEventListener("click", function() {
      if (menuList.style.display === "block") {
        menuList.style.display = "none";
      } else {
        menuList.style.display = "block";
      }
    });
  });