document.getElementById('resgatar-recompensas').addEventListener('click', function(event) {
    var estaLogado = false;

    if (!estaLogado) {
        event.preventDefault();
        alert('Você precisa estar logado para acessar esta página.');
        window.location.href = 'PaginaLogin.html';
    } else {
        window.location.href = 'PaginaDesconto.html';
    }
    }
)