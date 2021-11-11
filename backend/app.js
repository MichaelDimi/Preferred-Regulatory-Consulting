const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendFile('Index.html', {
        root: '../frontend'
    });
});

app.get('/:file', (req, res) => {
    res.sendFile(req.params.file, {
        root: '../frontend'
    });
});

app.get('/css/:file', (req, res) => {
    res.sendFile(req.params.file, {
        root: '../frontend/css'
    });
});

app.get('/javascript/:file', (req, res) => {
    res.sendFile(req.params.file, {
        root: '../frontend/javascript'
    });
});

app.get('/fonts/:file', (req, res) => {
    res.sendFile(req.params.file, {
        root: '../frontend/fonts'
    });
});

app.get('/fonts/:folder/:file', (req, res) => {
    res.sendFile(req.params.folder + "/" + req.params.file, {
        root: '../frontend/fonts'
    });
});

app.get('/images/:file', (req, res) => {
    res.sendFile(req.params.file, {
        root: '../frontend/images'
    });
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});