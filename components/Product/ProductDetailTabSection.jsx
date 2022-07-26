import { useState } from 'react';
import styles from './ProductDetailTabSection.module.scss';

const ProductDetailTabSection = () => {
    const [activedTab, setActivedTab] = useState(1);

    const handleClick = (event) => {
        const value = parseInt(event.target.dataset.value);
        setActivedTab(value);
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {/* TABS */}
                <ul>
                    <li
                        className={activedTab === 1 && styles.active}
                        data-value={1}
                        onClick={(e) => handleClick(e)}
                    >
                        Mô tả sản phẩm
                    </li>
                    <li
                        className={activedTab === 2 && styles.active}
                        data-value={2}
                        onClick={(e) => handleClick(e)}
                    >
                        Thông số kỹ thuật
                    </li>
                </ul>

                {/* CONTENT */}
                <div
                    className={[
                        styles.content,
                        activedTab === 1 && styles.active,
                    ].join(' ')}
                >
                    <h4>Tổng quan về bộ gậy golf fullset Callaway Reva Lady</h4>
                    <p>
                        Nhắc tới Callaway chắc hẳn người chơi golf sẽ nghĩ ngay
                        đến thương hiệu gắn liền với những bộ gậy golf chuyên
                        nghiệp, hiệu suất cao cùng mức giá vô cùng “bình dân”.
                        Xuất phát từ Mỹ – nơi có nền công nghiệp cũng như khoa
                        học kỹ thuật hàng đầu, Callaway có thể tạo nên sự tin
                        tưởng rằng những sản phẩm của mình đều sở hữu rất nhiều
                        lợi thế về công nghệ.
                    </p>
                    <p>
                        Trong suốt hơn 40 năm qua, Callaway đã không ngừng cải
                        tiến và nâng cấp các thế hệ sản phẩm gậy golf của mình
                        nhằm thu hút thêm người dùng cũng như nâng cao trải
                        nghiệm. Đặc biệt, bên cạnh chú trọng tới công nghệ, hiệu
                        suất, “ông lớn” ngành dụng cụ golf còn tập trung vào
                        thiết kế để những bộ gậy trở nên sang trọng, bắt mắt
                        hơn. Qua đó trở thành lựa chọn được đông đảo golfer
                        chuyên nghiệp lẫn nghiệp dư chọn lựa song hành trên mỗi
                        giải đấu.
                    </p>
                    <div className={styles.separate}></div>
                    <h4>
                        Những đặc trưng nổi bật trên fullset Callaway Reva
                        Ladies
                    </h4>
                    <p>
                        Bộ fullset Callaway Reva Ladies là lựa chọn dành cho các
                        tay golf nữ chuộng sự cao cấp, mỗi cây gậy sẽ góp phần
                        tạo nên sự tỏa sáng về hiệu suất lẫn phong cách riêng
                        của các golfer trên sân. Bên cạnh đó, ở thế hệ Callaway
                        Reva Ladies, hãng có những cải tiến, nâng cấp đáng kể để
                        trở nên hoàn thiện hơn.
                    </p>
                </div>
                <div
                    className={[
                        styles.content,
                        activedTab === 2 && styles.active,
                    ].join(' ')}
                >
                    <table border="1">
                        <tbody>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <td>Callaway Reva Ladies</td>
                            </tr>
                            <tr>
                                <th>Thương hiệu</th>
                                <td>Callaway</td>
                            </tr>
                            <tr>
                                <th>Dòng gậy</th>
                                <td>Fullset</td>
                            </tr>
                            <tr>
                                <th>Đối tượng</th>
                                <td>Nữ</td>
                            </tr>
                            <tr>
                                <th>Head Material</th>
                                <td>Titanium, Stainnless Steel</td>
                            </tr>
                            <tr>
                                <th>Shaft</th>
                                <td>Callaway Original Carbon (L)</td>
                            </tr>
                            <tr>
                                <th>Balance</th>
                                <td>C1/C2/C4/C5</td>
                            </tr>
                            <tr>
                                <th>Club Weight</th>
                                <td>
                                    275g, 297g, 321g, 351g, 357g, 364g, 368g
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailTabSection;
