import './App.css'
import Header from './components/Header'
import data from './components/data'
import Place from './components/Place'

function App() {
  const  place = data.map(item =>{
    return(
      <Place key={item.id} {...item} />
    )

  })
  return (
    <div>
      <Header/>
      <div className='main'>
      {place}
      </div>
     
    </div>
  )
}

export default App
