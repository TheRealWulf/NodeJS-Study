// const square = function (x) {
//     return x * x
// }

// Basic Arrow Function
// const square = (x) => {
//     return x * x
// }

// Use this if there's only a single function
// const square = (x) => x * x

// console.log(square(3))

// Regular Way
// const event = {
//     name: 'Birthday Party',
//     printGuestList: function () {
//         console.log('Guest List for ' + this.name)
//     }
// }

//Using the Arrow Function
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

event.printGuestList()