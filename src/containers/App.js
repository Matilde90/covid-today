import React, { Component } from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearcBox'
import './App.css'
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
    constructor() {
        super()
        this.state = {
            countries: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        console.log(event.target.value);
        const searchfield = event.target.value
        this.setState(() => ({ searchfield }))
    }

    componentDidMount() {
        fetch("https://api.covid19api.com/summary")
            .then(response => response.json())
            .then((data) => {
                console.log(data.Global.NewConfirmed)
                return this.setState({ countries: data.Countries })
            })
    }

    render() {
        const { countries, searchfield } = this.state
        const filteredCountries = countries.filter(country => {
            return country.Country.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !countries.length ?
            <h1>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='title'>Covid-19 data per country</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <ErrorBoundry>
                    <CardList countries={filteredCountries} />
                    </ErrorBoundry>
                </div>
            )
    }
}

export default App
