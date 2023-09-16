const vector = document.getElementById('vector');
const photo = document.getElementById('photo');

vector.addEventListener('mouseenter', () => {
    photo.style.transform = 'scale(2)';
});

vector.addEventListener('mouseleave', () => {
    photo.style.transform = 'scale(1)';
});