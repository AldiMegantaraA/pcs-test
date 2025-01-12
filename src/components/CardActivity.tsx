import { useSelector } from 'react-redux';
import { format } from 'date-fns';
import { Clock, RotateCw } from 'lucide-react';
import { RootState } from '../store/store';

function AttendanceCard() {
  const { checkInTime, checkOutTime, workingHours } = useSelector(
    (state: RootState) => state.attendance
  );

  return (
    <div className="p-4">
      
      <div className="grid grid-cols-3 gap-4 text-center">
        <div 
          className="flex flex-col items-center cursor-pointer"
        >
          <Clock className="h-8 w-8 text-red-500 mb-2" />
          <span className="text-sm font-medium">
            {checkInTime ? format(new Date(checkInTime), 'HH:mm') : '--:--'}
          </span>
          <span className="text-xs text-gray-500">Check In</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="h-8 w-8 flex items-center relative justify-center mb-2">
            <RotateCw className='text-red-500 h-8 w-8' />
            <span className="absolute text-red-500 font-semibold">8</span>
          </div>
          <span className="text-sm font-medium">{workingHours}</span>
          <span className="text-xs text-gray-500">Working Hours</span>
        </div>

        <div 
          className="flex flex-col items-center cursor-pointer"
        >
          <Clock className="h-8 w-8 text-red-500 mb-2" />
          <span className="text-sm font-medium">
            {checkOutTime ? format(new Date(checkOutTime), 'HH:mm') : '--:--'}
          </span>
          <span className="text-xs text-gray-500">Check Out</span>
        </div>
      </div>
    </div>
  );
};

export default AttendanceCard;