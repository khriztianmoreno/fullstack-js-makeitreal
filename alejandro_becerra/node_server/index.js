
// import http node library required to create the server
const http = require('http')

const port = 3000

// adds constant for students array of objects

const students = [
    {"Name" : "Laura Ramos",
    "Profession": "Ingeniera Financiera",
    "Github Page": "https://github.com/lauramosdim"
},
{
    "Name": "Daniel Alvarez",
    "Profession": "web designer",
    "Github Page":"https://github.com/dansata"
},
{
    "Name": "Daniela Calle Estrada",
    "Profession": "Ingeniera de sistemas",
    "Github Page":"Dany0913"
},
{
    "Name": "Cristian Moreno",
    "Profession": "Developer",
    "Github Page":"https://github.com/khriztianmoreno"
},
,
{
    "Name": "Isabella Serna",
    "Profession": "desarrolladora",
    "Github Page":"Isabella-417"
},
{
    "Name": "Alejandro Becerra",
    "Profession": "Administrador de empresas y Product Manager",
    "Github Page":"https://github.com/becerra2906"
},
{
    "Name": "Juan Pablo Acosta",
    "Profession": " Ingeniero mecatrónico",
    "Github Page":"https://github.com/Jpacosta23"
},
{
    "Name": "Cristopher Rojas",
    "Profession": "Analista Programador de Sistemas",
    "Github Page":"https://github.com/cristopher1202"
},
{
    "Name": "Maria Sirley Tangarife Gil",
    "Profession": "Tecnologa en Analisis y Desarrollo de Sistemas de informacion",
    "Github Page":"https://github.com/Mariatangarife1998"
},
{
    "Name": "Laura Monsalve Arroyave",
    "Profession": "Administradora Comercial y de Mercadeo",
    "Github Page":"https://github.com/lauramonsalvearroyave"
},
{
    "Name": "Mónica González",
    "Profession": "Ingeniera Química",
    "Github Page": "https://github.com/monicagmeza11"
},
{
    "Name":"Brianith Navarro",
    "Profession":"Designer and engineer",
    "Github Page": "https://github.com/briaenrose"
},
{
    "Name": "Laura V. De Armas",
    "Profession": "Administradora de Empresas y Designer",
    "Github Page": "https://github.com/Lauravdearmas"
},
{
    "Name": "Jaun Lopera",
    "Profession": " Publicista estratega digital",
    "Github Page": "N/A"
}
]






// to generate the server we need to use node's http .createServer method which gets a request and a response on that request.



let app = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type': 'application/json'});
    res.write("This is the list of students for Make It Real's Full Stack JS Bootcamp:");
    res.write(JSON.stringify(students))
    res.end();
});

// start the server on port 8001

app.listen(port)

console.log(`Server running on port ${port}`);