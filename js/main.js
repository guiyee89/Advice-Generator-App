const button = document.querySelector("#button")
const advice = document.querySelector(".advice")
const adviceTitle = document.querySelector(".advice-title")
const adviceNumber = document.querySelector("#number");


function getAdvice (){
    const totalAdvice = 224;
    const randomId = Math.floor(Math.random()*totalAdvice) + 1
    const url = `https://api.adviceslip.com/advice/${randomId}`

    fetch(url)
        .then(response => response.json())
        .then(data =>  {
            advice.innerHTML = data.slip.advice; 
            adviceNumber.innerHTML = ` #${randomId}`})
        .catch(error => console.error(error))
        .then(() => console.log("Consejo cargado exitosamente."));
       
}

button.addEventListener('click', getAdvice) ;


