

export function Todos(props){
    const {todos} = props
    return <div>
        {
            todos.map(function(todo){
                return <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "Completed" : "Complete"}</button>
                </div>
            })
        }
    </div>
}