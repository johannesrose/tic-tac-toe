
let momentanerSpieler = "";
let start_lister = ["welcherSpieler", "spieler_x", "spieler_x"]
let spiel_liste = []
let spielfeldID = ["00", "01", "02", "10", "11", "12", "20", "21", "22"]
let spieler1 =""
let spielerCPU = ""
let anzahlX = 0;
let anzahlO = 0;
let winSpielerX = 0;
let winSpielerO = 0;

let spielfeld = [["•","•","•"],
                 ["•","•","•"],
                 ["•","•","•"]]

function spielerAuswahl(auswahl) {
    if (auswahl=="x"){
        spieler1 = "x"
        spielerCPU = "o"
        momentanerSpieler = "x"
        document.getElementById("aktuelerSpieler").innerHTML=  momentanerSpieler;
    }
    else {
        spieler1 = "o"
        spielerCPU = "x"  
        momentanerSpieler = "o"
        document.getElementById("aktuelerSpieler").innerHTML=  momentanerSpieler;
    }
}

function spielfeldAuswahl(x,y) {
    if (spielfeld[x][y] == "x" || spielfeld[x][y] == "o"){
        alert("Diese Feld ist bereits belegt")      
    }
    else if (momentanerSpieler==""){
        alert("Bitte wähle x oder o aus!")
    }
    else{
        document.getElementById(String(x)+String(y)).innerText= momentanerSpieler;
        spielfeld[x][y] = momentanerSpieler; 
        if (momentanerSpieler == "x"){
            momentanerSpieler = "o"
            document.getElementById("aktuelerSpieler").innerHTML=  momentanerSpieler;}
        else{
            momentanerSpieler = "x"
            document.getElementById("aktuelerSpieler").innerHTML=   momentanerSpieler;
        }  
        }
        linkeNachRechts(0)
        linkeNachRechts(1)
        linkeNachRechts(2)
        obenNachUnten(0)
        obenNachUnten(1)
        obenNachUnten(2)
        quer1()
        quer2()
}

function linkeNachRechts(q){
    anzahlX = 0;
    anzahlO = 0;
    //Prüfe links nach rechts
    for (let i = 0; i < 3; i++) {
        if (spielfeld[q][i] == "x"){
            anzahlX++;   
        }
        else if (spielfeld[q][i] == "o"){
            anzahlO++;}
        
        if (anzahlX == 3){
            alert("Spieler X hat gewonnen")
            winsAusgebeX()            
        }
        else if (anzahlO == 3){
            alert("Spieler O hat gewonnen")
            winsAusgebeO()
        }
}}
function obenNachUnten(q){
    anzahlX = 0;
    anzahlO = 0;
    //Prüfe links nach rechts
    for (let i = 0; i < 3; i++) {
        if (spielfeld[i][q] == "x"){
            anzahlX++;     
        }
        else if (spielfeld[i][q] == "o"){
            anzahlO++;}
        
        if (anzahlX == 3){
            alert("Spieler X hat gewonnen")
            winsAusgebeX()

        }
        else if (anzahlO == 3){
            alert("Spieler O hat gewonnen")
            winsAusgebeO()
        }
}}

function quer1(){
    anzahlX = 0;
    anzahlO = 0;
    //Prüfe links nach rechts
    for (let i = 0, m =1; i < 3 && m < 4; i++,m++ ) {
        if (spielfeld[i][spielfeld.length-m] == "x"){
            anzahlX++;
        }
        else if (spielfeld[i][spielfeld.length-m] == "o"){
            anzahlO++;}
        
        if (anzahlX == 3){
            alert("Spieler X hat gewonnen")
            winsAusgebeX()
        }
        else if (anzahlO == 3){
            alert("Spieler O hat gewonnen")
            winsAusgebeO()
        }
}}

function quer2(){
    anzahlX = 0;
    anzahlO = 0;
    //Prüfe links nach rechts
    for (let i = 0; i < 3; i++ ) {
        if (spielfeld[i][i] == "x"){
            anzahlX++;
        }
        else if (spielfeld[i][i] == "o"){
            anzahlO++;}
        
        if (anzahlX == 3){
            alert("Spieler X hat gewonnen")
            winsAusgebeX()
        }
        else if (anzahlO == 3){
            alert("Spieler O hat gewonnen")
            winsAusgebeO()
        }
}}

function neueRunde(){
    spielfeld = [["•","•","•"],
    ["•","•","•"],
    ["•","•","•"]]
    momentanerSpieler = ""
    document.getElementById("aktuelerSpieler").innerHTML = momentanerSpieler
    for (let i = 0; i < spielfeldID.length; i++) {
        const element = document.getElementById(spielfeldID[i]);
        if (element) {
            element.innerHTML = "";
    }
}}

function winsAusgebeX(){
    winSpielerX++
    document.getElementById("winsSpielerX").innerHTML = "Wins X </br>" + "<center>" + winSpielerX;
}
function winsAusgebeO(){
    winSpielerO++
    document.getElementById("winsSpielerO").innerHTML = "Wins O </br>" + "<center>" + winSpielerO;
}

function neuStart(){
     winSpielerX = 0;
    winSpielerO = 0;
    
    spielfeld = [["•","•","•"],
    ["•","•","•"],
    ["•","•","•"]]
    momentanerSpieler = ""
    document.getElementById("aktuelerSpieler").innerHTML = momentanerSpieler
    for (let i = 0; i < spielfeldID.length; i++) {
        const element = document.getElementById(spielfeldID[i]);
        if (element) {
            element.innerHTML = "";
    }
    document.getElementById("winsSpielerX").innerHTML = "Wins Spieler </br>" + "<center>" + winSpielerX;
    document.getElementById("winsSpielerO").innerHTML = "Wins Spieler </br>" + "<center>" + winSpielerO;

}
}

