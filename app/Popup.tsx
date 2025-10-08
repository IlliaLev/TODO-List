import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClose } from "@fortawesome/free-solid-svg-icons"

import Divider from "./CDivider"

interface PopupProps {
    show: boolean,
    onClose: () => void,
    children: React.ReactNode,
}

export default function Popup({show, onClose, children} : PopupProps) {
    if(!show) return null;
    return (
        <div className={`
            fixed inset-0 flex items-center justify-center z-50
            rounded-2xl
            bg-black/50 backdrop-blur-sm
        `}>
            <div className={`
                flex flex-col items-center
                w-[80%] h-[80%]
                rounded-2xl
                bg-[#CBD4C2]
                `}>
                <div className={`
                    w-full
                    flex flex-row justify-end items-center
                    mt-1.5
                    `}>
                    <button onClick={onClose} className={`
                        mr-2.5
                        bg-transparent
                        text-[#D17A8E]
                        hover:text-[#B63E5A]
                        active:text-[#B63E5A]
                         
                        transition-colors duration-300 ease-in-out
                        `}>
                        <FontAwesomeIcon icon={faClose} className={`
                            hover:rotate-90
                            transition-transform duration-900
                            `}></FontAwesomeIcon>
                    </button>
                </div>
                <Divider></Divider>
                <div className={`
                    w-[80%] h-[80%]
                    mt-2
                    flex flex-col items-center
                    `}>
                    {children}
                </div>
            </div>
        </div>
    );
}