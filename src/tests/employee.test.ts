import got from 'got'
import {strict as assert} from 'assert'

describe('User can', function() {
    it('get employee by id', async function() {
        const response = await got('http://dummy.restapiexample.com/api/v1/employee/1')
        const body = JSON.parse(response.body)

        assert(body.data.id == 1, `Expected id 1, but got ${body.data.id}`)
    })
})