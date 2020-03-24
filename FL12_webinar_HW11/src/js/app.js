import '../scss/style.scss';
let warningEmployees = document.querySelector(".warn-employees");
let pollEmployees = document.querySelector(".pool-employees");
let allEmployees = document.querySelector(".all-employees");


fetch('https://roman4ak.github.io/fe-oop-lab/mocks/epms.json')
.then((response) => {
return response.json();
})
.then((data) => {
  
  let employees = data;
  
  class Employees {
    
    constructor(employees) {      
      this.employees = employees;      
    }

    getId(id) {
      let subItemList = document.createElement('ul');
      employees.forEach(item => {

        if(item.rm_id === id) {
          
          let subItem = document.createElement('li');

          subItem.innerHTML = item.name;
          subItemList.appendChild(subItem);
          allEmployees.appendChild(subItemList)
          
        }
      });
    }
    getEmployees() {
      
      this.employees.forEach(item => {
        if (item.pool_name) {          
          
          let itemName = document.createElement('li');
          itemName.innerHTML = item.name;
          
          allEmployees.appendChild(itemName);

          if(item.id === null) {           
            return;
          }
          this.getId(item.rm_id);
        }

      });
    }

    getPools(id, poolName) {
      this.employees.forEach(item => {
        
        if (item.pool_name === poolName) {
          
          let poolManager = document.createElement('h3');
          poolManager.innerHTML = `Pool "${item.pool_name}" manager is ${item.name}`;
          pollEmployees.appendChild(poolManager);
        }
        if(item.rm_id === id) {          
          let employeeItem = document.createElement('li');
          employeeItem.textContent = item.name;

          pollEmployees.appendChild(employeeItem);          
        }
      });
    }

    getWarnEmployees() {

      return this.employees.forEach(item => {

        if(item.performance === "low") {
          let employeeItem = document.createElement('li');
          employeeItem.textContent = item.name;

          warningEmployees.appendChild(employeeItem);
        }

      })
    }
  }
  let listOfEmployees = new Employees(employees);
  listOfEmployees.getEmployees();

  listOfEmployees.getPools(1, "Top pool");
  listOfEmployees.getPools(7, "Romeo");
  listOfEmployees.getPools(28, "Oscar");  
  listOfEmployees.getPools(48, "Uniform");
  listOfEmployees.getPools(30, "Sierra");
  listOfEmployees.getPools(69, "Kilo"); 
  listOfEmployees.getPools(75, "Echo"); 
  listOfEmployees.getPools(81, "Quebec");
  listOfEmployees.getPools(90, "Kentavra");
  listOfEmployees.getPools(91, "Alfa");
  
  listOfEmployees.getWarnEmployees();
});