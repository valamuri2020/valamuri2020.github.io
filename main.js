const trees =  ()=> document.getElementById("hiddenmessage").style.display = 'block'; 

//Update count
let t = 0;
let constant = 475.646879756;

const addtrees = ()=> {
    trees();
    t = Math.ceil(t + constant/4);
    $('#label').text(t);
}

//jQuery used to hide initial stuff onclick
$(document).ready(()=>{
    $("button").click(()=>{
        $(".begone").fadeOut(500);
     });
 });

