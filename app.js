const content = document.querySelector(".content");
const button = document.querySelector(".resize");

async function getNewAdice() {
  const result = await fetch("https://api.adviceslip.com/advice");
  const data = await result.json();

  const newAdvice = `<div>
    <p>${data.slip.advice}</p>
    <p>${data.slip.id}</p>
    </div>`;
  content.innerHTML = newAdvice;
}

button.addEventListener('click', ()=>{
    getNewAdice()
})

getNewAdice();



