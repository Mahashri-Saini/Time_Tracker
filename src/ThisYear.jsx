import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import {useNavigate} from 'react-router-dom'

function ThisYear() { 

  const [todo, setTodo] = useState("")
  const [todoFrom, setTodoFrom] =useState("");
  const [todoTo, setTodoTo] = useState("");

  const [todos, setTodos] = useState([])

  const [showFinished, setshowFinished] = useState(true)

  // useEffect(() => {
  //   let todoString = localStorage.getItem("todos")
  //   if(todoString){
  //     let todos = JSON.parse(localStorage.getItem("todos")) 
  //     setTodos(todos)
  //   }
  
  // }
  // , [])
  

  const saveToLS = (params) => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const toggleFinished = (e) => {
    setshowFinished(!showFinished)
  }
  
  


  const handleEdit = (e, id)=>{ 
    let t = todos.filter(i=>i.id === id) 
    setTodo(t[0].todo)
    setTodoFrom(t[0].todoFrom)
    setTodoTo(t[0].todoTo)
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos) 
    saveToLS()


  }

  const handleDelete= (e, id)=>{  
    let newTodos = todos.filter(item=>{
      return item.id!==id
    }); 
    setTodos(newTodos) 
    saveToLS()

  }

  const handleAdd= ()=>{
    let ide=uuidv4()
    setTodos([...todos, {id: ide, todo, todoFrom, todoTo, isCompleted: false}])
    setTodo("") 
    setTodoFrom("")
    setTodoTo("")  
    saveToLS()

  }
  
  const handleChange= (e)=>{ 
    setTodo(e.target.value)
  }

  const handleChangeFrom= (e)=>{ 
    setTodoFrom(e.target.value)
  }

  const handleChangeTo= (e)=>{ 
    setTodoTo(e.target.value)
  }

  const handleCheckbox = (e) => { 
    let id = e.target.name;  
    let index = todos.findIndex(item=>{
      return item.id === id;
    }) 
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)
    saveToLS()
  }
  
  const navigate=useNavigate();
  function clickHandler()
  {
navigate("/");
  }  
  

  return (
    < >
    <div className="min-h-screen h-full bg-gradient-to-b from-[#510A32] to-[#801336] p-4 text-[#2D142C]">
    <button onClick={clickHandler} className='bg-[#801336] mx-2 rounded-full hover:bg-[#2D142C]  p-4 py-2 text-sm font-bold text-white'>HOME</button>

       <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-[#C72C41] min-h-[80vh] md:w-[70%]">
        <h1 className='font-bold text-center text-3xl'>Set Targets for this YEAR</h1>
         <div className="addTodo my-5 flex flex-col gap-4">
          <div className="flex">
          <h2 className='text-2xl font-bold w-[70%]'>Add a Target</h2>
          <h2 className='text-2xl font-bold w-[15%]'>From</h2>
          <h2 className='text-2xl font-bold w-[15%]'>To</h2>
          </div>
          <div className="flex gap-4" >

          <input  onChange={handleChange} value={todo} type="text" className='w-full rounded-full px-5 py-1 bg-gradient-to-r from-[#FF847C] to-[#FECEA8]' />
          <input  onChange={handleChangeFrom} value={todoFrom} type="text" className='w-[20%] rounded-full px-5 py-1 bg-gradient-to-r from-[#FF847C] to-[#FECEA8]' />
          <input  onChange={handleChangeTo} value={todoTo} type="text" className='w-[20%] rounded-full px-5 py-1 bg-gradient-to-r from-[#FF847C] to-[#FECEA8]' />
          <button onClick={handleAdd} disabled={todo.length<=3} className='bg-[#801336] mx-2 rounded-full hover:bg-[#510A32] disabled:bg-[#2D142C] p-4 py-2 text-sm font-bold text-white'>Save</button>
          </div>
         </div>
         <input className='my-4' id='show' onChange={toggleFinished} type="checkbox" checked={showFinished} /> 
         <label className='mx-2' htmlFor="show">Show Finished</label> 
         <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
         <h2 className='text-2xl font-bold'>Your Targets for this YEAR are - </h2>
         <div className="todos">
          {todos.length ===0 && <div className='m-5'>No Todos to display</div> }
          {todos.map(item=>{
 
          return (showFinished || !item.isCompleted) && <div key={item.id} className={"todo flex my-3 justify-between"}>
            <div className='flex gap-5 w-full'> 
            <input name={item.id} onChange={handleCheckbox} type="checkbox" checked={item.isCompleted} id="" />
            <div className={item.isCompleted ? "line-through" : ""}>
                  <span className="flex justify-between w-full gap-5">
                    <span>{item.todo}</span>
                    <span>{item.todoFrom}</span>
                    <span>{item.todoTo}</span>
                
                    
                  </span>
                </div>
            </div>
            <div className="buttons flex h-full">
              <button onClick={(e)=>handleEdit(e, item.id)} className='bg-[#801336] hover:bg-[#510A32] p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><FaEdit /></button>
              <button onClick={(e)=>{handleDelete(e, item.id)}} className='bg-[#801336] hover:bg-[#510A32] p-2 py-1 text-sm font-bold text-white rounded-md mx-1'><AiFillDelete /></button>
            </div> 
          </div>
          })}
         </div>
        
       </div>
       </div>
    </>
  )
}

export default ThisYear