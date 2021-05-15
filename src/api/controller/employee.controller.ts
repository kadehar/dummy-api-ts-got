import { JsonRequest as HttpRequestBuilder } from "http-req-builder"
import { Employee } from "../model/employee.model"
import { Employees } from "../model/employees.model"
import { EmployeeData } from "../model/employee_data.model"
import { Message } from "../model/response.model"

export class EmployeeController {
    async getById(id: number | string) {
        return (await new HttpRequestBuilder()
                    .url(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
                    .send<EmployeeData>()).body
    }

    async getAll() {
        return (await new HttpRequestBuilder()
                    .url('http://dummy.restapiexample.com/api/v1/employees')
                    .send<Employees>()).body
    }

    async addNew(employee: Omit<Employee, 'id'>) {
        return (await new HttpRequestBuilder()
                    .url('http://dummy.restapiexample.com/api/v1/create')
                    .method('post')
                    .body(employee)
                    .send<EmployeeData>()).body
    }

    async update(id: number | string, employee: Omit<Employee, 'id'>) {
        return (await new HttpRequestBuilder()
                    .url(`http://dummy.restapiexample.com/api/v1/update/${id}`)
                    .method('put')
                    .body(employee)
                    .send<EmployeeData>()).body
    }

    async delete(id: number | string) {
        return (await new HttpRequestBuilder()
                    .url(`http://dummy.restapiexample.com/api/v1/delete/${id}`)
                    .method('delete')
                    .send<Message>()).body
    }
}