interface IMainButton {
    handleClick?: () => void;
    text: string;
    isActive?: boolean;
}

function MainButton({ handleClick, text, isActive }: IMainButton) {
    return (
        <button
            type="button"
            className={`
                main-button
                ${isActive ? 'main-button_active' : ''}
            `}
            onClick={handleClick}
        >
            {text}
        </button>
    );
}

export default MainButton;
