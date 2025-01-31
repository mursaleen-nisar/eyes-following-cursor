document.addEventListener('mousemove', (event) => {
    const eyes = document.querySelectorAll('.outer-eye');
    eyes.forEach(eye => {
        const rect = eye.getBoundingClientRect();
        console.log(rect);
        const eyeX = rect.left + rect.width / 2;
        const eyeY = rect.top + rect.height / 2;
        const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX) * (180 / Math.PI);
        eye.style.transform = `rotate(${angle}deg)`;
    });
});