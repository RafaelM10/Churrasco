import { useAuth } from 'contexts/AuthContext';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';

import {
  Container,
  InputLabel,
  InputText,
  Button,
  Box,
  ErrorText,
  ContainerInput,
  ErrorLogin,
} from './styles';

interface FormData {
  email: string;
  password: string;
}

interface LocationAccess {
  state?: {
    access?: boolean | null;
  };
}

function Login() {
  const location = useLocation() as LocationAccess;
  const { signIn, cleanState } = useAuth();

  const [error, setError] = useState<string>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    signIn(data);
  };

  useEffect(() => {
    if (location?.state?.access) {
      cleanState();
      setError('Por favor, faça login para continuar');
    }
  }, [location?.state]);

  return (
    <Container>
      {error && <ErrorLogin>{error}</ErrorLogin>}

      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputLabel>Login</InputLabel>
          <InputText
            {...register('email', { required: true })}
            error={!!errors.email}
            mb={!errors.email}
            placeholder="e-mail"
            type="email"
          />
          {errors.email && <ErrorText>Digite o email</ErrorText>}
          <ContainerInput>
            <InputLabel>Senha</InputLabel>
            <InputText
              {...register('password', { required: true })}
              error={!!errors.password}
              placeholder="senha"
              type="password"
            />
            {errors.password && <ErrorText>Digite a senha</ErrorText>}
          </ContainerInput>
          <Button type="submit">Entrar</Button>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
