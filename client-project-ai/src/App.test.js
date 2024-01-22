import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App'; 
jest.mock('axios');

describe('Client App Tests', () => {
  it('OK test', async () => {
    axios.post.mockResolvedValue({ data: { greetings: ['Greeting 1', 'Greeting 2', 'Greeting 3'] } });

    render(<App />);

    fireEvent.change(screen.getByLabelText('event'), { target: { value: "birthday" } });
    fireEvent.change(screen.getByLabelText('age'), { target: { value: 10 } });
    fireEvent.change(screen.getByLabelText('type'), { target: { value: "song" } });
    fireEvent.change(screen.getByLabelText('atmosphere'), { target: { value: "happy" } });

    fireEvent.click(screen.getByText('Write me a greeting'));

    await waitFor(() => {
      expect(screen.getByText('Greeting 1')).toBeInTheDocument();
      expect(screen.getByText('Greeting 2')).toBeInTheDocument();
      expect(screen.getByText('Greeting 3')).toBeInTheDocument();
    });
  });
  it('Bad test', async () => {
    axios.post.mockResolvedValue({ data: { greetings: ['Greeting 1', 'Greeting 2', 'Greeting 3'] } });

    render(<App />);

    fireEvent.change(screen.getByLabelText('event'), { target: { value: "birthday" } });
    fireEvent.change(screen.getByLabelText('age'), { target: { value: "qwqwq" } });
    fireEvent.change(screen.getByLabelText('type'), { target: { value: "song" } });
    fireEvent.change(screen.getByLabelText('atmosphere'), { target: { value: "happy" } });

    fireEvent.click(screen.getByText('Write me a greeting'));

    await waitFor(() => {
      expect(screen.getByText('Greeting 1')).toBeInTheDocument();
      expect(screen.getByText('Greeting 2')).toBeInTheDocument();
      expect(screen.getByText('Greeting 3')).toBeInTheDocument();
    });
  });
  

});
