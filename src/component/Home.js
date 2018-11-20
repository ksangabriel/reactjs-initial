import React from "react";


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