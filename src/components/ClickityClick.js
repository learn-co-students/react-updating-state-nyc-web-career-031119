// Code ClickityClick Component Here
import React from 'react';

class ClickityClick extends React.Component{
    state= {
        clicked: false,
        count: 0
    }

    clickHandle = (e)=>{
        // console.log('clciking')
        this.setState({
            clicked: true,
            count: this.state.count +1
        })

    }

    render(){
        // console.log(this.state.count)
        return (<div>
            hellow
            <button onClick={(e)=>this.clickHandle(e)}>
        clcik me
            </button>
            <p>I've been click {this.state.clicked && this.state.count === 20 ? 'relaxx..... ': this.state.clicked ? "yes": 'nvmm'}</p>
            <p>clicked {this.state.count} times</p>
        </div>)
    }
}

export default ClickityClick