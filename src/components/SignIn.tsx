'use client';

import { signIn } from 'next-auth/react';
import { useFormState } from 'react-dom';
import { signin } from '@/app/signIn/actions';
import BorderEffect from './BorderEffect';

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
            {/* <label className="block text-white" htmlFor="username">
              Username:
            </label> */}
            <input
              id="username"
              name="username"
              type="text"
              className="w-full p-2 border-slate-800 text-black border-2 text- border-solid focus:outline-slate-600 rounded"
              placeholder="Enter username"
            />
            {state.errors?.username && (
              <p className="text-red-500 text-sm mt-1">
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
              className="w-full p-2 border-slate-800 text-black border-2 border-solid rounded focus:outline-slate-600"
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
            className="w-full text-white py-2 px-4 rounded group relative"
          >
            Sign in with Credentials
            <BorderEffect utility="group" event="hover" borderColor="white" />
          </button>
        </form>
        <button
          onClick={() => {
            signIn('github', { callbackUrl: '/movies' });
          }}
          className="flex justify-center gap-4 w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
        >
          <img src="/github_icon.svg" alt="Github icon" width={20} />
          <div>Sign in with GitHub</div>
        </button>
      </div>
    </div>
  );
};

export default SignIn;
