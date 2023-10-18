import useCurrentUser from "@/hooks/useCurrentUser"
import useNotification from "@/hooks/useNotifications"
import { useEffect } from "react"
import { FaMountainSun } from "react-icons/fa6";

const NotificationsFeed = () => {
    const { data: currentUser, mutate: mutateCurrentUser } = useCurrentUser()
    const { data: fetchedNotifications = [] } = useNotification(currentUser?.id)
    
    useEffect(() => {
        mutateCurrentUser()
    }, [mutateCurrentUser])

    if (fetchedNotifications.length === 0) {
        return (
            <div className="text-neutral-600 text-center p-6 text-xl">
                No notifications
            </div>
        )
    }
     
  return (
    <div className="flex flex-col">
        {fetchedNotifications.map((notification: Record<string, any>) => (
            <div className="flex flex-row items-center p-6 gap-4 border-b-[1px] border-neutral-800" key={notification.id}>
                <FaMountainSun color="white" size={32} />
                <p className="text-white ">
                    {notification.body}
                </p>
            </div>
        ))}
    </div>
  )
}

export default NotificationsFeed