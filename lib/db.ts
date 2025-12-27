// Mock database for demo purposes
// In production, this would connect to a real database
export const prisma = {
  user: {
    findUnique: async () => null,
    create: async (data: any) => ({ id: "1", ...data }),
  },
  session: {
    findUnique: async () => null,
    create: async (data: any) => ({ id: "1", ...data }),
  },
} as any

