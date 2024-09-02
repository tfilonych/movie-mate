import { signIn } from 'next-auth/react';
import { ReactElement } from 'react';

type SignInWithProviderProps = {
  provider: string;
  providerIcon: ReactElement;
  title?: string;
};
const SignInWithProvider = ({
  provider,
  providerIcon,
}: SignInWithProviderProps) => {
  return (
    <button
      onClick={() => {
        signIn(provider, { callbackUrl: '/movies' });
      }}
      className="flex w-full items-center justify-center gap-4 rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
    >
      {providerIcon}
      <div>{`Sign in with ${provider}`}</div>
    </button>
  );
};

export default SignInWithProvider;
