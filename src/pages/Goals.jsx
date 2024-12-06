import { useState } from "react";
import List from "../components/list";

function Goals() {
  const [item, setitem] = useState("");

  const [itemState, setItemStates] = useState([]);
  const AddGoal = () => {
    if (item !=="") {
      itemState.push(item);
      setItemStates([...itemState]);
      setitem("");
    }
     

    else{
        alert("please add goal");
    }
     
  };

  const InputBox = (event) => {
    console.log(event.target.value);
    setitem(event.target.value);
  };

  return (
    <div>
      <div className="flex ">
        <input
          onChange={InputBox}
          value={item}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-2 "
          type="text"
          placeholder="enter your monthly goal"
        />
        <button
          onClick={AddGoal}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          Add
        </button>
      </div>
      <List items={itemState} setItem={setItemStates}/>
    </div>
  );
}

export default Goals;
