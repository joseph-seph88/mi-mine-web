'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false
}: ButtonProps) {
    const baseClasses = "font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantClasses = {
        primary: "bg-black dark:bg-white text-white dark:text-black hover:shadow-lg",
        secondary: "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700",
        outline: "bg-transparent border-2 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-900"
    } as const;

    const sizeClasses = {
        sm: "px-4 py-2 text-sm rounded-lg",
        md: "px-6 py-2 rounded-full",
        lg: "px-8 py-4 text-lg rounded-2xl"
    } as const;

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <motion.button
            className={classes}
            onClick={onClick}
            disabled={disabled}
            whileHover={{ scale: disabled ? 1 : 1.05 }}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </motion.button>
    );
}


