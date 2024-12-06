/* eslint-disable react/prop-types */

function List(props) {
  const { items,setItem } = props;

  return (
    <div>
      <div className=" p-2 relative flex flex-col rounded-lg bg-white shadow-sm border border-slate-200">
        <ListItems _items={items} _setItemStates={setItem} />
      </div>
    </div>
  );
}

export default List;

function ListItems(props) {

  const { _items ,_setItemStates} = props;

  const deleteItem = (item , index) => {
     _items.splice(index,1)
     _setItemStates([..._items]);
  }

  return _items.map((item, index) => (
    <div
      className=" p-3 text-slate-800 flex w-full items-center rounded-md p-3 transition-all bg-slate-100 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100"
      key={index}
    >
      <div className="">
        {item}
        <button
          onClick={()=>deleteItem(item,index)}
          className=" mx-20 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
        >
          delete
        </button>
      </div>
    </div>
  ));
}
