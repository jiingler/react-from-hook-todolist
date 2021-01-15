import React from 'react';
import clsx from 'clsx';

const InputTodo = ({ inputValue, handleChange, handleAdd }) => {
  return (
    <div className="row d-flex align-items-center pb-3 border-bottom">
      <label className="col-1 d-flex align-items-center" htmlFor="input-todo">
        <span className="material-icons">
          add
        </span>
      </label>
      <input type="text" id="input-todo" className="col-10 border-0" placeholder="請輸入" value={inputValue} onChange={handleChange} />
      <button className={clsx('col-1', 'btn', 'btn-outline-black', 'btn-sm', 'p-0', 'd-none', { 'show-add': inputValue.length > 0 })} onClick={handleAdd}>新增</button>
    </div>
  )
}

export default InputTodo;