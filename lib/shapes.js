class Shape {
    constructor() {
        this.color = ''
    }
setColor(color) {
    this.color = color
}
}
class Circle extends Shape {
    //render function
    render() {
        return `<circle cx="125" cy="125" r="55" fill="${this.color}" />
        `
    }
}
class Square extends Shape {
    //render function
    render() {
        return `<rect x="100" y="100" width="100" height="100" fill="${this.color}" />
        `
    }
}
class Triangle extends Shape {
    //render function
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        `
    }
}
module.exports = {Circle, Square, Triangle}