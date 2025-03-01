document.addEventListener("DOMContentLoaded", ()=>{
    const randomBtn = document.getElementById("random");
   const colorDisplay = document.getElementById("colorName")
   const wall = document.getElementById("wall")

    wall.addEventListener("click", ()=>{
        const randomColor = getRandomColor();
        wall.style.backgroundColor = randomColor;
        colorDisplay.textContent = randomColor;
        console.log(randomColor)
    });

    function getRandomColor(){
        const letters = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0; i< 6; i++){
            color+= letters[Math.floor(Math.random()* 16)]; 
        }
        return color;
    }
});