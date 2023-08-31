const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = employee => employee.pais === 'China'
const women = employee => employee.genero === 'F'
const lowestSalary = (employee, currentEmployee) => {
    return employee.salario < currentEmployee.salario ? employee : currentEmployee
}

axios.get(url).then(response => {
    const employees = response.data
    console.log(employees)

    // search for the chinese woman with lowest salary
    const employee = employees
        .filter(chineses)
        .filter(women)
        .reduce(lowestSalary)

    console.log(employee)    
})