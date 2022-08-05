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
                url: '/services/golf-3d',
            },
            {
                name: 'Booking golf',
                subName: [],
                url: '/services/booking-golf',
            },
            {
                name: 'Tour golf',
                subName: [],
                url: '/services/tour-golf',
            },
            {
                name: 'Thi công sân tập',
                subName: [],
                url: '/services/thi-cong-san-tap',
            },
            {
                name: 'Thi công green golf',
                subName: [],
                url: '/services/thi-cong-green-golf',
            },
            {
                name: 'Thi công phòng 3D',
                subName: [],
                url: '/services/thi-cong-phong-3d',
            },
            {
                name: 'Đào tạo và cung cấp caddy',
                subName: [],
                url: '/services/dao-tao-va-cung-cap-canddy',
            },
            {
                name: 'Bảo hiểm HIO',
                subName: [],
                url: '/services/bao-hiem-hio',
            },
        ];
    }
    if (subLinkPosition === 'two') {
        subLinkPosition = styles.two;

        subLinkItem = [
            {
                name: 'Gậy golf',
                subName: ['Gậy golf mới', 'Gậy golf cũ'],
                url: '/products/',
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
                url: '/products/',
            },
            {
                name: 'Giày golf',
                subName: ['Giày golf nam', 'Giày golf nữ'],
                url: '/products/',
            },
            {
                name: 'Phụ kiện golf',
                subName: ['Găng tay golf', 'Dù golf', 'Vớ golf'],
                url: '/products/',
            },
            {
                name: 'Máy 3D golf',
                subName: [],
                url: '/products/',
            },
            {
                name: 'Cigar',
                subName: [],
                url: '/products/',
            },
            {
                name: 'Rượu vang',
                subName: [],
                url: '/products/',
            },
        ];
    }
    if (subLinkPosition === 'three') {
        subLinkPosition = styles.three;
        subLinkItem = [
            {
                name: 'Golf cho người lớn',
                subName: [],
                url: '/course/adult',
            },
            {
                name: 'Golf cho trẻ em',
                subName: [],
                url: '/course/kid',
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
        return (
            <SubLinkLevel2
                key={e.url}
                name={e.name}
                subName={e.subName}
                url={e.url}
            />
        );
    });

    return (
        <ul className={ulStyles}>
            <span className={styles.wrapper}></span>
            {subLinkName}
        </ul>
    );
};
export default SubLinkNav;
