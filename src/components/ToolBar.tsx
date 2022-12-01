import Button from './Button'
import BrushImg from './../assets/img/brush.svg'
import RectImg from './../assets/img/rect.svg'
import CircleImg from './../assets/img/circle.svg'
import EraserImg from './../assets/img/eraser.svg'
import LineImg from './../assets/img/line.svg'
import UndoImg from './../assets/img/undo.svg'
import RedoImg from './../assets/img/redo.svg'
import SaveImg from './../assets/img/save.svg'
import toolState from '../store/toolState'
import canvasState from '../store/canvasState'
import Brush from '../Tools/Brush'
import Rect from '../Tools/Rect'
import Eraser from '../Tools/Eraser'
import Circle from '../Tools/Circle'
import Line from '../Tools/Line'

const ToolBar = () => {
  return (
    <div className='toolbar'>
      <div className='tools'>
        <Button
          img={BrushImg}
          alt='Brush'
          onClick={() => toolState.setTool(new Brush(canvasState.canvas as HTMLCanvasElement))}
        />
        <Button
          img={RectImg}
          alt='Rect'
          onClick={() => toolState.setTool(new Rect(canvasState.canvas as HTMLCanvasElement))}
        />
        <Button
          img={CircleImg}
          alt='Circle'
          onClick={() => toolState.setTool(new Circle(canvasState.canvas as HTMLCanvasElement))}
        />
        <Button
          img={EraserImg}
          alt='Eraser'
          onClick={() => toolState.setTool(new Eraser(canvasState.canvas as HTMLCanvasElement))}
        />
        <Button
          img={LineImg}
          alt='Line'
          onClick={() => toolState.setTool(new Line(canvasState.canvas as HTMLCanvasElement))}
        />
        <input type='color' />
      </div>
      <div className='tools'>
        <Button img={UndoImg} alt='Undo' />
        <Button img={RedoImg} alt='Redo' />
        <Button img={SaveImg} alt='Save' />
      </div>
    </div>
  )
}

export default ToolBar
