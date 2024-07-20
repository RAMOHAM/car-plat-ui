"use client"

import { motion } from "framer-motion";

/**
 * The main heading displaying the title Motor Apps Platform,
 * using framer motion for the fade-in effect
 */

export const MotorAppsHeading = () => {
    const heading = "Motor Apps Platform";

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            className="flex space-x-1"
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {heading.split("").map((letter, index) => (
                <motion.span
                    key={index}
                    variants={item}
                    className="text-white text-5xl font-bold"
                    style={{
                        textShadow: "0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 255, 255, 0.3)",
                    }}
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </motion.div>
    );
};
