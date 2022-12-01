import toolState from '../store/toolState'

const SettingToolbar = () => {
  return (
    <div className='toolbar toolbar_setting'>
      <div className='toolbar_setting__tools'>
        <label htmlFor='lineHeight'>Толщина линии</label>
        <input
          id='lineHeight'
          type='number'
          defaultValue={1}
          min={1}
          max={50}
          onChange={(e) => {
            toolState.setLineWidth(+e.target.value)
          }}
        />
        <label htmlFor='ColorR'>Цвет обводки</label>
        <input
          id='ColorR'
          type='color'
          onChange={(e) => {
            toolState.setColorStroke(e.target.value)
          }}
        />
      </div>
    </div>
  )
}

export default SettingToolbar
