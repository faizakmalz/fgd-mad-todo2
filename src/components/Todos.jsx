import React  from "react";
import TodoItem from "./TodoItem";

const Todos = ({todos}) => {
    return(
        <div style={styles.container}>
            {todos.map((todo) => {
                return (
                    <TodoItem 
                        key={todos.id} 
                        todo={todo} 
                        // toggleCompleted={toggleCompleted}   
                        // deleteTodo={deleteTodo} 
                    />
                )
            })}
        </div>
    )
}

const styles = {
    container: {
        width: "40%",
        margin: "0 auto",
    },
}

export default Todos;