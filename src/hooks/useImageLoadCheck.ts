import { useState } from 'react';

function useImageLoadCheck() {
    const [isError, setIsError] = useState(false);

    function checkImageError() {
        setIsError(true);
    }

    return { isError, checkImageError };
}

export default useImageLoadCheck;
