import { useState } from "react";
function Effect(){
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState(0);
    
    return(
        <div>
            <button style={{ height: '2em', width: '5em' }} onClick={()=>(setCount(count+1))}>Add</button>
            <p>{count}</p>
            <button style={{ height: '2em', width: '5em' }} onClick={()=>(setCount1(count1+1))}>Add1</button>
            <p>{count1}</p>
        </div>
    )
}
export default Effect;