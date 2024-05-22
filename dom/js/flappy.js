function newElement(tagName, className) {
    const element = document.createElement(tagName)
    element.className = className
    return element
}

function Barrier(reverse = false) {
    this.element = newElement('div', 'barreira')

    const border = newElement('div', 'borda')
    const body = newElement('div', 'corpo')
    this.element.appendChild(reverse ? body : border)
    this.element.appendChild(reverse ? border : body)

    this.setHeight = height => body.style.height = `${height}px`
}

// const b = new Barrier(true)
// b.setHeight(300)
// document.querySelector('[wm-flappy').appendChild(b.element)

function pairOfBarriers(height, opening, x) {
    this.element = newElement('div', 'par-de-barreiras')

    this.upper = new Barrier(true)
    this.bottom = new Barrier(false)

    this.element.appendChild(this.upper.element)
    this.element.appendChild(this.bottom.element)

    this.drawOpening = () => {
        const upperHeight = Math.random() * (height - opening)
        const bottomHeight = height - opening - upperHeight
        this.upper.setHeight(upperHeight)
        this.bottom.setHeight(bottomHeight)
    }

    this.getX = () => parseInt(this.element.style.left.split('px')[0])
    this.setX = x => this.element.style.left = `${x}px`
    this.getWidth = () => this.element.clientWidth

    this.drawOpening()
    this.setX(x)
}

const b = new pairOfBarriers(700, 200, 800)
document.querySelector('[wm-flappy]').appendChild(b.element)