export default class Tool {
  protected canvas: HTMLCanvasElement
  protected ctx: CanvasRenderingContext2D | null
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.ctx = canvas.getContext('2d')
    this.destroyEvent()
  }
  set fillColor(color: string) {
    this.ctx!.fillStyle = color
  }
  set strokeColor(color: string) {
    this.ctx!.strokeStyle = color
  }

  set lineWidth(width: number) {
    this.ctx!.lineWidth = width
  }

  destroyEvent() {
    this.canvas.onmouseup = null
    this.canvas.onmousemove = null
    this.canvas.onmousedown = null
  }
}
