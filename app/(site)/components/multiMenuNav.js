export default function MultiMenuNav({ text, children }) {
    return (
        <li>
            <a>{text}</a>
            <ul className="p-2">
                {children}
            </ul>
        </li>
    );
}