const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
    if  (searchBox.style.top == '70px') {
        searchBox.style.top = '20px';
        searchBox.style.pointerEvents = 'none';
    }   else {
        searchBox.style.top = '70px';
        searchBox.style.pointerEvents = 'auto';
    }
});

menuIcon.addEventListener('click', function () {
    if  (slideoutMenu.style.opacity == '1') {
        slideoutMenu.style.opacity = '0';
        slideoutMenu.style.pointerEvents = 'none';
    }   else {
        slideoutMenu.style.opacity = '1';
        slideoutMenu.style.pointerEvents = 'auto';
    }
    })


// The search 

const f = document.getElementById('form');
const q = document.getElementById('query');
const google = 'https://www.google.com/search?q=site%3A+'; // ??
const site = 'https://jeffersonk.netlify.app/';

// The function runs every time presses the search button
function submitted(event) {
    event.preventDefault();
    const url = google + site + '+' + q.value;
    const win = window.open(url, '_blank');
    win.focus();
}

// Listener -> triggered by clicking the submit button then runs the function above
f.addEventListener('submit', submitted);