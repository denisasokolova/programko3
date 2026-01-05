let playerName = "";

function askName() {
    let name = prompt("Zadej své jméno");
    if (!name) {
        playerName = "Hráč.";
    } else {
        playerName = name + ".";
    }
}

function chooseDirection() {
    let choice = prompt("Kam půjdeš? (levo / pravo)");
    switch (choice) {
        case "levo":
            showScene("hallway");
            break;
        case "pravo":
            showScene("stairs");
            break;
        default:
            showScene("dead_hide");
    }
}

const story = {
    "start": {
        text: "{name} Ocitáš se v zamčené cele. Alarm houká. Dveře jsou pootevřené.",
        choices: [
            { text: "Rozhlédnout se a rozhodnout směr", next: "choose" },
            { text: "Vyběhnout na chodbu", next: "hallway" }, 
            { text: "Prohledat celu", next: "search_cell" },
            { text: "Zkusit se schovat pod postel", next: "dead_hide" }
        ]
    },
    "choose": { text: "", choices: [] },
    "dead_hide": {
        text: "Schoval ses, ale stráže místnost zaplavily plynem. Nepřežil jsi.",
        choices: [{ text: "ZEMŘEL JSI", next: "restart" }]
    },
    "win": {
        text: "Gratuluji! Odletěl jsi helikoptérou do bezpečí.",
        choices: [{ text: "VYHRÁL JSI!", next: "restart" }]
    },
    "search_cell": {
        text: "V rohu jsi našel rezavý šroubovák. Může se hodit.",
        choices: [
            { text: "Jít teď na chodbu", next: "hallway_tool" },
            { text: "Křičet o pomoc", next: "dead_shout" }
        ]
    },
    "dead_shout": {
        text: "Tvůj křik přilákal bezpečnostní roboty. Eliminovali tě.",
        choices: [{ text: "ZEMŘEL JSI", next: "restart" }]
    },
    "hallway": {
        text: "Jsi na chodbě. Vlevo jsou výtazy, vpravo schodiště. Rovně jsou masivní vrata.",
        choices: [
            { text: "Jet výtahem", next: "dead_elevator" },
            { text: "Běžet po schodech", next: "stairs" },
            { text: "Zkusit otevřít vrata", next: "dead_gate" }
        ]
    },
    "hallway_tool": {
        text: "Na chodbě vidíš šachtu ventilace, kterou lze odšroubovat.",
        choices: [
            { text: "Vlézt do ventilace", next: "ventilation" },
            { text: "Běžet ke schodům", next: "stairs" },
            { text: "Jet výtahem", next: "dead_elevator" }
        ]
    },
    "dead_elevator": {
        text: "Výtah se zasekl a spadl. To byl tvůj konec.",
        choices: [{ text: "ZEMŘEL JSI", next: "restart" }]
    },
    "dead_gate": {
        text: "Vrata jsou pod proudem. Zabil tě elektrický výboj.",
        choices: [{ text: "ZEMŘEL JSI", next: "restart" }]
    },
    "ventilation": {
        text: "Prolézáte šachtou až ven na střechu. Vidíš helikoptéru!",
        choices: [
            { text: "Naskočit a odletět", next: "win" },
            { text: "Skočit ze střechy do lesa", next: "dead_jump" }
        ]
    },
    "dead_jump": {
        text: "Výška byla příliš velká. Nepřežil jsi dopad.",
        choices: [{ text: "ZEMŘEL JSI", next: "restart" }]
    },
    "stairs": {
        text: "Běžíš po schodech dolů. Potkáváš vědce, který tě prosí o pomoc.",
        choices: [
            { text: "Pomoct mu", next: "dead_scientist" },
            { text: "Ignorovat ho a běžet dál", next: "exit_door" }
        ]
    },
    "dead_scientist": {
        text: "Vědec byl převlečený agent. Zastřelil tě.",
        choices: [{ text: "ZEMŘEL JSI", next: "restart" }]
    },
    "exit_door": {
        text: "Jsi u zadního vchodu. Jsou tu číselné kódy.",
        choices: [
            { text: "Zkusit kód 1234", next: "dead_code" },
            { text: "Zkusit kód 0000", next: "dead_code" },
            { text: "Vyrazit dveře ramenem", next: "win_forest" }
        ]
    },
    "dead_code": {
        text: "Špatný kód spustil sebedestrukci místnosti.",
        choices: [{ text: "ZEMŘEL JSI", next: "restart" }]
    },
    "win_forest": {
        text: "Dveře povolily! Jsi v lese a svoboda je na dosah.",
        choices: [{ text: "VYHRÁL JSI!", next: "restart" }]
    },
    "restart": { 
        text: "Hra skončila. Stiskněte tlačítko pro opětovné spuštění.",
        choices: []
    }
};

const storyText = document.getElementById('story-text');
const choicesElement = document.getElementById('choices-container');
const restartBtn = document.getElementById('restart-button');

function showScene(sceneKey) {
    const scene = story[sceneKey];
    storyText.innerText = scene.text.replace("{name}", playerName);
    choicesElement.innerHTML = '';
    restartBtn.style.display = 'none';
    restartBtn.className = '';

    if (sceneKey === "choose") {
        chooseDirection();
        return;
    }

    scene.choices.forEach(choice => {
        if (choice.next === "restart") {
            const buttonText = choice.text.toUpperCase();
            if (buttonText.includes("VYHRÁL") || buttonText.includes("VÍTĚZSTVÍ")) {
                restartBtn.classList.add('win-button');
            } else {
                restartBtn.classList.add('lose-button');
            }
            restartBtn.style.display = 'block';
            restartBtn.innerText = choice.text;
        } else {
            const btn = document.createElement('button');
            btn.innerText = choice.text;
            btn.className = 'choice-button';
            btn.onclick = () => showScene(choice.next);
            choicesElement.appendChild(btn);
        }
    });
}

function startGame() {
    askName();
    showScene("start");
}

startGame();
