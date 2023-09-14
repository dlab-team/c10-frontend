import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		CredentialsProvider({
			name: 'credentials',
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "password", type: "password" }
			},
			async authorize(credentials, req) {
				const res = await fetch('https://c10.leonardojose.dev/auth/signin', {
					method: "Post",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(credentials),
				})
				const user = await res.json();
				console.log(user, " paso algo");
				if (res.ok && user) return user;
				return null;
			},
		}),
	],
	callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      if (user?.token) {
        token.token = user.token;
        console.log(token.token);
      }
      console.log(token);
      return token;
    },

    async session(session, token) {
      return session;
    }
  },
  
})


export { handler as GET, handler as POST }
