module.exports = {
    seleccionarSkills: (seleccionadas = [], opciones) => {
        const skills = ['HTML5', 'CSS3', 'CSSGrid', 'Flexbox', 'Bootstrap', 'JavaScript', 'jQuery', 'Node', 'Express', 'Angular', 'VueJS', 
        'ReactJS', 'React Hooks', 'Redux', 'Apollo', 'GraphQL', 'TypeScript', 'PHP', 'Laravel', 'Symfony', 'Python', 
        'Django', 'Java', '.NET', 'ORM', 'Sequelize', 'Mongoose', 'Entity Framework', 'SQL', 'SQLServer', 'Mariadb', 'MySQL', 'PostgreSQL', 'MVC', 'SASS', 'POO', 
        'WordPress', 'Tableau', 'PowerBI', 'AI', 'IoT', 'BigData', 'Photoshop', 'Illustrator', 'Office', 'Packet Tracer'];
    
        let html = '';
        skills.forEach(skills => {
            html += ` 
                <li>${skills}</li>
                `;
        });

        return opciones.fn().html = html;
        
    }
}