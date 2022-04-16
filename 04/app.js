let idInterval;
let counter = 1;

const stopRun = function() {
        counter++;
        if (counter > 5) {
            clearInterval(idInterval);
        }

    } // zatrzymuje setInterval po 5 wyswietleniach

const currentTime = function() {
        const time = (new Date()).toLocaleTimeString();
        console.log(time);
        stopRun();

    } // wyswietla aktualny czas i zarzymuje po 5 wyswietleniach


idInterval = setInterval(currentTime, 5000); //wyswietla aktyalny czas co 5 sekund i przyjmuje jako parametr anonimowe wyrazenie funkcyjne