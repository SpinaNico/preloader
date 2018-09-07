export function Hide(){
    var elm = document.getElementsByClassName("preloader")[0];
    elm.className = elm.className + " hide";
    setTimeout(() => { elm.style.display = "none" }, 600);
}

export function Show() {
    var elm = document.getElementsByClassName("preloader")[0];
    elm.className = "preloader";

}