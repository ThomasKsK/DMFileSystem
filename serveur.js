const http = require('http');
const fs = require('fs');
const port = 3000;
const index = fs.readFileSync('index.html');
const totalsales = fs.readFileSync('./salestotal/totals.txt');

const server = http.createServer((req, res) => {
    if (req.url === '/')
        res.end(index)
    else if (req.url === '/totals')
        res.end(totalsales)
    else {
        res.writeHead(404);
    }
})
server.listen(port, () => {
    console.log('Le serveur est sur le port ' + port + ', pour vous rendre sur la page du resultat : http://localhost:' + port + '/');
});
