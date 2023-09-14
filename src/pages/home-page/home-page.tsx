import { ReactElement } from 'react';

import styles from './home-page.module.css';

import { PageHeader } from '@/components/page-header';

export const HomePage = (): ReactElement => {
  return (
    <>
      <PageHeader>What is a Home Page?</PageHeader>
      <p>
        A homepage is a page designated to be the main entry point to a website, appearing when a
        user starts a session. Home pages usually offer a welcome to the Internet user, a text
        explaining the meaning of the website and a menu with links to other pages.
      </p>
      <p>
        The homepage, or homepage, is a page that serves as the starting point of the website. This
        is the default web page that loads when you visit an address that contains only one domain
        name. For example, visiting{' '}
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          https://react.dev
        </a>{' '}
        will display the <strong>React.js</strong> home page.
      </p>
      <p className={styles.example}>
        More examples of usage React Router :
        <br />
        <a
          href="https://github.com/remix-run/react-router/tree/dev/examples"
          rel="noreferrer"
          target="_blank"
        >
          https://github.com/remix-run/react-router/tree/dev/examples
        </a>
      </p>
    </>
  );
};
