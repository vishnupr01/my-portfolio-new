export interface SubRole {
  title: string;
  stack: string;
  points: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  subRoles: SubRole[];
}

export const experience: Experience[] = [
  {
    role: "Software Engineer & Backend Lead",
    company: "Altrodav Technologies Pvt Ltd (MeetMux & PlaceMux)",
    period: "March 2025 — Present",
    location: "Bangalore, India",
    subRoles: [
      {
        title: "PlaceMux — Backend Lead (Current Project)",
        stack: "NestJS · TypeScript · PostgreSQL · Prisma · gRPC · Redis · Docker · AWS (EC2, ECR, S3) · GitHub Actions · Nx Monorepo · Celery",
        points: [
          "Leading backend architecture for PlaceMux, a professional networking & technical hiring platform — solely responsible for all system design and infrastructure decisions from scratch",
          "Architected a 7-service Nx monorepo microservices system — API Gateway, Auth, Company, Interview, Admin, Student, and Proctoring services — each independently containerized and deployed",
          "Implemented gRPC for inter-service communication with dedicated HTTP and gRPC ports per service enabling type-safe, high-performance internal API contracts",
          "Built smart GitHub Actions CI/CD using Nx affected builds — detects changed services on every push and rebuilds only affected containers, reducing deployment time significantly",
          "Deployed GPU-enabled AI proctoring system — Dockerized ML model with Nvidia GPU support, Redis-backed Celery workers for async frame and audio processing, pushed to AWS ECR via automated pipeline",
          "Implemented PostgreSQL with Prisma ORM across all services with per-service schema management and automated Prisma client generation in CI pipeline"
        ]
      },
      {
        title: "MeetMux — Backend Engineer (Social Platform)",
        stack: "Node.js · NestJS · TypeScript · PostgreSQL · Sequelize · Redis · Socket.IO · BullMQ · Firebase · AWS",
        points: [
          "Built backend following Clean Architecture — clear separation of domain, application, and infrastructure layers enabling maintainable and testable code",
          "Designed and built real-time chat system using Socket.IO with Redis Pub/Sub to sync socket events across multiple instances for horizontal scalability",
          "Built core social platform features — posts, likes, comments, follow/unfollow, user interactions — consumed by iOS and Android mobile apps",
          "Integrated Firebase Cloud Messaging (FCM) for push notifications; built BullMQ worker system on Redis for async background job processing",
          "Built user discovery using interest-based matching combined with geolocation distance scoring",
          "Optimized PostgreSQL queries with Sequelize, added strategic indexing, and resolved connection pool issues improving overall backend stability"
        ]
      }
    ]
  }
];
