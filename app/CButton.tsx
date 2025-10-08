"use client"

interface ButtonProps {
    children: React.ReactNode,
    onclick: () => void,
}

export default function Button({children, onclick} : ButtonProps) {
    return (
        <button onClick={onclick} className={`
                w-[100px] h-[30px]
                bg-white/20
                text-[#D17A8E]
                active:text-[#DD797D]
                border-0 border-b-2 border-transparent
                active:shadow-md focus:shadow-[#DD797D]
                hover:shadow-md hover:shadow-[#D17A8E]
                active:border-b-[#DD797D] focus:border-b-2
                hover:border-b-[#D17A8E] hover:border-b-2
                rounded-[5px]
                outline-none
                transition duration-300
            `}>{children}</button>
    );
}