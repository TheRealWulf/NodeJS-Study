# NodeJS Course Notes

## **Arrow Function**

Arrow functions do not bind their own **this** value. Doesn't bind to the **this** function!
```
const event = {
    name: 'Birthday Party',
    printGuestList: () => {
        console.log('Guest List for ' + this.name)
    }
}

// Alternative Syntax

const event = {
    name: 'Birthday Party',
    printGuestList() {
        console.log('Guest List for ' + this.name)
    }
}
```
Arrow Functions don't bind their own **this** value. This makes them poor candidates for methods and makes them great candidates for anything else.
```
const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest List for ' + this.name)

        this.guestList.forEach(function (guest) {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

// Solution

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest List for ' + this.name)

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}
```
Shorthand Example
```
    handler: function (argv) {
        notes.addNote(argv.title, argv.body)
    }

// To

    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
```
---
## **Debugging**

Using **console.log** is a great way to debug certain bits of code. It's like a quick checkup to make sure things are going good. Too many logs can overwhelm you!
```
console.log(someFunction)
```
Inserting **debugger** can track down bugs too. Here's how:
```
const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    debugger

    // ! logical not operator
    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}
```
1. Insert debugger
1. Type this in console: 
```node inspect appname.js```
1. Open Chrome and type ```chrome://inspect``` and hit enter.
You should see something like this:
![Chrome Screenshot](https://i.imgur.com/j89GJB5.png)
1. Hit ```inspect```.
1. The ```Console``` and ```Sources``` tab will be the tabs you use the absolute most. Go ahead and add the folder with all the code at the top left and select allow.
1. The debugger will be automatically paused, hit the play button at the top right of the screen. It will run the debugger all the way until it hits where we inputed debugger in the code.

Once the browser is closed, it ends the debugger session on Chrome.