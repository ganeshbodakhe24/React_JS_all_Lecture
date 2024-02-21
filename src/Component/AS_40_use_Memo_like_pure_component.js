import { useState ,useMemo} from "react";

function AS_40_use_Memo_like_pure_component(){
    const[count,setCount]=useState(0);
    const[data,setData]=useState(100);

    const multCountMemo=useMemo(function multi(){
        console.log("multi Count");
        return count*10;
    },[count]);
    return(
        <>
        <h1> count :{count}</h1>
        <h1>Data :{data}</h1>
        <h1>{multCountMemo}</h1>
        <button onClick={()=>{setCount(count+1)}}>count update</button>
        <button onClick={()=>{setData(data+10)}}>Data update</button>

        </>
    )
}
export default AS_40_use_Memo_like_pure_component;