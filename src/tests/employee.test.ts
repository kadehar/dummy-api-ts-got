import { strict as assert } from 'assert'
import { EmployeeController } from '../api/controller/employee.controller'
import { Employee } from '../api/model/employee.model'

const employee = new EmployeeController()
const employeeToCreate: Omit<Employee, 'id'> = {
    "name": "Mufalda Kronen",
    "salary": 25000,
    "age": 30
}
const employeeToUpdate: Omit<Employee, 'id'> = {
    "name": "Konnan Kronen",
    "salary": 23000,
    "age": 30
}

describe('Employee can', function() {
    it('be received by his id', async function() {
        const body = await employee.getById(1)
        assert(body.data.id == 1, `Expected id 1, but got ${body.data.id}`)
    })
    it('get employees list', async function() {
        const body = await employee.getAll()
        assert(body.data.some((e: any) => e.employee_age > 30), 'Does not have employees with employee_age > 0')
    })
    it('be added', async function() {
        const addedEmployee = await employee.addNew(employeeToCreate)
        assert(addedEmployee.data.name == employeeToCreate.name, `Expected ${employeeToCreate.name}, but was ${addedEmployee.data.name}`)
    })
    it('be updated', async function() {
        const addedEmployee = await employee.addNew(employeeToCreate)
        const employeeId = addedEmployee.data.id

        const updatedEmployee = await employee.update(employeeId, employeeToUpdate)
        assert(updatedEmployee.data.name == employeeToUpdate.name, `Expected ${employeeToUpdate.name}, but was ${updatedEmployee.data.name}`)
    })
    it('be deleted', async function() {
        const addedEmployee = await employee.addNew(employeeToCreate)
        const employeeId = addedEmployee.data.id

        const deletedEmployee = await employee.delete(employeeId)
        assert(deletedEmployee.status == 'success', `Expected success, but was ${deletedEmployee.status}`)
    })
})