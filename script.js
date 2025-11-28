var crsr = document.querySelector("#cursor")/* * This line is queryselector used to select html element in js*/
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets) {
    // The cursor follows the mouse position
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";

    // The blur effect follows the mouse position, but with an offset
    blur.style.left = dets.x - 150 + "px";
    blur.style.top = dets.y - 150 + "px";
});
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    crsr.style.scale = 3
    crsr.style.border = "1px solid #fff"
    crsr.style.backgroundColor = "transparent"
   })

   elem.addEventListener("mouseleave",function(){
    crsr.style.scale = 1
    crsr.style.border = "0px solid #8452DB"
    crsr.style.backgroundColor = "#8452DB"
   })
})

gsap.to("#nav",{
    backgroundColor: "#000",
    height: "90px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img,#about-us-in",{
    y: 90,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})


gsap.from(".card",{
    scale: 0.8,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x: -70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2",{
    y:70,
    x: 70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers:true,
        start:"top 75%",
        end:"top 70%",
        scrub:3
    }
})

// ===== ADD THIS NEW CODE TO YOUR EXISTING script.js =====

// Mobile Navigation Functionality
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        
        // Animate hamburger menu
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
}

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768 && mobileMenu) {
        mobileMenu.classList.remove('active');
        const spans = mobileMenuBtn?.querySelectorAll('span');
        if (spans) {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    }
});

// Gallery Filtering (for gallery.html)
function filterGallery(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    // Update active button
    filterBtns.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter items
    galleryItems.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
            item.classList.remove('hidden');
            item.classList.add('fade-in');
        } else {
            item.classList.add('hidden');
            item.classList.remove('fade-in');
        }
    });
}

// Form Submissions
document.addEventListener('DOMContentLoaded', function() {
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Message sent successfully! We\'ll get back to you soon.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
    
    // Membership Form
    const membershipForm = document.getElementById('membershipForm');
    if (membershipForm) {
        membershipForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Submitting...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Application submitted successfully! We\'ll review your application and get back to you within 2-3 days.');
                membershipForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 3000);
        });
    }
    
    // Event Registration Buttons
//     const registerBtns = document.querySelectorAll('.register-btn');
//     registerBtns.forEach(btn => {
//         btn.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             const eventTitle = this.closest('.event-card').querySelector('h3').textContent;
//             const originalText = this.textContent;
            
//             this.textContent = 'Registering...';
//             this.disabled = true;
            
//             setTimeout(() => {
//                 alert(`Successfully registered for "${eventTitle}"! Check your email for confirmation.`);
//                 this.textContent = originalText;
//                 this.disabled = false;
//             }, 2000);
//         });
//     });
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            // Add active class to clicked link
            this.classList.add('active');
        });
    });
});

// Add loading animation for buttons
function addLoadingAnimation(button, originalText, loadingText) {
    button.innerHTML = `<span class="loading-spinner"></span> ${loadingText}`;
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Social media click tracking (optional analytics)
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-nav-icon, .footer-social-icon');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log(`Social media clicked: ${this.href}`);
            // You can add analytics tracking here
        });
    });
});

// Fix Navigation Click Issues
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('#nav h4 a, .footer-nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Ensure the click works immediately
            e.stopPropagation();
            
            // Small delay to ensure cursor effects don't interfere
            setTimeout(() => {
                if (this.href && this.href !== window.location.href) {
                    window.location.href = this.href;
                }
            }, 50);
        });
    });
});

// Ensure cursor doesn't interfere with clicks
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.getElementById('cursor');
    const cursorBlur = document.getElementById('cursor-blur');
    
    if (cursor) cursor.style.pointerEvents = 'none';
    if (cursorBlur) cursorBlur.style.pointerEvents = 'none';
});
console.log('Enhanced navigation and interactivity loaded successfully!');