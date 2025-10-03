type Cover = {
    className: string;
    src: string;
    alt: string;
    width: number;
    height: number;
};

export default function ResponsiveImage({
    className,
    src,
    alt,
    width,
    height,
}: Cover) {

    return (
        <picture>
            <source
                type="image/webp"
                srcSet={`${src}.webp`}
            />
            <source
                type="image/png"
                srcSet={`${src}.png`} />
            <img
                src={`${src}.png`}
                width={width}
                height={height}
                alt={alt}
                className={className}
            />
        </picture>
    );
}
