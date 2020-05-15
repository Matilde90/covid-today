import React, { Component } from 'react'
import CardList from '../components/CardList'
import { theories } from '../theories.js'
import SearchBox from '../components/SearcBox'
import './App.css'

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
        this.setState(() => ({ searchfield }))
    }

    render() {
        const { theories, searchfield } = this.state
        const filteredTheories = theories.filter(theory => {
            return theory.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !theories.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='title'>Theories of emotions</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <CardList theories={filteredTheories} />
                </div>
            )
    }
}

export default App
