import { useLocation } from 'react-router-dom';

import { IChurras } from 'utils/types';

interface LocationPlan {
  state: {
    churras: IChurras;
  };
}

function Details() {
  const location = useLocation() as LocationPlan;

  const { churras } = location.state;

  return (
    <>
      <h1>teste</h1>
      {console.log(churras)}
    </>
  );
}

export default Details;
