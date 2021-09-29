const presentation = document.getElementById("presentation");
const edu = document.getElementById("edu");
const exp = document.getElementById("exp");
const port = document.getElementById("repos");
const eduBtn = document.getElementById("utbildning");
const expBtn = document.getElementById("erfarenhet");
const homeBtn = document.getElementById("hem");
const portBtn = document.getElementById("portfolio");

eduBtn.addEventListener("click", function(){
    presentation.style.display = "none";
    edu.style.display = "inherit";
    exp.style.display = "none";
    port.style.display = "none";
});

expBtn.addEventListener("click", function(){
    presentation.style.display = "none";
    edu.style.display = "none";
    exp.style.display = "inherit";
    port.style.display = "none";
});

homeBtn.addEventListener("click", function(){
    presentation.style.display = "inherit";
    edu.style.display = "none";
    exp.style.display = "none";
    port.style.display = "none";
});

const getData = async() => {
    const response = await fetch("https://api.github.com/users/Gansmoe/starred");
    const data = await response.json();
    console.log(data);
    return data;
}

const printData = async() => {
    const data = await getData();

    for (let i = 0; i<data.length; i++){
        port.insertAdjacentHTML("beforeend", "<a href='"+ data[i].html_url +"' target='_blank'><div id='githubrepo'>"+ data[i].name + "</div></a>")
    }
}


portBtn.addEventListener("click", function(){
    presentation.style.display = "none";
    edu.style.display = "none";
    exp.style.display = "none";
    port.style.display = "inherit";

});

printData();