import React from "react";
import { dummyPosts } from "../data/dummy";

const SocialFeed = () => {
  return (
    <main className="max-w-3xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-gray-900 border-b border-gray-300 pb-4 select-none">
        Social Feed
      </h1>

      {dummyPosts.map((post) => {
        const embedUrl = post.videoUrl
          ? post.videoUrl.replace("watch?v=", "embed/")
          : null;

        return (
          <article
            key={post.id}
            tabIndex={0}
            className="mb-12 p-6 bg-white rounded-xl shadow-md hover:shadow-xl focus:shadow-xl focus:outline-none transition-shadow duration-300"
            aria-label={`Post by ${post.author}`}
          >
            <header className="mb-4 flex items-center justify-between">
              <h2 className="font-semibold text-lg text-gray-900">{post.author}</h2>
              {/* Optional: add post date or other meta info here */}
            </header>

            <p className="text-gray-700 mb-6 whitespace-pre-wrap leading-relaxed">{post.content}</p>

            {post.image && (
              <img
                src={post.image}
                alt="Post visual content"
                className="w-full rounded-lg mb-6 object-cover max-h-96 shadow-sm"
                loading="lazy"
              />
            )}

            {embedUrl && (
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src={embedUrl}
                  title={`video-${post.id}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            )}
          </article>
        );
      })}
    </main>
  );
};

export default SocialFeed;
