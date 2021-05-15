import type { Method } from "got"
import got from "got"


export class HttpRequestBuilder {
    protected options: any = { responseType: 'json' }

    public url(url: string | URL) {
        this.options.url = url
        return this
    }

    public method(method: Method) {
        this.options.method = method
        return this
    }

    public body(body: any) {
        this.options.json = body
        return this
    }

    public timeout(ms: number) {
        this.options.timeout = ms
        return this
    }

    public send() {
        return got<any>(this.options)
    }
}