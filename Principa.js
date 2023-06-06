const caja = document.querySelector('#caja');

document.querySelector('#boton-menu').addEventListener('click', () => {
	caja.classList.toggle('active');
})

const comprobarTamañ = () => {
	if(window.innerWidth <= 768){
		contenedor.classList.remove('active');
	}
    else {
		contenedor.classList.add('active');
	}
}
comprobarTamañ();

window.addEventListener('resize', () => {
	comprobarTamañ();
});