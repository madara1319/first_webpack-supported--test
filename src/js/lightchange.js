import '../scss/modules/lightchange.scss';

// document.documentElement.style.setProperty('--text-color','hotpink');

// document.documentElement.style.setProperty('--small-padding','15px')

let Dark=false;

const isDark = () => {
    if (Dark==false){
        const lightbutton = document.querySelector(".isDark--js");
        lightbutton.innerHTML='Light Mode 🌅 ';
        document.documentElement.style.setProperty('--background-color','darkblue');
        document.documentElement.style.setProperty('--text-color','lightpink');
        Dark=true;
    }
    else{
        const lightbutton = document.querySelector(".isDark--js");
        lightbutton.innerHTML='Dark Mode 🦇';
        document.documentElement.style.setProperty('--background-color','lightpink');
        document.documentElement.style.setProperty('--text-color','rgb(59, 1, 59)');
        Dark=false;
    }
    }


const button = document.querySelector(".isDark--js")

button.addEventListener("click",isDark);
