import { useMySummary } from '../hooks/use-my-summary';

export function MyProfileCard() {
    const { data, isLoading, isError } = useMySummary();

    if (isLoading) return <div className="text-gray-500">내 정보 불러오는 중...</div>;
    if (isError || !data) return <div className="text-gray-500">내 정보를 불러올 수 없어요.</div>;

    return (
        <div className="border rounded-lg p-4 flex items-center gap-4">
            {data.profileImageUrl ? (
                <img
                    src={data.profileImageUrl}
                    alt="profile"
                    className="w-14 h-14 rounded-full object-cover"
                />
            ) : (
                <div className="w-14 h-14 rounded-full bg-gray-200" />
            )}
            <div>
                <div className="text-lg font-semibold">{data.nickName ?? data.email}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{data.email}</div>
                <div className="text-xs text-gray-500 mt-1">
                    친구 {data.friendCount ?? 0} · 팔로워 {data.followerCount ?? 0} · 글 {data.postCount ?? 0}
                </div>
            </div>
        </div>
    );
}


