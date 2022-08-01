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
                console.log(user);

                if (!user) {
                    throw new Error('No user found!');
                }

                const isValid = await verifyPassword(
                    credentials.password,
                    user.password
                );

                if (!isValid) {
                    throw new Error('Could not log you in!');
                }

                return { email: user.email };
            },
        }),
    ],
});
