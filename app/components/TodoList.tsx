import { ITask } from "@/types/tasks";
import React from "react";


interface TodoListProps {
  tasks: ITask[]
}


const TodoList: React.FC<TodoListProps> = ({tasks}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>Task</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
              <tr>
                <td>{task.text}</td>
              <td>{task.id}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
