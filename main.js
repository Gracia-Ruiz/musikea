     document.addEventListener('scroll', () =>{
        let nav = document.querySelector('#nav');
        if ( window.pageYOffset > 100 ) {
          nav.classList.remove('bg-transparent');
          nav.style.backgroundColor = "#02231C";
          nav.classList.add('bd-accent');
          nav.style.transition = "0.4s";
          
        } else {
          nav.classList.remove('bd-accent')
          nav.classList.add('bg-transparent')
        }
      })
      
      
      const categorias = {
        'Libros': "fas fa-book",
        'Instr. segunda mano':"fas fa-recycle", 
        'Instr. nuevos': "fas fa-guitar", 
        'Sala compartida': "fas fa-handshake", 
        'Se busca músico': "fas fa-drum", 
        'Se ofrece músico': "fas fa-music", 
        'Merchandising': "fab fa-wpexplorer",
        'Moda': "fas fa-tshirt"
      };
      
    
      let categoryWrapper = document.querySelector('#categoryWrapper');

      let fromObjectToArray = Object.entries(categorias);
      
      fromObjectToArray.forEach( el =>  {
        // por cada elemento crea una card 
        let div = document.createElement('div')
        div.classList.add('col-12', 'col-md-4', 'col-lg-3', 'mb-3')
        div.innerHTML = ` 
        <div class="card bg-categorias py-3">
          <div class="card-body">
            <h4 class="text-white">${el[0]}
              <i class="${el[1]} text-muted"></i>  
            </h4>
            <div class="d-flex justify-content-end mt-3">
              <button class="btn btn-explorar text-white">comprar</button>
            </div>
          </div>
        </div>
        `
        
        categoryWrapper.appendChild(div);
      })   
      

      ScrollReveal().reveal('.revealUp', { duration: 1500, delay: 500, distance: '100px', interval: 800, easing: 'cubic-bezier(0.5, 0, 0, 1)' });
      
      ScrollReveal().reveal('.revealDown', { duration: 1500, delay: 500, distance: '-100px', interval: 800, easing: 'cubic-bezier(0.5, 0, 0, 1)' });
      
      
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      