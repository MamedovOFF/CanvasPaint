import { makeAutoObservable } from 'mobx'
import Brush from '../Tools/Brush'
import Rect from '../Tools/Rect'

class ToolState {
  tool: null | Brush | Rect = null
  constructor() {
    makeAutoObservable(this)
  }

  setTool(tool: Brush | Rect) {
    this.tool = tool
  }
}

export default new ToolState()
