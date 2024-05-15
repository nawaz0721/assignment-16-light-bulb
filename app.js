let toggle = document.querySelector(".toggle");
let text = document.querySelector(".text");
let bulb = document.querySelector("#bulb");

toggle.addEventListener("click", animatedToggle);


function animatedToggle() {
    toggle.classList.toggle("active");
    
    if (toggle.classList.contains("active")) {
        text.innerHTML = "ON";
        bulb.src = "images/ON.png";
    } 
    else {
    text.innerHTML = "OFF"; 
    bulb.src = "images/off .jpg";
    }
}
