import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

type FormValues = {
  email: string;
  password: string;
  social: {
    facebook: string;
    twitter: string;
  };
  phoneNumbers: string[];
  users: {
    name: string;
    age: number;
  }[];
  date: Date;
};

type ValueOf<T> = T[keyof T];

export const TemplateHookForm: React.FC = () => {
  const form = useForm<FormValues>({
    // mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
      social: {
        facebook: "",
        twitter: "",
      },
      phoneNumbers: ["", ""],
      users: [
        {
          name: "Mehmet",
          age: 13,
        },
        {
          name: "Zerya Betül",
          age: 12,
        },
      ],
      date: new Date(),
    },
  });
  const {
    register,
    control,
    handleSubmit,
    formState,
    watch,
    getValues,
    setValue,
  } = form;
  const { errors, touchedFields, dirtyFields, isDirty, isValid } = formState;

  const values = watch();

  const { fields, remove, append } = useFieldArray({
    control,
    name: "users",
  });

  const handleSetValue = (
    field: keyof FormValues,
    value: ValueOf<FormValues>
  ) => {
    setValue(field, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const handleGetValues = () => {
    console.log("getValues", getValues());
    // console.log("getValues", getValues(["email", "password"]));
    // console.log("getValues", getValues("social.facebook"));
  };

  const onError = (errors: FieldErrors<FormValues>) => {
    console.log("errors", errors);
  };

  const onSubmit = (data: FormValues) => {
    console.log("data", data);
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 p-6 bg-white rounded-lg shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-800">
              React-Hook-Form
            </h2>
          </div>
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(onSubmit, onError)}
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
                        fieldValue !== "admin@example.com" ||
                        "Enter valid email",
                      notBlackedList: (fieldValue: string) =>
                        !fieldValue.includes("blacklist") ||
                        "This email is blacklisted",
                    },
                  })}
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
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Password"
                />
                <p className="text-red-500">{errors.password?.message}</p>
              </div>
              <div>
                <label htmlFor="facebook" className="sr-only">
                  Facebook
                </label>
                <input
                  id="facebook"
                  type="text"
                  {...register("social.facebook", {
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Facebook"
                />
                <p className="text-red-500">
                  {errors.social?.facebook?.message}
                </p>
              </div>
              <div>
                <label htmlFor="twitter" className="sr-only">
                  Twitter
                </label>
                <input
                  id="twitter"
                  type="text"
                  {...register("social.twitter", {
                    // disabled: true,
                    // disabled: watch("social.facebook") === "",
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Twitter"
                />
                <p className="text-red-500">
                  {errors.social?.twitter?.message}
                </p>
              </div>
              <div>
                <label htmlFor="primaryPhoneNumber" className="sr-only">
                  Primary Phone Number
                </label>
                <input
                  id="primaryPhoneNumber"
                  type="text"
                  {...register("phoneNumbers.0", {
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Primary Phone Number"
                />
                <p className="text-red-500">
                  {errors.phoneNumbers?.[0]?.message}
                </p>
              </div>
              <div>
                <label htmlFor="secondaryPhoneNumber" className="sr-only">
                  Secondary Phone Number
                </label>
                <input
                  id="secondaryPhoneNumber"
                  type="text"
                  {...register("phoneNumbers.1", {
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Secondary Phone Number"
                />
                <p className="text-red-500">
                  {errors.phoneNumbers?.[1]?.message}
                </p>
              </div>

              <div>
                <label htmlFor="">List of Users</label>
                <div className="mt-4">
                  {fields.map((field, index) => (
                    <div
                      key={field.id}
                      className="flex gap-3 p-4 border border-gray-200 rounded-md mb-4"
                    >
                      <input
                        type="text"
                        {...register(`users.${index}.name`, {
                          required: {
                            value: true,
                            message: "This is required",
                          },
                        })}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                        placeholder="Name"
                      />
                      <input
                        type="number"
                        {...register(`users.${index}.age`, {
                          valueAsNumber: true,
                          required: {
                            value: true,
                            message: "This is required",
                          },
                        })}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                        placeholder="Age"
                      />
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                  <div className="flex items-center w-full justify-center">
                    <button
                      type="button"
                      onClick={() => append({ name: "", age: 0 })}
                      className="px-2 py-1 bg-green-500 text-white rounded-md hover:bg-green-600 mx-auto"
                    >
                      Add New User Section
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="date" className="sr-only">
                  Date
                </label>
                <input
                  id="date"
                  type="date"
                  {...register("date", {
                    valueAsDate: true,
                    required: {
                      value: true,
                      message: "This is required",
                    },
                  })}
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm hover:border-indigo-500 transition-colors duration-200"
                  placeholder="Date"
                />
                <p className="text-red-500">{errors.date?.message}</p>
              </div>
            </div>

            {/* her click attığın zaman o anki tıkladığında oluşan values değerlerini almaya yarar */}
            <div className="flex gap-1 items-center">
              <button
                type="button"
                onClick={handleGetValues}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 hover:shadow-lg transition-colors duration-200"
              >
                Get Values
              </button>
              <button
                type="button"
                onClick={() => handleSetValue("email", "Set Value Updated")}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 hover:shadow-lg transition-colors duration-200"
              >
                Set Value
              </button>
            </div>

            <div>
              <button
                disabled={!isDirty || !isValid}
                type="submit"
                className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:shadow-lg transition-colors duration-200 ${
                  !isDirty || !isValid ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                Submit
              </button>
            </div>

            <div className="flex flex-col gap-1">
              <code>
                <span className="text-blue-500">Email:</span>
                {JSON.stringify(values.email, null, 2)}
              </code>
              <code>
                <span className="text-blue-500">Password:</span>
                {JSON.stringify(values.password, null, 2)}
              </code>
              <code>
                <span className="text-blue-500">Socials:</span>
                {JSON.stringify(values.social, null, 2)}
              </code>
              <code>
                <span className="text-blue-500">Phone Numbers:</span>
                {JSON.stringify(values.phoneNumbers, null, 2)}
              </code>
              <code>
                <span className="text-blue-500">Users:</span>
                {JSON.stringify(values.users, null, 2)}
              </code>
              <code>
                <span className="text-blue-500">Date:</span>
                {JSON.stringify(values.date, null, 2)}
              </code>
            </div>

            <hr />

            <div className="flex flex-col gap-1">
              <code>
                <span className="text-blue-500">Touched Fields:</span>
                {JSON.stringify(touchedFields, null, 2)}
              </code>
              <code>
                <span className="text-blue-500">Dirty Fields:</span>
                {JSON.stringify(dirtyFields, null, 2)}
              </code>
              <code>
                <span className="text-blue-500">Is Dirty:</span>
                {JSON.stringify(isDirty, null, 2)}
              </code>
            </div>
          </form>
        </div>
      </div>

      <DevTool control={control} />
    </>
  );
};
