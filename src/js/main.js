(function (){
    const BurgerMenu = {
        innit(){
            document.documentElement.classList.add("js-enabled");
            this.eMain = document.querySelector("main");
            document.querySelector(".nav-button").addEventListener("click",(event)=>{
                this.eMain.classList.toggle("is-opened");
            });
        }
    }
    BurgerMenu.innit();
})();
