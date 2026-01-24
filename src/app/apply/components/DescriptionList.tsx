type DescriptionListProps = {
    descriptions: string[];
};

export function DescriptionList({ descriptions }: DescriptionListProps) {
    return (
        <ul className="flex flex-col text-lg leading-tight font-body max-w-3xl space-y-4 list-disc list-inside text-text-muted">
            {descriptions.map((desc, index) => (
                <li key={index}>{desc}</li>
            ))}
        </ul>
    );
}
