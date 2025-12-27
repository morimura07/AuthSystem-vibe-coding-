// Auth configuration placeholder
// In production, this would use BetterAuth with a real database
// For demo purposes, authentication is handled client-side

export type Session = {
  user: {
    id: string
    email: string
    name: string
  }
}

