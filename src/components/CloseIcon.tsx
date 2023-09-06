interface ICloseIcon {
    variant?: 'transparent' | 'white' | 'gray';
    isHover: boolean;
}

function CloseIcon({ variant = 'gray', isHover }: ICloseIcon) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
        >
            <path
                className={`icon-image icon-image_variant_${variant} ${
                    isHover ? 'icon-image_hover-' + variant : ''
                }`}
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9.92654 8.51531L13.4821 4.95977C13.8624 4.57948 14.4789 4.57948 14.8592 4.95977C15.2395 5.34006 15.2395 5.95663 14.8592 6.33692L11.3037 9.89245L14.8389 13.4277C15.2343 13.8231 15.2343 14.4642 14.8389 14.8596C14.4435 15.255 13.8025 15.255 13.4071 14.8596L9.87181 11.3243L6.33687 14.8593C5.95659 15.2396 5.34002 15.2396 4.95973 14.8593C4.57944 14.479 4.57944 13.8624 4.95973 13.4821L8.49466 9.94718L4.93945 6.39196C4.54404 5.99656 4.54405 5.35549 4.93945 4.96009C5.33485 4.56469 5.97592 4.56469 6.37132 4.96009L9.92654 8.51531Z"
                fill="#616F82"
            />
        </svg>
    );
}

export default CloseIcon;
