
function onClick(event) {
    event.preventDefault()
    let age = document.querySelector("#age").value
    let days_onset = document.querySelector("#days_onset").value
    let sex = document.querySelector("#sex").value
    let cough = document.querySelector("#cough").value
    let fever = document.querySelector("#fever").value
    let chills = document.querySelector("#chills").value
    let sore_throat = document.querySelector("#sore_throat").value
    let headache = document.querySelector("#headache").value
    let fatigue = document.querySelector("#fatigue").value
    let country_others = document.querySelector("#country_others").value
    // console.log(age)
    
    age = Number(age)
    days_onset = Number(days_onset)
    sex=Number(sex)
    cough = Number(cough)
    fever = Number(fever)
    chills = Number(chills)
    sore_throat = Number(sore_throat)
    headache = Number(headache)
    fatigue = Number(fatigue)
    country_others = String(country_others)
    const a="There is a high chance of you being affected"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ age, days_onset, sex, cough, fever, chills, sore_throat, headache, fatigue, country_others })
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

