import { PositionCard } from "./components/PositionCard";

export default function Apply() {
    const positions = [
        {
            title: "General Member 📣",
            applyLink:
                "https://docs.google.com/forms/d/e/1FAIpQLSdDnTaJPdHzBvyi8vkjx_zMsdvmEUr0pIlrQ3AO24IEVRvZVQ/viewform",
        },
        {
            title: "Project Member Application : LLM social simulation 🤖",
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

    return (
        <main className="min-h-dvh w-full flex items-center justify-center">
            <section className="w-full max-w-4xl px-6 py-16">
                <h1 className="flex justify-center text-4xl font-extrabold leading-tight text-cyan-800 sm:text-4xl mt-16">
                    Why Join TMI?
                </h1>
                <h1 className="flex justify-center text-4xl font-extrabold leading-tight text-cyan-800 sm:text-4xl mt-16">
                    Our Network
                </h1>
                <h1 className="flex justify-center text-4xl font-extrabold leading-tight text-cyan-800 sm:text-4xl mt-16">
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
                <h1 className="flex justify-center text-4xl font-extrabold leading-tight text-cyan-800 sm:text-4xl mt-16">
                    FAQ
                </h1>
            </section>
        </main>
    );
}
