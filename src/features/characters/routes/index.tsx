export const charactersRoutes = [
  {
    path: 'characters',
    async lazy() {
      const { Characters } = await import('./characters');

      return { Component: Characters };
    },
  },
  {
    path: 'characters/:characterId',
    async lazy() {
      const { Character } = await import('./character');

      return { Component: Character };
    },
  },
];
