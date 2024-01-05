import { JSX } from 'react';
import { Outlet } from 'react-router-dom';

import { TopMenu } from '@/components/top-menu';
import { Footer } from '@/components/footer';

export const RootLayout = (): JSX.Element => {
  return (
    <>
      <header>
        <TopMenu />
      </header>
      <main className="container mx-auto mt-5">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
