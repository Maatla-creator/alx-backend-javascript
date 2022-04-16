interface Student {
	  firstName: string;
	  lastName: string;
	  age: number;
	  location: string;
}

const student1: Student = {
      firstName: "Tom",
      lastName: "Edd",
      age: 21,
      location: "Gaborone"
}

const student2: Student = {
      firstName: "Marie",
      lastName: "Currie",
      age: 20,
      location: "Palapye"
}

const studentList: Student[] = [student1, student2]

const table = document.createElement('table');
const tbody = document.createElement('tbody');

studentList.forEach(student => {
  const row = document.createElement('tr');
  const cName = document.createElement('td');
  const cLocation = document.createElement('td');
  cName.textContent = student.firstName;
  cLocation.textContent = student.location;
  row.appendChild(cName);
  row.appendChild(cLocation);
  tbody.appendChild(row);
});
table.appendChild(tbody);
document.body.appendChild(table);