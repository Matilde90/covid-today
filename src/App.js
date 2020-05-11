import React, { Component } from 'react'
import CardList from './CardList'
import { theories } from './theories.js'
import SearchBox from './SearcBox'

class App extends Component {
    constructor(){
        super()
        this.state ={
            robots: 'robots',
            searchfield: ''
          }
    }
  render () {
    return (
      <div className='tc'>
        <h1>Theories of emotions</h1>
        <SearchBox />
        <CardList theories={theories} />
      </div>
    )
  }
}

export default App
