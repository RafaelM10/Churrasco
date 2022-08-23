import { useLocation } from 'react-router-dom';
import { convertMoney } from 'utils/format';

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
    <Container>
      <Border>
        <h1>{churras.date}</h1>
        <p>{churras.name}</p>
        <p>
          {' '}
          {convertMoney(
            churras.people.reduce(
              (partialSum, item) => partialSum + item.value,
              0
            )
          )}
        </p>
        <Input>
          <input type="text" />
          <input type="text" />
          <input type="text" />
          <input type="text" />
        </Input>
      </Border>
    </Container>
  );
}

export default Details;
