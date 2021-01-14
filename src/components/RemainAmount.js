import React from 'react';

const RemainAmount = ({todoList}) => {
  return (
    <div className="footer">
      剩餘數量: {todoList.filter(item => !item.isDone).length}
    </div>
  )
}

export default RemainAmount;