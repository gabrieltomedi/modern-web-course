// An factory function retuns a new instance
module.exports = () => {
    return {
        value: 1,
        inc() {
            this.value++
        }
    }
}