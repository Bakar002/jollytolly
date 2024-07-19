// Function to handle navigation clicks
function handleNavigationClick(event) {
    event.preventDefault();
    const target = event.currentTarget;
    const href = target.getAttribute('href');
    const sectionId = href.slice(1);
    
    // Update the title based on the section clicked
    let pageTitle;
    switch(sectionId) {
        case 'home':
            pageTitle = 'Home - Jollytoe';
            break;
        case 'watch':
            pageTitle = 'Watch - Jollytoe';
            break;
        case 'about':
            pageTitle = 'About - Jollytoe';
            break;
        default:
            pageTitle = 'Home - Jollytoe';
    }
    document.title = pageTitle;

    // Hide all sections except the one specified in the href
    hideAllSections(sectionId);
}

// Attach click event listeners to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', handleNavigationClick);
});

// Initially show the home section
hideAllSections('home');

// Function to hide all sections except the specified one
function hideAllSections(exceptSection) {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const classNames = section.className.split(' ');
        if (!classNames.includes(exceptSection + '-section')) {
            section.style.display = 'none';
        } else {
            section.style.display = 'block';
        }
    });
}
