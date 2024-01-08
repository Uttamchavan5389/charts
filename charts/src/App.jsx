
import './App.css'
import ChartLine from './components/ChartLine'
import ChartArea from './components/ChartArea'
import Barchart from './components/Barchart'
function App() {

  return (
    <>
      <p className='bar'>Bar Chart</p>
      <Barchart />
      <br />
      <br />
      <br />
      <br />
      
      <p className='chart'>Chart Line</p>
      <ChartLine />
      <br />
      <br />
      <br />
      <br />

      <p className='area'>Area Chart</p>
      <ChartArea />
      
      

    </>
  )
}

export default App
