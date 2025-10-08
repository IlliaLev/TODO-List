import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faInfoCircle } from "@fortawesome/free-solid-svg-icons"

interface ItemProps {
    title: string,
    completed: boolean,
    onToggle: () => void,
    onDelete: () => void,
}

export default function Item({title, completed, onToggle, onDelete} : ItemProps) {
    return (
        <div className={`
            bg-white/20
            flex flex-row items-center justify-between
            mb-1.5
            h-8
            rounded-lg
        `}>
            <div className={`
                max-w-[70%]
                w-[70%]
                `}>
            <label className={`
                relative group inline-flex
                items-center
                max-w-full
                w-full
                ml-2
                text-lg
                text-[#B63E5A]
                md:truncate
                `}><span className={`
                    
                    md:overflow-hidden md:text-ellipsis overflow-x-scroll whitespace-nowrap
                `} >{title}</span>
                   
            </label>
            </div>
            <div className={`
                    flex flex-row items-center gap-2
                    mr-1.5
                    `}>
                <label className={`
                    relative mr-1.5 flex items-center justify-center
                    `}>
                    <input type="checkbox" className={`
                        peer
                        h-5 w-5
                        appearance-none
                        checked:bg-[#AA7BC3]
                        hover:border-[#884DA8]
                        hover:bg-[#B68FCC]
                        rounded-md
                        border-2 border-[#884DA8]
                        transition-all duration-200
                        `}
                        onChange={onToggle}
                        checked={completed}/>
                    <span
                    className={`    
                    absolute  text-center text-white text-sm hidden
                    peer-checked:block
                    `}>✓</span>
                
                </label>

                <button className={`
                    text-lg
                    text-[#BF7AA6]
                    hover:text-[#A55086]
                    active:text-[#A55086]
                    transition duration-300
                    `}>
                    <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>
                </button>

                <button onClick={onDelete} className={`
                 text-lg
                 text-[#D17A8E]
                 hover:text-[#B63E5A]
                 active:text-[#B63E5A]
                 transition duration-300
                `}>
                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
}