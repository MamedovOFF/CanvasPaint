import Rect from './Rect'

export default class Line extends Rect {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
  }
  mouseMoveHandler(e: MouseEvent) {
    if (this.mouseDown && e.target instanceof HTMLCanvasElement) {
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
  }
  draw(x: number, y: number) {
    const img = new Image()
    img.src = this.saved ?? ''
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.beginPath()
      this.ctx?.moveTo(this.startX, this.startY)
      this.ctx?.lineTo(x, y)
      this.ctx?.stroke()
    }
  }
}
