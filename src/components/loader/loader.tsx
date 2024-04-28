import type { JSX } from 'react';

export const Loader = (): JSX.Element => {
  return (
    <div className="flex justify-center items-center pt-5">
      <div
        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white text-blue-600"
        role="status"
      ></div>
      <span className="pl-4">Loading...</span>
    </div>
  );
};
