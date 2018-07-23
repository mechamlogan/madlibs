import React, {Component} from 'react';

class Content extends Component{
    constructor(){
        super()
        this.count=1
    }
  
    componentWillReceiveProps(){
        this.count=1;
    }
    renderLabel(data){
        return[
            <div className='card__content__label'>{this.count++}</div>,
            <b>{data}</b>
        ]
    }

    render () {
        
        const data = this.props.data;
        return (
            <div className="card__content"> 
                <p >
                    Ladies and gentemen. this is 
                    {this.renderLabel(data.color)} Barber. your sportscaster. bringing you the last inning of the game between the cleveland 
                    {this.renderLabel(data.pnoun)} and the 
                    {this.renderLabel(data.adjectiveOne)} yankees 
                    {this.renderLabel(data.celebOne)} is pitching for the Yankees. Here's the pitch! it's a low 
                    {this.renderLabel(data.adjectiveTwo)} ball that just cuts the inside of the 
                    {this.renderLabel(data.nounOne)} for a strike. That makes the count 
                    {this.renderLabel(data.numberOne)} strikes 
                    {this.renderLabel(data.numberTwo)} balls, Now here's the next pitch. the batter swings and connects. it's a long high 
                    {this.renderLabel(data.nounTwo)} out to 
                    {this.renderLabel(data.adjectiveThree)} feild. But 
                    {this.renderLabel(data.celebTwo)} is coming up fast and has it for the second out. The next batter up is 
                    {this.renderLabel(data.celebThree)}. the Cleveland 
                    {this.renderLabel(data.adjectiveFour)}-stop Here's the pitch... and it's a hit... a short ground ball to third 
                    {this.renderLabel(data.nounThree)}. 
                    {this.renderLabel(data.celebFour)} scoops it up and throws it to first base for an out. and the game is over the yankees move into second place in the 
                    {this.renderLabel(data.adjectiveFive)} league 
                </p>
           </div>
        )
    }
}
export default Content;