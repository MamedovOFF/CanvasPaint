import { makeAutoObservable } from 'mobx'
import Brush from '../Tools/Brush'
import Rect from '../Tools/Rect'
import Eraser from '../Tools/Eraser'

class ToolState {
  tool: null | Brush | Rect | Eraser = null
  constructor() {
    makeAutoObservable(this)
  }

  setTool(tool: Brush | Rect | Eraser) {
    this.tool = tool
  }
  setColorFill(color: string) {
    this.tool!.fillColor = color
  }
  setColorStroke(color: string) {
    this.tool!.strokeColor = color
  }

  setLineWidth(width: number) {
    this.tool!.lineWidth = width
  }
}

export default new ToolState()
