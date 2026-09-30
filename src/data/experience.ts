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
        title: "PlaceMux — Backend Lead (Technical Hiring Platform)",
        stack: "NestJS · TypeScript · PostgreSQL · Prisma · gRPC · Redis · Docker · AWS (EC2, ECR, S3, CloudWatch) · GitHub Actions · Nx Monorepo · Grafana",
        points: [
          "Led the analysis and design of the backend for a 7-service microservices platform, built to scale to 100,000+ users — responsible for system design and infrastructure decisions from scratch",
          "Cut internal response latency by ~25% by moving service-to-service communication from REST to gRPC",
          "Integrated 4 AI/ML models into the product, including a GPU-backed AI proctoring system reaching 80–90% detection accuracy in production",
          "Built a GitHub Actions + Docker CI/CD pipeline that rebuilds only changed services (Nx affected), cutting build and deploy time by 40–60%",
          "Programmed REST APIs and integrated them with React components, delivering features from requirements to production in Agile sprints",
          "Documented every service API with Swagger/OpenAPI and Postman; monitored production health with AWS CloudWatch and Grafana",
        ],
      },
      {
        title: "MeetMux — Backend Engineer (iOS & Android App)",
        stack: "Node.js · NestJS · TypeScript · PostgreSQL · Sequelize · Redis · Socket.IO · BullMQ · Firebase · AWS",
        points: [
          "Owned 6+ backend modules end to end, from gathering requirements to production, serving live users",
          "Built a real-time chat system from scratch with Socket.IO and Redis Pub/Sub, designed for 10,000 concurrent connections across multiple instances",
          "Fixed instability under load by resolving database connection-pool issues and speeding up slow PostgreSQL queries with targeted indexes",
          "Defined API contracts and backend-driven configuration with the iOS and Android teams",
          "Built push notifications (FCM), BullMQ background jobs, and interest + geolocation based user discovery",
        ],
      },
    ],
  },
];
