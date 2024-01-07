import { Create } from "@mui/icons-material";
import { ListItem } from "@mui/material";
import TextField from '@mui/material/TextField';
import { useState } from "react";
import {InputAdornment} from "@mui/material"; 
import {IconButton} from "@mui/material";


export default function Todoform({addtodo}){
    const [text,settext] =useState("")
    const handlechange = (evt) =>{
        settext(evt.target.value)
    }
    const handlesubmit = (e) => {
      e.preventDefault();
      addtodo(text);
      settext("");
    }
    return(
        <ListItem>
          <form onSubmit={handlesubmit}>
            <TextField 
                id="outlined-basic" 
                label="Add Todo" 
                variant="outlined" 
                onChange={handlechange}
                value={text}
                inputProps={{
                    endadornment:(
                        <InputAdornment position="end">
                      <IconButton
                        aria-label="create todo"
                       
                        edge="end"
                      >
                    <Create/>
                      </IconButton>
                    </InputAdornment>
                    )
                }}
                />
                </form>
        </ListItem>
    )
}





