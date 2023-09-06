interface ILupeIcon {
    variant?: 'transparent' | 'white' | 'gray';
    isHover: boolean;
}

function LupeIcon({ variant = 'gray', isHover }: ILupeIcon) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
        >
            <g clipPath="url(#clip0_3_8837)">
                <path
                    className={`icon-image icon-image_variant_${variant} ${
                        isHover ? 'icon-image_hover-' + variant : ''
                    }`}
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.2641 12.8262L15.7871 15.3492C16.071 15.633 16.071 16.0918 15.7872 16.3756C15.6456 16.5171 15.4598 16.5883 15.274 16.5883C15.0881 16.5883 14.9023 16.5171 14.7608 16.3756L12.2378 13.8525L13.2641 12.8262ZM12.311 11.7438C13.2361 10.5698 13.7909 9.09124 13.7909 7.48381C13.7909 3.68183 10.6974 0.588257 6.89544 0.588257C3.0935 0.588257 0 3.68179 0 7.48378C0 11.2858 3.09353 14.3793 6.89547 14.3793C8.41434 14.3793 9.8181 13.884 10.9586 13.0489L10.9576 13.0479C10.9576 13.0479 11.4889 12.6135 11.7818 12.3206C12.0522 12.0502 12.278 11.7832 12.311 11.7438ZM1.45169 7.48378C1.45169 10.4859 3.89339 12.9276 6.89547 12.9276C9.89751 12.9276 12.3393 10.4859 12.3393 7.48378C12.3393 4.48166 9.89755 2.03993 6.89547 2.03993C3.89339 2.03993 1.45169 4.48166 1.45169 7.48378Z"
                    fill="white"
                />
            </g>
            <defs>
                <clipPath id="clip0_3_8837">
                    <rect
                        className={`icon-image icon-image_variant_${variant} ${
                            isHover ? 'icon-image_hover-' + variant : ''
                        }`}
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(0 0.588257)"
                    />
                </clipPath>
            </defs>
        </svg>
    );
}

export default LupeIcon;
