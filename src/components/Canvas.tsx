import { observer } from 'mobx-react-lite'
import { useEffect, useRef } from 'react'
import canvasState from '../store/canvasState'
import toolState from '../store/toolState'
import Brush from '../Tools/Brush'

const Canvas = observer(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current)
    toolState.setTool(new Brush(canvasRef.current as HTMLCanvasElement))
  }, [])

  return (
    <div className='canvas'>
      <canvas ref={canvasRef} width={1000} height={800}></canvas>
    </div>
  )
})
export default Canvas
