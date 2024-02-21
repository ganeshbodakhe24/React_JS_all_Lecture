import React,{Component} from "react";
// first constructor run then other functions run 
// constructor run firstly 
//props also ready in constructor
// not for api call will be crash componnet
export class AS_22_class_life_cycle_Constructor extends Component{
    constructor(props){
        super(props);
        this.props=props;
        console.log("hii constructor");
        console.log(props);
    }

    render(){
        console.log("hii render");
        return(
            
            <>

            </>
        )
    }
}

