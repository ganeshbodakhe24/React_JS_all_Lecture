import React,{Component, createRef} from "react";

class AS_41_Ref_in_class extends Component{
    constructor(props){
        super(props);
        this.props=props;
        this.inputRef=createRef();
    }
    componentDidMount(){
        // console.log(this.inputRef.current.value=1000);
    }
    getval(){
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color="red";
        this.inputRef.current.style.backgroundColor="black";
    }
    render(){
        return(
            <>
            <input type="text" ref={this.inputRef}></input>
            <button onClick={()=>{this.getval()}}>Click Me</button>
            </>
        )
    }
}
export default AS_41_Ref_in_class;