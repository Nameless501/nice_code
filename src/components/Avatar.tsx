import useImageLoadCheck from '../hooks/useImageLoadCheck';

interface IAvatar {
    src: string | null;
    size: 'big' | 'small';
}

function Avatar({ src, size }: IAvatar) {
    const { isError, checkImageError } = useImageLoadCheck();

    return (
        <div
            className={`
                avatar
                avatar_size_${size}
            `}
        >
            {!src || isError ? (
                <span className="avatar__placeholder" />
            ) : (
                <img
                    src={src}
                    alt="Аватар пользователя"
                    className="avatar__image"
                    onError={checkImageError}
                />
            )}
        </div>
    );
}

export default Avatar;
