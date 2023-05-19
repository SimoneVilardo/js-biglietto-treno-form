// costante prezzo base
const costo_base = 0.21;


let gen_button = document.getElementById('genera');

gen_button.addEventListener('click', function(){

    let nome_cognome = document.getElementById('nome').value;

    let percorso_utente = parseInt(document.getElementById('percorso').value);

    let fascia_eta = document.getElementById('eta').value;
// VARIABILE CARROZZA
    let carrozza = Math.floor(Math.random() * 10 + 1)

    // VARIABILE CODICE POSTALE
    let codice_cp = Math.floor(Math.random() * 100000 + 1)

// SCONTO MINORE
    if (fascia_eta === 'Minorenne') {

        let prezzo = (percorso_utente * costo_base * 0.8);
        
        document.getElementById('nome-passeggero').innerHTML = `${nome_cognome}`
        document.getElementById('offerta').innerHTML = `${fascia_eta}`
        document.getElementById('carrozza').innerHTML = `${carrozza}`
        document.getElementById('codice_cp').innerHTML = `${codice_cp}`
        document.getElementById('costo-biglietto').innerHTML = `${prezzo.toFixed(2)}€`

// SCONTO OVER 65        
    } else if (fascia_eta === 'Over65') {

        let prezzo = (percorso_utente * costo_base * 0.4);

        document.getElementById('nome-passeggero').innerHTML = `${nome_cognome}`
        document.getElementById('offerta').innerHTML = `${fascia_eta}`
        document.getElementById('carrozza').innerHTML = `${carrozza}`
        document.getElementById('codice_cp').innerHTML = `${codice_cp}`
        document.getElementById('costo-biglietto').innerHTML = `${prezzo.toFixed(2)}€`

// PREZZO STANDARD        
    } else (fascia_eta === 'Maggiorenne') ;{

        let prezzo = (percorso_utente * costo_base);

        document.getElementById('nome-passeggero').innerHTML = `${nome_cognome}`
        document.getElementById('offerta').innerHTML = `${fascia_eta}`
        document.getElementById('carrozza').innerHTML = `${carrozza}`
        document.getElementById('codice_cp').innerHTML = `${codice_cp}`
        document.getElementById('costo-biglietto').innerHTML = `${prezzo.toFixed(2)}€`

    }

})
