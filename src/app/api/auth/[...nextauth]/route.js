import NextAuth from "next-auth";
import ProviderGoogle from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
	providers: [
		ProviderGoogle({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "email", type: "email", placeholder: "example@example.com" },
				password: { label: "Password", type: "password" },
			},
			async authorize(credentials, req) {
				const res = await fetch("https://c10.leonardojose.dev/auth/signin", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						email: credentials?.email,
						password: credentials?.password,
					}),
				});
				const user = await res.json();
				console.log(user, " - ", req.ok);
				if (user.access_token) {
					return Promise.resolve(user);
				} else {
					return Promise.reject(new Error(403));
				}
			},
		}),
	],
	pages: {
		signIn: "api/auth/signIn",
	},

	session: {
		jwt: true,
	},
})

export { handler as GET, handler as POST }
