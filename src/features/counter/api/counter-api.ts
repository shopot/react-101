const delay = (ms: number) => new Promise((_) => setTimeout(_, ms));

export const counterApi = {
  getAmount: async () => {
    await delay(10);

    return {
      data: Math.round(Math.random() * 100),
    };
  },
};
