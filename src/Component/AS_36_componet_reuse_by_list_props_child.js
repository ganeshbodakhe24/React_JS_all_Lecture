function AS_36_componet_reuse_by_list_props_child(props){
    console.log(props);
    return(
        <div style={{backgroundColor:"yellow", margin:"10px"}}>
            <span>{props.data.name}</span><br></br>
            <span>{props.data.email}</span><br></br>
            <span>{props.data.address}</span>
        </div>
    )
}
export default AS_36_componet_reuse_by_list_props_child;