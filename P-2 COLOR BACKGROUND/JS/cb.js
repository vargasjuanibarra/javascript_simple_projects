const colors = ["green","red","yellow","blue","orange"];

const color = document.querySelector(".color");
const btn = document.querySelector(".button");

btn.addEventListener("click",function(e){
    
    const randomNumber = getRandomNumber();

    color.textContent = colors[randomNumber];
    document.body.style.backgroundColor = colors[randomNumber];

});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
