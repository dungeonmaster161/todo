import { useState } from "react"
export function CreateTodo({setTodos,todos}){
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    return <div>
        <input
        style={{
            padding:10,
            margin:10
        }}
        type="text" 
        placeholder="Title"
        onChange={function(e){
            const value = e.target.value
            setTitle(value)
            // console.log(value);
        }}
        /> <br />
        <input
        style={{
            padding:10,
            margin:10
        }}
        onChange={function(e){
            const value = e.target.value
            setDescription(value)
        }}
        type="text"  placeholder="Description" /> <br />
        <button onClick={()=>{
            fetch("http://localhost:8080/todo",{
                method: "POST",
                body: JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "content-type":"application/json"
                }
            })
            .then(async function(res){
                const json = await res.json()
                alert("Todo added")
            })
            setTodos([...todos,
            {
                title:title,
                description:description
            }
            ])
        }}>Add a todo</button>
    </div>
}

