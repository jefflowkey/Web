// Pre-loader 

var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    loader.style.display = "none";
})

// Menu icon

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

// Time (dynamic)

var year = new Date();
document.getElementById("yearFooter").innerHTML = year.getFullYear();


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

// Sidebar script

let arrow = document.querySelectorAll(".arrow");
    for (var i = 0; i < arrow.length; i++) {
        arrow[i].addEventListener("click", (e) => {
            let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
                arrowParent.classList.toggle("showMenu");
            });
            }
        
        let sidebar = document.querySelector(".sidebar");
        let sidebarBtn = document.querySelector(".bx-menu");
        console.log(sidebarBtn);

        /* sidebarBtn.addEventListener("click", () => {
            sidebar.classList.toggle("close");
        }); */
            
        $(function () {
        /* console.log("width: "+ document.body.clientWidth); */
            
        resizeScreen();
        $(window).resize(function(){
            resizeScreen();
        });
        $('.bx-menu').click(function(){
        
        //.close，.small-screen .close，
        if(document.body.clientWidth > 400){
        $('.sidebar').toggleClass('close');
        }else{
        $('.sidebar').toggleClass('small-screen');
        }
        });
            
        function resizeScreen() {
        // .categoriesclose，.categories.close
            if(document.body.clientWidth < 400){
                $('.sidebar').addClass('close');
            }else{
                $('.sidebar').removeClass('close');
            }
            }
            });