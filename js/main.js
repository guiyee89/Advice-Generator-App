const button = document.querySelector("#button")
const advice = document.querySelector(".advice")
const adviceTitle = document.querySelector(".advice-title")

function getAdvice (){
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data =>  {advice.textContent = data.slip.advice})
        .catch(error => console.error(error)); 
}
button.addEventListener('click', getAdvice) ;

