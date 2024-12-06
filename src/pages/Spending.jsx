import Cost from "../components/cost";

function Spending(){
    return <div>
        <div className="flex m-3" >
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"type="text"
        placeholder="enter item purchased" />
         <input className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"type="text"
        placeholder="amount" />
        <botton className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" >
        add
       </botton>
        </div>
        <Cost/>
        
    </div>
    }
    
    
    export default  Spending;