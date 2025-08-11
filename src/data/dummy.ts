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
    image: "https://i.imgur.com/1Q9Z1Zx.jpg",
  },
  {
    id: 2,
    author: "FC Barcelona",
    content: "Welcome to our newest signing!",
    image: "https://i.imgur.com/f6T5Fq8.jpg",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
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