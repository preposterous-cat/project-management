import NavbarHome from "./components/nav";
import Hero from "./components/hero";
import HeroContent from "./components/heroContent";
import WebMockup from "./components/webMockup";
import Image from "next/image";


export default function Home() {
    return (
        <div>
            <header>
                <NavbarHome />
            </header>
            <div>
                <Hero bg_color={`bg-base-100`} reverse={true}>
                    <Image src="/hero1.png" className="max-w-xl rounded-lg " alt="Hero Image" width={1000} height={1000} />
                    <HeroContent title="Welcome to TaskDojo!" text_color={`base`}>
                        <p className="py-6 text-base-content">The tasks at hand can be elegantly structured. Teamwork will be completely on track with attractive and well-organized collaboration. Get the tasks done with a Dojo spirit!</p>
                        <button className="btn btn-neutral transition ease-in-out delay-60 hover:-translate-y-1 hover:scale-110 duration-300">Let's do it!</button>
                    </HeroContent>
                </Hero>
            </div>
            <div>
                <Hero bg_color={`bg-secondary`} reverse={false} >
                    <div className="max-w-lg rounded-lg">
                        <WebMockup
                            url={`https://taskdojo.arielspage.my.id`}
                            content={`Simple.Collaborative.Attractive`}
                            bg_url_color={`bg-secondary-content`} />
                    </div>
                    <HeroContent title="What is this?" text_color={`secondary`}>
                        <p className="py-6 text-secondary-content">TaskDojo is a platform used for project management. You can do anything related to organizing projects, like team members involved, task details, progress percentages, and other cool features. Let's give it a try!</p>
                    </HeroContent>
                </Hero>
            </div>

        </div>
    );
}