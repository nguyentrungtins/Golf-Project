import ProductEdit from '../../../../components/Admin/Products/ProductEdit';
import Navbar from '../../../../components/Layouts/Admin/Navbar';
import dbConnect from '../../../../lib/dbConnect';
import { getSession } from 'next-auth/client';
import Product from '../../../../models/Product';
const productEdit = (props) => {
    const { product } = props;
    // console.log(product);
    return (
        <>
            <Navbar />
            {product && <ProductEdit product={product} />}
            {!product && <ProductEdit />}
        </>
    );
};
export default productEdit;

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
