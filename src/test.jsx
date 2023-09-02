import React, { useState, useRef } from "react";

const Test = () => {
  const [list, setList] = useState([]);

  const ref = useRef(null);
  const add = () => {
    setList([...list, ref.current.value]);
    ref.current.value = [];
  };
































//   const [setter, setsetter] = useState([]);
//   const reff = useRef(null);
//   const newhand = ()=>{
//     setsetter([...setter,reff.current.value])
//     reff.current.value = []
//   }
//    return(
//     <>
//     <input type="text" ref={reff} />
//     <button onClick={newhand}>BUTTOn</button>
//     {setter?.map((set)=>{
//         return(
//             <>
//             <div key={set}
//             className="h-30 border border-red-500 w-30">
//             {setter}

//             </div>
//             </>
//         )
//     })}
//     </>
//    )

  const handleDelete = (listItem) => {
    setList(
      list?.filter((e) => {
        return e !== listItem;
      })
    );
  };
  console.log(list);
  return (
    <>
      <div className="bg-rose-400">
        <div className="flex justify-between container mx-auto py-4 items-center">
          <div className="text-3xl pb-1 font-medium text-white">
            TODO LIST <i class="fa-solid fa-bolt"></i>
          </div>
          <div className="bg-white py-1 px-3 rounded-sm hover:scale-105 duration-700">
            <input type="text" ref={ref} />

            <button onClick={add} className="border-none outline-none ">
              <i class="fa-solid fa-plus"></i>
            </button>
          </div>
        </div>
      </div>

      {list?.map((listItem) => {
        return (
          <>
            <div className="container mx-auto flex justify-center py-10">
              <div
                className="hover:scale-105 duration-700 boxx rounded-md"
                key={listItem}
                style={{
                  width: "220px",
                  height: "200px",
                  border: "2px solid red",
                }}
              >
                <center className="pt-4">{list}</center>
                <div className="pt-30">
                  <button
                    className="h-10 w-full bg-red-400 px-1 text-white"
                    onClick={() => {
                      handleDelete(listItem);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Test;
