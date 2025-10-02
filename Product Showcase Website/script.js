document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Check if the current item is already active
            const isActive = item.classList.contains('active');

            // Optional: Close all other accordions before opening a new one
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });

            // If it wasn't active, open it. If it was active, the loop above already closed it.
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});