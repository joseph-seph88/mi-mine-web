'use client';

import Image, { ImageProps } from 'next/image';
import { useMemo, useState } from 'react';
import { ImagePath } from '@/lib/constants/path/image-path';

type Props = Omit<ImageProps, 'src' | 'alt'> & {
    src?: string | null;
    alt: string;
    fallbackSrc?: string;
};

export function SafeImage({
    src,
    alt,
    fallbackSrc = ImagePath.MIMINE_LOGO,
    width,
    height,
    className,
    ...rest
}: Props) {
    const initialSrc = useMemo(() => {
        const trimmed = (src ?? '').trim();
        return trimmed.length > 0 ? trimmed : fallbackSrc;
    }, [src, fallbackSrc]);

    const [imgSrc, setImgSrc] = useState<string>(initialSrc);

    return (
        <Image
            src={imgSrc}
            alt={alt || 'image'}
            width={width}
            height={height}
            className={className}
            onError={() => {
                if (imgSrc !== fallbackSrc) setImgSrc(fallbackSrc);
            }}
            {...rest}
        />
    );
}


