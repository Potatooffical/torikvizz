let sz=""
let szamlalo=0
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        //console.log(i+" "+j);
        sz+=`<img id="${szamlalo}"onmouseout="elhagy(this.id)"  onmouseover="szegelyrajz(this.id)" 
        onclick="nagyit(this.id) " src="${szamlalo}.jpg" 
        alt="" style="width:300px; margin:5px;border:2px solid white;"/> `
        
        szamlalo++
    }
    sz+=`<br>`
}

document.getElementById("Galeria").innerHTML=sz;
let megoldas1=""
let aktualisorszam=-1
let lekerultklikk=-1
let helyes=0
let osszes=0
function nagyit(id){
    //alert(id)
    aktualisorszam=id
    if (lekerultklikk!=-1) {
        document.getElementById(lekerultklikk).style.filter="grayscale(0%)"
        document.getElementById(lekerultklikk).style.border="solid 2px red"
    }
   
    else{
        document.getElementById(id).style.filter="grayscale(100%)"
        document.getElementById(id).style.border="dotted 2px black"
    }
    
    
    lekerultklikk=id
    
    document.getElementById("nagykep").innerHTML=`<img src="${id}.jpg" alt="" />`

    
    // tombbol kiszedni az adatott es bekeverni es a gombokra rakni
    megoldas1=nevektomb[id].megoldas
    let keveres=[]
    keveres.push(nevektomb[id].megoldas)
    keveres.push(nevektomb[id].tipp1)
    keveres.push(nevektomb[id].tipp2)
    keveres.push(nevektomb[id].tipp3)
    
    for (let i = 0; i < 100; i++) {
        let rszam1=Math.floor(Math.random()*4)
        let rszam2=Math.floor(Math.random()*4)
        let csere=keveres[rszam1]
        keveres[rszam1]=keveres[rszam2]
        keveres[rszam2]=csere
        
    }
    document.getElementById("kiirkerdes").innerHTML=`Ki ő?<br>
        <button onclick="gombkattint('${keveres[0]}')">${keveres[0]}</button>
        <button onclick="gombkattint('${keveres[1]}')">${keveres[1]}</button>
        <button onclick="gombkattint('${keveres[2]}')">${keveres[2]}</button>
        <button onclick="gombkattint('${keveres[3]}')">${keveres[3]}</button>
        `
    document.getElementById("pontszam").innerHTML=`Pontok: ${helyes}/${osszes} ${helyes}válasz  ${Math.round(helyes*100/osszes),0}%`
    document.getElementById("pontszam").style.textAlign="Center"
    document.getElementById("pontszam").style.fontSize="20px"
    document.getElementById("pontszam").style.margin="20px"
}
function szegelyrajz(id){
    document.getElementById(id).style.border="solid 2px red "
    
}
function elhagy(id){

        document.getElementById(id).style.border="none"
    
    
}

function gombkattint(aktualisfelirat){
    
    //alert(aktualisfelirat)
    //alert(megoldas)
    
    if (megoldas1==aktualisfelirat) {
        helyes++
        alert("Gratulálok! Helyes válasz!")
        if (aktualisorszam==nevektomb.length-1) {    
            aktualisorszam=0
            pontszam++
            
        }
        else{
            aktualisorszam++
        }
    }
    else{
        alert("Nem jó válasz!")
        
    }
    
    //alert(aktualisorszam)
    nagyit(aktualisorszam)
    
}
function korvonal(id){
    document.getElementById(id).style.border="solid 2px blue"
}
