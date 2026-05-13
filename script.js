document.addEventListener('DOMContentLoaded', function() {
    
    // Seleciona todas as imagens
    const imagens = document.querySelectorAll('.rei_leao, .bela, .aladdin');
    
    imagens.forEach(imagem => {
        // Efeito no mouse enter (quando passa o mouse)
        imagem.addEventListener('mouseenter', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Animações específicas para cada imagem
            switch(this.className) {
                case 'rei_leao':
                    this.style.transform = `translate(${x/25}px, ${y/25}px) rotate(8deg) scale(1.05)`;
                    this.style.filter = 'brightness(1.2) saturate(1.3)';
                    this.style.boxShadow = '0 20px 40px rgba(231,67,89)';
                    break;
                    
                case 'bela':
                    this.style.transform = `translate(${x/25}px, ${y/25}px) rotate(8deg) scale(1.05)`;
                    this.style.filter = 'brightness(1.1) sepia(0.2)';
                    this.style.boxShadow = '0 15px 30px rgba(255,192,203,0.5)';
                    break;
                    
                case 'aladdin':
                    this.style.transform = `translate(${x/25}px, ${y/25}px) rotate(8deg) scale(1.05)`;
                    this.style.filter = 'brightness(1.3) contrast(1.1)';
                    this.style.boxShadow = '0 25px 50px rgba(0,191,255,0.4)';
                    break;
            }
            
            // Adiciona vibração suave
            this.style.transition = 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        });
        
        // Efeito no mouse leave (quando tira o mouse)
        imagem.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0) rotate(0deg) scale(1)';
            this.style.filter = 'brightness(1) saturate(1)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
            this.style.transition = 'all 0.4s ease-out';
        });
        
        // Efeito de flutuação contínua (hover)
        imagem.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Segue o mouse suavemente
            const moveX = (x - rect.width/2) / 30;
            const moveY = (y - rect.height/2) / 30;
            
            this.style.transform += ` translate(${moveX}px, ${moveY}px)`;
        });
    });
    
    // Efeito adicional: clique para pulo
    imagens.forEach(imagem => {
        imagem.addEventListener('click', function() {
            this.style.transform += ' scale(0.95)';
            this.style.transition = 'transform 0.1s ease';
            
            setTimeout(() => {
                this.style.transform = this.style.transform.replace(' scale(0.95)', '') + ' scale(1.15)';
            }, 100);
            
            setTimeout(() => {
                this.style.transform = this.style.transform.replace(' scale(1.15)', '');
            }, 200);
        });
    });
});