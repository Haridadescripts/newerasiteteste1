callbacks: {
  session: async ({ session, user }) => {
    session.user.clan = user.clan;
    session.user.village = user.village;
    session.user.role = user.role;
    return session;
  }
} 