import { json, type RequestEvent } from '@xinkjs/xink';

const GET = (event: RequestEvent) => {
  console.log(event.url.pathname);
  return json("Hello from Bun!");
};

export { GET };
