import { Xink } from "@xinkjs/xink"

const api = new Xink()
await api.init()

export default {
  fetch(req: Request) {
    return api.fetch(req)
  }
}