function onClick(event) {
    event.preventDefault()
    let pm = document.querySelector("#pm").value
    let as1 = document.querySelector("#as1").value
    let cpm = document.querySelector("#cpm").value
    let cm = document.querySelector("#cm").value
    let cpw = document.querySelector("#cpw").value
    let cm1 = document.querySelector("#cm1").value
    let cw = document.querySelector("#cw").value
    let tw = document.querySelector("#tw").value
    let tm = document.querySelector("#tm").value
    let cps = document.querySelector("#cps").value
    let sw = document.querySelector("#sw").value
    
    pm = Number(pm)
    as1 = Number(as1)
    cpm=Number(cpm)
    cm = Number(cm)
    cpw = Number(cpw)
    cm1 = Number(cm1)
    cw = Number(cw)
    tw = Number(tw)
    tm = Number(tm)
    cps = String(cps)
    sw = String(sw)
    const a="There is a high chance of you being affected"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({pm,as1,cpm,cm,cpw,cm1,cw,tw,tm,cps,sw})
    };
    fetch('http://127.0.0.1:5000/cancer', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data));
    const b="There is a low chance of you being affected"
    let chosenValue = Math.random() < 0.5 ?  a: b;
    alert(chosenValue)
}

let submitBtn = document.querySelector("#submitBtn")
submitBtn.addEventListener("click", onClick)

