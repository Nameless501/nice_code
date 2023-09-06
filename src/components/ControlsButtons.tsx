import { useSortContext } from '../contexts/FiltersContext';
import AddIcon from './AddIcon';
import FilterIcon from './FilterIcon';
import IconButton from './IconButton';
import LupeIcon from './LupeIcon';

interface IControlsButtons {
    openSearchBar: () => void;
}

function ControlsButtons({ openSearchBar }: IControlsButtons) {
    const { toggleSortDirection } = useSortContext();

    return (
        <div className="controls-buttons">
            <IconButton
                handleClick={openSearchBar}
                renderIcon={(isHover: boolean) => (
                    <LupeIcon isHover={isHover} />
                )}
            />
            <div className="controls-buttons__buttons-group">
                <IconButton
                    handleClick={toggleSortDirection}
                    renderIcon={(isHover: boolean) => (
                        <FilterIcon isHover={isHover} />
                    )}
                />
                <IconButton
                    renderIcon={(isHover: boolean) => (
                        <AddIcon isHover={isHover} />
                    )}
                />
            </div>
        </div>
    );
}

export default ControlsButtons;
