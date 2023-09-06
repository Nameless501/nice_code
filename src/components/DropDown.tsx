import { useEffect, useRef, useState } from 'react';
import IconButton from './IconButton';
import MoreIcon from './MoreIcon';

function DropDown() {
    const modalRef = useRef<HTMLDialogElement>(null);

    const containerRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (isOpen && containerRef.current && modalRef.current) {
            const { top, left } = containerRef.current.getBoundingClientRect();
            modalRef.current.style.top = `${top}px`;
            modalRef.current.style.left = `${left}px`;
            modalRef.current.showModal();
        } else {
            modalRef.current?.close();
        }
    }, [isOpen]);

    return (
        <div className="dropdown" ref={containerRef}>
            <IconButton
                variant="white"
                handleClick={() => setIsOpen(true)}
                isActive={isOpen}
                renderIcon={(isHover: boolean) => (
                    <MoreIcon variant="white" isHover={isHover || isOpen} />
                )}
            />
            <dialog
                className="dropdown__menu"
                ref={modalRef}
                onClick={() => setIsOpen(false)}
            >
                <button className="dropdown__option">Изменить</button>
                <button className="dropdown__option">Удалить</button>
            </dialog>
        </div>
    );
}

export default DropDown;
