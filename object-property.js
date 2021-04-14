const students = [
    {id: 01, name: 'Aaid'},
    {id: 02, name: 'Ayaat'},
    {id: 03, name: 'Aodity'},
    {id: 04, name: 'Romel'}
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id>02);
const biggerOne = students.find(s => s.id>02);
console.log(bigger);