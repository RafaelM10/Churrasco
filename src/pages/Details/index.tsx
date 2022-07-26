import { useLocation } from 'react-router-dom';

import { IChurras } from 'utils/types';

interface LocationProps {
  state: {
    churras: IChurras;
  };
}

function Details() {
  const location = useLocation() as LocationProps;

  const { churras } = location.state;

  return (
    <>
      <h1>teste</h1>
      {console.log(churras)}
    </>
  );
}

export default Details;
