class SVG {
  constructor() {
    this.textEl = "";
    this.shapeEl = "";
  }
  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>
        `;
  }

  setText(userMessage, color) {
    this.textEl = `<text x="10" y="10" text-anchor = 'middle' fill = '${color}'>${userMessage}</text>`;
  }

  setShape(shape) {
    this.shapeEl = shape.render();
  }
}
