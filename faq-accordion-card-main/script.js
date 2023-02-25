const buttonOpen = document.querySelectorAll("#button")
const answer = document.querySelectorAll(".answer");
const imgArrow = document.querySelectorAll(".img");
const boldText = document.querySelectorAll(".boldText");
const buttonArray = new Array(buttonOpen.length);


for(let i=0; i<buttonOpen.length; i++){
    buttonArray[i] = 0;

    
    buttonOpen[i].addEventListener("click", function(){
        if(buttonArray[i] == 0){
            answer[i].classList.remove("hidden");
            buttonArray[i] ++;
            imgArrow[i].classList.add("imgArrow");
            boldText[i].classList="bold";
        }else{
            answer[i].classList.add("hidden");
            imgArrow[i].classList.remove("imgArrow")
            buttonArray[i] =0;
            boldText[i].classList="boldText";

        }        
    })
}

