import { json, send } from 'micro';

export default async (req, res) => {

  if (req.url === '/api/users' && req.method === 'GET') {

    const data = JSON.stringify({oi: 'oi'});
    send(res, 200, data);

  } else if (req.url === '/api/users' && req.method === 'POST') {

    const data = await json(req);
    send(res, 200, data);

  } else {

    send(res, 404, {error: 'not found'});

  }

}
