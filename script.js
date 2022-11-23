const body = document.querySelector('body'),
      sidebar = body.querySelector('nav'),
      toggle = body.querySelector(".toggle"),
      searchBtn = body.querySelector(".search-box"),
      modeSwitch = body.querySelector(".toggle-switch"),
      modeText = body.querySelector(".mode-text");

toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");
})

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }
    else{
        modeText.innerText = "Dark mode";
    }
});

console.log(localStorage)


const container = document.getElementById('twitter');

// This function will execute itself when the script is loaded
(function(){
    // Then set the 'data-theme' attribute to whatever is in localstorage
    container.setAttribute('data-theme', localStorage.getItem('theme'));    
})();

function darkTwitter() {

    // Check what is the current theme and get the opposite one
    var targetTheme = container.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';

    // Set the attribute 'data-theme' to the targetTheme
    container.setAttribute('data-theme', targetTheme);

    // Save the targetTheme to the localstorage
    localStorage.setItem('theme', targetTheme);
}
