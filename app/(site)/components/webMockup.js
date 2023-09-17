export default function WebMockup({ url, bg_url_color, content }) {
    return (
        <div className={`mockup-browser border ${bg_url_color} animate-bounce `}>
            <div className="mockup-browser-toolbar">
                <div className="input text-black">{url}</div>
            </div>
            <div className="flex justify-center px-4 py-16 bg-white text-black">{content}</div>
        </div>
    );
}