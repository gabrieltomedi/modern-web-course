class Launch {
    constructor(name = 'Generic', value = 0) {
        this.name = name
        this.value =  value
    }
    
}

class  FinancialCycle {
    constructor(month, year) {
        this.month = month
        this.year= year
        this.Launchs = []
    }

    addLaunchs(...Launchs){ // 
        Launchs.forEach(l => this.Launchs.push(l))
    }

    sumario() { 
        let  valueConsolidated = 0
        this.Launchs.forEach(l => {
            valueConsolidated += l.value
        })
        return valueConsolidated
    }
}

const salary = new Launch('salary', 45000)
const electricityBill = new Launch('electricity', -220)

const contas = new FinancialCycle(6, 2018)
contas.addLaunchs(salary, electricityBill)
console.log(contas.sumario()) 

console.log(electricityBill)