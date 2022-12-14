import Tool from './Tool'

export default class Brush extends Tool {
  private mouseDown: boolean | undefined
  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
    this.listen()
  }

  listen() {
    this.canvas.onmouseup = this.mouseUpHandler.bind(this)
    this.canvas.onmousedown = this.mouseDownHandler.bind(this)
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
  }

  mouseUpHandler() {
    this.mouseDown = false
  }
  mouseDownHandler(e: MouseEvent): void {
    if (e.target instanceof HTMLCanvasElement) {
      this.mouseDown = true
      this.ctx?.beginPath()
      this.ctx?.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
  }
  mouseMoveHandler(e: MouseEvent): void {
    if (this.mouseDown && e.target instanceof HTMLCanvasElement) {
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
  }
  draw(x: number, y: number): void {
    this.ctx?.lineTo(x, y)
    this.ctx?.stroke()
  }
}
