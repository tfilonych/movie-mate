'use client';

import Link from 'next/link';
import { signin } from '@/app/signIn/actions';
import BorderEffect from './BorderEffect';
import GithubIcon from '@/assets/icons/github_icon.svg';
import Form from './Form';
import SignInWithProvider from './SignInWithProvider';

const LoginForm = () => {
  const fields = [
    { id: 'email', type: 'email', placeholder: 'Enter email' },
    { id: 'password', type: 'password', placeholder: 'Enter password' },
  ];

  return (
    <Form title="Sign In" fields={fields} action={signin}>
      <div className="flex flex-col gap-4">
        <button
          type="submit"
          className="group relative w-full rounded px-4 py-2 text-white"
        >
          Sign in with Credentials
          <BorderEffect borderColor="border-white" />
        </button>
        <SignInWithProvider provider="Github" providerIcon={<GithubIcon />} />
        <div className="flex justify-between">
          Don&apos;t have an account yet?
          <Link href="register">
            <span className="cursor-pointer text-brand underline underline-offset-2">
              Sign Up here
            </span>
          </Link>
        </div>
      </div>
    </Form>
  );
};

export default LoginForm;
