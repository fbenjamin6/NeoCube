const API_KEY = import.meta.env.API_KEY ?? ''

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    'x-cg-demo-api-key': API_KEY,
  },
}
