import Head from 'next/head';
import Navbar from '../../../components/Layouts/Admin/Navbar';
import AdminCreateNewSection from '../../../components/Admin/News/AdminCreateNewSection';

const CreateNewPage = () => {
    return (
        <>
            <Navbar />
            <AdminCreateNewSection />
        </>
    );
};

export default CreateNewPage;
