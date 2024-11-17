// functions
function themeButton() {
    document.body.classList.toggle('light-mode');
    document.querySelectorAll('.omahti-analytics-button, .navbar, .sign-in-button, .sign-up-button, .all-divisions-button, .get-started-button, .more-analytics-button, .projects-card, .projects-button, .button-icon, .sign-up-button-2, .contact-button, .theme-button').forEach(button => {
        button.classList.toggle('light-mode');
    });
    document.querySelectorAll('.main-text').forEach(element => {
        if (document.body.classList.contains('light-mode')) {
            element.style.color = 'black'; 
        } else {
            element.style.color = 'white'; 
        }
    });
    document.querySelectorAll('.contributor').forEach(element => {
        if (document.body.classList.contains('light-mode')) {
            element.style.color = 'black'; 
        } else {
            element.style.color = '#ededed'; 
        }
    });
    document.querySelectorAll('.footer-title').forEach(element => {
        if (document.body.classList.contains('light-mode')) {
            element.style.color = 'black'; 
        } else {
            element.style.color = '#ededed'; 
        }
    });
}
function toggleContributor() {
    const moreContributor = document.querySelector('.more-contributors-name');
    const contributor = document.querySelector('.contributors-name');
    const button = document.querySelector('.contributors-name-button');

    if (moreContributor.style.display === 'none' || moreContributor.style.display === '') {
        contributor.style.display = 'none';
        moreContributor.style.display = 'block';
        button.textContent = 'Show less';
    } else {
        contributor.style.display = 'block';
        moreContributor.style.display = 'none';
        button.textContent = '+3 more';
    }
}
function toggleProjects() {
    const moreProjects = document.querySelector('.more-projects');
    const button = document.querySelector('.projects-button');
    const startText = document.querySelector('.start');
    const iconPath = button.querySelector('.button-icon path');
    const buttonText = button.querySelector('.button-text');
    const buttonStyle = button.querySelector('.projects-button');
    const backgroundBorder = document.querySelector('.projects');

    if (moreProjects.style.display === 'none') {
        moreProjects.style.display = 'grid';  
        buttonText.textContent = 'Collapse';
        iconPath.setAttribute("d", "M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"); // Arrow-up icon path
        startText.style.opacity = '0.5';
        buttonStyle.style.width = '164px';
        backgroundBorder.style.borderBottom = 'none';
    } else {
        moreProjects.style.display = 'none'; 
        buttonText.textContent = 'More';
        iconPath.setAttribute("d", "M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"); // Arrow-down icon path
        startText.style.display = 'block';
        startText.style.opacity = '1';
    }
}

// buttons yang jika diklik, akan automatis scroll ke bagian lain
function scrollHome () {
    const analyticsDiv = document.querySelector ('.main-1');
    analyticsDiv .scrollIntoView({behavior: "smooth"});
}

function scrollAnalytics () {
    const analyticsDiv = document.querySelector ('.main-2');
    analyticsDiv .scrollIntoView({behavior: "smooth"});
}

// buttons yang hanya menampilkan pop-up
document.getElementById('signUp').addEventListener('click', function() {
    alert('Redirecting to Sign up form...');
});
document.getElementById('signIn').addEventListener('click', function() {
    alert('Redirecting to Sign in form...');   
});
document.getElementById('divisions').addEventListener('click', function() {
    alert('Redirecting to Divisions of OmahTI...')
});
document.getElementById('features').addEventListener('click', function() {
    alert('Redirecting to Features...')
});
document.getElementById('getStarted').addEventListener('click', function () {
    alert('Redirecting to Sign Up or Sign In page...')
});
document.getElementById('allDivisions').addEventListener('click', function() {
    alert('Redirecting to Divisions of OmahTI...')
});
document.getElementById('signUp2').addEventListener('click', function() {
    alert('Redirecting to Sign up form...');
});
document.getElementById('cookiePolicy').addEventListener('click', function() {
    alert('Redirecting to Cookies Policy...')
});
document.getElementById('termsCondition').addEventListener('click', function() {
    alert('Redirecting to Terms and Conditiion...')
});
document.getElementById('privacyPolicy').addEventListener('click', function() {
    alert('Redirecting to Privacy Policy...')
});