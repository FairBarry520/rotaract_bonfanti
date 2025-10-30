// Carica CSV e genera la timeline a serpentina
fetch('../csv/storia.csv')
    .then(response => response.text())
    .then(data => {
        const lines = data.split('\n').slice(1); // rimuove header
        const table = document.getElementById('tabTempo');

        let riga = null;
        lines.forEach((line, index) => {
            if(line.trim() === '') return;
            const [anno, presidente] = line.split(',');

            // Ogni due presidenti crea una nuova riga (serpentina)
            if(index % 2 === 0){
                riga = table.insertRow();
                riga.className = 'rigaTempo';
            }

            const cella = riga.insertCell();
            cella.innerHTML = `<span class="year">${anno}</span><span class="pres">${presidente}</span>`;
        });
    })
    .catch(error => console.error('Errore caricamento CSV:', error));
