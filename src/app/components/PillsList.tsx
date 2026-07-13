type Props = {
    items: string[] | undefined;
};

export default function PillsList({ items }: Props) {

    return (
        <ul className="pill flex flex-wrap gap-2 mt-2">
            {items && items.map((item) => (
                <li
                    key={item}
                    className="rounded-full bg-purple-100 px-2 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-white"
                >
                    {item.replace(", ", "")}
                </li>
            ))}
        </ul>
    );
}
