import { json } from '@xinkjs/xink';

const GET = (event) => {
  console.log(event.url.pathname);
  return json("Hello from Bun!");
};

export { GET };
