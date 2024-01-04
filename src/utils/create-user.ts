import { v4 as uuidv4 } from 'uuid';

let counter = 1;

export const createUser = () => ({
  id: uuidv4(),
  name: `John Doe #${counter++}`,
});
