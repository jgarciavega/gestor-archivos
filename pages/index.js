// pages/index.js
import FileUploader from '../components/FileUploader';

export default function Home() {
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center my-10">
        ¡Bienvenido a tu Gestor de Archivos!
      </h1>
      {/* Aquí se debe renderizar el componente FileUploader */}
      <FileUploader />
    </div>
  );
}
