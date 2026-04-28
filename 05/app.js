import Programmer from './classes/Programmer';
import Junior from './classes/Junior';
import Mid from './classes/Mid';
import Senior from './classes/Senior';

const features = {
    skills: 10, 
    experience: 10, 
    willingness: 10,
}

const task = {
    difficult: 1,
    size: 1,
}

const programmer = new Programmer( features );
const time = programmer.getApproximateTimeTaskDoneInHours( task );
console.log(time);

const junior1 = new Junior()
const timeJunior = junior1.getApproximateTimeTaskDoneInHours(task)
console.log(`Junior wykona task w czasie: ${timeJunior}`);

const mid1 = new Mid()
const timeMid = mid1.getApproximateTimeTaskDoneInHours(task)
console.log(`Mid wykona task w czasie: ${timeMid}`);

const senior1 = new Senior()
const timeSenior = senior1.getApproximateTimeTaskDoneInHours(task)
console.log(`Senior wykona task w czasie: ${timeSenior}`);

