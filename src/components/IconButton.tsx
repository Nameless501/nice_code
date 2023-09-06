import { useState } from 'react';

interface IIconButton {
    handleClick?: () => void;
    variant?: 'transparent' | 'white' | 'gray';
    renderIcon?: (isHover: boolean) => JSX.Element;
    isActive?: boolean;
}

function IconButton({
    handleClick,
    renderIcon,
    variant = 'gray',
    isActive,
}: IIconButton) {
    const [isHover, setHoverState] = useState<boolean>(false);

    return (
        <button
            type="button"
            className={`
                icon-button
                icon-button_variant_${variant}
                ${
                    isHover || isActive
                        ? `icon-button_variant_${variant}-hover`
                        : ''
                }
            `}
            onClick={handleClick}
            onMouseEnter={() => setHoverState(true)}
            onMouseLeave={() => setHoverState(false)}
        >
            {renderIcon?.(isHover)}
        </button>
    );
}

export default IconButton;
