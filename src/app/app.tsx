import { ReactElement } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Profile } from '@/components/profile';
import { Card } from '@/components/card';

const App = (): ReactElement => {
  return (
    <>
      <Header />
      <main>
        <Card>
          <Profile />
        </Card>
      </main>
      <Footer />
    </>
  );
};

export default App;
