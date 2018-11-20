import React from "react";
import PropTypes from 'prop-types';


export class Home extends React.Component
{
    constructor(props)
    {
        super();
        this.age = props.age;
        this.state = {
            age_state: props.age
        };
    }

    incrementAge()
    {
        this.age = this.age + 1;

        //## This will not work because the page will 
        //## not be re-rendered to display the new value
        // this.state.age_state = this.state.age_state + 1;

        this.setState({age_state: this.state.age_state + 1});
    }

    render()
    {
        return(
            <div>
                <p>Welcome, {this.props.name}</p>
                <p>Your age is {this.props.age}</p>
                <p>Your new age is {this.age}</p>
                <p>Your new STATE age is {this.state.age_state}</p>
                <button 
                    onClick={this.incrementAge.bind(this)} 
                    className="btn btn-primary">Click me!</button>
            </div>
        );
    }

    /*     
    Alternatively, we can use:
        <button onClick={()=> this.incrementAge} className="btn btn-primary">Click me!</button>
    */
}

Home.propTypes = {
    name: PropTypes.string, 
    age: PropTypes.number
}