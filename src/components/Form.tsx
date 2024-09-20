import { ReactNode } from 'react';
import { useFormState } from 'react-dom';
import { FormState } from '@/libs/definitions';

type field = { id: string; type: string; placeholder: string };
type FormProps = {
  title: string;
  fields: field[];
  action: (
    prevState: FormState | undefined,
    formData: FormData,
  ) => Promise<FormState>;
  children: ReactNode;
};

const Form = ({ title, fields, action, children }: FormProps) => {
  const [state, formAction] = useFormState(action, {});

  return (
    <div className="mt-36 flex items-center justify-center">
      <div className="w-96 rounded border-2 border-solid p-5 shadow-md">
        <h2 className="mb-4 text-center text-2xl font-bold text-white">
          {title}
        </h2>
        <form action={formAction} className="mb-4">
          {fields.map((field) => (
            <div key={field.id} className="mb-4">
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                className="w-full rounded border-2 border-solid border-slate-800 p-2 text-black focus:outline-slate-600"
                placeholder={field.placeholder}
              />
              {state.errors?.[field.id as keyof typeof state.errors] && (
                <p className="mt-1 text-sm text-brand">
                  {state.errors[field.id as keyof typeof state.errors]?.[0]}
                </p>
              )}
            </div>
          ))}
          {state.errors?._form && (
            <p className="mb-2 text-sm text-brand">{state.errors._form[0]}</p>
          )}
          {children}
        </form>
      </div>
    </div>
  );
};

export default Form;
