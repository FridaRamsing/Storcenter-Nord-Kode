// Tester at JavaScript forbindelsen virker - vises i browser konsollen
console.log("Hello World");

/*Oliver og Clara - Forfattere af koden*/

// HOVEDFUNKTION: Venter med at køre JavaScript koden til HTML'en er fuldt loaded
// Dette er KRITISK for at sikre at alle HTML-elementer (som fiskene) eksisterer før vi prøver at tilgå dem
document.addEventListener('DOMContentLoaded', function() {
    
    // INTERAKTIVITET: Forbinder klik på hugo-fisken med bange() funktionen
    // addEventListener sikrer at når brugeren klikker på hugo, køres bange funktionen
    document.getElementById('hugo').addEventListener('click', bange);
    
    // INTERAKTIVITET: Forbinder klik på fisk2 med fisk2Click() funktionen
    document.getElementById('fisk2').addEventListener('click', fisk2Click);
    
    // SMART FEATURE: "Easter egg" - detector klik overalt på siden UNDTAGEN på fiskene
    // Tilføjer event listener til hele body elementet (hele siden)
    document.body.addEventListener('click', function(event) {
        
        // LOGIK: Tjekker om klikket IKKE var på hugo eller fisk2 (eller deres børne-elementer)
        // contains() metoden returnerer true hvis event.target er inde i elementet
        // ! (ikke-operatoren) vender det om, så vi kun reagerer på klik UDEN FOR fiskene
        if (!document.getElementById('hugo').contains(event.target) && 
            !document.getElementById('fisk2').contains(event.target)) {
            
            // OVERRASKELSE: Viser alert hvis brugeren klikker ved siden af fiskene
            alert("Av FOR DÆLEN");
        }
    });
    
    // RETTELSE AF FEJL: Flyttet fisk3 event listener ind i DOMContentLoaded for sikkerhed
    // Dette sikrer at fisk3 eksisterer før vi prøver at tilføje event listener
    document.getElementById('fisk3').addEventListener('click', fisk3Click);
});

// HUGO FISK FUNKTIONALITET: Håndterer klik på hugo-fisken
function bange (event){
    
    // VIGTIGT: Stopper event'et fra at "boble op" til body elementet
    // Uden dette ville både denne funktion OG "Av FOR DÆLEN" blive udløst samtidig
    // Dette kaldes "event propagation control"
    event.stopPropagation();
    
    // DYNAMISK INDHOLD: Erstatter fisk-billedet med informations-tekst
    // innerHTML ændrer alt indholdet i hugo elementet
    // Template literals (` `) bruges for multi-line HTML strenge
    document.querySelector("#hugo").innerHTML = `
    <div onclick="avForDaelen(event)">
    <h2>Jeg er en Hugo fisk</h2>
    <p> Jeg lever i vandet.</p>
    <button onclick="nulstilFisk(event)">Klik for at se fisken igen</button>
    </div>
    `;
}

// EKSTRA INTERAKTION: Håndterer klik på hugo's informations-tekst
function avForDaelen(event){
    // Forhindrer event bubbling igen
    event.stopPropagation();
    // Viser bekræftelse at brugeren klikkede på fisken
    alert("Du klikkede på fisken!");
}

// RESET FUNKTIONALITET: Genetablerer hugo-fisken til original tilstand
function nulstilFisk(event){
    // Forhindrer event bubbling
    event.stopPropagation();
    
    // GENETABLERING: Sætter hugo tilbage til original fisk-billede
    document.querySelector("#hugo").innerHTML = `
    <img src="images/png.gif" alt="Hugo">
    `;
    
    // VIGTIGT: Tilføjer event listener igen fordi innerHTML sletter ALT (inklusive events)
    // Uden denne linje ville fisken kun virke én gang
    document.getElementById('hugo').addEventListener('click', bange);
}

// FISK2 FUNKTIONALITET: Samme mønster som hugo, men for fisk2
function fisk2Click(event){
    // Forhindrer event bubbling til body
    event.stopPropagation();
    
    // Erstatter fisk2 billede med informations-indhold
    document.querySelector("#fisk2").innerHTML = `
    <div onclick="fisk2Alert(event)">
    <h2>Jeg er fisk nummer 2</h2>
    <p>Jeg svømmer længere nede!</p>
    <button onclick="nulstilFisk2(event)">Klik for at se fisken igen</button>
    </div>
    `;
}

// FISK2 EKSTRA INTERAKTION: Alert når man klikker på fisk2's tekst
function fisk2Alert(event){
    event.stopPropagation();
    alert("Du klikkede på fisk 2!");
}

// FISK2 RESET: Genetablerer fisk2 til original tilstand
function nulstilFisk2(event){
    event.stopPropagation();
    
    // Sætter fisk2 tilbage til original billede
    document.querySelector("#fisk2").innerHTML = `
    <img src="images/fisk2.2.gif" alt="Fisk 2">
    `;
    
    // Genetablerer event listener for fisk2
    document.getElementById('fisk2').addEventListener('click', fisk2Click);
}

// FISK3 FUNKTIONALITET: Håndterer klik på den tredje fisk
function fisk3Click(event){
    // Forhindrer event bubbling
    event.stopPropagation();
    
    // Erstatter fisk3 med informations-indhold
    document.querySelector("#fisk3").innerHTML = `
    <div onclick="fisk3Alert(event)">
    <h2>Jeg er din nye fisk!</h2>
    <button onclick="nulstilFisk3(event)">Tilbage</button>
    </div>`;
}