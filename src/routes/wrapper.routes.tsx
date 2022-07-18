import Header from 'components/Header';

interface PropsRouterWrapper {
  children: React.ReactNode;
}

function RouterWrapper({ children }: PropsRouterWrapper): JSX.Element {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default RouterWrapper;
