let bomba = document.getElementById("bomba");
let contenedor = document.getElementById("contenedor");
let imagenExplosion = document.createElement("img");
document.addEventListener('keydown', function(e) {
    switch (e.keyCode) {
        case 37:
            alert('left');
            aumentarTamaño();
            break;
        case 38:
            alert('up');
            aumentarTamaño();
            break;
        case 39:
            alert('right');
            aumentarTamaño();
            break;
        case 40:
            alert('down');
            achicarTamaño();
            break;
        }    
});

function aumentarTamaño(){
    let ancho = bomba.width;
    let alto = bomba.height;
    ancho += 100;
    alto += 100;
    bomba.style.width = ancho + 'px';
    bomba.style.height = alto + 'px';
    if(alto === 800 || ancho === 800){
        imagenExplosion.src = './explosion.png'
        bomba.remove();
        contenedor.appendChild(imagenExplosion);
    }
}
function achicarTamaño(){
    let ancho = bomba.width;
    let alto = bomba.height;
    ancho -= 100;
    alto -= 100;
    bomba.style.width = ancho + 'px';
    bomba.style.height = alto + 'px';
}
