const axios = require('axios');
const app = require('./server.js'); 
const supertest = require('supertest');

const request = supertest(app);

jest.mock('axios');

describe('Server API Tests', () => {
  it('generate greetings', async () => {
    axios.post.mockResolvedValue({ data: { choices: [{ text: 'Greeting 1' }, { text: 'Greeting 2' }, { text: 'Greeting 3' }] } });

    const response = await request.post('/generate-greeting').send({ event: 'birthday', age: 10,type: 'song', atmosphere: 'happy' });

    expect(response.status).toBe(200);
    expect(response.body.greetings).toHaveLength(3);
  });

});
