import {
  FieldError,
  UseControllerProps,
  UseFormRegisterReturn,
} from "react-hook-form";

interface IProps extends UseControllerProps {
  type: string;
  placeholder?: string;
  isSubmitting: boolean;
  register: UseFormRegisterReturn<string>;
  errors: FieldError | undefined;
}

function Input(props: IProps) {
  const { type, placeholder, isSubmitting, register, errors } = props;

  return (
    <div className="flex flex-col w-full">
      <input
        className={
          "w-full border-b px-4 py-3 ring-secondary-green focus:rounded-md focus:outline-none focus:ring dark:rounded-md dark:border dark:bg-secondary"
        }
        disabled={isSubmitting}
        placeholder={placeholder}
        type={type}
        {...register}
      />
      {errors && (
        <p className="mt-2 text-[13px] text-red-500">{errors.message}</p>
      )}
    </div>
  );
}

export default Input;
