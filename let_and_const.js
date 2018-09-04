

function getClothing(isCold){
  let freezing;
  if(isCold){
    freezing = 'Grab a jacket!';
    console.log("Very cold Sir!");
  }else{
    freezing = "it's a short kind of day";
    console.log(freezing);
  }

}


getClothing(false);
//TEMPLATES LITERATE
const student = {
  name:"Richard Kalehoff",
  guardian: "Mr. Kalehoff"
};


const teacher = {
  name: "Mrs. Wilson",
  room: 'N231'
};

let message = student.name + "plaease see" + teacher.name + " in " + teacher.room + 'to pick up your report card.';
var note = `teacher.name

Please excuse ${student.name}.
He is recovering from the flu.

Thank you,

${student.guardian}
`;

console.log("Nada");

const circle = {
  radius:10,
  color: 'orange',
  getArea:function(){
    return Math.PI*this.radius*this.radius;
  }

};

let {radius, getArea, color} = circle;
console.log(getArea);

console.log("For loop in another way");
const digits = [0,1,2,3,4,5,6,7,8,9];
for (const digit of digits){
  console.log(digit);
}

console.log("Spread operator");
const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);

///////////////////////////////////////Lesson 2//////////////////////////////////////////
const upperizeNames = ['franklin', 'Kagure', 'Asser'].map(function(name){
  return name.toUpperCase();
});

console.log(upperizeNames);