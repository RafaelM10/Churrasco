import {
  Container,
  Card,
  ButtonAddList,
  BoxImage,
  Box,
  Cardescription,
} from './styles';
import { convertMoney } from 'utils/format';
import { churrasList } from 'mocks/index';

interface ScheduleProps {
  onOpenNewTransactionModal: () => void;
}

function Schedule({ onOpenNewTransactionModal }: ScheduleProps) {
  return (
    <Container>
      <Box>
        {churrasList.map((churras) => (
          <Card key={churras.id}>
            <Cardescription>
              <h1>{churras.date}</h1>
              <p>{churras.name}</p>
              <h2>{churras.people.length}</h2>
            </Cardescription>

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
          <ButtonAddList type="button" onClick={onOpenNewTransactionModal}>
            Adicionar Churras
          </ButtonAddList>
        </Card>
      </Box>
    </Container>
  );
}

export default Schedule;
