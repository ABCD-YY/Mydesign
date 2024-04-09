const copyButton = document.querySelector('.code__copy');
copyButton.addEventListener('mouseleave', () => {
    setTimeout(() => {
        copyButton.setAttribute('aria-label', 'Copy Code');
    }, 500)
})
copyButton.addEventListener('click', () => {
    copyButton.setAttribute('aria-label', 'Copied');
});