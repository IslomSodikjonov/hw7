// Task 1
let hours = new Date().getHours()

if(hours <= 12) {
    alert('Good Morning!')
} else if(hours >= 13 && hours <= 17) {
    alert('Good Afternoon!')
} else if(hours >= 18 && hours <= 24) {
    alert('Good Evening!')
} else {
    alert('error(')
}




// Task 2
let future = "2023-06-23 18:00"
let time = Date.parse(future) - new Date().getTime()

let days = Math.floor(time / (1000 * 60 * 60 * 24))
let hoursTwo = Math.floor((time / (1000 * 60 * 60)) % 24)
let minutes = Math.floor((time / (1000 * 60)) % 60)
let seconds = Math.floor((time / (1000)) % 60)

if(time > 0) {
    alert('There are ' + days + 'd ' + hoursTwo + 'h '
    + minutes + 'm ' + seconds + 's ' + ' left before lesson.') 
} else (
    alert('The lesson has began.')
)