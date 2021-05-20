import { url } from '..';

export async function getFetch(route, body = null, method = 'GET') {
  const response = await fetch(`${url.main}${route}`, {
    method,
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
  });
  return response;
}

export async function getData(route, method = 'GET') {
  const response = await fetch(`${url.main}${route}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('token')
    }
  });
  return response;
}