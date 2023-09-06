interface ICountBadge {
    count: number;
    isActive: boolean;
}

function CountBadge({ count, isActive }: ICountBadge) {
    return (
        <span className={`count-badge ${isActive ? 'count-badge_active' : ''}`}>
            {count}
        </span>
    );
}

export default CountBadge;
