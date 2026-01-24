import Image from "next/image";
import { DescriptionList } from "./components/DescriptionList";
import { PositionCard } from "./components/PositionCard";
import { DropdownCard } from "./components/DropdownCard";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { LinkCard } from "./components/LinkCard";

export default function Apply() {
    const positions = [
        {
            title: "General Member 📣",
            applyLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSdDnTaJPdHzBvyi8vkjx_zMsdvmEUr0pIlrQ3AO24IEVRvZVQ/viewform",
        },
        {
            title: "Project Member Application : LLM Social Simulation 🤖",
            applyLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSfABugsJnqPRZYKsDb6LE1t9KhuGQRkUScgrAqLBBO5suqq9Q/viewform",
        },
        {
            title: "Project Member Application : Context Based Captioning 🤖",
            applyLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSdS3mVxa1AEGTOWGVcw60fyeTGRUutNbB6mQcPvw0jtjjB1IA/viewform",
        },
        {
            title: "Project Member Application : Censorship Decision 🤖",
            applyLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSd7gPfmerlKzF8uBA5LQWTFddhvSi17MbDm4ULnJkw0n5UhTg/viewform",
        },
        {
            title: "Project Member Application : Machine Unlearning 🤖",
            applyLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSf7NGcOZaINwWxMKHpP9xYXe7Ztqcti-4BrFwkImyCKfSWbCw/viewform",
        },
    ];

    const descriptions = [
        "Contribute to building fairer and more trustworthy AI systems.",
        "Simulate real-world data deletion requests and pipelines.",
        "Collaborate with a diverse team of passionate individuals.",
        "Participate in workshops and discussions surrounding ethical concerns.",
        "Make a positive impact on the AI community and society.",
    ];

    const faqs = [
        {
            title: "What is this club about?",
            description:
                "TMI is focused on exploring the ethical implications of AI technologies through hands-on projects and collaborative discussions.",
        },
        {
            title: "How many hours are required a week?",
            description:
                "This depends on the position you apply for and the project scope.",
        },
        {
            title: "What skills are required?",
            description:
                "We welcome members from all backgrounds. Specific skills may be required for certain positions.",
        },
        {
            title: "Who do I contact for questions?",
            description:
                "You can reach out to us by joining our Discord server or emailing",
        },
    ];

    return (
        <main className="min-h-dvh w-full flex items-center justify-center bg-background text-secondary">
            <section className="flex flex-col max-w-4xl gap-16 justify-center px-6 py-16">
                <h1 className="flex justify-center text-5xl font-extrabold leading-tight">
                    Join TMI
                </h1>
                <section className="grid grid-cols-1 md:grid-cols-2 justify-center place-items-center gap-16 px-6">
                    <Image
                        src="/tmi-team.png"
                        alt="TMI Team Picture"
                        width={500}
                        height={500}
                        className="w-full max-w-xs h-auto object-contain rounded-lg"
                    />
                    <div className="flex flex-col justify-center gap-6">
                        <h1 className="text-4xl font-extrabold leading-tight">
                            Why Join?
                        </h1>
                        <DescriptionList descriptions={descriptions} />
                    </div>
                </section>
                <section>
                    <h1 className="flex justify-center text-4xl font-extrabold leading-tight">
                        Stay Up to Date
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 auto-rows-fr">
                        <LinkCard
                            link="https://docs.google.com/forms/d/e/1FAIpQLSdS1rDb7ixs7ub8Tnd914hGWpINzhEaGipffXfqs5dyxlCd3g/viewform"
                            className="flex gap-4 items-center justify-center"
                        >
                            <EnvelopeIcon className="size-8" />
                            <h3 className="md:text-xl text-md font-semibold tracking-tight">
                                Mailing List
                            </h3>
                        </LinkCard>
                        <LinkCard
                            link="https://discord.com/invite/y2XpFCc723"
                            className="flex gap-4 items-center justify-center"
                        >
                            <Image
                                src="/discord-logo.svg"
                                alt="Discord Logo"
                                width={32}
                                height={32}
                            />
                            <h3 className="md:text-xl text-md font-semibold tracking-tight">
                                Discord Server
                            </h3>
                        </LinkCard>
                        <LinkCard
                            link="https://www.instagram.com/uoft_tmi/"
                            className="flex gap-4 items-center justify-center"
                        >
                            <Image
                                src="/instagram-logo.svg"
                                alt="Instagram Logo"
                                width={32}
                                height={32}
                            />
                            <h3 className="md:text-xl text-md font-semibold tracking-tight ">
                                Instagram
                            </h3>
                        </LinkCard>
                    </div>
                </section>
                <section>
                    <h1 className="flex justify-center text-4xl font-extrabold leading-tight">
                        Positions
                    </h1>
                    <div className="grid grid-flow-row gap-4 mt-6">
                        {positions.map((position, index) => (
                            <PositionCard
                                key={index}
                                positionTitle={position.title}
                                applyLink={position.applyLink}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <h1 className="flex justify-center text-4xl font-extrabold leading-tight">
                        FAQ
                    </h1>
                    {faqs.map((faq, index) => (
                        <DropdownCard
                            key={index}
                            title={faq.title}
                            description={faq.description}
                        />
                    ))}
                </section>
            </section>
        </main>
    );
}
