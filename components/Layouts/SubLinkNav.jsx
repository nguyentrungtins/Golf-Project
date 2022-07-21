import styles from './SubLinkNav.module.scss';
import classnames from 'classnames';
import SubLinkLevel2 from './SubLinkLevel2';
const SubLinkNav = ({ subLinkPosition, isOnTop }) => {
    let subLinkItem = [];
    if (subLinkPosition === 'one') {
        subLinkPosition = styles.one;

        subLinkItem = [
            {
                name: 'Golf 3D',
                subName: [],
            },
            {
                name: 'Booking golf',
                subName: [],
            },
            {
                name: 'Tour golf',
                subName: [],
            },
            {
                name: 'Thi công sân tập',
                subName: [],
            },
            {
                name: 'Thi công green golf',
                subName: [],
            },
            {
                name: 'Thi công phòng 3D',
                subName: [],
            },
            {
                name: 'Đào tạo và cung cấp caddy',
                subName: [],
            },
            {
                name: 'Bảo hiểm HIO',
                subName: [],
            },
        ];
    }
    if (subLinkPosition === 'two') {
        subLinkPosition = styles.two;
        // subLinkItem = [
        //     'Gậy golf',
        //     'Thời trang',
        //     'Giày golf',
        //     'Phụ kiện golf',
        //     'Máy 3D golf',
        //     'Cigar',
        //     'Rượu vang',
        // ];

        subLinkItem = [
            {
                name: 'Gậy golf',
                subName: ['Gậy golf mới', 'Gậy golf cũ'],
            },
            {
                name: 'Thời trang',
                subName: [
                    'Áo golf nam',
                    'Quần golf nam',
                    'Áo golf nữ',
                    'Quần golf nữ',
                    'Váy golf nữ',
                ],
            },
            {
                name: 'Giày golf',
                subName: ['Giày golf nam', 'Giày golf nữ'],
            },
            {
                name: 'Phụ kiện golf',
                subName: ['Găng tay golf', 'Dù golf', 'Vớ golf'],
            },
            {
                name: 'Máy 3D golf',
                subName: [],
            },
            {
                name: 'Cigar',
                subName: [],
            },
            {
                name: 'Rượu vang',
                subName: [],
            },
        ];
    }
    if (subLinkPosition === 'three') {
        subLinkPosition = styles.three;
        subLinkItem = [
            {
                name: 'Golf cho người lớn',
                subName: [],
            },
            {
                name: 'Golf cho trẻ em',
                subName: [],
            },
        ];
    }

    const ulStyles = classnames(
        styles.subLink,
        subLinkPosition,
        isOnTop ? styles.onTop : ''
    );
    // const subLinkName = Object.keys(subLinkItem).map((key) => {
    //     return subLinkItem[key].map((value) => {
    //         return <li className={styles.item}>{value}</li>;
    //     });
    // });
    const subLinkName = subLinkItem.map((e) => {
        return <SubLinkLevel2 name={e.name} subName={e.subName} />;
    });

    return (
        <ul className={ulStyles}>
            <span className={styles.wrapper}></span>
            {subLinkName}
        </ul>
    );
};
export default SubLinkNav;
