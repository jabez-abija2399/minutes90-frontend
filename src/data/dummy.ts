import { User } from "../types/types";

// Centralized dummy user list
export const dummyUsers: User[] = [
  { id: 1, name: "Lionel Messi", email: "test1@gmail.com", role: "Player", password: "test123" },
  { id: 2, name: "FC Barcelona", email: "test2@fcbarcelona.com", role: "Club", password: "test123" },
  { id: 3, name: "John Agent", email: "test3@gmail.com", role: "Agent", password: "test123" },
  { id: 4, name: "Scout Smith", email: "test4@gmail.com", role: "Scout", password: "test123" },
  { id: 5, name: "Admin User", email: "admin@gmail.com", role: "Admin", password: "test123" },
];


// Gallery & Video data for each dummy user
export const profileMedia = {
  1: { // Lionel Messi - Player
    video: "https://www.youtube.com/embed/2q4e07dbnD4", // Messi Highlights
    gallery: [
      "https://media.gettyimages.com/id/2179660084/photo/new-england-revolution-v-inter-miami-cf.jpg?s=1024x1024&w=gi&k=20&c=W1ukk4rhUQJRGBg91gvg7BrhH0KggexE8Uako5r6dIs=",
      "https://media.gettyimages.com/id/2161418023/photo/canada-v-argentina-conmebol-copa-america-usa-2024.jpg?s=1024x1024&w=gi&k=20&c=-0iMxZ1SzVaYK38FMz3q6HPtvOCWq2ctiO5vc1t3yZw=",
      "https://media.gettyimages.com/id/2161562977/photo/east-rutherford-new-jersey-lionel-messi-of-argentina-warms-up-before-the-start-of-the.jpg?s=612x612&w=0&k=20&c=cokIA-DXDeLmidz3zX55pfk4n0slM2zDF1TN2F0uoh0=",
      "https://media.gettyimages.com/id/2161562984/photo/east-rutherford-new-jersey-lionel-messi-of-argentina-wears-the-captains-armband-before-the.jpg?s=612x612&w=0&k=20&c=5M3q53OMHj3eC1DY_x7Ki6dUjd7JqiJ3uM5erYxwY04="
    ]
  },
  2: { // FC Barcelona - Club
    video: "https://www.youtube.com/embed/XfB0rVU_Lx8", // Camp Nou Stadium tour
    gallery: [
      "https://www.fcbarcelona.com/photo-resources/2025/08/10/0e44cdde-b97b-4b79-b9b4-2c7530ccc500/_MGA1712.jpg?width=640&height=400",
      "https://www.fcbarcelona.com/photo-resources/2025/08/10/cdc7f916-e7d0-42fc-ac77-52148aa6450a/_MGA1745.jpg?width=640&height=400",
      "https://www.fcbarcelona.com/photo-resources/2025/08/04/602fc2f8-2d36-4bfc-a9f3-f4f15b617f74/_GP24458.jpg?width=640&height=400"
    ]
  },
  3: { // John Agent
    video: "https://www.youtube.com/embed/XfB0rVU_Lx8", // Agent interview
    gallery: [
      "https://www.fcbarcelona.com/photo-resources/2025/08/10/0e44cdde-b97b-4b79-b9b4-2c7530ccc500/_MGA1712.jpg?width=640&height=400",
      "https://www.fcbarcelona.com/photo-resources/2025/08/10/cdc7f916-e7d0-42fc-ac77-52148aa6450a/_MGA1745.jpg?width=640&height=400",
      "https://www.fcbarcelona.com/photo-resources/2025/08/04/602fc2f8-2d36-4bfc-a9f3-f4f15b617f74/_GP24458.jpg?width=640&height=400"
    ]
  },
  4: { // Scout Smith
    video: "https://www.youtube.com/embed/5J1Rc2zE6pQ", // Football scouting tips
    gallery: [
      "https://www.fcbarcelona.com/photo-resources/2025/08/10/0e44cdde-b97b-4b79-b9b4-2c7530ccc500/_MGA1712.jpg?width=640&height=400",
      "https://www.fcbarcelona.com/photo-resources/2025/08/10/cdc7f916-e7d0-42fc-ac77-52148aa6450a/_MGA1745.jpg?width=640&height=400",
      "https://www.fcbarcelona.com/photo-resources/2025/08/04/602fc2f8-2d36-4bfc-a9f3-f4f15b617f74/_GP24458.jpg?width=640&height=400"
    ]
  },
  5: { // Admin User
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Just for fun
    gallery: [
      "https://www.fcbarcelona.com/photo-resources/2025/08/10/0e44cdde-b97b-4b79-b9b4-2c7530ccc500/_MGA1712.jpg?width=640&height=400",
      "https://www.fcbarcelona.com/photo-resources/2025/08/10/cdc7f916-e7d0-42fc-ac77-52148aa6450a/_MGA1745.jpg?width=640&height=400",
      "https://www.fcbarcelona.com/photo-resources/2025/08/04/602fc2f8-2d36-4bfc-a9f3-f4f15b617f74/_GP24458.jpg?width=640&height=400"
    ]
    }
};


export interface Post {
  id: number;
  author: string;
  content: string;
  image?: string;
  videoUrl?: string;
}

export const dummyPosts: Post[] = [
  {
    id: 1,
    author: "Lionel Messi",
    content: "Excited for the new season! Let's do this.",
    image: "data:image/jpeg;base64,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",
     videoUrl: "https://www.youtube.com/watch?v=iqeiWDmrFVg",
  },
  {
    id: 2,
    author: "FC Barcelona",
    content: "Welcome to our newest signing!",
    image: "https://i.imgur.com/f6T5Fq8.jpg",
    videoUrl: "https://www.youtube.com/watch?v=iqeiWDmrFVg",
  },
  {
    id: 3,
    author: "John Agent",
    content: "Check out this highlight reel of our top player.",
    videoUrl: "https://www.youtube.com/watch?v=ysz5S6PUM-U",
  },
  {
    id: 4,
    author: "Scout Smith",
    content: "Scouting report: Promising talent spotted at local game.",
  },
];