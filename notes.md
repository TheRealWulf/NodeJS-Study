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