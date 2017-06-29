var table = document.querySelector('#game-board');
var aims = document.querySelector('#aim');
var score = document.querySelector('#score');
var productToGet;
var points = 0;

var productTypes = ['a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p',
    'r', 's', 't', 'u',
    'v', 'w', 'x', 'y',
    'z', 'a1', 'b1', 'c1',
    'd1', 'e1', 'f1', 'g1',
    'i1', 'j1', 'k1', 'em',
    'em', 'em', 'em', 'em', 'em', 'em',
    'em', 'em', 'em', 'em', 'em', 'em',
    'em', 'em', 'em', 'em', 'em', 'em' ];

function createList() {
    var listToGet = document.createElement('div');


    for (var i = 0; i < 8; i += 1) {
        productToGet = document.createElement('div');
        productToGet.classList.add(productTypes[Math.floor(Math.random() * 36)]);
        listToGet.appendChild(productToGet);
    }
    aims.appendChild(listToGet);


}



function createTape(initialSpeed) {
    var speed = initialSpeed;
    var tr = document.createElement('div');
    var td;
    var products = [];
    for (var i = 0; i < 10; i += 1) {
        td = document.createElement('div');
        tr.appendChild(td);
    }

    table.appendChild(tr);



    for (var i = 0; i < 500; i += 1) {
        products.push(productTypes[Math.floor(Math.random() * 54)])
    }

    var currentTick = 0;

    function tick() {
        currentTick += 1;
        var lastCell = tr.querySelector('div:last-child');

        tr.prepend(lastCell);

        if (products.length > 0 && Math.random() > 0.5) {
            var product = products.shift();
            var start = tr.querySelector('div');
            start.className = '';
            start.classList.add(product);
        }
        speed = Math.max(100, currentTick % 5 === 0 ? speed * 0.99 : speed);

        setTimeout(tick, speed)
    }

    setTimeout(tick, speed);
    tr.addEventListener('click', function (event) {

        if (event.target.className === '') {
            return;
        }
        var hit = aims.querySelector('.' + event.target.className);
        if (hit !== null){
            hit.className = '';
            points += 1;
            score.innerText = points;
            event.target.className = '';
        }
    });
}

createList();
createTape(650);
createTape(600);
createTape(758);


