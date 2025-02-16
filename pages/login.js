import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });

    if (result.error) {
      router.push("/recover"); // 🔴 Si las credenciales son incorrectas, redirige a recover
    } else {
      router.push("/"); // ✅ Si el login es exitoso, redirige a la página principal
    }
  };

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-gray-900">
      {/* Imagen de fondo */}
      <Image 
        src="/login.jpg" 
        alt="Fondo"
        layout="fill"
        objectFit="cover"
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Cuadro del login con fondo blanco */}
      <div className="bg-white shadow-xl rounded-lg p-6 w-[320px] border border-gray-300">
        {/* Logo centrado arriba */}
        <div className="text-center mb-4">
          <Image src="/api_logo.png" alt="Logo" width={130} height={40} priority />
        </div>

        {/* Título del formulario */}
        <h2 className="text-lg font-bold text-center text-gray-800 mb-4">Iniciar Sesión</h2>

        {/* Formulario de inicio de sesión */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Campo de correo electrónico */}
          <div>
            <label className="block text-xs font-medium text-gray-700">Correo electrónico</label>
            <input
              {...register("email", {
                required: "Este campo es obligatorio",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Correo electrónico inválido"
                }
              })}
              className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 outline-none"
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Campo de contraseña */}
          <div>
            <label className="block text-xs font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              {...register("password", {
                required: "Este campo es obligatorio",
                minLength: {
                  value: 6,
                  message: "Mínimo 6 caracteres"
                }
              })}
              className="w-full px-3 py-2 text-xs border border-gray-300 rounded-md focus:border-red-500 focus:ring focus:ring-red-200 outline-none"
            />
            {errors.password && (
              <p className="mt-1 text-xs text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Botón de inicio de sesión en rojo */}
          <button
            type="submit"
            className="w-full py-2 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
