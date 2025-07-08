

function destacarCard(id) {
      // Remove destaque de todos os cards
      document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('highlight');
      });

      // Adiciona destaque ao card clicado
      const card = document.getElementById(id);
      card.classList.add('highlight');

      // Remove o destaque após 2 segundos (opcional)
      setTimeout(() => {
        card.classList.remove('highlight');
      }, 2000);
    }


    AOS.init({
                duration: 1000, // Tempo da animação (1 segundo)
                easing: "ease-in-out",
                once: true // A animação acontece apenas uma vez
            });

            function toggleMenu() {
                const menu = document.getElementById("menu");
                menu.classList.toggle("open");
            }
