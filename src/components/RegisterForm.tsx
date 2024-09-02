'use client';

import { register } from '@/app/register/actions';
import Form from './Form';
import BorderEffect from './BorderEffect';
import SignInWithProvider from './SignInWithProvider';
import GithubIcon from '@/assets/icons/github_icon.svg';

const RegisterForm = () => {
  const fields = [
    { id: 'name', type: 'text', placeholder: 'Enter name' },
    { id: 'email', type: 'email', placeholder: 'Enter email' },
    { id: 'password', type: 'password', placeholder: 'Enter password' },
  ];

  return (
    <Form title="Sign Up" fields={fields} action={register}>
      <div className="flex flex-col gap-4">
        <button
          type="submit"
          className="group relative w-full rounded px-4 py-2 text-white"
        >
          Sign Up
          <BorderEffect borderColor="border-white" />
        </button>
        <SignInWithProvider provider="Github" providerIcon={<GithubIcon />} />
      </div>
    </Form>
  );
};

export default RegisterForm;
