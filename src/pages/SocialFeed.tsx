// src/pages/SocialFeed.tsx
import React from "react";
import { dummyPosts } from "../data/dummy";

const SocialFeed = () => {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-8 text-gray-900 border-b pb-4">
        Social Feed
      </h1>

      {dummyPosts.map((post) => {
        const embedUrl = post.videoUrl
          ? post.videoUrl.replace("watch?v=", "embed/")
          : null;

        return (
          <article
            key={post.id}
            className="mb-10 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            tabIndex={0} // keyboard focus for accessibility
          >
            <header className="mb-3">
              <h2 className="font-semibold text-lg text-gray-800">{post.author}</h2>
            </header>

            <p className="text-gray-700 mb-4 whitespace-pre-wrap">{post.content}</p>

            {post.image && (
              <img
                src={post.image}
                alt="Post visual content"
                className="w-full rounded-lg mb-4 object-cover max-h-80"
                loading="lazy"
              />
            )}

            {embedUrl && (
              <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden shadow-sm">
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
    </div>
  );
};

export default SocialFeed;
