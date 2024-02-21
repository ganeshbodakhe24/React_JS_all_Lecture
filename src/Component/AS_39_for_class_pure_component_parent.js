import React from "react"
import AS_39_for_class_pure_component_child from "./AS_39_for_class_pure_component_child";
class AS_39_for_class_pure_component_parent extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            count: 0,
            data:100
        }
    }
    render() {
        console.log("parent re-render")
        return (

            <>
            <AS_39_for_class_pure_component_child data={this.state.data}></AS_39_for_class_pure_component_child>
            <button onClick={() => { this.setState({ data: 50 }) }}>class button</button>

                <h1>class count:{this.state.count}</h1>
                <button onClick={() => { this.setState({ count: 1 }) }}>class button</button>
                {/* once press button then after onword pressing button there is no rerendarign 
         */}



            </>
        )
    }
}
export default AS_39_for_class_pure_component_parent;
// pure component is use for to stop unwanted rerendaring
//if there is same state then there is no component rerendarign
