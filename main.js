const dummy = document.getElementById("ads-section");
dummy.addEventListener("mouseover" , OnAdHover);

function pop()
{
    alert("Pop function called!");
}

function OnAdHover() {
    var buttons = document.querySelectorAll(".dtest");
    buttons.forEach((item) => {
        item.classList.toggle("button-highlight");
    });
    
}

