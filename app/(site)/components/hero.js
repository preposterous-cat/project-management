export default function Hero({ bg_color, reverse, children }) {
    return (
        <div className={`hero min-h-screen ${bg_color}`}>
            <div className={`hero-content flex-col ${reverse ? 'lg:flex-row-reverse' : "lg:flex-row"} `}>
                {children}
            </div>
        </div>
    )
}