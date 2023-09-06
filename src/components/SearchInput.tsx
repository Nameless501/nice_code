import { ChangeEvent } from 'react';
import IconButton from './IconButton';
import LupeIcon from './LupeIcon';

interface ISearchInput {
    value: string;
    handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: () => void;
}

function SearchInput({ value, handleChange, handleSubmit }: ISearchInput) {
    return (
        <div className="search-input">
            <input
                value={value}
                onChange={handleChange}
                type="search"
                className="search-input__input"
            />
            <span className="search-input__button">
                <IconButton
                    variant="transparent"
                    handleClick={handleSubmit}
                    renderIcon={(isHover: boolean) => (
                        <LupeIcon isHover={isHover} variant="transparent" />
                    )}
                />
            </span>
        </div>
    );
}

export default SearchInput;
