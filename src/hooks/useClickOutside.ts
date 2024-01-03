import { RefObject, useEffect } from "react";

type Props = {
    ref: RefObject<HTMLElement>,
    callback: () => void
}

/**
 * 
 * @param ref: Element's React reference;
 * @param callback: Callback function;
 */
export default function useClickOutside({ ref, callback }:Props){
    useEffect(() => {
        function handleClickOutside(event:MouseEvent) {
            if (!ref.current || ref.current.contains(event.target as Node)) {
                return;
            };

            callback()
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, callback])
};