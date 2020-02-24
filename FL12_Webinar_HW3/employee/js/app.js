class Employee {
  constructor({id, firstName, lastName, birthday, salary, position, department}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
    this.salary = salary;
    this.position = position;
    this.department = department;    
  }
  static EMPLOYEES = [];

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    [this.firstName, this.lastName]= fullName.split(' ');    
  }
  
  quit() {
    EMPLOYEES.pop();
  }
  
  retire() {
    EMPLOYEES.pop();
    console.log('It was such a pleasure to work with you!');
  }

  getFire() {
    EMPLOYEES.pop();
    console.log('Not a big deal!');
  }
  changeDepartment(newDepartment) {
    this.department = newDepartment;
  }
  changePosition(newPosition) {
    this.position = newPosition;
  }
  changeSalary(newSalary) {
    this.salary = newSalary;
  }
  getPromoted(benefits) {

    console.log('Yoohooo!');
  }
  getDemoted(punishment){
    console.log('Damn!');
  }
}

class Manager extends Employee {
  constructor({id, firstName, lastName, birthday, salary, position, department, managedEmployees}) {
    super({id, firstName, lastName, birthday, salary, position, department});
    this.position = 'manager';
    this.managedEmployees = managedEmployees;
  }
}

class BlueCollarWorker extends Employee {  
}

class HRManager extends Manager {
  constructor({id, firstName, lastName, birthday, salary, position, department,managedEmployees}) {
    super({id, firstName, lastName, birthday, salary, position, department, managedEmployees});
    this.department = 'hr';
    
  }
}

class SalesManager extends Manager {
  constructor({id, firstName, lastName, birthday, salary, position, department, managedEmployees}) {
    super({id, firstName, lastName, birthday, salary, position, department, managedEmployees});
    this.department = 'sales';    
  }
}
const salesManager = new SalesManager({
  id:1, 
  firstName: 'Jhon', 
  lastName: 'Doe', 
  birthday:'10/04/1994'
});
const hrManager = new HRManager({
  id:2, 
  firstName: 'Bob', 
  lastName: 'Doe', 
  birthday:'10/04/1994'
});
const blueCollarWorkerOne = new BlueCollarWorker({
  id:3, 
  firstName: 'Mary', 
  lastName: 'Doe', 
  birthday:'10/04/1994',
  salary: 5000,
  position: 'officer worker',
  department: 'sales'
});
const blueCollarWorkerTwo = new BlueCollarWorker({
  id:3, 
  firstName: 'Mary', 
  lastName: 'Doe', 
  birthday:'10/04/1994',
  salary: 5000,
  position: 'officer worker',
  department: 'hr'
});