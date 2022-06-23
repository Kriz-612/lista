import { useState } from 'react'
import { FiTrash2, FiPlus  } from 'react-icons/fi'

import './list.styles.css'

const List = () => {
 const [list, setList] = useState([])
 const [newTask, setNewTask] = useState('')

 function handleCreateNewTask() {
   const task = {
      id: Math.random(),
      title: newTask,
      incomplete: false

   }

   if(task.title === '') {
    return
   }

   setList([...list, task])
    setNewTask('')  
  }


   function handleToggleTaskCompletion(id) {
    
    const newTasks = list.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete,
    } : task)
    
    setList(newTasks)
  }

  function handleRemoveTask(id) {
  
    const tasksFiltered = list.filter(task => task.id !== id)
    setList(tasksFiltered)
   
  }




    return (
        <section           className='list'>
            <header>
              <h2>Tarefas  Pendentes:</h2>
         

             <div  className='input-container'>
                <input
                  type='text'
                  placeholder='Adicionar nova tarefa'     
                  onChange= {e =>setNewTask(e.target.value)} 
                  value={newTask}
                />
                <button className='add-task'  data-testid='add-task' onClick={handleCreateNewTask}>
                  <FiPlus size={16} color='white'/>  
                </button>
             </div> 
            </header>

            <main>
               <ul>
                 {
                    list.map(task => (
                        <li key={task.id}>
                         <div>
                             <label className='checkbox-container'>
                             <input 
                                   type="checkbox"
                                     checked={task.isComplete}
                                      onClick={() => handleToggleTaskCompletion(task.id)}
                                        readOnly
                                      />
                                <span className= 'checkmark'></span> 
                             </label>
                            <p>{task.title}</p>
                         </div>
                         <button className="remove-task"type="button" data-testid="remove-task" onClick={() => handleRemoveTask(task.id)}>
                <FiTrash2 size={16}/>
              </button>
                        </li>
                        ) )
                 }  
                 
               </ul>
            </main>
        </section>
    )
}

export default List 