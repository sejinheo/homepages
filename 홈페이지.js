function showNextImage(slideshowId) 
{
    const images = document.querySelectorAll(`#${slideshowId} img`);
    let currentIndex = Array.from(images).findIndex(img => img.classList.contains('active'));
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(() => showNextImage('slideshow1'), 4000);
setInterval(() => showNextImage('slideshow2'), 4000);
setInterval(() => showNextImage('slideshow3'), 4000);
setInterval(() => showNextImage('slideshow4'), 4000);

document.querySelectorAll('.position-left').forEach(element =>
     {
    const leftValue = element.getAttribute('data-left');// 챗 GPT검색
    element.style.left = leftValue; 
     });