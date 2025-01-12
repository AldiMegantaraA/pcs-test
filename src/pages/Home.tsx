import { Bell, Dot } from 'lucide-react';
import { Link } from 'react-router-dom';
import { currentEmployee, onlineEmployees } from '../data';
import Navigation from '../components/Navigation';
import CardEmployee from '../components/CardEmployee';
import CardActivity from '../components/CardActivity';
import CardNews from '../components/CardNews';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { checkNotif } from '../store/notifSlice';
import { notifications } from '../data';

export default function Home() {
  // Check if There Notification that unread
  const dispatch = useDispatch();
  const { isNotif } = useSelector(
    (state: RootState) => state.notif
  );
  dispatch(checkNotif(
    notifications
  ));
  // Check if There Notification that unread

  // Handle Greeting based on time
  const getGreeting = () => {
    const hours = new Date().getHours(); // Get current hour (0-23)
  
    if (hours >= 5 && hours < 12) {
      return 'Good Morning';
    } else if (hours >= 12 && hours < 18) {
      return 'Good Evening';
    } else {
      return 'Good Night';
    }
  };
  
  const GreetingComponent = () => {
    const [greeting, setGreeting] = useState(getGreeting());
  
    useEffect(() => {
      const interval = setInterval(() => {
        setGreeting(getGreeting());
      }, 60000);
  
      return () => clearInterval(interval);
    }, []);
  
    return <h2 className="font-normal mt-8 mb-3">Hi, {greeting}!</h2>;
  };
  // Handle Greeting based on time

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-500">KerjaYuk!</h1>
          <Link to="/notifications" className='relative'>
            {
              isNotif ? <Dot className="w-12 h-12 text-red-600 absolute -top-5 -left-2" /> : ''
            }
            <Bell className="w-6 h-6 text-gray-600" />
          </Link>
        </div>

        <GreetingComponent></GreetingComponent>
        
        <CardEmployee currentEmployee={currentEmployee} />
      </header>

      <section className="p-4">
        <h2 className="font-semibold mb-4">Today's activity</h2>
        <CardActivity />
      </section>

      <section className="p-4">
        <h2 className="font-semibold mb-4">PCS News</h2>
        <CardNews />
      </section>

      <section className="p-4 mb-10">
        <h2 className="font-semibold mb-4">Online</h2>
        <div className="flex overflow-x-auto pb-2 bg-white rounded-lg shadow-md p-4">
          {onlineEmployees.map((employee, index) => (
            <div key={index} className={`flex flex-col items-center min-w-[60px] ${index !== 0 ? 'ml-[-20px]' : ''}`}>
              <img src={employee.avatar} alt={employee.name} className="w-12 h-12 rounded-full border-2 border-white" />
              <p className="text-xs mt-1 font-semibold">{employee.name}</p>
              <p className="text-xs text-gray-500">{employee.location}</p>
            </div>
          ))}
          <div className="flex flex-col items-center min-w-[60px] ml-[-20px]">
            <div className="w-12 h-12 rounded-full bg-red-500 flex flex-col items-center justify-center">
              <span className="text-sm font-medium text-white">10</span>
              <p className="text-xs text-white">more</p>
            </div>
          </div>
        </div>
      </section>

      <Navigation />
    </div>
  );
}