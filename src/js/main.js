// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburgerButton = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const header = document.getElementById('site-header');
  
  if (hamburgerButton && mobileNav) {
    // Toggle mobile menu
    hamburgerButton.addEventListener('click', function(e) {
      e.stopPropagation(); // Prevent event from bubbling up
      
      // Toggle the mobile nav
      if (mobileNav.classList.contains('hidden')) {
        // Show the menu with animation
        mobileNav.classList.remove('hidden');
        mobileNav.classList.add('animate-fadeIn');
        
        // Change hamburger to X
        hamburgerButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        `;
      } else {
        // Hide the menu with animation
        mobileNav.classList.add('animate-fadeOut');
        
        // After animation completes, hide the menu
        setTimeout(() => {
          mobileNav.classList.add('hidden');
          mobileNav.classList.remove('animate-fadeIn', 'animate-fadeOut');
          
          // Change X back to hamburger
          hamburgerButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          `;
        }, 300);
      }
    });
    
    // Prevent menu from closing when clicking inside it
    mobileNav.addEventListener('click', function(e) {
      e.stopPropagation(); // Stop the click from propagating to document
    });
    
    // Close mobile menu when clicking on a menu link
    const mobileNavLinks = mobileNav.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        // Only close if it's not an external link or anchor link
        if (!this.getAttribute('href').startsWith('#') && 
            !this.getAttribute('href').startsWith('http') && 
            !this.getAttribute('target')) {
          
          // Hide the menu with animation
          mobileNav.classList.add('animate-fadeOut');
          
          // After animation completes, hide the menu
          setTimeout(() => {
            mobileNav.classList.add('hidden');
            mobileNav.classList.remove('animate-fadeIn', 'animate-fadeOut');
            
            // Change X back to hamburger
            hamburgerButton.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            `;
          }, 300);
        }
      });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
      const isClickInsideMenu = mobileNav.contains(event.target);
      const isClickOnHamburger = hamburgerButton.contains(event.target);
      
      if (!isClickInsideMenu && !isClickOnHamburger && !mobileNav.classList.contains('hidden')) {
        // Hide the menu with animation
        mobileNav.classList.add('animate-fadeOut');
        
        // After animation completes, hide the menu
        setTimeout(() => {
          mobileNav.classList.add('hidden');
          mobileNav.classList.remove('animate-fadeIn', 'animate-fadeOut');
          
          // Change X back to hamburger
          hamburgerButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          `;
        }, 300);
      }
    });
    
    // Close mobile menu when window is resized to desktop size
    window.addEventListener('resize', function() {
      if (window.innerWidth >= 768 && !mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('animate-fadeIn', 'animate-fadeOut');
        
        // Change X back to hamburger
        hamburgerButton.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        `;
      }
    });
  }
  
  // Theme toggle functionality
  const lightButton = document.getElementById('theme-light');
  const darkButton = document.getElementById('theme-dark');
  const systemButton = document.getElementById('theme-system');
  
  if (lightButton && darkButton && systemButton) {
    lightButton.addEventListener('click', function() {
      setTheme('light');
    });
    
    darkButton.addEventListener('click', function() {
      setTheme('dark');
    });
    
    systemButton.addEventListener('click', function() {
      setTheme('system');
    });
  }
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      
      if (href !== '#') {
        e.preventDefault();
        
        const targetElement = document.querySelector(href);
        
        if (targetElement) {
          // Close mobile menu if open
          if (mobileNav && !mobileNav.classList.contains('hidden')) {
            mobileNav.classList.add('hidden');
            mobileNav.classList.remove('animate-fadeIn', 'animate-fadeOut');
            
            // Change X back to hamburger
            if (hamburgerButton) {
              hamburgerButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              `;
            }
          }
          
          // Scroll to target
          window.scrollTo({
            top: targetElement.offsetTop - (header ? header.offsetHeight : 0) - 20,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // Add active class to current page link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    
    if (linkPath === currentPath || 
        (currentPath.includes('/blog/') && linkPath === '/blog') ||
        (currentPath.includes('/projects/') && linkPath === '/projects')) {
      link.classList.add('bg-opacity-20');
      
      if (linkPath === '/') {
        link.classList.add('bg-blue-50', 'dark:bg-blue-900/30');
      } else if (linkPath === '/projects') {
        link.classList.add('bg-purple-50', 'dark:bg-purple-900/30');
      } else if (linkPath === '/blog') {
        link.classList.add('bg-green-50', 'dark:bg-green-900/30');
      } else if (linkPath === '/about') {
        link.classList.add('bg-purple-50', 'dark:bg-purple-900/30');
      } else if (linkPath === '/contact') {
        link.classList.add('bg-pink-50', 'dark:bg-pink-900/30');
      }
    }
  });
}); 