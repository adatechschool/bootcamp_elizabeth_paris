class Employe {
    constructor(name, emploi, dispo) {
        this.name = name;
        this.emploi = emploi;
        this.dispo = dispo;
    }
}

const richarde = new Employe('Richarde', 'Gestionnaire', false);
const lola = new Employe('Lola', 'Directrice', true);
const guillaume = new Employe('Guillaume', 'Répondant', false);
const loique = new Employe('Loique', 'Gestionnaire', false);
const theo = new Employe('Theo', 'Directrice', true);
const alphonce = new Employe('Alphonce', 'Répondant', false);

const employes = [richarde, lola, guillaume, loique, theo, alphonce];

function call() {
    let disponible = false;
    
    // Vérifier si un répondant est disponible
    for (let employe of employes) {
        if (employe.emploi === 'Répondant' && employe.dispo) {
            console.log(`${employe.name} le ${employe.emploi} est disponible.`);
            disponible = true;
            break;
        }
    }

    // Si aucun répondant n'est disponible, vérifier les gestionnaires
    if (!disponible) {
        for (let employe of employes) {
            if (employe.emploi === 'Gestionnaire' && employe.dispo) {
                console.log(`${employe.name} le ${employe.emploi} est disponible.`);
                disponible = true;
                break;
            }
        }
    }

    // Si aucun gestionnaire n'est disponible, vérifier les directrices
    if (!disponible) {
        for (let employe of employes) {
            if (employe.emploi === 'Directrice' && employe.dispo) {
                console.log(`${employe.name} la ${employe.emploi} est disponible.`);
                disponible = true;
                break;
            }
        }
    }

    // Si aucun employé n'est disponible
    if (!disponible) {
        console.log('Aucun employé disponible.');
    }
}

// Appel de la fonction call
call();
