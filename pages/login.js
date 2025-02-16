import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import AuthLayout from '../components/AuthLayout';
import FileUploader from '../components/FileUploader';

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password
    });
    
    if (result.error) alert('Credenciales incorrectas');
  };

  return (
    <AuthLayout>
      <div className="relative min-h-screen flex items-center justify-center">
        <Image
          src="/login.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
        
        <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-8 w-full max-w-md shadow-2xl">
          <div className="mb-8 text-center">
            <Image
              src="/api_logo.png"
              alt="Logo"
              width={180}
              height={60}
              priority
            />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Campo Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                {...register("email", {
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Correo electrónico inválido"
                  }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Campo Contraseña */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                {...register("password", {
                  required: "Este campo es obligatorio",
                  minLength: {
                    value: 6,
                    message: "Mínimo 6 caracteres"
                  }
                })}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>

            {/* Componente FileUploader */}
            <FileUploader 
              onUploadComplete={(data) => console.log('Archivo subido:', data)}
            />

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </div>
    </AuthLayout>
  );
}