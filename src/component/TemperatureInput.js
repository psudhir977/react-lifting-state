import React,{Component} from 'react'

const scaleNames={
    c: 'Celcious',
    f: 'Farenheit'
}

class TemperatureInput extends React.Component{

    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.state={temperature: ''}
    }

    handleChange(e){
        this.setState({
            temperature: e.target.value
        });
    }

    render(){
        const temperature = this.state.temperature;
        const scale = this.props.scale;
        return(
            <fieldset>
                <legend>
                    Enter temperature in {scaleNames[scale]}
                    <input value = {temperature}
                            onChange={this.handleChange}/>
                </legend>
            </fieldset>
        )
    }
}

export default TemperatureInput