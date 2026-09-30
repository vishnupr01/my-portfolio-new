// Six groups instead of thirteen — easier to scan, same keywords recruiters search for
export const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  Backend: ["Node.js", "NestJS", "Express.js", "gRPC", "REST APIs", "Socket.IO", "BullMQ", "JWT", "OAuth 2.0"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Sequelize"],
  "Cloud & DevOps": ["AWS EC2", "AWS S3", "AWS ECR", "AWS CloudWatch", "Docker", "GitHub Actions", "Nginx", "Grafana", "Git"],
  Frontend: ["React", "Next.js", "Redux Toolkit", "Tailwind CSS", "HTML5", "CSS3"],
  "Practices & Tools": ["Microservices", "Clean Architecture", "Nx Monorepo", "Postman", "Swagger / OpenAPI", "GitHub Copilot", "ChatGPT"],
};
