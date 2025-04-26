import AnalyticsChart from '@/components/dashboard/AnalyticsChart';
import DashboardCard from '@/components/dashboard/DashboardCard';
import PostsTable from '@/components/posts/PostsTable';
import { Folder, MessageCircle, Newspaper, User } from 'lucide-react';

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-5 mb-5">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="text-slate-500" size={52} />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="text-slate-500" size={52} />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User className="text-slate-500" size={52} />}
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="text-slate-500" size={52} />}
        />
      </div>
      <AnalyticsChart />
      <PostsTable title='Latest Posts' page={5} limit={5}/>
    </>
  );
}
