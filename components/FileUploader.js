// components/FileUploader.js

export default function FileUploader() {
  console.log("Componente FileUploader cargado");
  
  const handleFileUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    console.log("File selected:", file);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl mb-4 text-center">Subir Archivo</h2>
      <input
        type="file"
        onChange={handleFileUpload}
        className="block w-full text-lg"
      />
    </div>
  );
}
