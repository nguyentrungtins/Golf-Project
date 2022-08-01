import Navbar from '../../components/Layouts/Admin/Navbar';
import { getSession } from 'next-auth/client';

const adminIndex = () => {
    return (
        <>
            <Navbar />
        </>
    );
};

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });

    if (!session) {
        return {
            redirect: {
                destination: '/admin/auth',
                permanent: false,
            },
        };
    }

    return {
        props: { session },
    };
}

export default adminIndex;
