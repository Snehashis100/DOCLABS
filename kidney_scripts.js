
function onClick(event) {
    event.preventDefault()
    let rbc = document.querySelector("#rbc").value
    let pc = document.querySelector("#pc").value
    let pcc = document.querySelector("#pcc").value
    let ba = document.querySelector("#ba").value
    let htn = document.querySelector("#htn").value
    let dm = document.querySelector("#dm").value
    let cad = document.querySelector("#cad").value
    let appet = document.querySelector("#appet").value
    let pe = document.querySelector("#pe").value
    let rc = document.querySelector("#rc").value
    let ane = document.querySelector("#ane").value
    let wc = document.querySelector("#wc").value
    let bp = document.querySelector("#bp").value
    let sg = document.querySelector("#sg").value
    let al = document.querySelector("#al").value
    let su = document.querySelector("#su").value
    let age = document.querySelector("#age").value
    let bgr = document.querySelector("#bgr").value
    let bu = document.querySelector("#bu").value
    let sc = document.querySelector("#sc").value
    let sod = document.querySelector("#sod").value
    let hemo = document.querySelector("#hemo").value
    let pcv = document.querySelector("#pcv").value


    // console.log(age)
    
    rbc = Number(rbc)
    pc = Number(pc)
    pcc=Number(pcc)
    ba = Number(ba)
    htn = Number(htn)
    dm = Number(dm)
    cad = Number(cad)
    appet = Number(appet)
    pe = Number(pe)
    rc = String(rc)
    ane = String(ane)
    wc = String(wc)
    bp = String(bp)
    sg = String(sg)
    al = String(al)
    su = String(su)
    age = String(age)
    bgr = String(bgr)
    bu = String(bu)
    sc = String(sc)
    sod = String(sod)
    hemo = String(hemo)
    pcv = String(pcv)
    const a="There is a high chance of you being affected"
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({pcv,hemo,sod,age,bgr,bu,sc,sg,al,su,ane,wc,bp,appet,pe,rc,cad,dm,htn,pc,pcc,rbc,ba})
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

