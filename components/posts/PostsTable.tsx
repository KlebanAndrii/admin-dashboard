import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import posts from '@/data/posts';
import { Post } from '@/types/posts';
import Link from 'next/link';

interface PostsTableProps {
  limit: number;
  page: number;
  title?: string;
}

const PostsTable = ({ limit, page, title }: PostsTableProps) => {
  const sortedPosts: Post[] = [...posts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const startIndex = (page - 1) * limit;
  const filteredPosts = sortedPosts.slice(startIndex, startIndex + limit);

  return (
    <div className="mt-10 mb-8">
      <h3 className="text-2xl mb-4 font-semibold">{title || 'Posts'}</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead className="hidden md:table-cell">Author</TableHead>
            <TableHead className="hidden md:table-cell text-right">
              Date
            </TableHead>
            <TableHead>View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPosts.map((post) => (
            <TableRow key={post.id}>
              <TableCell>{post.title}</TableCell>
              <TableCell className="hidden md:table-cell">
                {post.author}
              </TableCell>
              <TableCell className="hidden md:table-cell text-right">
                {post.date}
              </TableCell>
              <TableCell>
                <Link href={`/posts/edit/${post.id}`}>
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                    Edit
                  </button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PostsTable;
