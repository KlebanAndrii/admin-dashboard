'use client';
import { useState } from 'react';
import BackButton from '@/components/BackButton';
import PostsPagination from '@/components/posts/PostsPagination';
import PostsTable from '@/components/posts/PostsTable';
import posts from '@/data/posts';

const POSTS_PER_PAGE = 10;

const PostsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <BackButton text="Go Back" link="/" />
      <PostsTable limit={POSTS_PER_PAGE} page={currentPage} />
      <PostsPagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

export default PostsPage;
