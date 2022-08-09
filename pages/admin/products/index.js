import Navbar from '../../../components/Layouts/Admin/Navbar';
import ProductList from '../../../components/Admin/Products/ProductList';
import Layout from '../../../components/Layouts/Layout';
import NestedLayoutAdmin from '../../../components/Layouts/NestedLayoutAdmin';
import dbConnect from '../../../lib/dbConnect';
import { getSession } from 'next-auth/client';
import Product from '../../../models/Product';
const adminIndex = (props) => {
    const { products } = props;
    return (
        <>
            <Navbar />
            <ProductList products={products} />
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

    await dbConnect();
    const result = await Product.find({});
    let products;
    if (result) {
        products = JSON.parse(JSON.stringify(result));
    } else {
        products = [];
    }
    return {
        props: { session, products },
    };
}

export default adminIndex;
