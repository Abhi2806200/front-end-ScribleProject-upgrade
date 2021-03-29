var createpostmodal = document.getElementsByClassName("createpostmodal")[0];

var createpost_btn=document.getElementById("createpost");

var createpostclose_btn=document.getElementsByClassName("createpostclose")[0];

createpost_btn.onclick = function() {

    createpostmodal.style.display = "flex";

}

createpostclose_btn.onclick=function () {
    createpostmodal.style.display="none";
}


window.onclick = function(event) {
    if (event.target === createpostmodal) {
        createpostmodal.style.display = "none";
    }
}


/* Abhishek Agnihotri */