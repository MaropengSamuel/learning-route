function Cost(props) {
    const { cost } =props;

  return (<div>
    <div>costs on point
    <allCosts/>
    
    </div>
    
    </div>);
}


function allCosts(prop){
const {allcosts} = props;
return allcosts.map((_cost,index) =>(
<div className=" p-3 text-slate-800 flex w-full items-center rounded-md p-3 transition-all bg-slate-100 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
      key={index}>
{_cost};

</div>


))


}
export default Cost;
