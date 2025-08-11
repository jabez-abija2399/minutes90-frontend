import { posts } from "../data/dummy";

export default function FeedPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Social Feed</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <div key={post.id} className="p-4 border rounded shadow-sm">
            <div className="font-semibold mb-1">{post.authorName}</div>
            <div className="text-gray-700 mb-2">{post.content}</div>

            {post.imageUrl && (
              <img
                src={post.imageUrl}
                alt="Post media"
                className="w-full max-h-64 object-cover rounded mb-2"
              />
            )}

            {post.videoUrl && (
              <iframe
                className="w-full h-48 rounded mb-2"
                src={post.videoUrl}
                title="Video post"
                allowFullScreen
              />
            )}

            <div className="text-sm text-gray-500">
              {new Date(post.createdAt).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
