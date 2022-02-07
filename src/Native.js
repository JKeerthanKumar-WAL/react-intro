import { useState } from "react";
function Native(event){
    let [native, setNative] = useState("Hyderabad");
   function addNative(event){
       event.preventDefault();
        let divTag = event.target;
        let inputTagNative = divTag.native;
        setNative(inputTagNative.value);
   }
    return(
        <div className="App-native">
            <h1 className="App-headOne">{native}</h1>
            <form onSubmit={addNative}>
                <input type="text" name="native" placeholder="Enter Native Place"/><br /><br />
                <button>Add Native</button><br /><br />
            </form>
        </div>
    );
}
export default Native;