import React, { Component } from 'react'
import CardList from './CardList'
import { theories } from './theories.js'
import SearchBox from './SearcBox'
import './App.css'
import Scroll from './Scroll'

class App extends Component {
    constructor() {
        super()
        this.state = {
            theories: theories,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        const searchfield = event.target.value
        this.setState(()=> ({searchfield}))
    }

    render() {
        const filteredTheories = this.state.theories.filter(theory => {
            return theory.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        if (this.state.theories.length == 0) {
            return <h1>Loading</h1>
        } else {
            return (
                <div className='tc'>
                    <h1 className='title'>Theories of emotions</h1>
                        <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList theories={filteredTheories} />
                    </Scroll>
                </div>
            )
        }
    }
}

export default App
