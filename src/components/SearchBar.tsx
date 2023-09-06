import { ChangeEvent, useState } from 'react';
import IconButton from './IconButton';
import SearchInput from './SearchInput';
import { useSearchContext } from '../contexts/FiltersContext';
import CloseIcon from './CloseIcon';

interface ISearchBar {
    closeSearchBar: () => void;
}

function SearchBar({ closeSearchBar }: ISearchBar) {
    const [inputValue, setInputValue] = useState<string>('');

    const { changeSearchQuery, clearSearchQuery } = useSearchContext();

    const handleChange = (evt: ChangeEvent<HTMLInputElement>): void =>
        setInputValue(evt.currentTarget.value);

    const handleSearch = () => changeSearchQuery(inputValue);

    const handleSearchBarClose = (): void => {
        clearSearchQuery();
        closeSearchBar();
    };

    return (
        <>
            <SearchInput
                value={inputValue}
                handleChange={handleChange}
                handleSubmit={handleSearch}
            />
            <IconButton
                handleClick={handleSearchBarClose}
                renderIcon={(isHover: boolean) => (
                    <CloseIcon isHover={isHover} />
                )}
            />
        </>
    );
}

export default SearchBar;
