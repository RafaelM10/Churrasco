import { useNavigate } from 'react-router-dom';
import { convertMoney } from 'utils/format';
import { churrasList } from 'mocks/index';
import { useState } from 'react';
import Modal from 'components/Modal';

import {
  Container,
  Card,
  ButtonAddList,
  BoxImage,
  Box,
  Cardescription,
} from './styles';

function Schedule() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <input type="text" placeholder="Nome do evento" />
        <input type="text" placeholder="Data do evento" />
        <button type="button" onClick={() => setShowModal(false)}>
          Salvar evento
        </button>
      </Modal>

      <Container>
        <Box>
          {churrasList.map((churras) => (
            <Card
              key={churras.id}
              onClick={() => navigate('/detalhes', { state: { churras } })}
            >
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
          <Card schedule onClick={() => setShowModal(true)}>
            <BoxImage>
              <img src="../assets/icon_bbq.png" width={40} height={44} />
            </BoxImage>
            <ButtonAddList type="button">Adicionar Churras</ButtonAddList>
          </Card>
        </Box>
      </Container>
    </>
  );
}

export default Schedule;
