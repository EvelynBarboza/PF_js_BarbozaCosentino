


// 0 es aire
// 1 es pared
// 2 es el jugador
// 3 es moneda
let mapa = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 3, 1, 3, 1, 0, 1, 1, 0, 0, 1, 3, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 3, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 3, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 3, 1, 0, 0, 0, 3, 1],
    [1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 3, 0, 1, 0, 0, 1],
    [1, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


const TAMANO_PARED = 5;
const ALTO_PARED = 3;

let muro;
let premio;

let muros = document.querySelector('#muros');
let premios = document.querySelector('#premios');
//let sky = document.querySelector('#sky')
let scoreElement = document.querySelector('#score');
let jugador = document.querySelector('#jugador');

for (let x = 0; x < mapa.length; x += 1) {
for (let z = 0; z < mapa.length; z += 1) {
        let posicion = (x - mapa.length / 2) * TAMANO_PARED +
        " " +
        1.5 +
        " " +
        (z - mapa[x].length / 2) * TAMANO_PARED;

    if (mapa[x][z] === 0) {
        continue;
    }else if (mapa[x][z] === 1) {
        //pared
        muro = document.createElement('a-box');
        muros.appendChild(muro);
        //muro.setAttribute('color', 'fff');
        muro.setAttribute('material', 'src: #pared');
        muro.setAttribute('width', TAMANO_PARED);
        muro.setAttribute('height', ALTO_PARED);
        muro.setAttribute('depth', TAMANO_PARED);
        muro.setAttribute('position', posicion);
        muro.setAttribute('static-body', "");

    }else if (mapa[x][z] === 2){
        //jugador
        jugador.setAttribute('position', posicion);
    }else{
        //premio
        premio = document.createElement('a-sphere');
        premios.appendChild(premio);
        premio.setAttribute('position', posicion);
        premio.setAttribute('color', 'blue');
        premio.setAttribute('radius', '0.5');
        premio.setAttribute('class', "premio");
        }

    }
}

premios = document.querySelectorAll('.premio');

let score = premios.length;

    scoreElement.setAttribute('value', `Encontra ${score} premios`);
    scoreElement.setAttribute('color', '#000');

    premios.forEach(premio => {
    premio.addEventListener('click', () => {
    premio.setAttribute('visible', false);
    score -= 1;
    scoreElement.setAtribute('value', `Encontra ${score} premios`);

        if (score <= 0) {
            scoreElement.setAttribute('value', "Encontraste todos los premios")
        }
    })
})
//<a-sun-sky material="sunPosition: 0 1 0"></a-sun-sky>
//<a-entity light="type: hemisphere; color: #33C; groundColor: #3C3; intensity: 2"></a-entity>