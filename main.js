function contActive() {
    var selector=document.getElementById("cont-colors");
    var selector2=document.getElementById("btn-elemento")
    selector.classList.toggle("active");
    selector2.classList.toggle("active");
}
function bgpurple() {
    var selector=document.getElementById("body");
    selector.classList.toggle("purple");
}
function bgverde() {
    var selector=document.getElementById("body");
    selector.classList.toggle("verde");
}
function bgfucsia() {
    var selector=document.getElementById("body");
    selector.classList.toggle("fucsia");
}
function bgrojo() {
    var selector=document.getElementById("body");
    selector.classList.toggle("rojo");
}
function bgazul() {
    var selector=document.getElementById("body");
    selector.classList.toggle("azul");
}

AOS.init();
