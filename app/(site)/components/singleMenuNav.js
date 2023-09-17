import Link from "next/link";

export default function SingleMenuNav({ text, href }) {
    return (
        <li className="text-base-content">
            {href ? <Link href={href}>{text}</Link> : <a>{text}</a>}
        </li>
    );
}