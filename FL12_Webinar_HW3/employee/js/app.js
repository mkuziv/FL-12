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
  static EMPLOYEES  = [];
  static addInstance(name) {
    Employee.EMPLOYEES.push(name);
  }
  
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  set fullName(fullName) {
    [this.firstName, this.lastName]= fullName.split(' ');    
  }
  get age() {
    const diff = Date.now() - new Date(this.birthday).getTime();
    return parseInt(diff / (1000 * 60 * 60 * 24 * 365), 10);
  }
  
  deleteInstance() {
    Employee.EMPLOYEES.filter( (item, index) => {
      if(item == this.className){
        Employee.EMPLOYEES.splice(index, 1);
      }
    });
  }

  quit() {
    this.deleteInstance();
  }
  
  retire() {
    this.deleteInstance();
    console.log('It was such a pleasure to work with you!');
  }

  getFire() {
    this.deleteInstance();
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
    if (benefits.salary){      
      this.changeSalary(benefits.salary);
    } else if (benefits.department){
      this.changeDepartment(benefits.department);
    } else if (benefits.position) {
      this.changePosition(benefits.position);
    }  
    console.log('Yoohooo!');
  }
  
  getDemoted(punishment){
    if (punishment.salary) {      
      this.changeSalary(punishment.salary);
    } else if (punishment.department) {
      this.changeDepartment(punishment.department);
    } else if (punishment.position) {
      this.changePosition(punishment.position);
    }  
    console.log('Damn!');
  }
}

class Manager extends Employee {
  constructor({id, firstName, lastName, birthday, salary, position, department}) {
    super({id, firstName, lastName, birthday, salary, position, department});
    this.position = 'manager'; 
    this.managedEmployees = [];
  }
}

class BlueCollarWorker extends Employee { 
  constructor({id, firstName, lastName, birthday, salary, position, department}) {
    super({id, firstName, lastName, birthday, salary, position, department})
    this.className = 'BlueCollarWorker';
    Employee.addInstance('BlueCollarWorker');
  }
}

class HRManager extends Manager {
  constructor({id, firstName, lastName, birthday, salary, position, department, managedEmployees}) {
    super({id, firstName, lastName, birthday, salary, position, department, managedEmployees});
    this.department = 'hr';
    this.className ='HRManager';
    Employee.addInstance('HRManager');
  }
}

class SalesManager extends Manager {
  constructor({id, firstName, lastName, birthday, salary, position, department, managedEmployees}) {
    super({id, firstName, lastName, birthday, salary, position, department, managedEmployees});
    this.department = 'sales';
    this.className ='SalesManager';
    Employee.addInstance('SalesManager');    
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