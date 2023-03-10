import { Component } from 'react';
import SearchBox from './components/SearchBox/SearchBox';
import JagInfo from './components/JagInfo/JagInfo';
import Info from './routes/Home/Info';
import Superhero from './components/Superhero/Superhero';
import './App.css';
import { Routes, Route } from 'react-router-dom'

class App extends Component {
  constructor(){
    super()
    this.state = {
      'jokes': []
    }
  }
  // constructor(){
  //   super()
  //   this.state = {
  //     'pokemon': []
  //   }
  // }

  async componentDidMount() {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke')
    const data = await response.json()
    this.setState(() => {
      return (
        {
          'jokes' : data['id']
        }
      )
    })
    console.log(data)
  //   this.setState(() => {
  //     return({'jokes': data['results']})
  //   })
  }


  //   const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=151')
  //   const data = await response.json()
  //   this.setState(
  //     () => {
  //       return ({'pokemon': data['results']})
  //     })
  // }

  render(){
    return (
      <div className="App">
        {/* <SearchBox jokes={this.state.jokes}/> */}
        <Routes>
          <Route path='/' element= {<SearchBox/>} />
          <Route path='/info' element={<JagInfo/>}/>
          <Route path='/background' element={<Superhero/>}/>
        </Routes>
      </div>
    );
  }
}

export default App;


        /* <SearchBox jokes={this.state.jokes}/> */

