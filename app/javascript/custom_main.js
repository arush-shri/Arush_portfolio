document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("navabr_toggle");
    const navbar = document.getElementById("navbar");
  
  const toggle_nav = () => {
    navbar.classList.toggle("hidden");
    console.log("click");
  };
  
  toggleButton.addEventListener("click", toggle_nav);
  
    window.onresize = () => {
      let viewportWidth = window.innerWidth;
      if (viewportWidth > 1050) {
        navbar.classList.add("hidden");
      }
      console.log("resize")
    };
  });
  