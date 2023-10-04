"use client"

import Link from "next/link"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark, faHourglassHalf, faHouse } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export default function Register() {
    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [alert, setAlert] = useState({
        message: '',
        status: ''
    });

    const [btnLoading, setBtnLoading] = useState(false);

    const changeHandler = (e) => {
        setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setBtnLoading(true);
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                body: JSON.stringify(registerData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            setAlert({ message: responseData.message, status: responseData.status })
            setRegisterData({ name: '', email: '', password: '' });
        } catch (error) {
            console.log(error);
            setAlert({ message: "Mistakes occurred while processing your request. Please try again later or contact our support if the issue persists.", status: 400 })
        }
        document.getElementById('modal-alert').showModal();
        setTimeout(() => {
            setBtnLoading(false);
        }, 1500);
    }

    return (
        <div>
            <dialog id="modal-alert" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-base-100 text-neutral absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="text-center w-full">{alert.status == 200 ? <FontAwesomeIcon icon={faCircleCheck} beat size="2xl" style={{ color: "#45973b", }} /> : <FontAwesomeIcon icon={faCircleXmark} beat size="2xl" style={{ color: "#ff3c1a", }} />}
                    </h3>
                    <p className="py-4 text-neutral font-bold text-center text-xl">{alert.message}</p>
                </div>
            </dialog>

            <div className="flex flex-col w-full lg:flex-row h-screen">
                <div className="grid flex-grow h-full w-full bg-neutral place-items-center">
                    <div className="place-self-start m-3">
                        <Link href={`/`}>
                            <button className="btn btn-circle btn-outline text-neutral-content">
                                <FontAwesomeIcon icon={faHouse} beat size="xl" />
                            </button>
                        </Link>
                    </div>
                    <div className="px-5 mb-10">
                        <h5 className="text-5xl font-bold mb-5">"The first rule of management is delegation. Don't try and do everything
                            yourself because you can't."
                        </h5>
                        <p>- Anthea Turner</p>
                    </div>
                </div>
                <div className="grid flex-grow h-full w-full bg-white place-items-center">
                    <div className="justify-self-end place-self-start m-3">
                        <Link href={`/login`}>
                            <button className="btn btn-outline text-neutral">
                                Login
                            </button>
                        </Link>
                    </div>
                    <div>
                        <div className="text-neutral font-bold text-lg mb-3">Start your progress with new account.</div>
                        <div className="form-control w-full max-w-xs">
                            <form onSubmit={submitHandler}>
                                <div className="mb-3">
                                    <label className="label">
                                        <span className="label-text">What is your name?</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Type your name"
                                        className="input input-bordered border-neutral w-full max-w-xs text-neutral"
                                        onChange={changeHandler}
                                        name="name"
                                        value={registerData.name}
                                        required
                                    />

                                </div>
                                <div className="mb-3">
                                    <label className="label">
                                        <span className="label-text">Please, write down your email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Type your email"
                                        className="input input-bordered border-neutral w-full max-w-xs text-neutral"
                                        onChange={changeHandler}
                                        name="email"
                                        required
                                        value={registerData.email}
                                    />

                                </div>
                                <div className="mb-3">
                                    <label className="label">
                                        <span className="label-text">Set your password safely</span>
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Type your password"
                                        className="input input-bordered border-neutral w-full max-w-xs text-neutral"
                                        onChange={changeHandler}
                                        name="password"
                                        required
                                        value={registerData.password}
                                    />
                                </div>
                                <div className="mb-3">
                                    <button id="btn-register"
                                        type="submit"
                                        disabled={btnLoading}
                                        className="btn btn-neutral"
                                    >{!btnLoading ? 'Register' : (<><FontAwesomeIcon icon={faHourglassHalf} spin spinReverse />Loading...</>)} </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}