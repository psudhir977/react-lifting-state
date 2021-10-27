
import React,{Component} from 'react'

export default class Counter extends React.Component{

    render(){
        return(
            <div>
                <div>count: {this.props.count}</div>
                <button onClick={this.props.increment}>increment</button>
                <button onClick={this.props.decrement}>Decrement</button>
            </div>
        )
    }
}

//Point to observe o is here that how the props from parent component
// is passed to child component ..this is called lifting state up