import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [allData, setAllData] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const [notif, setNotif] = useState(" ");

  const handleAdd = () => {
    if (name.length !== 0) {
      setAllData((newData) => [...newData, name]);
      setNotif({ name } + " is added in the basket");
      setName("");
    } else if (name.length === 0) {
      setNotif("Empty Input");
    }
  };

  const handleDelete = (index) => {
    allData.splice(index, 1);
    setAllData([...allData]);
  };

  const handleEdit = (i) => {
    setName(allData[i]);
    setShow(true);
    setEditIndex(i);
  };

  const handleUpdate = () => {
    if (name.length !== 0) {
      allData.splice(editIndex, 1, name);
      setAllData([...allData]);
      setShow(false);
      setNotif({ name } + " is added in the basket");
      setName("");
    } else if (name.length === 0) {
      setNotif("Empty Input");
    }
  };

  return (
    <div>
      <h2>Grocery Hub</h2>

      {notif !== "" ? <p> {notif} </p> : NULL}

      <input
        name="name"
        placeholder="e.g. Eggs"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {!show ? (
        <button onClick={handleAdd}>Add</button>
      ) : (
        <button onClick={handleUpdate}>Update</button>
      )}

      {allData.map((val, i) => (
        <div>
          <tr>
            <td>
              <p>{val}</p>
            </td>
            <td>
              <button className="edit" onClick={() => handleEdit(i)}>
                Edit
              </button>
            </td>
            <td>
              <button className="delete" onClick={() => handleDelete(i)}>
                Delete
              </button>
            </td>
          </tr>
        </div>
      ))}
    </div>
  );
}

export default App;
