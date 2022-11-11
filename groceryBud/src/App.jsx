import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [allData, setAllData] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState();
  const [empty, setEmpty] = useState(true);
  const [updated, setUpdated] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [newItem, setNewItem] = useState("");
  const [clear, setClear] = useState(false);

  const handleAdd = () => {
    if (name.length !== 0) {
      setAllData((newData) => [...newData, name]);
      setName("");
      setEmpty(false);
      setNewItem(name);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
    } else if (name.length === 0) {
      setEmpty(true);
      setShowMessage(true);
      setTimeout(() => {
        setShowMessage(false);
      }, 2000);
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
      setEmpty(false);
      setName("");
      setNewItem(name);
      setUpdated(true);
      setTimeout(() => {
        setUpdated(false);
      }, 2000);
    } else if (name.length === 0) {
      setEmpty(true);
      setNewItem(name);
      setUpdated(true);
      setTimeout(() => {
        setUpdated(false);
      }, 2000);
    }
  };

  const handleClear = () => {
    setAllData([]);
    setClear(true);
    setTimeout(() => {
      setClear(false);
    }, 2000);
  };

  return (
    <div>
      <h2>Grocery Hub</h2>

      {showMessage ? (
        empty ? (
          <p class="notification" id="danger">
            Please Enter Item To Add To Basket
          </p>
        ) : (
          <p class="notification" id="added">
            {" "}
            '{newItem}' is added to the basket
          </p>
        )
      ) : (
        ""
      )}

      {updated ? (
        empty ? (
          <p class="notification" id="danger">
            Please Enter Item To Add To Basket
          </p>
        ) : (
          <p class="notification" id="updated">
            {" "}
            '{newItem}' is updated in the basket
          </p>
        )
      ) : (
        ""
      )}

      {clear ? (
        <p class="notification" id="clear">
          Cleared
        </p>
      ) : (
        ""
      )}

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
        <div class="item">
          <tr>
            <td>
              <p class="itemName">{val}</p>
            </td>
            <td>
              <button
                class="editBTN"
                className="edit"
                onClick={() => handleEdit(i)}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                class="deleteBTN"
                className="delete"
                onClick={() => handleDelete(i)}
              >
                Delete
              </button>
            </td>
          </tr>
        </div>
      ))}
      <br />
      <button class="delete" className="clear" onClick={() => handleClear()}>
        Clear All
      </button>
    </div>
  );
}

export default App;
