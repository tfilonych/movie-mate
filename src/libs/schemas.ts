import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().optional(),
  image: z.string().optional(),
  email: z.string().email(),
  password: z.string().min(6),
});

export const signinSchema = registerSchema.pick({
  email: true,
  password: true,
});
