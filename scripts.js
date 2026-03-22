// scripts.js

// Smooth scrolling for navigation
const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Button interactions
const buttons = document.querySelectorAll('.interactive-button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        alert(`Button ${this.innerText} clicked!`);
    });
});

// DOM manipulation for enhanced user experience
const dynamicContent = document.querySelector('#dynamicContent');
const addContentBtn = document.querySelector('#addContent');

addContentBtn.addEventListener('click', function() {
    const newElement = document.createElement('p');
    newElement.innerText = 'New content added!';
    dynamicContent.appendChild(newElement);
});
