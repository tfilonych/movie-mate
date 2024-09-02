'use server';

import { hash } from 'bcryptjs';
import prisma from '@/libs/prisma';
import { registerSchema } from '@/libs/schemas';
import { FormState } from '@/libs/definitions';

export const register = async (
  prevState: FormState | undefined,
  formData: FormData,
): Promise<FormState> => {
  // Validate form data
  const validatedFields = registerSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;

  try {
    // Hash the password
    const hashedPassword = await hash(password, 10);

    const user = {
      name,
      email,
      password: hashedPassword,
    };
    // Create a new user in the database
    await prisma.user.create({ data: user });

    console.log(user);

    // Registration successful, redirect or show success message
    return {};
  } catch {
    // Handle errors such as email already exists
    return {
      errors: {
        _form: ['An error occurred during registration. Please try again.'],
      },
    };
  }
};
