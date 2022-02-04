const textDispay = document.querySelector('.texto-dinamico')
const frases = ['Óptima', 'Eficiente', 'Segura', 'Innovadora']
let i = 0
let k = 0
let currentFrase = []


function loop() {
    
    textDispay.innerHTML = frases[i]
    if (i < frases.length -1) {
        i++
    } else {
        i = 0
    }
    setTimeout(loop, 1500)
}
if (textDispay!=null) {

    loop()
};

const checkLang = document.getElementById('lang');
checkLang.addEventListener('click', clickLang);

function clickLang(e) {
    if(this.checked){
        window.location.href="/index.html";
    }else {
        window.location.href="/en/index.html";
    }
};


const select = document.querySelector('#select');
const idiomas = document.querySelector('#idiomas');
const contenidoSelect = document.querySelector('#contenidoSelect');

document.querySelectorAll('#idiomas > .option').forEach((option) => {
    option.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('e.currentTarget.innerHTML');
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        idiomas.classList.toggle('active');
        select.classList.toggle('active');
    })
});

select.addEventListener('click', () => {
    select.classList.toggle('active');
    idiomas.classList.toggle('active');
});






// function loop () {
//     textDispay.innerHTML = currentFrase.join('')
    
    
//     if (i < frases.length) {
        
//         if (k <= frases[i].length) {
//            currentFrase.push(frases[i][k])
//            k++
//         }
//         if (k > frases[i].length) {
//           currentFrase = []
//         i++
//         k=0
//         }
        
        
//     }else{
//         i=0
//         k=0
//         currentFrase=[]
//     }

//     setTimeout(loop, 300)
// }
// loop()