import React, { Component } from "react";

class Props_class extends Component{
    constructor(props){
        super(props);
        this.props=props;

    }
    render(){
        return(
            <>
            <h1>{this.props.name}</h1>
            </>
        )
    }
}
export default Props_class;