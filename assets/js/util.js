// Utility functions for portfolio
(function() {
  'use strict';

  // Simple utility for common operations
  window.PortfolioUtils = {
    
    // Detect if element is in viewport
    isInViewport: function(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    },

    // Add class to element
    addClass: function(el, className) {
      if (el.classList)
        el.classList.add(className);
      else
        el.className += ' ' + className;
    },

    // Remove class from element
    removeClass: function(el, className) {
      if (el.classList)
        el.classList.remove(className);
      else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    },

    // Toggle class on element
    toggleClass: function(el, className) {
      if (el.classList) {
        el.classList.toggle(className);
      } else {
        var classes = el.className.split(' ');
        var existingIndex = classes.indexOf(className);
        if (existingIndex >= 0)
          classes.splice(existingIndex, 1);
        else
          classes.push(className);
        el.className = classes.join(' ');
      }
    }
  };

})();
