import React from 'react';
import clsx from 'clsx';

const TodoItem = ({ todoList, handleToggleDone }) => {
  return (
    <ul className="todo-list list-unstyled">
      {todoList.map(item => {
        return (
          <li className="list-item row py-3 d-flex align-items-center border-bottom" key={item.id}>
            <div className="col-1 d-flex align-items-center">
              <span className="material-icons" onClick={handleToggleDone(item.id)}>
                {item.isDone ? 'check_circle' : 'radio_button_unchecked'}
              </span>
            </div>
            <div className="item-title col-10" className={clsx('item-title', 'col-10', { 'line-through': item.isDone }, { 'gray-text': item.isDone })}>
              {item.title}
            </div>
            <div className="col-1 d-flex align-items-center">
              <span className="material-icons">
                clear
              </span>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

export default TodoItem;