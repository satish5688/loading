var Btn=document.querySelector("#loading")

function hideText(){
    var txt=document.querySelector("#load");
    txt.style.display="none"
    Btn.style.marginTop="1rem"
}



Btn.addEventListener("click",hideText)