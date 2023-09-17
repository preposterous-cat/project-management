export default function HeroContent({ title, text_color, children }) {
    return (
        <div>
            <h1 className={`text-5xl text-${text_color}-content font-bold`}>{title}</h1>
            {children}
        </div>
    );
}