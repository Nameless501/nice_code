import { SyntheticEvent } from 'react';

interface ICheckbox {
    handleChange: () => void;
    isChecked: boolean;
    label?: string;
    handleClick?: (evt: SyntheticEvent) => void;
}

function Checkbox({ handleChange, isChecked, label, handleClick }: ICheckbox) {
    return (
        <label className="checkbox">
            <input
                type="checkbox"
                className={`
                    checkbox__input
                    ${isChecked ? 'checkbox__input_checked' : ''}
                `}
                checked={isChecked}
                onChange={handleChange}
                onClick={handleClick}
            />
            {label && <span className="checkbox__label">{label}</span>}
        </label>
    );
}

export default Checkbox;
