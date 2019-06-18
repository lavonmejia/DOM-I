const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },

  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },


  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// Set Nav

document.getElementsByTagName('nav')[0].getElementsByTagName('a')[0].innerText = siteContent["nav"]["nav-item-1"];
document.getElementsByTagName('nav')[0].getElementsByTagName('a')[1].innerText = siteContent["nav"]["nav-item-2"];
document.getElementsByTagName('nav')[0].getElementsByTagName('a')[2].innerText = siteContent["nav"]["nav-item-3"];
document.getElementsByTagName('nav')[0].getElementsByTagName('a')[3].innerText = siteContent["nav"]["nav-item-4"];
document.getElementsByTagName('nav')[0].getElementsByTagName('a')[4].innerText = siteContent["nav"]["nav-item-5"];
document.getElementsByTagName('nav')[0].getElementsByTagName('a')[5].innerText = siteContent["nav"]["nav-item-6"];
const nav = document.querySelector('nav');
[...nav.children].forEach((current) => {
  current.setAttribute('style', 'color: green');
  });

// document.getElementsByTagName('nav')[0].getElementsByTagName('a')[6].appendChild(text, "LET");
var newNavItem2 = document.createElement("a");
nav.prepend(newNavItem2);

var newNavItem1 = document.createElement("a");
newNavItem1.innerHTML = 'PRIOR';
nav.prepend(newNavItem1);

var newNavItem1 = document.createElement("a");
newNavItem1.innerHTML = 'AFTER';
nav.append(newNavItem1);

document.querySelector('newNavItem1');
[...nav.children].forEach((current) => {
  current.setAttribute('style', 'color: green');
  });

// DOM is Awesome
document.getElementsByTagName('h1')[0].innerText=siteContent['cta']['h1'];


// Cta Img
document.getElementById('cta-img').setAttribute('src', siteContent["cta"]["img-src"]);

// Button

document.getElementsByTagName('button')[0].innerText = siteContent["cta"]["button"];


// Main Content

document.querySelectorAll('.text-content > h4')[0].innerText = siteContent['main-content']['features-h4']; 
document.querySelectorAll('.text-content > h4')[1].innerText = siteContent['main-content']['about-h4']; 
document.querySelectorAll('.text-content > h4')[2].innerText = siteContent['main-content']['services-h4']; 
document.querySelectorAll('.text-content > h4')[3].innerText = siteContent['main-content']['product-h4']; 
document.querySelectorAll('.text-content > h4')[4].innerText = siteContent['main-content']['vision-h4']; 


document.querySelectorAll('.text-content > p')[0].innerText = siteContent['main-content']['features-content']; 
document.querySelectorAll('.text-content > p')[1].innerText = siteContent['main-content']['about-content']; 
document.querySelectorAll('.text-content > p')[2].innerText = siteContent['main-content']['services-content']; 
document.querySelectorAll('.text-content > p')[3].innerText = siteContent['main-content']['product-content']; 
document.querySelectorAll('.text-content > p')[4].innerText = siteContent['main-content']['vision-content'];


// Contact
document.querySelector('.contact > h4').innerText = siteContent['contact']['contact-h4']; 

document.querySelectorAll('.contact > p')[0].innerText = siteContent['contact']['address']; 
document.querySelectorAll('.contact > p')[1].innerText = siteContent['contact']['phone']; 
document.querySelectorAll('.contact > p')[2].innerText = siteContent['contact']['email']; 


// Middle Image
document.getElementById('middle-img').setAttribute('src', siteContent['main-content']['middle-img-src']);


//footer
document.querySelector('footer > p').innerText = siteContent['footer']['copyright']; 