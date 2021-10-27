import React,{Component}  from 'react'
import Counter from './Counter'

 class App1 extends Component{

    state={
        count: 0
    };

    increment=() => {
        this.setState({
            count: this.state.count +1
        });
    };

    decrement=() =>{
        this.setState({
            count: this.state.count -1
        });
    };

    render(){
        return(
            <div >
                <Counter count={this.state.count}
                decrement={this.decrement}
                increment={this.increment}>
                </Counter>
            </div>
        );
    }
}

export default App1;