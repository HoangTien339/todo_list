const filterTodo = (todos, status) => {
    return typeof todos === undefined ? [] :
        todos.filter(todo => todo.complete === status);
}

const onTodoClick = () => {
    console.log('click');
}

export {
    filterTodo,
    onTodoClick
}
