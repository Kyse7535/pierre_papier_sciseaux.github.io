let scorePlayer = 0;
let scoreComputer = 0;
let resultat = "";
let computerSelection = "";
let playerSelection = "";
let btn_papier = document.getElementById('img-papier');
let btn_pierre = document.getElementById('img-pierre');
let btn_sciseaux = document.getElementById('img-sciseaux');
let h1 = document.createElement('h1');

let btn_nvelle_partie = document.getElementById('btn');


let score = document.getElementById('score');

score.append(h1);

let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let h4 = document.createElement('h4');
let resultat_id = document.getElementById('resultat');
resultat_id.append(h2);
resultat_id.append(h4);
resultat_id.append(h3);

h1.textContent = getScore(scorePlayer, scoreComputer);






game();

//cette fonction choisit au hasard une valeur entre pierre papier sciseaux
function computerPlay() {
    let valeur = ['pierre', 'papier', 'sciseaux'];
    let i = Math.random() * 2;
    i = Math.round(i);
    let choice = valeur[i];
    return choice;
}

//cette fonction affiche le score et le vainqueur final de la partie. 
function getresultat(chaine) {
    h1.textContent = "";
    h1.append(getScore());
    h3.append(chaine);

}

//Cette fonction verifie le score et affiche le score de la partie en cours.
function evenement() {
    h1.textContent = "";
    h1.append(getScore());
    h2.textContent = resultat;
    let chaine = "Computer plays " + computerSelection;
    h4.textContent = chaine;
    if (scorePlayer >= 5 || scoreComputer >= 5) {

        if (scoreComputer > scorePlayer) {
            h3.style.cssText = "color: #ff4444";
            getresultat("\n YOU LOSE THE GAME \n");
        } else {
            h3.style.cssText = "color: #00C851";
            getresultat("\n CONGRATULATION, YOU WIN THE GAME \r");
        }
        //h1.append("PLAYER " + playerSelection + " : " + computerSelection + " COMPUTER \n");
    }
}

function game() {

    scoreComputer = 0;
    scorePlayer = 0;

    btn_papier.addEventListener('click', () => {
        if (scoreComputer < 5 && scorePlayer < 5) {
            computerSelection = computerPlay();
            resultat = playRound("papier", computerSelection);
            evenement();
        }

    });

    btn_pierre.addEventListener('click', () => {
        if (scoreComputer < 5 && scorePlayer < 5) {
            computerSelection = computerPlay();
            resultat = playRound("pierre", computerSelection);
            evenement();
        }

    });
    btn_sciseaux.addEventListener('click', () => {
        if (scoreComputer < 5 && scorePlayer < 5) {
            computerSelection = computerPlay();
            resultat = playRound("sciseaux", computerSelection);
            evenement();
        }

    });
    btn_nvelle_partie.addEventListener('click', () => {
        scoreComputer = 0;
        scorePlayer = 0;
        h1.textContent = getScore();
        h2.textContent = "";
        h4.textContent = "";
        h3.textContent = "";
    })
}

//cette fonction verifie le resultat du joueur et de l'ordi et renvoie le resultat de la partie.
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return " \n No one win \n";
    } else
    if ((computerSelection == 'pierre' && playerSelection == 'sciseaux') ||
        (computerSelection == 'papier' && playerSelection == 'pierre') ||
        (computerSelection == 'sciseaux' && playerSelection == 'papier')) {
        scoreComputer += 1;
        return " \n You lose, " + computerSelection + " beats " + playerSelection;
    } else {
        scorePlayer += 1;
        return " \n You win, " + playerSelection + " beats " + computerSelection;
    }
}

function getScore() {
    return "PLAYER " + scorePlayer + " : " + scoreComputer + " COMPUTER \r";
}