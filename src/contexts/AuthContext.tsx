import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  email: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (data: SignInData) => void;
  cleanState: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const getUser = localStorage.getItem('@user-churras');
  const [user, setUser] = useState<User | null>(
    (getUser && JSON.parse(getUser)) || null
  );

  function cleanState(): void {
    setUser(null);
    return;
  }

  function signIn(props: SignInData): void {
    cleanState();

    // chamar api do backend, passando email e password

    setUser({ email: props.email });

    localStorage.setItem(
      '@user-churras',
      JSON.stringify({ email: props.email })
    );

    navigate('/lista-de-churras');

    return;
  }

  return (
    <AuthContext.Provider value={{ user, signIn, cleanState }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
