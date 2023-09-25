'use client'
import { useState } from 'react';
import Image from 'next/image';
import spin from './../../../../public/loading.png';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from "next/navigation";


export default function EmailLogin() {
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [successMessage, SetSuccessMessage] = useState('');
    const [redirect, setRedirect] = useState('');
    const router = useRouter();

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
            setEmailError('Invalid email format');
        } else {
            setEmailError('');
        }
    };

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        validateEmail(newEmail);
    };

    const handlePassChanged = (e) => {
        const newPass = e.target.value;
        setPassword(newPass);
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!emailError && !(password.length === 0 || email.length === 0)) {
            await submitLogin();
            setRedirect(true);
        }
    };

    const submitLogin = async () => {
        signIn("credentials", {
            email,
            password,
            redirect: false,
        }).then(({ error }) => {
            if (error === "403") {
                setSuccess(false);
                SetSuccessMessage("Credenciales Incorrectas");
                setRedirect(false);
            } else {
                setSuccess(true);
                router.push("/views/Form", { scroll: false })
            }
        })
    }

    return (
        <>
            <div className='flex items-center justify-center p-14 backgroundRegistro min-h-full'>
                <form
                    className='flex flex-col items-center justify-center w-[80%] h-full gap-5 rounded-md bg-[#FFF] pt-[51px] pb-[1%] px-[5%]'
                    style={success ? { border: '5px solid green' } : (success !== false ? { border: '5px solid black' } : { border: '5px solid red' })}
                    onSubmit={handleLogin}>
                    <h1 className='text-[#140B34] text-5xl mb-[34px] font-semibold text-center'>Iniciar Sesión</h1>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email</label>
                        <input
                            className='relative border border-[#000000] shadow-md bg-#e2f2fe h-12 w-[451px] top-0 left-0 rounded-lg bg-azulClaro'
                            type="text"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="password">Contraseña</label>
                        <input
                            className='relative border border-[#000000] shadow-md bg-#e2f2fe h-12 w-[451px] top-0 left-0 rounded-lg bg-azulClaro'
                            type='password'
                            id="password"
                            value={password}
                            onChange={handlePassChanged}
                        />
                    </div>
                    {successMessage.length !== 0 && (success !== true && <p>{successMessage}</p>)}
                    <button
                        className="flex justify-center border border-[#000000] mt-10 shadow-md rounded-lg px-6 pr-6 py-3 gap-2 text-azul disabled:bg-gray-300 disabled:opacity-50"
                        type="submit"
                        disabled={password.length === 0 || email.length === 0 || redirect === true}
                        
                    >
                        Login {redirect && <Image src={spin} className='animate-spin h-5 w-5 mr-3'></Image>}
                    </button>
                    <Link className='text-blue-700 decoration-wavy' href="/views/Recovery">Haz Olvidado tu Contraseña? haz click aqui</Link>
                </form>
            </div>
        </>
    )
}
