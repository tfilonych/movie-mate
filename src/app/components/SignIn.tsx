'use client';

import { signIn } from 'next-auth/react';
import { useFormState } from 'react-dom';
import { signin } from '../signIn/actions';

const SignIn = () => {
  const [state, formAction] = useFormState(signin, {});

  return (
    <div className="flex justify-center items-center mt-36">
      <div className="bg-slate-800 p-5 rounded shadow-md w-96 border-2 border-solid border-slate-600">
        <h2 className="text-2xl font-bold mb-4 text-white text-center">
          Sign In
        </h2>
        <form action={formAction} className="mb-4">
          <div className="mb-4">
            <label className="block text-white" htmlFor="username">
              Username:
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="w-full p-2 border-slate-800 text-black border-2 text- border-solid rounded"
              placeholder="Enter username"
            />
            {state.errors?.username && (
              <p className="text-red-500 text-sm mt-1">
                {state.errors.username[0]}
              </p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-white" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full p-2 border-slate-800 text-black border-2 border-solid rounded"
              placeholder="Enter password"
            />
            {state.errors?.password && (
              <p className="text-red-500 text-sm mt-1">
                {state.errors.password[0]}
              </p>
            )}
          </div>
          {state.errors?._form && (
            <p className="text-red-500 text-sm mb-2">{state.errors._form[0]}</p>
          )}
          <button
            type="submit"
            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded"
          >
            Sign in with Credentials
          </button>
        </form>
        <button
          onClick={() => {
            signIn('github', { callbackUrl: '/movies' });
          }}
          className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded"
        >
          Sign in with GitHub
        </button>
      </div>
    </div>
  );
};

export default SignIn;
