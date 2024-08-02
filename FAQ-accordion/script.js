document.addEventListener('DOMContentLoaded', () => {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
            const faqContent = button.nextElementSibling;
            
            if (button.classList.contains('active')) {
                faqContent.style.display = 'block';
                
                faqButtons.forEach(btn => {
                    if (btn !== button && btn.classList.contains('active')) {
                        btn.classList.remove('active');
                        btn.nextElementSibling.style.display = 'none';
                    }
                });
            } else {
                faqContent.style.display = 'none';
            }
        });
    });
});
