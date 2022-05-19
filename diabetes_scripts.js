function onClick(event) {
    event.preventDefault()
    let Glu = document.querySelector("#Glu").value
    let Ins = document.querySelector("#Ins").value
    let BMI = document.querySelector("#BMI").value
    let Skin = document.querySelector("#Skin").value
    let Age = document.querySelector("#Age").value
    let Preg = document.querySelector("#Preg").value
    let Diabet = document.querySelector("#Diabet").value
    let bp = document.querySelector("#bp").value
    
    Glu = Number(Glu)
    Ins = Number(Ins)
    BMI=Number(BMI)
    Skin = Number(Skin)
    Age = Number(Age)
    Preg = Number(Preg)
    Diabet = Number(Diabet)
    bp = Number(bp)
    const a="There is a high chance of you being affected"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({Glu,Ins,BMI,Skin,Age,Preg,Diabet,bp})
    };
    fetch('http://127.0.0.1:5000/covid', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
    const b="There is a low chance of you being affected"
    let chosenValue = Math.random() < 0.5 ?  a: b;
    alert(chosenValue)
}

let submitBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener("click", onClick)

