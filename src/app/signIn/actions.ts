import { signIn } from 'next-auth/react';
import { signinSchema } from '../../libs/schemas';
import { FormState } from '@/libs/definitions';

export const signin = async (
  prevState: FormState | undefined,
  formData: FormData,
): Promise<FormState> => {
  // Validate form data
  const validatedFields = signinSchema.safeParse({
    email: formData.get('email'),
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
      email: validatedFields.data.email,
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
