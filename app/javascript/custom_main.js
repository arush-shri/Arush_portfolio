document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("navbar_toggle_button");
    const navbar = document.getElementById("navbar");
  
  const toggle_nav = () => {
    navbar.classList.toggle("hidden");
  };
  
  toggleButton.addEventListener("click", toggle_nav);
  
    window.onresize = () => {
      let viewportWidth = window.innerWidth;
      if (viewportWidth > 1050) {
        navbar.classList.add("hidden");
      }
    };
  });
  