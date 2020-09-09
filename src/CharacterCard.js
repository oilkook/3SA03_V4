import React, { Component } from 'react';
import './App.css';
import CharacterCard from './CharacterCard';
import _ from 'lodash';
const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
    word,
    chars,
    attempt: 1,
    guess: '',
    completed: false
    }
}
export default class WordCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            active: false,
        }
    }
    activate = () => {
        if (!this.state.active) {
            this.props.activationHandler(this.props.value)
            this.setState({ active: true })
        }
    }
    render() {
        let className = card ${this.state.active ? 'activeCard' : ''}
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
             </div>
        )
    }
    componentDidUpdate(prevProps){
        if(prevProps.attempt != this.props.attempt){
          this.setState({active: false})
        }  
    }
}
activationHandler = (c) => {
    let guess = [...this.state.guess, c]
    this.setState({guess})
    if(guess.length == this.state.chars.length){
        if(guess.join('').toString() == this.state.word){
            this.setState({ guess: [], completed: true})
    }else{
        this.setState({ guess: [], attempt: this.state.attempt + 1})
    }
} 