import { useEffect, useState } from "react";

const UseHasScrolled = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        if (window) {
            const scrollListener = () => {
                const newState = window.scrollY > 0;
                if (newState !== hasScrolled) {
                    setHasScrolled(newState);
                }
            };

            window.addEventListener("scroll", scrollListener);

            return () => window.removeEventListener("scroll", scrollListener);
        }
    }, [hasScrolled]);

    return hasScrolled;
};

export default UseHasScrolled;
