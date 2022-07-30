import { useEffect } from 'react';
import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminBulletinSection from '../../../components/Admin/Bulletin';

export const getStaticProps = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/bulletin');
        const result = await res.json();

        return {
            props: {
                bulletins: result.data,
            },
            revalidate: 1,
        };
    } catch (error) {
        console.error(error);
    }
};

const AdminBulletinPage = ({ bulletins }) => {
    useEffect(() => {
        console.log(bulletins);
    });
    return (
        <>
            <Navbar />
            <AdminBulletinSection bulletins={bulletins} />
        </>
    );
};

export default AdminBulletinPage;
