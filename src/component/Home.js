import React from "react";
import PropTypes from 'prop-types';


export class Home extends React.Component
{
    render()
    {
        return(
            <div>
                <p>Welcome, {this.props.name}</p>
            </div>
        );
    }
}


Home.propTypes = {
    name: PropTypes.string
}