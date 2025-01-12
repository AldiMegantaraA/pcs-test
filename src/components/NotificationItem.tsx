import { Check, X, Coins, Pill, Clock as ClockIcon, ArrowRight } from 'lucide-react';
import { Notification } from '../types';

const iconMap = {
  coins: Coins,
  pill: Pill,
  clock: ClockIcon
};

const statusIconMap = {
  approved: Check,
  rejected: X,
  processing: ArrowRight
};

const statusColorMap = {
  approved: 'bg-green-500',
  rejected: 'bg-red-500',
  processing: 'bg-blue-500'
};

export default function NotificationItem({ notification }: { notification: Notification }) {
  const Icon = iconMap[notification.icon];
  const StatusIcon = statusIconMap[notification.status];
  
  return (
    <div className={`flex z-50 gap-3 p-4 border-b border-gray-100 ${notification.is_read ? '' : 'bg-blue-100'}`}>
      <div className={`p-3 h-fit rounded-lg bg-red-800 relative`}>
        <Icon className={`w-6 h-6 text-white`} />
        <span className={`inline-flex items-center right-[-4px] absolute p-1 rounded-full text-xs ${statusColorMap[notification.status]}`}>
          <StatusIcon className="w-3 h-3 text-white" />
        </span>
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <h3 className="font-bold">{notification.type}</h3>
          </div>
          <span className="text-sm text-gray-500">{notification.date}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1" dangerouslySetInnerHTML={{__html: notification.message}}></p>
      </div>
    </div>
  );
}