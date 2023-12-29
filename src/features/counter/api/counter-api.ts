const delay = (ms: number) => new Promise((_) => setTimeout(_, ms));

export const counterApi = {
  getAmount: async (value: number) => {
    await delay(500);

    return {
      data: value + Math.round(Math.random() * 100),
    };
  },
};
