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

function PairOfBarriers(height, opening, x) {
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

// const b = new pairOfBarriers(700, 200, 800)
// document.querySelector('[wm-flappy]').appendChild(b.element)

function Barriers(height, width, opening, space, notifyReady) {
    this.pairs = [
        new PairOfBarriers(height, opening, width),
        new PairOfBarriers(height, opening, width + space),
        new PairOfBarriers(height, opening, width + space * 2),
        new PairOfBarriers(height, opening, width + space * 3)
    ]

    const displacement = 3
    this.animateMoviment = () => {
        this.pairs.forEach(pair => {
            pair.setX(pair.getX() - displacement)

            // when the element leaves the screen
            if(pair.getX() < -pair.getWidth()) {
                pair.setX(pair.getX() + space * this.pairs.length)
                pair.drawOpening()
            }

            const middle = width / 2
            const crossedTheMiddle = pair.getX() + displacement >= middle 
                && pair.getX() < middle
            if(crossedTheMiddle) notifyReady()
        })
    }
}

// const barriers = new Barriers(700, 1200, 200, 400)
// const gameArea = document.querySelector('[wm-flappy')
// barriers.pairs.forEach(pair => gameArea.appendChild(pair.element))
// setInterval(() => {
//     barriers.animateMoviment()
// }, 20)