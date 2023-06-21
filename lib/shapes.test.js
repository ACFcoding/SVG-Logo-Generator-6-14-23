const {Circle, Triangle, Square} = require("./shapes")
//start tests for circle
describe('Circle', () => {

    test("render SVG for red circle", () => {
        const svgExpectation = `<circle cx="125" cy="125" r="55" fill="red" />
        `
        const circle = new Circle()
        circle.setColor("red")
        const svgResult = circle.render()
        expect(svgResult).toEqual(svgExpectation)
    })
  });
//test for triangle
describe('Triangle', () => {

    test("render SVG for red triangle", () => {
        const svgExpectation = `<polygon points="150, 18 244, 182 56, 182" fill="red" />
        `
        const triangle = new Triangle()
        triangle.setColor("red")
        const svgResult = triangle.render()
        expect(svgResult).toEqual(svgExpectation)
    })
  });
//test for square
describe('Square', () => {

    test("render SVG for red square", () => {
        const svgExpectation = `<rect x="100" y="100" width="100" height="100" fill="$red" />
        `
        const square = new Square()
        square.setColor("red")
        const svgResult = square.render()
        expect(svgResult).toEqual(svgExpectation)
    })
  });