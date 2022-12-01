import Rect from './Rect'

export default class Circle extends Rect {
  constructor(canvas: HTMLCanvasElement) {
    super(canvas)
  }

  mouseMoveHandler(e: MouseEvent): void {
    if (this.mouseDown && e.target instanceof HTMLCanvasElement) {
      const height = e.pageX - e.target.offsetLeft - this.startX
      const width = e.pageY - e.target.offsetTop - this.startY
      const r = Math.sqrt(width ** 2 + height ** 2)
      this.draw(this.startX, this.startY, r)
    }
  }

  draw(x: number, y: number, r: number) {
    const img = new Image()
    img.src = this.saved as string
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.beginPath()
      this.ctx?.arc(x, y, r, 0, 2 * Math.PI)
      this.ctx?.fill()
      this.ctx?.stroke()
    }
  }
}
