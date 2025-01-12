import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { notifications } from '../data';
import NotificationItem from '../components/NotificationItem';

export default function Notifications() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white p-4 flex items-center gap-3 sticky top-0 z-10">
        <Link to="/">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-xl font-bold text-red-500">Notification</h1>
      </header>

      <div className="divide-y divide-gray-100 bg-white">
        {notifications.map((notification, index) => (
          <NotificationItem key={index} notification={notification} />
        ))}
      </div>
    </div>
  );
}