let b = "beautiful";
console.log(b.length);
console.log(b[5],b[6],b[7],b[8]);

const food = ("I was feeling hungry today");
const foods = "eat";
console.log(food[4]);
let x = `I was ${foods}feeling hungry today`;
console.log(x);

const story = "The quick brown fox jumped over the lazy dog";
console.log (story.match(/the/g).length);
console.log (story.match(/brown/g).length);

const school = "We are now going to school";
console.log(school.includes("now"));

const sitting = "The child was sitting on the table before it fell";
console.log(sitting.includes("sitting"));

const won = "Wonderful";
console.log(won.toUpperCase());

const izing = "Amaizing";
console.log(izing.toLowerCase());

const lay = "BEneath";
console.log(lay.toLowerCase());


let f = "A beautiful wedding";
f = f.split(" ").map(([firstchar,...rest])=>firstchar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(f);



