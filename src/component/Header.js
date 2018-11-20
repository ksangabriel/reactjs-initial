import React from "react";

export class Header extends React.Component
{
    render()
    {
        return(
            <div>
                Header with AppName: {this.props.appname}
            </div>
        );
    }
}