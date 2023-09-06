export enum SortDirections {
    ascending = 'ascending',
    descending = 'descending',
}

export type SortContextType = {
    sortDirection: SortDirections | null;
    toggleSortDirection: () => void;
};

export type SearchContextType = {
    searchQuery: string;
    changeSearchQuery: (query: string) => void;
    clearSearchQuery: () => void;
};
