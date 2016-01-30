import { send } from 'micro';
import sleep from 'then-sleep';
export default async function (req, res) {
  await sleep(500);
  send(res, 200, 'Ready!');
}

