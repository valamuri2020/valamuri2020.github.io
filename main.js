 function trees (){  // Display when button is clicked//
    document.getElementById("hiddenmessage").style.display = 'block';
} 

//Update
var t = 0;
var constant = 475.646879756;

function addtrees(){
    trees();
    t =  Math.ceil(t + constant/4);
    document.getElementById("label").innerHTML = t ;
}

//jQuery used to hide initial stuff onclick
$(document).ready(function(){
    $("button").click(function(){
        $(".begone").fadeOut(500)
        
     });

 }) ;


/* Refactored Version:

 const trees =  ()=> document.getElementById("hiddenmessage").style.display = 'block'; 

//Update count
let t = 0;
let constant = 475.646879756;

const addtrees = ()=> {
    trees();
    t = Math.ceil(t + constant/4);
    $('#label').text(t)
}

//jQuery used to hide initial stuff onclick
$(document).ready(()=>{
    $("button").click(()=>{
        $(".begone").fadeOut(500)
     });
 });
*/
