
function onClick(event) {
    event.preventDefault()
    let age = document.querySelector("#age").value
    let sex = document.querySelector("#sex").value
    let cp = document.querySelector("#cp").value
    let trest = document.querySelector("#trest").value
    let rest = document.querySelector("#rest").value
    let thal = document.querySelector("#thal").value
    let exag = document.querySelector("#exag").value
    let oldpeak = document.querySelector("#oldpeak").value
    let slope = document.querySelector("#slope").value
    let ca = document.querySelector("#ca").value
    let tha = document.querySelector("#tha").value
   
    age = Number(age)
    cp = Number(cp)
    sex=Number(sex)
    trest = Number(trest)
    rest = Number(rest)
    thal = Number(thal)
    exag = Number(exag)
    oldpeak = Number(oldpeak)
    slope = Number(slope)
    ca = String(ca)
    tha = String(tha)
    const a="There is a high chance of you being affected"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({age,cp,sex,trest,rest,thal,exag,oldpeak,slope,ca,tha})
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

