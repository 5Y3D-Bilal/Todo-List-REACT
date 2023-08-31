import React, {useRef, useState} from 'react';

function Todolist() {
  const [list, setList] = useState([]);

  const ref = useRef(null);
  const handleOnAdd = () => {
    setList([...list, ref.current.value]);
    ref.current.value = [];
  };

  const handleDelete = (listitem) => {
    // setList(' ');
    setList(
      list?.filter((e) => {
        return e !== listitem;
      })
    );
  };
  console.log(list);
  return (
    <>
      <center>
        <div>
          <label>
            Enter your name:
            <div>
              <input ref={ref} type="text" />
            </div>
          </label>
        </div>
        <button onClick={handleOnAdd}> Add me</button>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            marginTop: '100px',
            marginLeft: '30px',
          }}
        >
          {list?.map((listitem) => {
            return (
              <>
                <div
                  key={listitem}
                  style={{
                    width: '200px',
                    height: '100px',
                    border: '2px solid black',
                  }}
                >
                  {listitem}
                </div>
                <button
                  onClick={() => {
                    handleDelete(listitem);
                  }}
                >
                  Delete
                </button>
              </>
            );
          })}
        </div>
      </center>
    </>
  );
}

export default Todolist;
