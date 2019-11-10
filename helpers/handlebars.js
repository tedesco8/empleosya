module.exports = {
    seleccionarSkills: (seleccionadas = [], opciones) => {
        
        const skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'Bootstrap', 'JavaScript', 'jQuery', 'Node', 'Express', 'Angular', 'VueJS', 
        'ReactJS', 'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript', 'PHP', 'Laravel', 'Symfony', 'Python', 
        'Django', 'Java', '.NET', 'ORM', 'Sequelize', 'Mongoose', 'Entity Framework', 'SQL', 'SQLServer', 'Mariadb', 'MySQL', 'PostgreSQL', 'MVC', 'SASS', 'POO', 
        'WordPress', 'Tableau', 'PowerBI', 'AI', 'IoT', 'BigData', 'Photoshop', 'Illustrator', 'Office', 'Packet Tracer'];
    
        let html = '';
        skills.forEach(skill => {
            html += ` 
                <li ${seleccionadas.includes(skill) ? ' class="activo"' : ''}>${skill}</li> 
                `;
        });

        return opciones.fn().html = html;
        
    },
    tipoContrato: (seleccionado, opciones) => {
        return opciones.fn(this).replace(
            new RegExp(`value="${seleccionado}"`), '$& selected="selected"'
        )
    }
}