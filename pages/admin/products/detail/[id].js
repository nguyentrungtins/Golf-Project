import ProductDetail from '../../../../components/Admin/Products/ProductDetail';
import Navbar from '../../../../components/Layouts/Admin/Navbar';
import dbConnect from '../../../../lib/dbConnect';
import { getSession } from 'next-auth/client';
import Product from '../../../../models/Product';
const productDetail = (props) => {
    const { product } = props;
    // console.log(product);
    return (
        <>
            <Navbar />
            {product && <ProductDetail product={product} />}
            {!product && <ProductDetail />}
        </>
    );
};
export default productDetail;

export async function getServerSideProps(context) {
    const session = await getSession({ req: context.req });
    const { params } = context;
    const id = params.id;
    if (!session) {
        return {
            redirect: {
                destination: '/admin/auth',
                permanent: false,
            },
        };
    }

    let product;
    try {
        await dbConnect();
        const result = await Product.findById(id);
        product = JSON.parse(JSON.stringify(result));
    } catch (error) {
        product = null;
    }
    return {
        props: { session, product },
    };
}
