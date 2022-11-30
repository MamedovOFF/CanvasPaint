import { makeAutoObservable } from 'mobx'

class CanvasState {
  canvas: null | HTMLCanvasElement = null

  constructor() {
    makeAutoObservable(this)
  }

  setCanvas(canvas: HTMLCanvasElement | null) {
    this.canvas = canvas
  }
}

export default new CanvasState()
