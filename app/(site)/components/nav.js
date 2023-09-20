import SingleMenuNav from "./singleMenuNav";
import MultiMenuNav from "./multiMenuNav";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart
} from "@fortawesome/free-solid-svg-icons";

export default function NavbarHome() {
    return (
        <div className="navbar backdrop-blur-lg bg-white/30 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-base-content lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <SingleMenuNav text="About" />
                        <SingleMenuNav text="Features" />
                        <SingleMenuNav text="Contact" />
                        <SingleMenuNav text="How to use?" href="/" />
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl text-base-content">TaskDojo</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <SingleMenuNav text="About" />
                    <SingleMenuNav text="Features" />
                    <SingleMenuNav text="Contact" />
                    <SingleMenuNav text="How to use?" href="/" />
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <Link className="btn btn-sm btn-outline" href="/register">
                    <FontAwesomeIcon icon={faHeart} />Register</Link>
                <Link className="btn btn-sm btn-neutral" href="/">Login</Link>
            </div>
        </div>
    );
}