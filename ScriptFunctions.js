var statsPassed = false; // Variable to track if stats section has been scrolled past

window.addEventListener('scroll', function() {
    console.log("Scrolling...");
    var scrollTop = window.scrollY;
    var headerTexts = document.querySelector('.WebsiteHeaderTexts');
    var opacity = 1 - (scrollTop / 300); // Adjust 200 based on when you want the effect to start

    // Limit the opacity between 0 and 1
    opacity = Math.min(1, Math.max(0, opacity));

    // Apply opacity to the container
    headerTexts.style.opacity = opacity;

    var stats = document.querySelectorAll('.StatsLargerText');
    var scrollPosition = window.scrollY + window.innerHeight / 1.5; // Adjusted scroll position calculation

    stats.forEach(function(stat) {
        var position = stat.parentElement.getBoundingClientRect().top + window.scrollY;

        if (position < scrollPosition) {
            stat.style.opacity = 1; // Apply opacity directly to the stat element, not its parent
            stat.style.transform = 'translateY(0)'; // Apply transform directly to the stat element, not its parent
            stat.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out'; // Apply transition directly to the stat element, not its parent

            // If the stats section is scrolled past, set statsPassed to true
            statsPassed = true;
        } else {
            // If the stats section is not visible, and it was previously scrolled past, fade out the stats
            if (statsPassed) {
                stat.style.opacity = 0;
                stat.style.transform = 'translateY(20px)'; // You can adjust this value for a smoother transition
            }
        }
    });
});

window.addEventListener('scroll', function() {
    console.log("Scrolling...");
    var scrollTop = window.scrollY;
    var headerTexts = document.querySelector('.WebsiteHeaderTexts');
    var opacity = 1 - (scrollTop / 300); // Adjust 200 based on when you want the effect to start

    // Limit the opacity between 0 and 1
    opacity = Math.min(1, Math.max(0, opacity));

    // Apply opacity to the container
    headerTexts.style.opacity = opacity;

    var stats = document.querySelectorAll('.Stats');
    var scrollPosition = window.scrollY + window.innerHeight / 1.5; // Adjusted scroll position calculation

    stats.forEach(function(stat) {
        var position = stat.parentElement.getBoundingClientRect().top + window.scrollY;

        if (position < scrollPosition) {
            stat.style.opacity = 1; // Apply opacity directly to the stat element, not its parent
            stat.style.transform = 'translateY(0)'; // Apply transform directly to the stat element, not its parent
            stat.style.transition = 'opacity 1s ease-in-out, transform 1s ease-in-out'; // Apply transition directly to the stat element, not its parent

            // If the stats section is scrolled past, set statsPassed to true
            statsPassed = true;
        } else {
            // If the stats section is not visible, and it was previously scrolled past, fade out the stats
            if (statsPassed) {
                stat.style.opacity = 0;
                stat.style.transform = 'translateY(20px)'; // You can adjust this value for a smoother transition
            }
        }
    });
});

const stickySections = [...document.querySelectorAll('.sticky')];
let images = [
    'https://images.unsplash.com/photo-1697498435309-2c7864cfd607?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1704426882813-8acfff020487?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1698681908648-962c6048ec3e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1704869881379-4e88e66c0248?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://plus.unsplash.com/premium_photo-1705294359679-0c3e99b54465?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1704152282392-3cf7bdc2bce3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1637140945341-f28ada987326?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1707823585193-850a928684e7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1697541283989-bbefb5982de9?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scroll_section').appendChild(image);
    });
});

window.addEventListener('scroll', (e) => {
    stickySections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const parentRect = section.parentElement.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= window.innerHeight) {
            transform(section);
        }
    });
});

function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
    let scrollPercentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    scrollPercentage = scrollPercentage < 0 ? 0 : scrollPercentage > 160 ? 160 : scrollPercentage; //This needs to be changed too, need to check the developer tools while adjusting this

    scrollSection.style.transform = `translate3d(${-(scrollPercentage)}vw, 0, 0)`;
}

document.addEventListener("DOMContentLoaded", function() {
    const secondInformationSection = document.querySelector(".SecondInformationSection");
    const coin1 = document.querySelector(".Coin1");
    
    // Get the width of the SecondInformationSection
    const secondInformationSectionWidth = secondInformationSection.offsetWidth;
    
    // Set the left position of Coin1 to half of the width of SecondInformationSection
    coin1.style.left = `calc(50% - ${secondInformationSectionWidth / 2}px)`;
});

window.addEventListener('DOMContentLoaded', (event) => {
    const container = document.getElementById('coinContainer');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const coin1 = document.getElementById('coin1');
    const coin2 = document.getElementById('coin2');
    const coin3 = document.getElementById('coin3');
    const coin4 = document.getElementById('coin4');
    const coin5 = document.getElementById('coin5');

    // Set coin1 to the largest size
    coin1.style.width = '500px'; // Adjust the size of coin1 as needed
    coin1.style.height = 'auto';
    console.log("Hello");

    // Function to get random position
    function getRandomPosition() {
        const x = Math.floor(Math.random() * (containerWidth - 200)); // Adjust 300 to ensure the coin remains within container
        const y = Math.floor(Math.random() * (containerHeight - 200)); // Adjust 300 to ensure the coin remains within container
        return { x, y };
    }

    // Function to get random size for coins 2-5
    function getRandomSize() {
        const width = Math.floor(Math.random() * 101) + 230; // Random width between 100px and 200px
        return { width, height: 'auto' };
    }

    // Apply random positions and sizes to coins 2-5
    const coin2Position = { x: 60, y: 10 }; // Manually set position for coin2
    const coin3Position = { x: 30, y: 0 }; // Manually set position for coin3
    const coin4Position = { x: 100, y: 160 }; // Manually set position for coin4
    const coin5Position = { x: 40, y: 0 }; // Manually set position for coin5

    const coins = [
        { element: coin2, duration: '8s', position: coin2Position },
        { element: coin3, duration: '7s', position: coin3Position },
        { element: coin4, duration: '6s', position: coin4Position },
        { element: coin5, duration: '5s', position: coin5Position }
    ];

    coins.forEach(({ element, duration, position }) => {
        const { x, y } = position;
        const { width, height } = getRandomSize();

        element.style.position = 'relative';
        element.style.left = `${x}px`;
        element.style.top = `${y}px`;
        element.style.width = `${width}px`;
        element.style.height = height;
        element.style.animation = `float ${duration} ease-out infinite`;
    });
});