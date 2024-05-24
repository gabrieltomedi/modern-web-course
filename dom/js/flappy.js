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
    this.animate = () => {
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

function Bird(gameHeight) {
    let flying = false

    this.element = newElement('img', 'passaro')
    this.element.src = 'imgs/passaro.png'

    this.getY = () => parseInt(this.element.style.bottom.split('px')[0])
    this.setY = y => this.element.style.bottom = `${y}px`

    window.onkeydown = e => flying = true
    window.onkeyup = e => flying = false

    this.animate = () => {
        const newY = this.getY() + (flying ? 8 : -5)
        const maxHeight = gameHeight - this.element.clientHeight

        if (newY <= 0) {
            this.setY(0)
        } else if (newY >= maxHeight) {
            this.setY(maxHeight)
        } else {
            this.setY(newY)
        }
    }

    this.setY(gameHeight / 2)
}

function Progress() {
    this.element = newElement('div', 'progresso')
    this.updatePoints = points => {
        this.element.innerHTML = points
    }
    this.updatePoints(0)
}

// const barriers = new Barriers(700, 1200, 200, 400)
// const bird = new Bird(700)
// const progress = new Progress()
// const gameArea = document.querySelector('[wm-flappy]')

// gameArea.appendChild(bird.element)
// gameArea.appendChild(progress.element)
// barriers.pairs.forEach(pair => gameArea.appendChild(pair.element))
// setInterval(() => {    
//     barriers.animate()
//     bird.animate()
// }, 20)

function isOverlapping(elementA, elementB) {
    const a = elementA.getBoundingClientRect()
    const b = elementB.getBoundingClientRect()

    const horizontal = a.left + a.width >= b.left
        && b.left + b.width >= a.left
    const vertical = a.top + a.height >= b.top
        && b.top + b.height >= a.top
    return horizontal && vertical
}

function collided(bird, barriers) {
    let collided = false 
    barriers.pairs.forEach(pairOfBarriers => {
        if(!collided) {
            const upperBarrier = pairOfBarriers.upper.element
            const bottomBarrier = pairOfBarriers.bottom.element
            collided = isOverlapping(bird.element, upperBarrier)
                || isOverlapping(bird.element, bottomBarrier)
        }
    })

    return collided
}

function FlappyBird() {
    let points = 0

    const gameArea = document.querySelector('[wm-flappy]')
    const height = gameArea.clientHeight
    const width = gameArea.clientWidth

    const progress = new Progress()
    const barriers = new Barriers(height, width, 200, 400, 
        () => progress.updatePoints(++points))
    const bird = new Bird(height)

    gameArea.appendChild(progress.element)
    gameArea.appendChild(bird.element)
    barriers.pairs.forEach(pair => gameArea.appendChild(pair.element))

    this.start = () => {
        const timer = setInterval(() => {
            barriers.animate()
            bird.animate()

            if(collided(bird, barriers)) {
                clearInterval(timer)
            }
        }, 20)
    }
}

new FlappyBird().start()