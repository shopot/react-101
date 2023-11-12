import { faker } from '@faker-js/faker';

export const characterGenerator = () => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  image: faker.image.url(),
  gender: 'Male',
  status: 'Alive',
});
