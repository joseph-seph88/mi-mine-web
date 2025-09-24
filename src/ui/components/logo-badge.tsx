import Image from 'next/image';
import Link from 'next/link';

type LogoBadgeProps = {
    src: string;
    alt: string;
    label?: string;
    size?: 'sm' | 'md' | 'lg';
    shape?: 'circle' | 'oval';
    overlay?: boolean;
    preset?: 'default' | 'avatar';
    inset?: boolean;
    href?: string;
    className?: string;
};

export function LogoBadge({
    src,
    alt,
    label,
    size = 'md',
    shape = 'oval',
    overlay = false,
    preset = 'default',
    inset = false,
    href,
    className,
}: LogoBadgeProps) {
    const compSize = (() => {
        if (shape === 'circle') {
            return size === 'sm' ? 'w-16 h-16' : size === 'lg' ? 'w-28 h-28' : 'w-20 h-20';
        }
        return size === 'sm' ? 'w-24 h-16' : size === 'lg' ? 'w-40 h-28' : 'w-32 h-20';
    })();
    const radius = 'rounded-full';

    const Comp: any = href ? Link : 'div';

    const avatarPadding = size === 'sm' ? 'p-2' : size === 'lg' ? 'p-3' : 'p-2.5';

    const content = (
        <div
            className={`relative ${compSize} ${radius} ${preset === 'avatar'
                ? `bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 ring-1 ring-black/5 dark:ring-white/10 ${avatarPadding}`
                : inset && shape === 'oval'
                    ? 'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 ring-1 ring-black/5 dark:ring-white/10'
                    : 'overflow-hidden ring-1 ring-black/5 dark:ring-white/10'
                } hover:shadow-lg hover:shadow-black/10 transition-all ${className ?? ''}`}
        >
            {preset === 'avatar' ? (
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                        <Image src={src} alt={alt} fill className="object-contain" />
                    </div>
                </div>
            ) : inset && shape === 'oval' ? (
                <div className="absolute inset-2 md:inset-3 lg:inset-4 rounded-full overflow-hidden">
                    <Image src={src} alt={alt} fill className="object-contain" />
                </div>
            ) : (
                <Image src={src} alt={alt} fill className="object-cover" />
            )}
            {overlay && label && preset !== 'avatar' && !inset && (
                <div className="absolute inset-x-2 bottom-2 flex justify-center">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium text-gray-900 dark:text-gray-100 bg-white/80 dark:bg-black/50 backdrop-blur border border-white/40 dark:border-white/10 shadow-sm">
                        {label}
                    </span>
                </div>
            )}
        </div>
    );

    if (href) {
        return (
            <Comp href={href}>
                {content}
            </Comp>
        );
    }

    return content;
}

export default LogoBadge;



