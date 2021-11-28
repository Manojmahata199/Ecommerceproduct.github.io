function clickimg(smallimg){
                    
    let img=document.getElementById('image-1');

    img.src=smallimg.src;
    
}


const menuopen=()=>{
    document.getElementById('menu-bar').style.width="210px";
}
const menuclose=()=>{
    document.getElementById('menu-bar').style.width="0px";
}
const bestdeals=()=>{
    document.getElementById('drop-menu').style.height="280px";
}
const closedeals=()=>{
    document.getElementById('drop-menu').style.height="0px";
}
const star1=()=>{
    document.getElementById('star-1').style.color="chocolate";
}
const star2=()=>{
    document.getElementById('star-1').style.color="chocolate";
    document.getElementById('star-2').style.color="chocolate";
}
const star3=()=>{
    document.getElementById('star-1').style.color="chocolate";
    document.getElementById('star-2').style.color="chocolate";
    document.getElementById('star-3').style.color="chocolate";
}
const star4=()=>{
    document.getElementById('star-1').style.color="chocolate";
    document.getElementById('star-2').style.color="chocolate";
    document.getElementById('star-3').style.color="chocolate";
    document.getElementById('star-4').style.color="chocolate";
}
const star5=()=>{
    document.getElementById('star-1').style.color="chocolate";
    document.getElementById('star-2').style.color="chocolate";
    document.getElementById('star-3').style.color="chocolate";
    document.getElementById('star-4').style.color="chocolate";
    document.getElementById('star-5').style.color="chocolate";
}

function like(){
    let likebtn=document.querySelector('#likebtn');
    let dislikebtn=document.querySelector('#dislikebtn');

    let input1=document.querySelector('#input1');
    let input2=document.querySelector('#input2');

    likebtn.addEventListener('click',()=>{
        input1.value=parseInt(input1.value)+1;
        input1.style.color="green";
        document.getElementById('likebtn').style.color="blue";

    })
    dislikebtn.addEventListener('click',()=>{
        input2.value=parseInt(input2.value)+1;
        input2.style.color="red";
        document.getElementById('dislikebtn').style.color="blue";

    })



}