import { useFeedMyPosts } from '@/features/feed/presentation/hooks/use-feed-my-posts';
import { FeedList } from '@/features/feed/presentation/components/feed-list';

export function MyPostsSection() {
    const { data, isLoading, isError } = useFeedMyPosts();

    if (isLoading) return <div className="text-gray-500">내 게시글 불러오는 중...</div>;
    if (isError) return <div className="text-gray-500">내 게시글을 불러올 수 없어요.</div>;

    return <FeedList posts={data ?? []} />;
}


