

function destacarCard(id) {
      
      document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('highlight');
      });

      
      const card = document.getElementById(id);
      card.classList.add('highlight');

      
      setTimeout(() => {
        card.classList.remove('highlight');
      }, 2000);
    }


    AOS.init({
                duration: 1000, 
                easing: "ease-in-out",
                once: true 
            });

            function toggleMenu() {
                const menu = document.getElementById("menu");
                menu.classList.toggle("open");
            }

            