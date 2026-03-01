// // task3:
// interface Student {
//   name: string;
//   marks: number;
// }

// type StudentList = Student[];

// const students: StudentList = [
//   { name: "John", marks: 85 },
//   { name: "Sara", marks: 90 },
//   { name: "Ali", marks: 78 }
// ];

// students.forEach((s) => {
//   console.log(`Name: ${s.name}, Marks: ${s.marks}`);
// });
//task4:

type PointType = {
  x: number;
  y: number;
};


interface PointInterface {
  x: number;
  y: number;
}

function printPoint(point: PointType | PointInterface): void {
  console.log(`X: ${point.x}, Y: ${point.y}`);
}
const p1: PointType = { x: 5, y: 10 };
const p2: PointInterface = { x: 15, y: 20 };

printPoint(p1);
printPoint(p2);