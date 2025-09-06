type Props = {
    items: string[] | undefined;
};

export default function PillsList({ items }: Props) {

    return (
        <ul className="flex flex-wrap gap-2 mt-2">
            {items && items.map((item) => (
                <li
                    key={item}
                    className="rounded-full bg-purple-100 px-2 py-1 text-sm font-medium text-purple-700 dark:bg-purple-800 dark:text-purple-200"
                >
                    {item.replace(", ", "")}
                </li>
            ))}
        </ul>
    );
}
