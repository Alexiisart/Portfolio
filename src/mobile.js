window.addEventListener("load", function () {
  function checkScreenSize() {
    const ambient = document.querySelector(".ambient");

    if (window.innerWidth <= 1040) {
      ambient.style.display = "block";
    } else {
      ambient.style.display = "none";
    }
  }

  window.addEventListener("resize", checkScreenSize);
  checkScreenSize();
});
