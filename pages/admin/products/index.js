import Navbar from '../../../components/Layouts/Admin/Navbar';
import ProductList from '../../../components/Admin/Products/ProductList';
import Layout from '../../../components/Layouts/Layout';
import NestedLayoutAdmin from '../../../components/Layouts/NestedLayoutAdmin';
const adminIndex = (props) => {
    return (
        <>
            <Navbar />
            <ProductList />
        </>
    );
};
// // This gets called on every request
// export async function getServerSideProps() {
//     // Fetch data from external API
//     const res = await fetch(`https://.../data`);
//     const data = await res.json();

//     // Pass data to the page via props
//     return { props: { data } };
// }

// adminIndex.getLayout = function getLayout(page) {
//     return (
//         <Layout>
//             <NestedLayoutAdmin>{page}</NestedLayoutAdmin>
//         </Layout>
//     );
// };

export default adminIndex;
