import React from "react";
import {render} from "react-dom";
import {Home} from "./component/Home";
import {Header} from "./component/Header";


class App extends React.Component {
    render() 
    {
        return (<div>
            <Header appname={"ReactJSDemo"}/>
            <Home name={"Karl"} age={30}>
                <div>{"THIS"}</div>
            </Home>
            </div>); 
    }
}


render(<App/>, document.getElementById('root'));