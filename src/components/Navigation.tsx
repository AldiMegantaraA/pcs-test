import { RootState } from '../store/store';
import { differenceInSeconds } from 'date-fns';
import { Home, Calendar, LogOut, FileText, Settings, LogIn } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { checkIn, checkOut, updateWorkingHours } from '../store/attendanceSlice';
import Modal from './Modal';

export default function Navigation() {
  const dispatch = useDispatch();
  const [location , setLocation] = useState('home')

  // Handle Checkin, Working Hours and Checkout
  const { checkInTime, isCheckedIn } = useSelector(
    (state: RootState) => state.attendance
  );
  
  const [showCheckInModal, setShowCheckInModal] = useState(false);
  const [showCheckOutModal, setShowCheckOutModal] = useState(false);

  useEffect(() => {
    let interval: number;
    
    if (isCheckedIn) {
      interval = window.setInterval(() => {
        const seconds = differenceInSeconds(new Date(), new Date(checkInTime!));
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = seconds % 60;
        
        dispatch(updateWorkingHours(
          `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
        ));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isCheckedIn, checkInTime, dispatch]);

  const handleCheckIn = () => {
    dispatch(checkIn());
    setShowCheckInModal(false);
  };

  const handleCheckOut = () => {
    dispatch(checkOut());
    setShowCheckOutModal(false);
  };
  // Handle Checkin, Working Hours and Checkout
  
  return (
    <>
    <nav className="fixed max-w-md bottom-0 left-50 bg-white border-t border-gray-200 py-2" style={{'width': '100%'}}>
      <div className="flex justify-around items-center">
        <Link to="/" onClick={() => setLocation('home')} className={`flex flex-col items-center ${location === 'home' ? 'text-red-500' : 'text-gray-500'}`}>
          <Home size={24} />
          <span className="text-xs mt-1">Home</span>
        </Link>
        <Link to="/" onClick={() => setLocation('attendance')} className={`flex flex-col items-center ${location === 'attendance' ? 'text-red-500' : 'text-gray-500'}`}>
          <Calendar size={24} />
          <span className="text-xs mt-1">Attendance</span>
        </Link>
        <div className="relative -top-5 -left-2"
        >
          <div className="flex flex-col items-center justify-center w-16 h-16 rounded-full shadow-md bg-red-500 text-white">
            {
              isCheckedIn ?
                <LogOut size={24} onClick={() => isCheckedIn && setShowCheckOutModal(true)} />
                : 
                <LogIn size={24} onClick={() => !isCheckedIn && setShowCheckInModal(true)} />
            }
          </div>
            <span className="text-xs text-red-500 font-bold mt-1 ml-1">{isCheckedIn ? 'Check Out' : 'Check In'}</span>
        </div>
        <Link to="/" onClick={() => setLocation('form')}  className={`flex flex-col items-center ${location === 'form' ? 'text-red-500' : 'text-gray-500'}`}>
          <FileText size={24} />
          <span className="text-xs mt-1">Form</span>
        </Link>
        <Link to="/" onClick={() => setLocation('settings')} className={`flex flex-col items-center ${location === 'settings' ? 'text-red-500' : 'text-gray-500'}`}>
          <Settings size={24} />
          <span className="text-xs mt-1">Setting</span>
        </Link>
      </div>
    </nav>

    <Modal
      isOpen={showCheckInModal}
      onClose={() => setShowCheckInModal(false)}
      title="Check In"
    >
      <div className="text-center">
        <p className="mb-4">Are you ready to start your work day?</p>
        <button
          onClick={handleCheckIn}
          className="bg-red-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Check In Now
        </button>
      </div>
    </Modal>
    <Modal
      isOpen={showCheckOutModal}
      onClose={() => setShowCheckOutModal(false)}
      title="Check Out"
    >
      <div className="text-center">
        <p className="mb-4">Are you sure you want to check out?</p>
        <button
          onClick={handleCheckOut}
          className="bg-red-500 text-white px-4 py-2 rounded-lg w-full"
        >
          Check Out Now
        </button>
      </div>
    </Modal>
    </>
  );
}