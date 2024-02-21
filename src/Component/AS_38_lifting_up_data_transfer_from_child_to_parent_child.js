function AS_38_lifting_up_data_transfer_from_child_to_parent_child(props){
  
    const data="this is the child data transfer to parent component"
    return(
        <>
            <h1>Child</h1>
            <button onClick={()=>{props.alert(data)}}>On click</button>
        </>
    )
}
export default AS_38_lifting_up_data_transfer_from_child_to_parent_child;