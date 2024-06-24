import React from 'react';
import Action from './Action';

const Layout = (data) => {
  return (
    <>
      <>
        <div className='bg-blue-100 p-4 rounded border border-blue-400'>
          <h2 className='text-lg font-primary font-semibold mb-2'>
            {data.level} Priority
          </h2>
          {data.getTasksByPriority(data.level).map((task, index) => (
            <div key={index} className='bg-white p-2 rounded mb-2'>
              <p
                className='text-base cursor-pointer font-secondary'
                onClick={() => data.setSelectedTask(task)}
              >
                - {task.text}
              </p>
              {data.selectedTask === task && (
                <>
                  <Action
                    priority={data.level}
                    handleEditTask={data.handleEditTask}
                    handleChangePriority={data.handleChangePriority}
                    handleDeleteTask={data.handleDeleteTask}
                    selectedTask={data.selectedTask}
                  />
                </>
              )}
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default Layout;
