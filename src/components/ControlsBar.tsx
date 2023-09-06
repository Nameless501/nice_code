import {
    useControlsBarContext,
    ControlBarVariants,
} from '../contexts/ControlsBarContext';
import ControlsButtons from './ControlsButtons';
import SearchBar from './SearchBar';

function ControlsBar() {
    const { variant, openSearchBar, closeSearchBar } = useControlsBarContext();

    return (
        <div className="controls-bar">
            {variant === ControlBarVariants.search && (
                <SearchBar closeSearchBar={closeSearchBar} />
            )}
            {variant === ControlBarVariants.default && (
                <ControlsButtons openSearchBar={openSearchBar} />
            )}
        </div>
    );
}

export default ControlsBar;
