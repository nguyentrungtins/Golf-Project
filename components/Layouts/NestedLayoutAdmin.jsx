import Navbar from './Admin/Navbar';
const NestedLayoutAdmin = (props) => {
    return (
        <>
            <Navbar />
            <main>{props.children}</main>
        </>
    );
};
export default NestedLayoutAdmin;
