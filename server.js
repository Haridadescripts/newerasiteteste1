const express = require('express');
const cors = require('cors');
const path = require('path');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('./'));
app.use('/public', express.static('public'));

// Rotas
app.use('/api/auth', authRoutes);

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Função para encontrar uma porta disponível
const startServer = (port) => {
    const server = app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    }).on('error', (err) => {
        if (err.code === 'EADDRINUSE') {
            console.log(`Porta ${port} em uso, tentando próxima porta...`);
            startServer(port + 1);
        } else {
            console.error('Erro ao iniciar servidor:', err);
        }
    });
};

// Iniciar servidor na porta 3000 ou próxima disponível
startServer(3000);

module.exports = app;