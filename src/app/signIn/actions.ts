import { signIn } from 'next-auth/react';
import { signinSchema } from './signinSchema';

type FormState = {
  errors?: {
    username?: string[];
    password?: string[];
    _form?: string[];
  };
};

export const signin = async (
  prevState: FormState | undefined,
  formData: FormData,
): Promise<FormState> => {
  // Validate form data
  const validatedFields = signinSchema.safeParse({
    username: formData.get('username'),
    password: formData.get('password'),
  });

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Attempt to sign in
  try {
    const result = await signIn('credentials', {
      username: validatedFields.data.username,
      password: validatedFields.data.password,
      callbackUrl: '/movies',
    });

    if (result?.error) {
      return {
        errors: {
          _form: [result.error],
        },
      };
    }

    // Sign in successful
    return {};
  } catch {
    return {
      errors: {
        _form: ['An error occurred. Please try again.'],
      },
    };
  }
};
