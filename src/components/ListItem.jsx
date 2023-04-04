import { BsTrash } from "react-icons/bs";
import { useState, useEffect } from "react";
function ListItem({
  id,
  item,
  completed,
  itemDeleteListener,
  itemCheckedListener,
  editItemListener,
}) {
  const [state, setState] = useState({ completed: completed, item: item });

  const handleDelete = () => {
    itemDeleteListener(id);
};

  const handleInputChange = (e) => {
    setState((prev) => ({
      ...prev,
      item: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editItemListener(id,state.item);
  }

  const handleItemChecked = (e) => {
    setState((prev) => ({
      ...prev,
      completed: e.target.checked,
    }));
    itemCheckedListener(id, e.target.checked);
  };

  useEffect(()=> {
    setState((prev) => ({
      ...prev,
      item: item,
      completed:completed,
    }));
  }, [id, item, completed])

  return (
    <li>
      <div>
        <div className="todo-item">
          <input
            type="checkbox"
            checked={state.completed}
            className="to-do-item"
            onChange={handleItemChecked}
          />
          <form className="todo-form" onSubmit={handleSubmit}>
            <input
              className="todo-form-input"
              id={id}
              value={state.item}
              onChange={handleInputChange}
              type="text"
            />
          </form>
             <BsTrash className="button" onClick={handleDelete} />
        </div>
      </div>
    </li>
  );
}
export default ListItem;
