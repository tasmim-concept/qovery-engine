const options = {
    root: null, // viewport
    rootMargin: '0px',
    threshold: 0
}

const startAnim = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            addClassName(entry.target, 'start-anim')
        }
    })
}

const observer = new IntersectionObserver(startAnim, options)

const toAnimate = document.getElementsByClassName('to-animate')

for (let i = 0; i < toAnimate.length; i++) {
    observer.observe(toAnimate[i])
}

const addClassName = function (element, className) {
    const classNames = element.className.split(' ')
    if (classNames.indexOf(className) === -1) {
        classNames.push(className)
    }
    element.className = classNames.join(' ')
}
