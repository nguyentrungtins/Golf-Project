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
                subName: [
                    {
                        name: 'Gậy golf nam',
                        url: '/san-pham/danh-muc/gay-golf-nam',
                    },
                    {
                        name: 'Gậy golf nữ',
                        url: '/san-pham/danh-muc/gay-golf-nu',
                    },
                ],
                url: '/san-pham/danh-muc/gay-golf',
            },
            {
                name: 'Thời trang',
                subName: [
                    {
                        name: 'Áo golf nam',
                        url: '/san-pham/danh-muc/ao-golf-nam',
                    },
                    {
                        name: 'Áo golf nữ',
                        url: '/san-pham/danh-muc/ao-golf-nu',
                    },
                    {
                        name: 'Quần golf nam',
                        url: '/san-pham/danh-muc/quan-golf-nam',
                    },
                    {
                        name: 'Quần golf nữ',
                        url: '/san-pham/danh-muc/quan-golf-nu',
                    },
                    {
                        name: 'Váy golf nữ',
                        url: '/san-pham/danh-muc/vay-golf-nu',
                    },
                ],
                url: '/san-pham/danh-muc/thoi-trang',
            },
            {
                name: 'Giày golf',
                subName: [
                    {
                        name: 'Giày golf nam',
                        url: '/san-pham/danh-muc/giay-golf-nam',
                    },
                    {
                        name: 'Giày golf nữ',
                        url: '/san-pham/danh-muc/giay-golf-nu',
                    },
                ],
                url: '/san-pham/danh-muc/giay-golf',
            },
            {
                name: 'Phụ kiện golf',
                subName: [
                    {
                        name: 'Găng tay golf',
                        url: '/san-pham/danh-muc/gang-tay-golf',
                    },
                    {
                        name: 'Dù golf',
                        url: '/san-pham/danh-muc/du-golf',
                    },
                    {
                        name: 'Vớ golf',
                        url: '/san-pham/danh-muc/vo-golf',
                    },
                ],
                url: '/san-pham/danh-muc/phu-kien-golf',
            },
            {
                name: 'Máy 3D golf',
                subName: [],
                url: '/san-pham/danh-muc/may-3d-golf',
            },
            {
                name: 'Cigar',
                subName: [],
                url: '/san-pham/danh-muc/cigar',
            },
            {
                name: 'Rượu vang',
                subName: [],
                url: '/san-pham/danh-muc/ruou-vang',
            },
            {
                name: 'Khác',
                subName: [],
                url: '/san-pham/danh-muc/khac',
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
