import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';


const ResetPassword = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí va la lógica para restablecer la contraseña
    };

    return (
        <div className="reset-container">
            <Image src="/login.jpg" alt="Fondo Restablecer Contraseña" layout="fill" objectFit="cover" />
            <div className="reset-form">
                <div className="logo">
                    <Image src="/bcs_logo.png" alt="Logo API-BCS" width={150} height={50} />
                </div>
                <h2>Restablecer contraseña</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="new-password">Nueva Contraseña</label>
                    <input 
                        type="password" 
                        id="new-password" 
                        name="new-password" 
                        value={newPassword} 
                        onChange={(e) => setNewPassword(e.target.value)} 
                        required 
                    />
                    <label htmlFor="confirm-password">Confirmar Contraseña</label>
                    <input 
                        type="password" 
                        id="confirm-password" 
                        name="confirm-password" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)} 
                        required 
                    />
                    <button type="submit">Restablecer</button>
                </form>
                <Link href="/login">
                    <a>Regresar al login</a>
                </Link>
            </div>
        </div>
    );
};

export default ResetPassword;
