
import React from 'react';

const LOADING_MESSAGES = [
    "Warming up the AI easels...",
    "Mixing digital paints...",
    "Teaching the AI to fetch...",
    "Sketching your pet's best side...",
    "Adding a touch of magic...",
    "Unleashing artistic algorithms...",
];

const Loader: React.FC = () => {
    const [message, setMessage] = React.useState(LOADING_MESSAGES[0]);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            setMessage(prevMessage => {
                const currentIndex = LOADING_MESSAGES.indexOf(prevMessage);
                const nextIndex = (currentIndex + 1) % LOADING_MESSAGES.length;
                return LOADING_MESSAGES[nextIndex];
            });
        }, 2500);

        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="flex flex-col items-center justify-center text-center p-8 bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg">
            <svg
                className="animate-spin h-12 w-12 text-indigo-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                ></circle>
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
            </svg>
            <p className="mt-4 text-lg font-semibold text-indigo-800 transition-opacity duration-500">
                {message}
            </p>
        </div>
    );
};

export default Loader;
