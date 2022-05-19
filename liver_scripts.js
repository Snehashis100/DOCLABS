
function onClick(event) {
    event.preventDefault()
    let Age = document.querySelector("#Age").value
    let Total_Bil = document.querySelector("#Total_Bil").value
    let Direct_Bil = document.querySelector("#Direct_Bil").value
    let Alb = document.querySelector("#Alb").value
    let Alb_Glo_Ratio = document.querySelector("#Alb_Glo_Ratio").value
    let Alk_Phosp = document.querySelector("#Alk_Phosp").value
    let Alam_Amino = document.querySelector("#Alam_Amino").value
    let Asp_Amino = document.querySelector("#Asp_Amino").value
    const a="There is a high chance of you being affected"
    Age = Number(Age)
    Total_Bil = Number(Total_Bil)
    Direct_Bil=Number(Direct_Bil)
    Alb = Number(Alb)
    Alb_Glo_Ratio = Number(Alb_Glo_Ratio)
    Alk_Phosp = Number(Alk_Phosp)
    Alam_Amino = Number(Alam_Amino)
    Asp_Amino = Number(Asp_Amino)
    
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({Age,Total_Bil,Direct_Bil,Alb,Alb_Glo_Ratio,Alk_Phosp,Alam_Amino,Asp_Amino})
    };
    const b="There is a low chance of you being affected"
    let chosenValue = Math.random() < 0.5 ?  a: b;
    alert(chosenValue)
    fetch('http://127.0.0.1:5000/liver', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
    
}

let submitBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener("click", onClick)

