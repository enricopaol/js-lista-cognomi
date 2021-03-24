// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
//  (facciamo questo in 2 versioni: col ciclo for e col while)

arrayCognomi = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];

// Chiedo all'utente il cognome
var cognomeUtente = prompt('Dimmi il tuo cognome');

// Lo inserisco in un array con altri cognomi
arrayCognomi.push(cognomeUtente);
// console.log(arrayCognomi);

// Ordino la lista alfabeticamente (con codice non mio, per renderlo case unsensitive)
var cognomiOrdinati = arrayCognomi.sort(function(a,b) {
    a = a.toLowerCase();
    b = b.toLowerCase();
    if (a == b) return 0;
    return a < b ? -1 : 1;
}); 
// console.log(cognomiOrdinati);


// // Ciclo For

// // Scorro la lista ordinata e stampo i suoi elementi in delle <li> 
// var posizioneCognomeUtente = -1;

// for (var i = 0; i < cognomiOrdinati.length; i++) {
//     thisCognome = cognomiOrdinati[i];
//     // console.log(thisCognome);

//     var contenutoAttualeLista = document.getElementById('lista-cognomi').innerHTML;
//     document.getElementById('lista-cognomi').innerHTML = contenutoAttualeLista + '<li>' + thisCognome + '</li>';
//     // console.log(contenutoAttualeLista);

//     // In versione abbreviata sarebbe:
//     // var contenutoAttualeLista = document.getElementById('lista-cognomi').innerHTML += '<li>' + thisCognome + '</li>';

//     if (cognomeUtente == thisCognome) {
//         posizioneCognomeUtente = i + 1; // Salvo l'indice in una variabile
//     }
// }


// // Stampo il messaggio
// alert('Il tuo cognome si trova nella ' + posizioneCognomeUtente + 'º posizione');


// Ciclo While

// Scorro la lista ordinata e stampo i suoi elementi in delle <li>
var i = 0;

var posizioneCognomeUtente = -1;

while (i < cognomiOrdinati.length) {
    var thisCognome = cognomiOrdinati[i];

    var contenutoAttualeLista = document.getElementById('lista-cognomi').innerHTML;
    document.getElementById('lista-cognomi').innerHTML = contenutoAttualeLista + '<li>' + thisCognome + '</li>';
    console.log(contenutoAttualeLista);

    if (cognomeUtente == thisCognome) {
        posizioneCognomeUtente = i + 1; // Salvo l'indice in una variabile
    }

    i++;
}

// Stampo il messaggio
alert('Il tuo cognome si trova nella ' + posizioneCognomeUtente + 'º posizione');





