import LinearWithValueLabel from '../components/LinearProgressWithLabel'
import './Screen.css'
function Screen() {
    
  return (
    <div className='container'>
        <div className='bar'>
            <h3>Progress bar</h3>
        <LinearWithValueLabel />
        </div>
    </div>
  )
}

export default Screen