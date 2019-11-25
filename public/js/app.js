document.addEventListener('DOMContentLoaded', () => {
    const skills = document.querySelector('.lista-conocimientos');

        //limpiar las alertas
        let alertas = document.querySelector('.alertas');

        if(alertas) {
            limpiarAlertas();
            
        }
        console.log(alertas);

        if(skills) {
            skills.addEventListener('click', agregarSkills);
            // una vez que estamos en editar, llamar la función
            skillsSeleccionados();
        }
})

const limpiarAlertas = () => {
    const alertas = document.querySelector('.alertas');
    const interval = setInterval(() => {
        if(alertas.children.length > 0){
            alertas.removeChild(alertas.children[0]);
            console.log('Adentro');
        } else if (alertas.children.length === 0) {
            alertas.parentElement.removeChild(alertas);
            clearInterval(interval);
        }
    }, 2000);
}

const skills = new Set();
const agregarSkills = e => {
    if(e.target.tagName === 'LI'){
        if(e.target.classList.contains('activo')){
            //elimina del set y elimina la clase
            skills.delete(e.target.textContent);
            e.target.classList.remove('activo');
        } else {
            //agrega al set y agrega la clase
            skills.add(e.target.textContent);
            e.target.classList.add('activo');
        }
    }
    const skillsArray = [...skills]
    document.querySelector('#skills').value = skillsArray;
}

const skillsSeleccionados = () => {
    const seleccionadas = Array.from(document.querySelectorAll('.lista-conocimientos .activo'));
    console.log(seleccionadas);

    seleccionadas.forEach(seleccionada => {
        skills.add(seleccionada.textContent);
    })

    const skillsArray = [...skills]
    document.querySelector('#skills').value = skillsArray;
}