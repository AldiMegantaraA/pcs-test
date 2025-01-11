export interface Employee {
  id: string;
  name: string;
  role: string;
  avatar: string;
  location: string;
  memberSince: string;
}

export interface NewsItem {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string[];
}

export interface Notification {
  id: string;
  type: 'Reimbursement' | 'Sickness' | 'Overtime';
  status: 'approved' | 'rejected' | 'processing';
  message: string;
  date: string;
  is_read: boolean;
  icon: 'coins' | 'pill' | 'clock';
}