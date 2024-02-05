import {cookies, userInformation} from './websiteEvents.js';
const myCookies = cookies();

function starsReview(){ //star review :)\
    const star_1 = document.getElementById("star_1");
    const star_2 = document.getElementById("star_2");
    const star_3 = document.getElementById("star_3");
    const star_4 = document.getElementById("star_4");
    const star_5 = document.getElementById("star_5");
    
    star_1.addEventListener("click", () => {
        const color1 = getComputedStyle(star_1).color;
        const color2 = getComputedStyle(star_2).color;
    
        if (color1 === 'rgb(255, 204, 0)') {
            if (color2 === 'rgb(255, 204, 0)'){
                star_1.style.color = "#ffcc00";
                star_2.style.color = "#ffcc0068";
                star_3.style.color = "#ffcc0068";
                star_4.style.color = "#ffcc0068";
                star_5.style.color = "#ffcc0068";
            } else {
                star_1.style.color = "#ffcc0068";
            }
        } else {
            star_1.style.color = "#ffcc00";
        }
    });
    
    star_2.addEventListener("click", () => {
        const color2 = getComputedStyle(star_2).color;
        const color3 = getComputedStyle(star_3).color;
    
        if (color2 === 'rgb(255, 204, 0)') {
            if (color3 === 'rgb(255, 204, 0)'){
                star_1.style.color = "#ffcc00";
                star_2.style.color = "#ffcc00";
                star_3.style.color = "#ffcc0068";
                star_4.style.color = "#ffcc0068";
                star_5.style.color = "#ffcc0068";
            } else {
                star_1.style.color = "#ffcc0068";
                star_2.style.color = "#ffcc0068";
            }
        } else {
            star_1.style.color = "#ffcc00";
            star_2.style.color = "#ffcc00";
        }
    });
    
    star_3.addEventListener("click", () => {
        const color3 = getComputedStyle(star_3).color;
        const color4 = getComputedStyle(star_4).color;
    
        if (color3 === 'rgb(255, 204, 0)') {
            if (color4 === 'rgb(255, 204, 0)'){
                star_1.style.color = "#ffcc00";
                star_2.style.color = "#ffcc00";
                star_3.style.color = "#ffcc00";
                star_4.style.color = "#ffcc0068";
                star_5.style.color = "#ffcc0068";
            } else {
                star_1.style.color = "#ffcc0068";
                star_2.style.color = "#ffcc0068";
                star_3.style.color = "#ffcc0068";
            }
        } else {
            star_1.style.color = "#ffcc00";
            star_2.style.color = "#ffcc00";
            star_3.style.color = "#ffcc00";
        }
    });
    
    star_4.addEventListener("click", () => {
        const color4 = getComputedStyle(star_4).color;
        const color5 = getComputedStyle(star_5).color;
    
        if (color4 === 'rgb(255, 204, 0)') {
            if (color5 === 'rgb(255, 204, 0)'){
                star_1.style.color = "#ffcc00";
                star_2.style.color = "#ffcc00";
                star_3.style.color = "#ffcc00";
                star_4.style.color = "#ffcc00";
                star_5.style.color = "#ffcc0068";
            } else {
                star_1.style.color = "#ffcc0068";
                star_2.style.color = "#ffcc0068";
                star_3.style.color = "#ffcc0068";
                star_4.style.color = "#ffcc0068";
            }
        } else {
            star_1.style.color = "#ffcc00";
            star_2.style.color = "#ffcc00";
            star_3.style.color = "#ffcc00";
            star_4.style.color = "#ffcc00";
        }
    });
    
    star_5.addEventListener("click", () => {
        const color5 = getComputedStyle(star_5).color;
    
        if (color5 === 'rgb(255, 204, 0)') {
            star_1.style.color = "#ffcc0068";
            star_2.style.color = "#ffcc0068";
            star_3.style.color = "#ffcc0068";
            star_4.style.color = "#ffcc0068";
            star_5.style.color = "#ffcc0068";
        } else {
            star_1.style.color = "#ffcc00";
            star_2.style.color = "#ffcc00";
            star_3.style.color = "#ffcc00";
            star_4.style.color = "#ffcc00";
            star_5.style.color = "#ffcc00";
        }
    });
};

starsReview(); //end of star review :)

function fixedNav(){ //chat gpt code
    let header = document.getElementById("header");
    let navbar = document.querySelector(".nav");
    
    let headerOffset = header.offsetHeight;
    
    function stickyNavbar() {
      if (window.pageYOffset >= headerOffset) {
        navbar.style.position = "fixed";
        navbar.style.top = "0";
        navbar.style.right = "15%";
        navbar.style.left = "15%";
    
      } else {
        navbar.style.position = "static";
        navbar.style.width = "auto";
      }
    }
    
    window.onscroll = function() {
      stickyNavbar();
    };
}

fixedNav(); //end of chat gpt code


function moveLogo(){ //move the logo
    const logo = document.querySelector(".logo img");
    const x_original = parseFloat(getComputedStyle(logo).left);
    const y_original = parseFloat(getComputedStyle(logo).top);
    
    const moveAmount = 15;

    let x = x_original;
    let y = y_original;
    
    document.addEventListener("keydown", event => {
        event.preventDefault();
    
        switch(event.key){
            case "'":
            case "w":
            case "W":
                y -= moveAmount;
                break;
            case "ד":
            case "s":
            case "S":
                y += moveAmount;
                break;
            case "ש":
            case "a":
            case "A":
                x -= moveAmount;
                break;
            case "ג":
            case "d":
            case "D":
                x += moveAmount;
                break;
            case "כ":
            case "f":
            case "F":
                x = x_original;
                y = y_original;
                break
            }
    
            logo.style.top = `${y}px`;
            logo.style.left = `${x}px`;
    });
};

