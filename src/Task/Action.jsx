import React from 'react';

const Action = (data) => {
  return (
    <div className='mt-2 space-x-2'>
      <button
        className='btn btn-primary'
        onClick={() =>
          data.handleEditTask(prompt('Edit task:', data.selectedTask.text))
        }
      >
        Edit
      </button>
      <button
        className='btn btn-primary'
        onClick={() =>
          data.handleChangePriority(
            prompt('Enter new priority:', data.selectedTask.priority)
          )
        }
      >
        Change Priority
      </button>
      <button
        className='btn btn-primary'
        onClick={() => {
          window.alert(
            `Press Sure Wan't Delete ${data.priority} Priority Task`
          );
          data.handleDeleteTask();
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default Action;
