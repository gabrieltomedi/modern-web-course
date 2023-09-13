function SpeakAfter(seconds, phrase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(phrase)
        }, seconds * 1000)
    })
}

SpeakAfter(3, 'Cool')
    .then(phrase => phrase.concat('!?!'))
    .then(otherPhrase => console.log(otherPhrase))
    .catch(e => console.log(e))