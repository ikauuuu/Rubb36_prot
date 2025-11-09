const containers = document.querySelectorAll('.img_container');
const category = document.querySelectorAll('.Category');


containers.forEach(container => {
    const image = container.querySelector('.img');
    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const maxTilt = 25;
        const maxTranslateZ = 50;

        const rotateX = ((centerY - y) / centerY) * maxTilt;
        const rotateY = ((x - centerX) / centerX) * maxTilt;

        const TranslateZ = maxTranslateZ;

        image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(-10px)`;
        //image.style.width = '90%'
        image.style.boxShadow = '50px 50px 5px rgba(0, 0, 0, 0)';
    });

    container.addEventListener('mouseleave', () => {
        image.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
        //image.style.width = '70%'
        image.style.boxshadow = '50px 50px 5px rgba(0, 0, 0, 0)';
    });
});

category.addEventListener('mouseleave', () => {
    //image.style.width = '90%'
})
