export interface Project {
  title: string;
  tagline?: string;
  description: string;
  highlights?: string[];
  // Measured results, shown as stat tiles
  metrics?: { value: string; label: string }[];
  metricsNote?: string;
  tech: string[];
  links: { label: string; url: string }[];
  demo?: string;
  // Shown in place of the live link while a project isn't deployed yet
  status?: string;
}

export const projects: Project[] = [
  {
    title: "Coding Community Platform",
    tagline: "Invite-only community for developers to chat, pair-program and prepare for interviews together.",
    description:
      "Channels, direct messages and live collaborative code rooms in one place, plus admin-curated interview roadmaps with per-user progress tracking.",
    metrics: [
      { value: "1,000", label: "concurrent users in one room, 100% delivered" },
      { value: "~25 ms", label: "median delivery at 10 msgs/sec (10k deliveries/sec)" },
      { value: "< 90 ms", label: "p95 delivery at that load" },
      { value: "~20 ms", label: "median live-edit sync, 20 people typing at once" },
    ],
    metricsNote:
      "Measured with my own Socket.IO load test: 1.2M+ message deliveries and 250k+ live-edit syncs on a single server instance (8-core laptop), zero dropped messages, and every editor copy stayed identical.",
    highlights: [
      "Real-time collaborative code editor (Monaco + Yjs CRDT) with live remote cursors — the server holds the document, debounces saves to PostgreSQL and evicts idle rooms from memory",
      "Socket.IO chat with channels, DMs, typing indicators, online presence and unread counts, using the Redis adapter so events reach users on any backend instance",
      "Role-based access for private channels (per-user or per-role grants), invite codes and admin-approved access requests",
      "Image, video, file and voice-note attachments stored on Cloudinary; friend requests and notifications",
      "Interview-prep roadmaps (e.g. MERN, Backend) with categories, topics, completion and revisit tracking",
    ],
    tech: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Socket.IO",
      "Redis",
      "Yjs",
      "Next.js",
      "Monaco Editor",
      "Cloudinary",
    ],
    links: [
      { label: "Backend", url: "https://github.com/vishnupr01/My-Tasks-Backend" },
      { label: "Frontend", url: "https://github.com/vishnupr01/My-Tasks-Frontend" },
    ],
    status: "Deploying soon",
  },
  {
    title: "WE TALKS — Social Media Platform",
    description:
      "Social platform with posts, nested comments, real-time chat and multi-user video rooms, deployed on AWS EC2.",
    tech: ["React", "Node.js", "MongoDB", "Socket.IO", "WebRTC", "AWS EC2", "Cloudinary", "Tailwind"],
    links: [{ label: "GitHub", url: "https://github.com/vishnupr01/We-Talks-backend" }],
  },
  {
    title: "VKart — E-Commerce Platform",
    description:
      "Electronics store with product listing, cart, checkout and order management, Razorpay payment gateway integration, OTP-based authentication and an admin dashboard.",
    tech: ["Node.js", "Express", "MongoDB", "Razorpay", "EJS", "Bootstrap"],
    links: [{ label: "GitHub", url: "https://github.com/vishnupr01/Vkart-Ecommerce" }],
  },
];
