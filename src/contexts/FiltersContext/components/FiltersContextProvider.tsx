import { ReactNode, useState } from 'react';
import SortContext from '../context/SortContext';
import SearchContext from '../context/SearchContext';
import { SortDirections } from '../types/types';

export function FiltersContextProvider({ children }: { children: ReactNode }) {
    const [sortDirection, setSortDirection] = useState<SortDirections | null>(
        null
    );

    const [searchQuery, setSearchQuery] = useState<string>('');

    const toggleSortDirection = (): void =>
        setSortDirection((cur) => {
            switch (cur) {
                case SortDirections.ascending:
                    return SortDirections.descending;
                case SortDirections.descending:
                    return null;
                case null:
                    return SortDirections.ascending;
            }
        });

    const changeSearchQuery = (query: string): void => setSearchQuery(query);

    const clearSearchQuery = (): void => setSearchQuery('');

    return (
        <SearchContext.Provider
            value={{ searchQuery, changeSearchQuery, clearSearchQuery }}
        >
            <SortContext.Provider
                value={{ sortDirection, toggleSortDirection }}
            >
                {children}
            </SortContext.Provider>
        </SearchContext.Provider>
    );
}
