// Useless comment
const dummy = document.getElementById("ads-section");

const item1 = {
    image: 'test-image.PNG',
    category: "Κουζίνες & Φούρνοι",
    descr: "Crown CR-6060v Κουζίνα 66lt με Εστίες Υγραερίου & Ρεύματος Π60εκ. Λευκή",
    rev: "ο καλύτερος φούρνος",
    price: "150€",
    rating: "🎇🎇🎇 (5)"
    }


populateView();

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

function test(){
    alert("I have been clicked!");
}






function buildItemSlot(parent){

    // Creating the elements themselves
    const _slot = document.createElement("li");
    const _button = document.createElement("button");
    const outer_div = document.createElement("div");
    const img_div =document.createElement("div");
    const text_div = document.createElement("div");
    const cat_div = document.createElement("div");
    const desc_div = document.createElement("div");
    const comm_div = document.createElement("div");
    const price_div = document.createElement("div");
    const ratings_div = document.createElement("div");

    const imageItem = document.createElement("img");

    const adcat = document.createElement("p");
    const desc = document.createElement("p");
    const rev = document.createElement("p");
    const price = document.createElement("p");
    const rate = document.createElement("p");


    adcat.innerText = item1["category"];
    desc.innerText = item1["descr"];
    rev.innerText - item1["rev"];
    price.innerText = item1["price"];
    rate.innerText = item1["rating"];

    _slot.classList = ("ad-items");
    _button.classList = ("dummy");
    img_div.classList = ("image-holder");
    imageItem.classList = ("imag");
    text_div.classList = ("con");
    adcat.classList = ("adcat");
    desc.classList = ("desc");
    price.classList = ("price");
    rate.classList = ("ratings");


    //Creating the hierarchy
    parent.appendChild(_slot);
    _slot.appendChild(_button);
    _button.appendChild(outer_div);
    
    outer_div.appendChild(img_div);
    img_div.appendChild(imageItem);
    outer_div.appendChild(text_div);
    text_div.appendChild(cat_div);
    cat_div.appendChild(adcat);
    text_div.appendChild(desc_div);
    desc_div.appendChild(desc);
    text_div.appendChild(comm_div);
    comm_div.appendChild(rev);
    text_div.appendChild(price_div);
    price_div.appendChild(price);
    text_div.appendChild(ratings_div);
    ratings_div.appendChild(rate);

    
    imageItem.toggleAttribute("src");
    imageItem.setAttribute("src" , "test-image.PNG");

}



function populateView(){
    var list = document.getElementById("recent-view").getElementsByTagName("ul")[0];
    //alert(list.innerText);
    for(var i = 0; i < 5; i++){
        buildItemSlot(list);
    }
    
}





