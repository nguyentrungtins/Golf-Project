import Navbar from './Admin/Navbar';
const NestedLayout = (props) => {
    return (
        <>
            <Navbar />
            <main>{props.children}</main>
        </>
    );
};
export default NestedLayout;
