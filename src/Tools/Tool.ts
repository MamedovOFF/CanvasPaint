export default class Tool {
  protected canvas: HTMLCanvasElement
  protected ctx: CanvasRenderingContext2D | null
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.destroyEvent()
  }
  destroyEvent() {
    this.canvas.onmouseup = null
    this.canvas.onmousemove = null
    this.canvas.onmousedown = null
  }
}
