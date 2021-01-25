var c = document.getElementById("slider-container");
var i = document.querySelectorAll(".slider-container .slider-img");
var index = 0;
var d = 0;



var c1 = document.getElementById("slider-container1");
var i1 = document.querySelectorAll(".slider-container1 .slider-img1");
var index1 = 0;
var d1 = 0;


function karuzela_pai() {
        d += i[index].offsetWidth;

        if (index >= i.length-1) {
            index = 0;
            d = 0;

        }
        
        c.style.transform = `translate(-${d}px, 0px)`;
        index++;
}
setInterval(() => karuzela_pai(), 2500);






function karuzela_pai1() {
    d1 += i1[index1].offsetWidth;

    if (index1 >= i1.length-1) {
        index1 = 0;
        d1 = 0;

    }
    
    c1.style.transform = `translate(-${d1}px, 0px)`;
    index1++;
}
setInterval(() => karuzela_pai1(), 1800);