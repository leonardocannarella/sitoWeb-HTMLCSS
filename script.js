function day(){
    var mode1 = "0";
    localStorage.setItem("nightMode", mode1);

	body.className='day';
    header.className='day';
    content.className='day';
    titolo.className='day';
    descrizione.className='day';
    citazione.className='day';
    elenco.className='day';
    interruttore.className='day';
    citazioneImportante.className='day';
    citazioneImportante1.className='day';
    citazioneImportante2.className='day';
    galleriafoto.className='day';
    footer.className='day';
}

function night(){
    var mode2 = "1";
    localStorage.setItem("nightMode", mode2);

    body.className='night';
    header.className='night';
    content.className='night';
    titolo.className='night';
    descrizione.className='night';
    citazione.className='night';
    elenco.className='night';
    interruttore.className='night';
    citazioneImportante.className='night';
    citazioneImportante1.className='night';
    citazioneImportante2.className='night';
    galleriafoto.className='night';
    footer.className='night';
}

function name() {
    var tempor = localStorage.getItem("nomeSalvato");

    if (tempor==null){
        var nome = prompt("Qual'è il tuo nome?");
        while((nome==null)||(nome==""))
        {
            alert("Nome non valido!")
            var nome = prompt("Qual'è il tuo nome?");
            localStorage.clear();
        }
        localStorage.setItem("nomeSalvato", nome);
        alert("Dati salvati con successo!\nCiao "+nome+"!");
        mostraDati();
    }
    else
    {
        mostraDati();
    }

    
}

function mostraDati() {
    var tempor = localStorage.getItem("nomeSalvato");
    document.getElementById("sottointestazione").innerHTML = "Ciao "+tempor+"!";
    activeMode();
}

function cancella() {
    localStorage.clear();
    alert("Tutti i cookie sono stati cancellati con successo!\nLa pagina verrà ricaricata automaticamente.");
    window.location.reload();
}

function activeMode() {
    var modeTemp = localStorage.getItem("nightMode");

    if(modeTemp=="1"){
        night();
    }
    else
    {
        day();
    }
}