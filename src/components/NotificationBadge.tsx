interface INotificationBadge {
    type: 'message' | 'notification';
}

function NotificationBadge({ type }: INotificationBadge) {
    return (
        <span
            className={`notification-badge notification-badge_type_${type}`}
        />
    );
}

export default NotificationBadge;
