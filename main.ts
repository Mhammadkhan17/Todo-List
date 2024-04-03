#!/usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;

while (condition) {
  let addTask = await inquirer.prompt([
    {
      name: "todo",
      message: "What do you want to add in your todo list?",
      type: "input",
      validate: function (input_value) {
        if (input_value.trim() !== "") {
          return true;
        } else {
          return "Value cannot be empty";
        }
      },
    },
    {
      name: "addMore",
      message: "Do you want to add more?",
      type: "confirm",
      default: false,
    },
  ]);

  todos.push(addTask.todo);

  condition = addTask.addMore;
}

console.log("Your todo list:");
todos.forEach((listitems, listnumber) => {
  console.log(`${listnumber + 1}. ${listitems}`);
});

let removeItem = await inquirer.prompt([
  {
    name: "remove",
    message: "Do you want to remove something?",
    type: "confirm",
    default: false,
  },
]);

if (removeItem.remove) {
  let itemToRemove = await inquirer.prompt([
    {
      name: "item_to_remove",
      message: "Enter the number of the item you want to remove:",
      type: "number",
      validate: (value) => {
        const number = value - 1;
        if (number >= 0 && number < todos.length) {
          return true;
        } else {
          return `Please select a number between 1 and ${todos.length}`;
        }
      },
    },
  ]);

  let itemToRemoved = itemToRemove.item_to_remove - 1;
  todos.splice(itemToRemoved, 1);

  console.log("You have Successfully updated your todo list");
  console.log("Your todo list:");
  todos.forEach((listitems, listnumber) => {
  console.log(`${listnumber + 1}. ${listitems}`);
});

let condition_2 = true;
while (condition_2){
if (removeItem.remove) {
  let ask_again_que = await inquirer.prompt([
    {
      name: "again_ask",
      message: "Do you want to remove something else?",
      type: "confirm",
      default: false,
    },
  ]);

  if (ask_again_que.again_ask) {
    let itemToRemove = await inquirer.prompt([
      {
        name: "item_to_remove",
        message: "Enter the number of the item you want to remove:",
        type: "number",
        validate: (value) => {
          const number = value - 1;
          if (number >= 0 && number < todos.length) {
            return true;
          } else {
            return `Please select a number between 1 and ${todos.length}`;
          }
        },
      },
    ]);

    let itemToRemoved = itemToRemove.item_to_remove - 1;
    todos.splice(itemToRemoved, 1);

    console.log("You have Successfully updated your todo list")
    console.log("Your todo list:");
    todos.forEach((listitems, listnumber) => {
    console.log(`${listnumber + 1}. ${listitems}`);
   });
}
  condition_2 = ask_again_que.again_ask
}}}else{

console.log("Your todo list:");
todos.forEach((listitems, listnumber) => {
  console.log(`${listnumber + 1}. ${listitems}`);
});
}