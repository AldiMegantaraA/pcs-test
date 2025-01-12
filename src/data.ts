import { Employee, NewsItem, Notification } from './types';

export const currentEmployee: Employee = {
  id: '1',
  name: 'Tabay',
  role: 'UI/UX Designer',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  location: 'Kantor Sahid',
  memberSince: '01 Juni 2021'
};

export const newsItems: NewsItem[] = [
  {
    id: '1',
    author: 'Ana Riswati',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop',
    date: '30 Mei 2022',
    content: [
      'Lorem ipsum dolor sit amet consec',
      'Lorem ipsum dolor sit amet consec',
      'Lorem ipsum dolor sit amet consec',
      'Lorem ipsum dolor sit amet consec'
    ]
  },
  {
    id: '2',
    author: 'John Smith',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=50&h=50&fit=crop',
    date: '29 Mei 2022',
    content: [
      'Company annual meeting will be held next week',
      'Please prepare your presentation materials',
      'The meeting will start at 9 AM sharp',
      'Lunch will be provided for all attendees'
    ]
  },
  {
    id: '3',
    author: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop',
    date: '28 Mei 2022',
    content: [
      'New project kickoff meeting tomorrow',
      'All team leads are required to attend',
      'Please review the project brief beforehand',
      'Meeting link will be sent via email'
    ]
  },
  {
    id: '4',
    author: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop',
    date: '27 Mei 2022',
    content: [
      'IT system maintenance notice',
      'Scheduled downtime this weekend',
      'Please save all your work before Friday',
      'System will be back online by Monday'
    ]
  }
];

export const onlineEmployees: Employee[] = [
  { id: '1', name: 'Jefril', role: 'Senior', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop', location: 'WFH', memberSince: '' },
  { id: '2', name: 'Zasami', role: 'RnD', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=50&h=50&fit=crop', location: 'BSD', memberSince: '' },
  { id: '3', name: 'Sam', role: 'Senior', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop', location: 'BSD', memberSince: '' },
  { id: '4', name: 'Aldo', role: 'Senior', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop', location: 'WFH', memberSince: '' },
  { id: '3', name: 'Roy', role: 'Senior', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=50&h=50&fit=crop', location: 'BSD', memberSince: '' },
  { id: '4', name: 'Aldi', role: 'Senior', avatar: 'https://images.unsplash.com/photo-1735682056675-41f66a21ec31?w=50&h=50&fit=crop', location: 'WFH', memberSince: '' },
  { id: '3', name: 'Ando', role: 'Senior', avatar: 'https://images.unsplash.com/photo-1733371001616-0341f62c56c1?w=50&h=50&fit=crop', location: 'BSD', memberSince: '' },
];

export const notifications: Notification[] = [
  {
    id: '1',
    type: 'Reimbursement',
    status: 'approved',
    message: 'Your submission "Lorem ipsum dolor sit amet..." with the with a total cost of 50,000 has been <strong>paid</strong>, please check your BRIMO application, Thankyou',
    date: 'Today',
    icon: 'coins',
    is_read: false
  },
  {
    id: '2',
    type: 'Reimbursement',
    status: 'rejected',
    message: 'Your submission "description" has been rejected, please click for details.',
    date: 'Yesterday',
    icon: 'coins',
    is_read: true
  },
  {
    id: '3',
    type: 'Sickness',
    status: 'approved',
    message: 'Your submission has been approved by the Superior.',
    date: '2022-10-05',
    icon: 'pill',
    is_read: true
  },
  {
    id: '4',
    type: 'Overtime',
    status: 'processing',
    message: 'Your submission is being reviewed to the Superior for the approval process, please wait.',
    date: '2022-10-05',
    icon: 'clock',
    is_read: false
  }
];