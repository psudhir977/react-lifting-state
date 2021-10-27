
import React,{Component} from 'react'

import BoilingVerdict from './BoilingVerdict'
import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component{

    constructor(props){
        super(props)
        //method binding style 
        this.handleChange = this.handleChange.bind(this); 
        
        //if we are using this keyword inside render or any other method 
        //we need to use this keyword 
        this.state= {temperature: ''}
    }

    handleChange(e){
        this.setState({temperature: e.target.value})
    }

    render(){
        const temperature = this.state.temperature;
        return(
            <fieldset>
                <legend>Enter temp in celcious</legend>
                
                <input
                    value={temperature}
                    onChange={this.handleChange}>
                </input>

               {/*<BoilingVerdict celsius={parseFloat(temperature)} >
                </BoilingVerdict>*/}
                <TemperatureInput scale='c'></TemperatureInput>
                <TemperatureInput scale='f'></TemperatureInput>
            </fieldset>
        )
    }
}

export default Calculator