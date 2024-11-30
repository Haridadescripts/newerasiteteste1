document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
        const loginType = document.getElementById('loginType').value;

        loginMessage.textContent = 'Autenticando...';
        loginMessage.style.color = '#FFA500';

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include', // Importante para cookies
                body: JSON.stringify({ username, password, role: loginType })
            });

            const data = await response.json();

            if (response.ok) {
                loginMessage.textContent = 'Login realizado com sucesso!';
                loginMessage.style.color = '#4CAF50';

                // Armazenar dados do usuário (não sensíveis) no localStorage
                localStorage.setItem('user', JSON.stringify({
                    username: data.user.username,
                    role: data.user.role
                }));

                // Redirecionar baseado no tipo de usuário
                setTimeout(() => {
                    const redirectPath = loginType === 'admin' ? '/admin/dashboard' : '/player/dashboard';
                    window.location.href = redirectPath;
                }, 1000);
            } else {
                loginMessage.textContent = data.message || 'Erro ao realizar login';
                loginMessage.style.color = '#f44336';
            }
        } catch (error) {
            loginMessage.textContent = 'Erro ao conectar com o servidor';
            loginMessage.style.color = '#f44336';
            console.error('Erro:', error);
        }
    });

    // Animações e validações de formulário
    const inputs = document.querySelectorAll('.form-group input');
    
    inputs.forEach(input => {
        // Animação de foco
        input.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });

        input.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
            
            // Validação básica
            if (!this.value) {
                this.style.borderColor = '#f44336';
            } else {
                this.style.borderColor = '#4CAF50';
            }
        });

        // Validação em tempo real
        input.addEventListener('input', function() {
            if (this.value) {
                this.style.borderColor = '#4CAF50';
            }
        });
    });
}); 