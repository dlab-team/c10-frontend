'use client'
import { storeAccess } from '@devsafio/app/util/accessUserManager';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import spin from './../../../../public/loading.png'

async function authUser(email, password) {

    const request = {
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email,
            password
        }),
    }

    const acceso = await fetch('https://c10.leonardojose.dev/auth/signin', request)

    return acceso;
}

export default function EmailLogin() {
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState('');
    const [successMessage, SetSuccessMessage] = useState('');
    const [redirect, setRedirect] = useState('')

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
        // Realiza la autenticación si la validación de formato pasó
        if (!emailError && !(password.length === 0 || email.length === 0)) {
            const readyForRedirect = await submitLogin();
            setRedirect(readyForRedirect);
            if (readyForRedirect) {
                router.push("/views/Form", { scroll: false })
            }
        }
    };

    const submitLogin = async () => {
        const isSuccess = await authUser(email, password);
        const data = await isSuccess.json();
        setSuccess(isSuccess.ok);
        if (isSuccess.ok) {
            storeAccess(data);
            return true;
        } else {
            SetSuccessMessage(`Error: ${data.message}`)
            return false;
        }
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
                </form>
            </div>
        </>
    )
}
