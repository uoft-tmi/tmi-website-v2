import { PositionCard } from "./components/PositionCard";

export default function Apply() {
    return (
        <main className="min-h-dvh w-full flex items-center justify-center">
            <section className="w-full max-w-4xl px-6 py-16">
                <h1 className="text-4xl font-extrabold leading-tight text-cyan-800 sm:text-5xl">
                    Positions
                </h1>
                <div className="grid grid-flow-col grid-rows-3 gap-6 mt-4">
                    <PositionCard
                        positionTitle="TMI Learning Associate"
                        positionStatus="Open"
                        description="Help develop and deliver educational content on transformative AI topics"
                    />
                    <PositionCard
                        positionTitle="Project Member: LLM social simulation 🤖"
                        positionStatus="Open"
                        description="Contribute to building simulations of LLM behavior in social contexts"
                    />
                </div>
            </section>
        </main>
    );
}
