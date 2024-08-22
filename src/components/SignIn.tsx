'use client';

import { signIn } from 'next-auth/react';
import { useFormState } from 'react-dom';
import { signin } from '@/app/signIn/actions';
import BorderEffect from './BorderEffect';
import GithubIcon from '@/assets/icons/github_icon.svg';

const SignIn = () => {
  const [state, formAction] = useFormState(signin, {});

  return (
    <div className="mt-36 flex items-center justify-center">
      <div className="w-96 rounded border-2 border-solid border-slate-600 bg-slate-800 p-5 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold text-white">
          Sign In
        </h2>
        <form action={formAction} className="mb-4">
          <div className="mb-4">
            {/* <label className="block text-white" htmlFor="username">
              Username:
            </label> */}
            <input
              id="username"
              name="username"
              type="text"
              className="text- w-full rounded border-2 border-solid border-slate-800 p-2 text-black focus:outline-slate-600"
              placeholder="Enter username"
            />
            {state.errors?.username && (
              <p className="mt-1 text-sm text-red-500">
                {state.errors.username[0]}
              </p>
            )}
          </div>
          <div className="mb-4">
            {/* <label className="block text-white" htmlFor="password">
              Password:
            </label> */}
            <input
              id="password"
              name="password"
              type="password"
              className="w-full rounded border-2 border-solid border-slate-800 p-2 text-black focus:outline-slate-600"
              placeholder="Enter password"
            />
            {state.errors?.password && (
              <p className="mt-1 text-sm text-red-500">
                {state.errors.password[0]}
              </p>
            )}
          </div>
          {state.errors?._form && (
            <p className="mb-2 text-sm text-red-500">{state.errors._form[0]}</p>
          )}
          <button
            type="submit"
            className="group relative w-full rounded px-4 py-2 text-white"
          >
            Sign in with Credentials
            <BorderEffect borderColor="border-white" />
          </button>
        </form>
        <button
          onClick={() => {
            signIn('github', { callbackUrl: '/movies' });
          }}
          className="flex w-full items-center justify-center gap-4 rounded bg-gray-600 px-4 py-2 text-white hover:bg-gray-700"
        >
          <GithubIcon />
          <div>Sign in with GitHub</div>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
