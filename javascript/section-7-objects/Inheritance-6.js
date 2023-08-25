function lesson(name, videoID) {
    this.name = name
    this.videoID = videoID
}

const lesson1 = new lesson('Welcome', 123)
const lesson2 = new lesson('See you soon', 456) //prototipo aponta para função
console.log(lesson1, lesson2)



function new1(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const lesson3 = new1(lesson, 'Welcome', 123)
const lesson4 = new1(lesson, 'See you soon', 456)
console.log(lesson3, lesson4)