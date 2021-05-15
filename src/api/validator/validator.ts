import Ajv from "ajv"

export function validate(schema: any, body: any) {
    const ajv = new Ajv({
        strict: false,
        allErrors: true,
        verbose: true
    })
    const validator = ajv.compile(schema)
    const valid = validator(body)
    
    if(!valid) {
        throw new Error(`Schema validation error: ${JSON.stringify({
            validationErrors: validator.errors
        }, null, 2)}`)
    }
}