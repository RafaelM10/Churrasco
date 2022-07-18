import { Container, Card, TextSchedule, BoxImage, Box } from './styles';
import { convertMoney } from 'utils/format';

import { churrasList } from 'mocks/index';

function Schedule() {
  return (
    <Container>
      <Box>
        {churrasList.map((churras) => (
          <Card key={churras.id}>
            <h1>{churras.date}</h1>
            <h1>{churras.name}</h1>
            <h1>{churras.people.length}</h1>
            <h1>
              {convertMoney(
                churras.people.reduce(
                  (partialSum, item) => partialSum + item.value,
                  0
                )
              )}
            </h1>
          </Card>
        ))}
        <Card schedule>
          <BoxImage>
            <img src="../assets/icon_bbq.png" width={40} height={44} />
          </BoxImage>
          <TextSchedule>Adicionar Churras</TextSchedule>
        </Card>
      </Box>
    </Container>
  );
}

export default Schedule;
