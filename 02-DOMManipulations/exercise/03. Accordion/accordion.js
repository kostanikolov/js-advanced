function toggle() {
    
    const btn = document.querySelector('.button');
    const extra = document.getElementById('extra');

    if (!extra.hasAttribute('style') || extra.style.display === 'none') {
        extra.style.display = 'block';
        btn.textContent = 'Less';
    } else if (extra.style.display === 'block') {
        extra.style.display = 'none';
        btn.textContent = 'More';
    }
}
