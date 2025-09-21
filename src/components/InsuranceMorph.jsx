// components/InsuranceMorph.jsx
import { motion } from "framer-motion";

export default function InsuranceMorph() {
    // Three insurance-themed shapes: shield → heart → umbrella
    const shapes = [
        // Shield
        "M50 5 L90 25 V55 C90 75 70 95 50 105 C30 95 10 75 10 55 V25 Z",
        // Heart
        "M50 85 C20 65 10 40 30 25 C40 15 60 15 70 25 C90 40 80 65 50 85 Z",
        // Umbrella
        "M10 55 Q50 5 90 55 Q70 55 50 75 Q30 55 10 55 Z"
    ];

    return (
        <svg
            viewBox="0 0 100 110"
            xmlns="http://www.w3.org/2000/svg"
            className="w-72 h-72 drop-shadow-lg"
        >
            <motion.path
                d={shapes[0]}
                fill="url(#grad)"
                stroke="white"
                strokeWidth="2"
                animate={{ d: shapes }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                }}
            />
            <defs>
                <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
            </defs>
        </svg>
    );
}
