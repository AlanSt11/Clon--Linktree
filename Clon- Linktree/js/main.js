/*  =======================================
                    MENU
    =======================================
*/

let menu = document.getElementById('sticky');
let btnshare = document.querySelector('.share');
let options = document.querySelector('.options')

window.onscroll = function(){
    var scroll = document.documentElement.scrollTop;
    if(scroll > 50){
        menu.classList.add("sticky-show");
        btnshare.style.display = "none";
        options.style.justifyContent = "center";
    } else if(scroll < 50){
        menu.classList.remove("sticky-show");
        btnshare.style.display = "flex";
        options.style.justifyContent = "flex-end"
    }

}

/*  =======================================
            OPCION DE COMPARTIR
    =======================================
*/
function share (){
    if (navigator.share) {
        navigator.share({
            title: 'Pedro',
            text: 'Encuentrame en todas las redes sociales',
            url: ''
        });
        console.log("share");
    } else {
        navigator.clipboard.writeText('Link copeado correctamente');
    }
}

/* =======================================
        EFECTO MAQUINA DE ESCRIBIR              
    =======================================
*/

const typed = new Typed('.typed', {
    strings: ['<i class="title">creador de contenido</i>', '<i class="title">fotógrafo </i>'],

    color: '#000',
	typeSpeed: 75,
	startDelay: 300,
	backSpeed: 75,
	shuffle: false,
	backDelay: 1500,
	loop: true,
	loopCount: false,
	showCursor: true,
	cursorChar: '|',
	contentType: 'html',
})