import { Xink } from '@xinkjs/xink';

const api = new Xink();
await api.init();
const index = {
  fetch(req) {
    return api.fetch(req);
  }
};

export { index as default };
