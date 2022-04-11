function canPlay() {
    const personName = 'Paul'; //Assegnata una costante

    if (true) {
        personName = 'George'; // Argh! Voglio che personName sia una variabile di sola lettura
    }

    personName += ' plays football';

    console.log(personName);
}

canPlay();