import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

import { verifyPassword } from '../../../lib/auth';
import dbConnect from '../../../lib/dbConnect';
import User from '../../../models/users';
export default NextAuth({
    session: {
        jwt: true,
        maxAge: 3 * 24 * 60 * 60,
    },
    providers: [
        Providers.Credentials({
            async authorize(credentials) {
                await dbConnect();

                const user = await User.findOne({
                    email: credentials.email,
                });

                if (!user) {
                    throw new Error('No user found!');
                }

                const isValid = await verifyPassword(
                    credentials.password,
                    user.password
                );

                if (!isValid) {
                    throw new Error('Invalid Password!');
                }

                return { email: user.email };
            },
        }),
    ],
});
