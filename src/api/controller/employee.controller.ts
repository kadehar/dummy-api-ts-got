import { JsonRequest as HttpRequestBuilder } from "http-req-builder"

export class EmployeeController {
    async getById(id: number | string) {
        return (await new HttpRequestBuilder()
                    .url(`http://dummy.restapiexample.com/api/v1/employee/${id}`)
                    .send()).body
    }

    async getAll() {
        return (await new HttpRequestBuilder()
                    .url('http://dummy.restapiexample.com/api/v1/employees')
                    .send()).body
    }

    async addNew(employee: {
        "name": string,
        "salary": number,
        "age": number
    }) {
        return (await new HttpRequestBuilder()
                    .url('http://dummy.restapiexample.com/api/v1/create')
                    .method('post')
                    .body(employee)
                    .send()).body
    }

    async update(id: number | string, employee: {
        "name": string,
        "salary": number,
        "age": number
    }) {
        return (await new HttpRequestBuilder()
                    .url(`http://dummy.restapiexample.com/api/v1/update/${id}`)
                    .method('put')
                    .body(employee)
                    .send()).body
    }

    async delete(id: number | string) {
        return (await new HttpRequestBuilder()
                    .url('http://dummy.restapiexample.com/api/v1/create')
                    .method('delete')
                    .send()).body
    }
}