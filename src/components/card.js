import React, {Component} from 'react';
import Input from './input';
import Content from './content';
const INITIAL_STATE = {
        color: '',
        pnoun: '',
        adjectiveOne: '',
        celebOne: '',
        adjectiveTwo: '',
        nounOne: '',
        numberOne: '',
        numberTwo: '',
        nounTwo: '',
        adjectiveThree: '',
        celebTwo: '',
        celebThree: '',
        adjectiveFour: '',
        nounThree: '',
        celebFour: '',
        adjectiveFive: '',
        contentVisible: false     
}

class Card extends Component{
    constructor() {
        super()

        this.state = INITIAL_STATE;
            
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

   
    
    handleInputChange(event){
 
        this.setState({ [event.target.name]: event.target.value })
        
    }

    handleFormSubmit(event){
        
        event.preventDefault()

        if (this.state.contentVisible){
        this.setState(INITIAL_STATE)
    }else{
        this.setState({contentVisible: true})
    }
    }
    render(){
       
        const inputData = [
                {title: 'Color', state: this.state.color, name: 'color' },
                {title: 'Plural Noun', state: this.state.pnoun, name: 'pnoun' },
                {title: 'Adjective', state: this.state.adjectiveOne, name:'adjectiveOne' },
                {title: 'Celebrity', state: this.state.celebOne, name: 'celebOne' },

                {title: 'Adjective', state: this.state.adjectiveTwo, name: 'adjectiveTwo' },
                {title: 'Noun', state: this.state.nounOne, name: 'nounOne' },
                {title: 'Number', state: this.state.numberOne, name: 'numberOne' },
                {title: 'number', state: this.state.numberTwo, name: 'numberTwo' },

                {title: 'Noun', state: this.state.nounTwo, name: 'nounTwo' },
                {title: 'Adjective', state: this.state.adjectiveThree, name: 'adjectiveThree' },
                {title: 'Celebrity', state: this.state.celebTwo, name: 'celebTwo' },
                {title: 'Celebrity', state: this.state.celebThree, name: 'celebThree' },

                {title: 'Adjective', state: this.state.adjectiveFour, name: 'adjectiveFour' },
                {title: 'Noun', state: this.state.nounThree, name: 'nounThree' },
                {title: 'Celebrity', state: this.state.celebFour, name: 'celebFour' },
                {title: 'Adjective', state: this.state.adjectiveFive, name: 'adjectiveFive' },

        ]

        return(
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className="card__inputs">
                {
                  inputData.map((data, index) => {
                      return Input( (data),this.handleInputChange, index)
                    })
                }
                </div>
                <button className={`card__${!this.state.contentVisible ? 'generate': 'clear'}`} type="submit">{!this.state.contentVisible ? "Generate MadLibs" : "Clear Form" }</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/>:''
                }
                {
                    // inputData.map((data, index) => {
                    //     return <div key={index}>{data.title}</div>
                    // })
                }
                {/* <h1>{this.state.color}</h1>
                {Input('Color', this.state.color, this.handleInputChange, 'color' )}
                <h1>{this.state.noun}</h1>
                {Input('Noun', this.state.noun, this.handleInputChange, 'noun' )}
                <h1>{this.state.adjectiveOne}</h1>
                {Input('Adjective', this.state.adjectiveOne, this.handleInputChange, 'adjectiveOne' )}
                <h1>{this.state.celebOne}</h1>
                {Input('Celebrity', this.state.celebOne, this.handleInputChange, 'celebOne' )}
              */}
            </form>
        )
    }
}
export default Card;