import Tool from './Tool'

export default class Rect extends Tool {
  protected mouseDown = false
  protected startX = 0
  protected startY = 0
  protected saved: string | undefined

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
      this.startX = e.pageX - e.target?.offsetLeft
      this.startY = e.pageY - e.target?.offsetTop
      this.saved = this.canvas.toDataURL()
    }
  }
  mouseMoveHandler(e: MouseEvent): void {
    if (this.mouseDown && e.target instanceof HTMLCanvasElement) {
      const height = e.pageX - e.target.offsetLeft - this.startX
      const width = e.pageY - e.target.offsetTop - this.startY
      this.draw(this.startX, this.startY, height, width)
    }
  }
  draw(x: number, y: number, h: number, w: number): void {
    const img = new Image()
    img.src = this.saved ?? ''
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height)
      this.ctx?.beginPath()
      this.ctx?.rect(x, y, h, w)
      this.ctx?.fill()
      this.ctx?.stroke()
    }
  }
}
