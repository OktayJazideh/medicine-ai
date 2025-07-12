/**
 * Smooth scroll utility functions
 */

/**
 * Smooth scroll to a specific element by ID
 * @param {string} targetId - The ID of the target element
 * @param {Object} options - Scroll options
 * @param {string} options.behavior - Scroll behavior ('smooth' | 'auto')
 * @param {string} options.block - Vertical alignment ('start' | 'center' | 'end' | 'nearest')
 * @param {string} options.inline - Horizontal alignment ('start' | 'center' | 'end' | 'nearest')
 */
export const smoothScrollTo = (targetId, options = {}) => {
  const defaultOptions = {
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  }
  
  const scrollOptions = { ...defaultOptions, ...options }
  
  const target = document.querySelector(targetId)
  if (target) {
    target.scrollIntoView(scrollOptions)
    return true
  }
  return false
}

/**
 * Smooth scroll to top of the page
 * @param {Object} options - Scroll options
 */
export const scrollToTop = (options = {}) => {
  const defaultOptions = {
    behavior: 'smooth',
    block: 'start'
  }
  
  const scrollOptions = { ...defaultOptions, ...options }
  
  window.scrollTo({
    top: 0,
    ...scrollOptions
  })
}

/**
 * Smooth scroll to a specific Y position
 * @param {number} y - Y position to scroll to
 * @param {Object} options - Scroll options
 */
export const scrollToY = (y, options = {}) => {
  const defaultOptions = {
    behavior: 'smooth'
  }
  
  const scrollOptions = { ...defaultOptions, ...options }
  
  window.scrollTo({
    top: y,
    ...scrollOptions
  })
}

/**
 * Check if element is in viewport
 * @param {Element} element - The element to check
 * @param {number} threshold - Threshold percentage (0-1)
 * @returns {boolean}
 */
export const isInViewport = (element, threshold = 0.1) => {
  if (!element) return false
  
  const rect = element.getBoundingClientRect()
  const windowHeight = window.innerHeight || document.documentElement.clientHeight
  
  return (
    rect.top <= windowHeight * (1 - threshold) &&
    rect.bottom >= windowHeight * threshold
  )
}

/**
 * Add smooth scroll behavior to all anchor links
 * @param {string} selector - CSS selector for anchor links (default: 'a[href^="#"]')
 */
export const initSmoothScroll = (selector = 'a[href^="#"]') => {
  const links = document.querySelectorAll(selector)
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href')
      
      // Skip if it's an external link or empty
      if (!href || href === '#' || href.startsWith('http')) {
        return
      }
      
      e.preventDefault()
      smoothScrollTo(href)
    })
  })
}

/**
 * Smooth scroll with offset for fixed header
 * @param {string} targetId - The ID of the target element
 * @param {number} offset - Offset in pixels (default: 70 for navbar height)
 * @param {Object} options - Additional scroll options
 */
export const smoothScrollWithOffset = (targetId, offset = 70, options = {}) => {
  const target = document.querySelector(targetId)
  if (!target) return false
  
  const targetPosition = target.offsetTop - offset
  
  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
    ...options
  })
  
  return true
} 