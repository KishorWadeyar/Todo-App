import List from '@mui/material/List';

import { useState,useEffect } from 'react';
import Todoitem from './Todoitem';
import Todoform from './Todoform';
import { Box,Typography } from '@mui/material';



// const initialtodo = [
//     {id:1,text:"walk the dog",completed:true},
//     {id:2,text:"walk the cat",completed:false},
//     {id:3,text:"walk the abc",completed:true},
//     {id:4,text:"walk the def",completed:false}
// ]
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






// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import Checkbox from '@mui/material/Checkbox';
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';
// import { useState } from 'react';

// export default function CheckboxList() {
//   const [checked, setChecked] = React.useState([0]);

//   const handleToggle = (value: number) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-label-${value}`;

//         return (
//           <ListItem
//             key={value}
//             secondaryAction={
//               <IconButton edge="end" aria-label="comments">
//                 <CommentIcon />
//               </IconButton>
//             }
//             disablePadding
//           >
//             <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
//               <ListItemIcon>
//                 <Checkbox
//                   edge="start"
//                   checked={checked.indexOf(value) !== -1}
//                   tabIndex={-1}
//                   disableRipple
//                   inputProps={{ 'aria-labelledby': labelId }}
//                 />
//               </ListItemIcon>
//               <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }