import { server } from './constants';

export default async function getFetch(url, body = null, method = 'GET') {
  const response = await fetch(`${server}${url}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
  });
  return response;
}
