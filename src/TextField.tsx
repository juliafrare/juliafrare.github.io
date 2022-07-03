import React, { useRef, useState } from "react";
import { isPropertySignature } from "typescript";

interface Person {
    firstName: string;
    lastName: string;
    age: number;
    isStudent: boolean;
}

interface Props {
    text: string;
    person?: Person;
}

export const TextField: React.FC<Props> = () => {
    const [count, setCount] = useState<number | null | undefined>(5);
    const inputRef = useRef<HTMLInputElement>(null);

    return (
        <div>
            <input ref={inputRef}/>
        </div>
    )
};