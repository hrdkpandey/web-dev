//This is a basic to-do app
let todo=[];
// let readlineSync = require('readline-sync');
let input=prompt('Do you want to 1. add 2.remove 3.list 4.quit ?');
while(input!=4){
    switch(input){
        case '1':
            let item=prompt('Enter the item you want to add: ');
            todo.push(item);
            break;
        case '2':
            todo.shift();
            console.log("Item removed successfully");
            break;
        case '3':
            console.log(todo);
            break;
        case '4': 
            break;
        default: 
            console.log('Invalid input.');
            break;
    }
    input=prompt('Do you want to 1. add 2.remove 3.list 4.quit ?');
}