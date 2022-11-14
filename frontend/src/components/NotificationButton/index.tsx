import notificationIcon from "../../assets/notification-icon.svg"
import './styles.css'

export default function NotificationButton() {
    return(
        <div className="dsmeta-red-btn">
            <img src={notificationIcon} alt="Notificar" />
        </div>
    )
}