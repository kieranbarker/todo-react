import { useState, useEffect } from "react";
import { setStorage } from "../../storage";
import Form from "../Form";
import ToDoList from "../ToDoList";

function App(props) {
  const [toDos, setToDos] = useState(props.toDos);

  const prompt = (
    <p>
      <em>Add some to-dos...</em>
    </p>
  );

  function addToDo(value) {
    const toDo = { name: value, done: false };
    setToDos([...toDos, toDo]);
  }

  function toggleToDo(index) {
    const updatedToDos = toDos.map((toDo, i) => {
      if (i !== index) return toDo;
      return { ...toDo, done: !toDo.done };
    });

    setToDos(updatedToDos);
  }

  function deleteToDo(index) {
    const updatedToDos = toDos.filter((toDo, i) => i !== index);
    setToDos(updatedToDos);
  }

  useEffect(() => {
    setStorage(toDos);
  }, [toDos]);

  return (
    <>
      <Form addToDo={addToDo} />
      {toDos.length > 0 ? (
        <ToDoList
          toDos={toDos}
          toggleToDo={toggleToDo}
          deleteToDo={deleteToDo}
        />
      ) : (
        prompt
      )}
    </>
  );
}

export default App;
