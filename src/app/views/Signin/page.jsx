
export default function Signin() {
  return (

    <section className="bg-white">
      <div className="flex justify-center items-center min-h-screen">
        <div className="max-w-xl">
          <form action="#" className="mt-0 grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="FirstName" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                id="FirstName"
                name="first_name"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="LastName" className="block text-sm font-medium text-gray-700">
                Apellido
              </label>
              <input
                type="text"
                id="LastName"
                name="last_name"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="col-span-6">
              <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="Email"
                name="email"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                Contraseña
              </label>
              <input
                type="password"
                id="Password"
                name="password"
                className="mt-1 w-full rounded-md border-gray-500 bg-white text-sm text-gray-700 shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label htmlFor="PasswordConfirmation" className="block text-sm font-medium text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                Confirmar Contraseña
              </label>
              <input
                type="password"
                id="PasswordConfirmation"
                name="password_confirmation"
                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md focus:border-blue-500"
              />
            </div>

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500 transform hover:scale-105">
              Create an account
            </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
