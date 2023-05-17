'use client'

import { ITask } from "@/types/tasks";
import { FormEventHandler, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";
import Modal from "./Modal";
import { useRouter } from "next/navigation";
import { deleteTodo, editTodo } from "@/api";

interface TaskProps {
  task: ITask;
}

const Task: React.FC<TaskProps> = ({ task }) => {

  const router = useRouter();
  const [openModelEdit, setOpenModelEdit] = useState<boolean>(false)
  const [openModelDelete, setOpenModelDelete] = useState<boolean>(false)
  const [taskToEdit, setTaskToEdit] = useState<string>(task.text)

  const handleSubmitEditTodo: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await editTodo({
      id: task.id,
      text: taskToEdit,
    });
    setTaskToEdit("");
    setOpenModelEdit(false);
    router.refresh();
  };

  const handleDeleteTask = async (id: string) => {
    await deleteTodo(id)
    setOpenModelDelete(false)
    router.refresh()
  }


  return (
    <tr key={task.id}>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FaEdit onClick={() => setOpenModelEdit(true)} cursor="pointer" className="text-blue-500" size={25} />
        <Modal modalOpen={openModelEdit} setModalOpen={setOpenModelEdit}>
          <form onSubmit={handleSubmitEditTodo}>
            <h3 className="font-bold text-lg">Edit task</h3>
            <div className="modal-action">
              <input
                value={taskToEdit}
                onChange={(e) => setTaskToEdit(e.target.value)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
              <button className="btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2 onClick={() => setOpenModelDelete(true)} cursor="pointer" className="text-red-500" size={25} />
        <Modal modalOpen={openModelDelete} setModalOpen={setOpenModelDelete}>
          <h3 className="text-lg">Are you sure, you wanna delete this task??</h3>
          <div className="modal-action">
          <button
            onClick={() => handleDeleteTask(task.id)}
            className="btn"
          >Yes
          </button>
        </div>
      </Modal>
      </td>
    </tr>
  );
};

export default Task;
