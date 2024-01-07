import List from '@mui/material/List';

import { useState,useEffect } from 'react';
import Todoitem from './Todoitem';
import Todoform from './Todoform';
import { Box,Typography } from '@mui/material';


const getinitialdata = () => {
  const data = JSON.parse(localStorage.getItem("todos"))
  if(!data) return [];
  return data;
}


export default function Todolist(){
    const [todos,settodos] = useState(getinitialdata)
    useEffect(() => {
        localStorage.setItem("todos",JSON.stringify(todos))
    })
    const removetodo = (id) =>{
        settodos((prevtodos) => {
            return prevtodos.filter((t) => t.id!== id)
        })
    }
    const toggletodo = (id) => {
        settodos((prevtodos) => {
            return prevtodos.map((todo) => {
                if(todo.id === id){
                    return {...todo,completed:!todo.completed}
                }else{
                    return todo; 
                }
            })
        })
    }
    const addtodo = (text) => {
        settodos((prevtodos) => {
            return [...prevtodos,{text:text,id:crypto.randomUUID(),completed:false}]
        })
    }
    return(
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"column",
            alignItems:"center",
            m:"3"
        }}>
            <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
            Todos
          </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo =>(
                <Todoitem 
                    todo={todo} 
                    key={todo.id}
                    remove={removetodo}
                    toggle={() => toggletodo(todo.id)}
                    />
                
            ))}
            <Todoform addtodo={addtodo}/>
        </List>
        </Box>
    
    )
}





