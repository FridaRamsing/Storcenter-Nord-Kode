console.log("Hello World");

// Tilføj event listener når siden er loaded
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('hugo').addEventListener('click', bange);
    document.getElementById('fisk2').addEventListener('click', fisk2Click);
    
    // Tilføj event listener til hele body'en
    document.body.addEventListener('click', function(event) {
        // Tjek om klikket IKKE er på fiskene eller deres indhold
        if (!document.getElementById('hugo').contains(event.target) && 
            !document.getElementById('fisk2').contains(event.target)) {
            alert("Av FOR DÆLEN");
        }
    });
});

function bange (event){
    // Stop event'et fra at boble op til body
    event.stopPropagation();
    
    document.querySelector("#hugo").innerHTML = `
    <div onclick="avForDaelen(event)">
    <h2>Jeg er en Hugo fisk</h2>
    <p> Jeg lever i vandet.</p>
    <button onclick="nulstilFisk(event)">Klik for at se fisken igen</button>
    </div>
    `;
}

function avForDaelen(event){
    event.stopPropagation();
    alert("Du klikkede på fisken!");
}

function nulstilFisk(event){
    event.stopPropagation();
    document.querySelector("#hugo").innerHTML = `
    <img src="images/png.gif" alt="Hugo">
    `;
    // Tilføj event listener igen
    document.getElementById('hugo').addEventListener('click', bange);
}

// Nye funktioner for fisk2
function fisk2Click(event){
    event.stopPropagation();
    
    document.querySelector("#fisk2").innerHTML = `
    <div onclick="fisk2Alert(event)">
    <h2>Jeg er fisk nummer 2</h2>
    <p>Jeg svømmer længere nede!</p>
    <button onclick="nulstilFisk2(event)">Klik for at se fisken igen</button>
    </div>
    `;
}

function fisk2Alert(event){
    event.stopPropagation();
    alert("Du klikkede på fisk 2!");
}

function nulstilFisk2(event){
    event.stopPropagation();
    document.querySelector("#fisk2").innerHTML = `
    <img src="images/fisk2.2.gif" alt="Fisk 2">
    `;
    document.getElementById('fisk2').addEventListener('click', fisk2Click);
}