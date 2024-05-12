import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  email: string;
  password: string;
};

export const TemplateRHFYup: React.FC = () => {
  const form = useForm<FormValues>({
    // mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { register, control, handleSubmit, formState, watch } = form;
  const { errors } = formState;

  const values = watch();

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl w-full space-y-8 p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
              RHF-Yup
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
          >
            <div className="flex flex-col gap-3 rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  type="email"
                  {...register("email")}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Email address"
                />
                <p className="text-red-500">{errors.email?.message}</p>
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  {...register("password")}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Password"
                />
                <p className="text-red-500">{errors.password?.message}</p>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:shadow-lg transition-colors duration-200}`}
              >
                Submit
              </button>
            </div>

            <hr />

            <div className="flex flex-col gap-1">
              <code>
                <span className="text-blue-500">Email:</span>
                {JSON.stringify(values.email, null, 2)}
              </code>
              <code>
                <span className="text-blue-500">Password:</span>
                {JSON.stringify(values.password, null, 2)}
              </code>
            </div>
          </form>
        </div>
      </div>

      <DevTool control={control} />
    </>
  );
};
