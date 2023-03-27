import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  // Disini adalah tempat untuk menambahkan konfigurasi NextAuth.js Anda.
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'naufalakbar378@gmail.com',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '********',
        },
      },
      async authorize(credentials, req) {
        if (
          credentials?.email === 'john@gmail.com' ||
          credentials?.password === '123'
        ) {
          return {
            id: '1',
            name: 'Naufal Akbar Nugroho',
            email: 'john@gmail.com',
          };
        }

        return null;
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID || '',
      clientSecret: process.env.GITHUB_SECRET || '',
    }),
  ],
  secret: 'test',
  session: {
    strategy: 'jwt',
  },
});
