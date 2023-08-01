document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("navbar_toggle_button");
    const navbar = document.getElementById("navbar");
    const themeSwitcherTwo = document.getElementById('themeSwitcherTwo');
    const slider = document.querySelector('.slider');
    const dot = document.querySelector('.dot');
  
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
    themeSwitcherTwo.addEventListener('change', function() {
      if (this.checked) {
        slider.style.backgroundColor = '#444';
        dot.style.transform = 'translateX(100%)';
      } else {
        slider.style.backgroundColor = '#CCCCCE';
        dot.style.transform = 'translateX(0)';
      }
    });
  });
  