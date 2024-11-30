const express = require('express');
const router = express.Router();

// Lista de usuários predefinidos
const USERS = [
    {
        id: 1,
        username: 'admin',
        password: 'admin123',
        role: 'admin'
    },
    {
        id: 2,
        username: 'player',
        password: 'player123',
        role: 'player'
    }
];

router.post('/login', (req, res) => {
    try {
        const { username, password } = req.body;
        
        // Encontrar usuário
        const user = USERS.find(u => 
            u.username.toLowerCase() === username.toLowerCase().trim() && 
            u.password === password.trim()
        );

        if (!user) {
            return res.status(401).json({ 
                message: 'Usuário ou senha incorretos' 
            });
        }

        // Enviar resposta
        res.json({
            message: 'Login realizado com sucesso',
            user: {
                username: user.username,
                role: user.role
            }
        });

    } catch (error) {
        console.error('Erro no login:', error);
        res.status(500).json({ 
            message: 'Erro interno do servidor' 
        });
    }
});

module.exports = router; 