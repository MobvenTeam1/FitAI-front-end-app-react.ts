import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  email: string;
  password: string;
};

export const Login: React.FC = () => {
  const form = useForm<FormValues>();
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "This is required",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Invalid email address",
                  },
                  validate: {
                    notAdmin: (fieldValue: string) =>
                      fieldValue !== "admin@example.com" || "Enter valid email",
                    notBlackedList: (fieldValue: string) =>
                      !fieldValue.includes("blacklist") ||
                      "This email is blacklisted",
                  },
                })}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500"
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
                {...register("password", {
                  required: {
                    value: true,
                    message: "This is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Minimum length should be 6",
                  },
                })}
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500"
                placeholder="Password"
              />
            </div>
            <p className="text-red-500">{errors.password?.message}</p>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:shadow-lg"
            >
              Login
            </button>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};