moveLogo();

function darkMode(){
    let isLightMode;
    const mainColor = document.querySelector("main");
    const navColor = document.querySelector("nav");
    const footerColor = document.querySelector("footer");
    const rateColor = document.querySelector("footer .rate_us");
    const activeColor = document.querySelector("nav .active");
    const headerImg = document.querySelector("header .headerImg img");
    const contactInfoColor = document.querySelectorAll("footer .contact_info"); 
    const iconColor = document.querySelectorAll("footer .icon");
    const navBarHoverColor = document.querySelectorAll("nav .hoverNavBarLight");
    const eventsHelpUser = document.querySelector(".eventsHelpUser");
    const eventsHelpUserIcons = document.querySelectorAll(".eventsHelpUser i");

    function makeDark(timeToDo){
        mainColor.style.backgroundColor = "#262930";
        mainColor.style.transition = `${timeToDo}s`;

        navColor.style.backgroundColor = "#494749";
        navColor.style.transition = `${timeToDo}s`;

        footerColor.style.backgroundColor = "#494749";
        footerColor.style.transition = `${timeToDo}s`;

        rateColor.style.color = "white"
        rateColor.style.textShadow= "0 0 6px black";
        rateColor.style.transition = `${timeToDo}s`;

        activeColor.style.backgroundColor = "#494749";
        activeColor.style.transition = `${timeToDo}s`;

        eventsHelpUser.style.color = "white";
        eventsHelpUser.style.backgroundColor = "#262930";
        eventsHelpUser.style.transition = `${timeToDo}s`;

        headerImg.style.filter = "brightness(80%)";
        headerImg.style.transition = `${timeToDo}s`;

        eventsHelpUserIcons.forEach(element => {
            element.style.color = "black";
            element.style.backgroundColor = "white";
            element.style.transition = `${timeToDo}s`;
        });

        iconColor.forEach(element => {
            element.style.color = "#979797";
            element.style.transition = `${timeToDo}s`;
        });

        contactInfoColor.forEach(element => {
            element.style.color = "white";
            element.style.transition = `${timeToDo}s`;
        });

        navBarHoverColor.forEach(element => {
            element.classList.replace("hoverNavBarLight", "hoverNavBarDark");
        });

        isLightMode = false;

        myCookies.setCookie("mode", "Dark", 1);
    };

    function resetTime(timeToDo){
        mainColor.style.transition = `${timeToDo}s`;
        navColor.style.transition = `${timeToDo}s`;
        footerColor.style.transition = `${timeToDo}s`;
        rateColor.style.transition = `${timeToDo}s`;
        activeColor.style.transition = `${timeToDo}s`;
        eventsHelpUser.style.transition = `${timeToDo}s`;
        headerImg.style.transition = `${timeToDo}s`;
        eventsHelpUserIcons.forEach(element => {
            element.style.transition = `${timeToDo}s`;
        });
        iconColor.forEach(element => {
            element.style.transition = `${timeToDo}s`;
        });
        contactInfoColor.forEach(element => {
            element.style.transition = `${timeToDo}s`;
        });   
    }

    function makeLight(timeToDo){
        mainColor.style.backgroundColor = "#dfe4ea";
        mainColor.style.transition = `${timeToDo}s`;

        navColor.style.backgroundColor = "#6a6262";
        navColor.style.transition = `${timeToDo}s`;

        footerColor.style.backgroundColor = "#6a6262";
        footerColor.style.transition = `${timeToDo}s`;

        activeColor.style.backgroundColor = "#6a6262";
        activeColor.style.transition = `${timeToDo}s`;

        rateColor.style.color = "black";
        rateColor.style.textShadow= "0 0 8px white";
        rateColor.style.transition = `${timeToDo}s`;

        eventsHelpUser.style.color = "black";
        eventsHelpUser.style.backgroundColor = "white";
        eventsHelpUser.style.transition = `${timeToDo}s`;

        headerImg.style.filter = "brightness(100%)";
        headerImg.style.transition = `${timeToDo}s`;

        eventsHelpUserIcons.forEach(element => {
            if(element !== eventsHelpUserIcons[0]){
                element.style.color = "black";
                element.style.backgroundColor = "rgb(184, 182, 182)";
                element.style.transition = `${timeToDo}s`;                
            } else {
                element.style.color = "black";
                element.style.backgroundColor = "white";
                element.style.transition = `${timeToDo}s`;
            };
        });         


        iconColor.forEach(element => {
            element.style.color = "#292b2e";
            element.style.transition = `${timeToDo}s`;
        });

        contactInfoColor.forEach(element => {
            element.style.color = "black";
            element.style.transition = `${timeToDo}s`;
        });

        navBarHoverColor.forEach(element => {
            element.classList.replace("hoverNavBarDark", "hoverNavBarLight");
        });

        isLightMode = true;

        myCookies.setCookie("mode", "Light", 1);
    };

    if(myCookies.getCookie("mode") == "Light"){
        myCookies.setCookie("mode", "Light", 1000);
        isLightMode = true;
    } else {
        makeDark(0);
    };

    document.addEventListener("keydown", event => {
        if(((event.key === "ך") || (event.key === "l")  || (event.key === "L")) || event.key == "16"){
            if(isLightMode){
                makeDark(2);
                setTimeout(() => resetTime(0), 4000);
            } else {
                makeLight(2);
                setTimeout(() => resetTime(0), 4000);
            }
        };
    });
};

darkMode();

userInformation();
