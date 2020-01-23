/**
 * Starts the application
 * This is the function that is run when the app starts
 *
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name) {
  process.stdin.resume();
  process.stdin.setEncoding("utf8");
  process.stdin.on("data", onDataReceived);
  console.log(`Welcome to ${name}'s application!`);
  console.log("--------------------");
}

/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 *
 * For example, if the user entered
 * ```
 * node tasks.js batata
 * ```
 *
 * The text received would be "batata"
 * This function  then directs to other functions
 *
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  text = text.trim();
  const textArray = text.split(" ");
  if (text === "quit" || text === "exit") {
    quit();
  } else if (textArray[0] === "hello") {
    hello(textArray);
  } else if (text === "help") {
    help();
  } else if (text === "list") {
    //readFromDatabase();
    list();
  } else if (textArray[0] === "add") {
    if (textArray[2] != "") add(textArray);
    else console.log("error");
  } else if (textArray[0] === "remove") {
    remove(textArray[1]);
  } else {
    unknownCommand(text);
  }
}
var listoftasks = ["tomato", "banana", "potato", "apple"];

function list() {
  for (let i = 0; i < listoftasks.length; i++) {
    console.log(`${i + 1}: ${listoftasks[i]}`);
  }
}

function add(text) {
  text.shift(); //
  listoftasks.push(text.join(" "));
}

function remove(x) {
  if (parseInt(x) <= 2) {
    listoftasks.splice(parseInt(x) - 1, 1);
    list();
  } else if (x == undefined) {
    listoftasks.splice(-1, 1);
    list();
  } else console.log("number doesnt exist");
}

/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c) {
  console.log('unknown command: "' + c.trim() + '"');
}

/**
 * Says hello
 *
 * @returns {void}
 */
function hello(name) {
  console.log(name + "!");
}

function help() {
  console.log(
    "available commands: \n hello @argument (says hello @argument! or hello!) \n quit or exit (exits the app) \n add @argument(adds @argument to the list) \n remove (removes last element of list or give number to remove element) \n list (lists the todos in the list) \n check@argument: it checks the task in todolist \n uncheck: it uncheck the task in the to dolist depending on the number of the task in the list ,incase doesnt exit error"
  );
}
/*
/**
 * Exits the application
 *
 * @returns {void}
 */
function quit() {
  console.log("Quitting now, goodbye!");
  process.exit();
}

// The following line starts the application
startApp("rania");
