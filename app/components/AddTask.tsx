'use client'  
import { RiCalendarTodoLine } from "react-icons/ri";
import Modal from "./Modal";
import { useState } from "react";


const AddTask = () => {

  const [modalOpen, setModalOpen] = useState<boolean>(false)

  return (
    <div>
      <button onClick={() => setModalOpen(true)} 
      className="btn btn-primary w-full">
        Add task here
        <RiCalendarTodoLine className="ml-2" size={18} />
      </button>

      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/> 
    </div>
  );
};

export default AddTask;
