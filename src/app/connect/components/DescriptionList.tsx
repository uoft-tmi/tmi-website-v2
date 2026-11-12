type DescriptionListProps = {
    descriptions: string[];
};

export function DescriptionList({ descriptions }: DescriptionListProps) {
    return (
        <ul className="flex flex-col max-w-3xl space-y-3 text-text-muted">
            {descriptions.map((desc, index) => (
                <li
                    key={index}
                    className="flex items-start gap-3 text-base md:text-lg leading-relaxed"
                >
                    <span
                        aria-hidden="true"
                        className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-secondary"
                    />
                    <span>{desc}</span>
                </li>
            ))}
        </ul>
    );
}
