const http = require('http')

const students = [
    {
        student: 'Diana Rojas V',
        profession: 'Ingenieria Mecatronica',
        git: 'https://github.com/IngDmrv',
    },
    {
        student: 'Laura Ramos',
        profession: 'ingeniera financiera',
        git: 'https://github.com/lauramosdim',

    },
    {
        student: 'Daniel Alvarez',
        profession: 'web designer',
        git: 'https://github.com/dansata',

    },
    {
        student: 'Daniela Calle Estrada',
        profession: 'Ingeniera de sistemas',
        git: 'https://github.com/Dany0913',

    },
    {
        student: 'Cristian Moreno',
        profession: 'Developer',
        git: 'https://github.com/khriztianmoreno',

    },
    {
        student: 'Isabella Serna',
        profession: 'desarrollador',
        git: 'https://github.com/Isabella-417',

    },
    {
        student: 'Alejandro Becerra',
        profession: 'Administrador de empresas y Product Manager',
        git: 'https://github.com/becerra2906',

    },
    {
        student: 'Juan Pablo Acosta',
        profession: 'Ingeniero mecatrónico',
        git: 'https://github.com/Jpacosta23',

    },
    {
        student: 'Cristopher Rojas',
        profession: 'Analista Programador de Sistemas',
        git: 'https://github.com/cristopher1202',    

    },
    {
        student: 'Maria Sirley Tangarife Gil',
        profession: 'Tecnologa en Analisis y Desarrollo de Sistemas de informacion',
        git: 'https://github.com/Mariatangarife1998',

    },
    {
        student: 'Laura Monsalve Arroyave',
        profession: 'Administradora Comercial y de Mercadeo',
        git: 'https://github.com/lauramonsalvearroyave',

    },
    {
        student: 'Mónica González',
        profession: 'Ingeniera Química',
        git: 'https://github.com/monicagmeza11',

    },
    {
        student: 'Brianith Navarro',
        profession: 'Designer and engineer',
        git: 'https://github.com/briaenrose',

    },
    {
        student: 'Laura V. De Armas',
        profession: 'Administradora de Empresas y Designer',
        git: 'https://github.com/Lauravdearmas',

    },
    {
        student: 'Jun Lopera',
        profession: 'Publicista estratega digital',
        git: '',

    }
]


//Creacion del servidor 

const app = http.createServer((request,respose) => {
    respose.writeHead(200, {'Contet-type': 'text/plain'})
    respose.end(JSON.stringify(students))
} )

//levantar el puerto del servidor
const PORT = 3001

app.listen(PORT)

console.log(`Server running on port ${PORT}`)