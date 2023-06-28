import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Header  from  './Components/Header/Header.jsx'

function App() {
  return(
    <div className='App'>
    <Router> {/*Router Anununcia que existirão rotas*/}
      <Header />
      <Routes>{/*Routes defini especificamente as  rotas*/}
        <Route path='/' exact element={<Home />}></Route>
      </Routes>
    </Router>
  </div>
  )
}

export default App;