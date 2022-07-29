let input = prompt("what do yu want to do?");
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while(input !== 'quit' && input !== 'q') {
    if(input  === 'list') {
        console.log('*******');
        for(let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*******');
    } else if (input  === 'new') {
        const newTodo = prompt("Ok, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list`);
    } else if (input  === 'delete') {
        const index = parseInt(prompt("enter index to delete: "));
        if(!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log("Invalid index");
        }
    }
    input = prompt("what do yu want to do?");
}
console.log("OK QUITTING!");