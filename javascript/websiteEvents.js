export function cookies(){
    function setCookie(name, value, daysToLive){
        const date = new Date();
        date.setTime(date.getTime() +  (daysToLive * 24 * 60 * 60 * 1000));
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`
    };

    function deleteCookie(name){
        setCookie(name, null, null);
    };

    function getCookie(name){
        const cookiesString = decodeURIComponent(document.cookie);
        const cookiesArray = cookiesString.split("; ");
        let result = null;
        
        cookiesArray.forEach(element => {
            if(element.indexOf(name) == 0){
                result = element.substring(name.length + 1);
            }
        });
        return result
    }

    return {setCookie, deleteCookie, getCookie};
};
    
export function userInformation(){
    const dialog = document.querySelector(".eventsHelpUser");
    const exitIcon = document.querySelector(".eventsHelpUser .exitIcon");

    let isOpen = false;
    document.addEventListener("keydown", event => {
        if((event.key === "ן") || (event.key === "i") || (event.key === "I")){
            if(isOpen){
                dialog.close();
                dialog.style.display = "none";
                isOpen = false;
            } else {
                dialog.showModal();
                dialog.style.display = "grid";
                isOpen = true;
            }
        }; 
    });

    exitIcon.addEventListener("click", () => {
        dialog.close();
        dialog.style.display = "none";
        isOpen = true;
    });
}

function checkSignInCookies(){
    const myCookies = cookies();
    console.log(document.cookie);
    myCookies.deleteCookie("isSig")
    if(myCookies.getCookie("isSignIn") == undefined){
        myCookies.setCookie("isSignIn", "false", 1000);
    };
    
    if(myCookies.getCookie("isSignIn") == "false"){
        console.log("you dont have cookies, sign in");
    } else{
        console.log("you have cookies");
    }
}

checkSignInCookies();