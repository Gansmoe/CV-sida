const presentation = document.getElementById("presentation");
const edu = document.getElementById("edu");
const exp = document.getElementById("exp")
const eduBtn = document.getElementById("utbildning");
const expBtn = document.getElementById("erfarenhet");
const homeBtn = document.getElementById("hem");

eduBtn.addEventListener("click", function(){
    presentation.style.display = "none";
    edu.style.display = "inherit";
    exp.style.display = "none";
});

expBtn.addEventListener("click", function(){
    presentation.style.display = "none";
    edu.style.display = "none";
    exp.style.display = "inherit";
});

homeBtn.addEventListener("click", function(){
    presentation.style.display = "inherit";
    edu.style.display = "none";
    exp.style.display = "none";
});