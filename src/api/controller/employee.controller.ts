import { JsonRequest as HttpRequestBuilder } from "http-req-builder"
import { Employee } from "../model/employee.model"
import { Employees } from "../model/employees.model"
import { EmployeeData } from "../model/employee_data.model"
import { Message } from "../model/response.model"
import { validate } from "../validator/validator"

export class EmployeeController {
    async getById(id: number | string) {
        const body = (await new HttpRequestBuilder()
                    .url(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
                    .send<EmployeeData>()).body
        
        const schema = require('../schema/employee.json')
        validate(schema, body)
        return body         
    }

    async getAll() {
        const body = (await new HttpRequestBuilder()
                    .url('http://dummy.restapiexample.com/api/v1/employees')
                    .send<Employees>()).body

        const schema = require('../schema/employees.json')
        validate(schema, body)
        return body
    }

    async addNew(employee: Omit<Employee, 'id'>) {
        const body = (await new HttpRequestBuilder()
                    .url('http://dummy.restapiexample.com/api/v1/create')
                    .method('post')
                    .body(employee)
                    .send<EmployeeData>()).body

        const schema = require('../schema/employee_data.json')
        validate(schema, body)
        return body
    }

    async update(id: number | string, employee: Omit<Employee, 'id'>) {
        const body = (await new HttpRequestBuilder()
                    .url(`http://dummy.restapiexample.com/api/v1/update/${id}`)
                    .method('put')
                    .body(employee)
                    .send<EmployeeData>()).body

        const schema = require('../schema/employee_data.json')
        validate(schema, body)
        return body
    }

    async delete(id: number | string) {
        const body = (await new HttpRequestBuilder()
                    .url(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
                    .method('delete')
                    .send<Message>()).body
        
        const schema = require('../schema/message.json')
        validate(schema, body)
        return body
    }
}