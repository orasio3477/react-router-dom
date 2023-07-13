import React from "react";
import { Link } from "react-router-dom";

function Main() {
  const items = [
    {
      name: "멋진 바지",
      price: 20000,
    },
    {
      name: "멋진 셔츠",
      price: 10000,
    },
    {
      name: "멋진 신발",
      price: 30000,
    },
  ];

  return (
    <>
      {/* main */}
      <main>
        {/* 케러셀 */}
        <section
          style={{
            backgroundColor: "#4E4FEB",
            color: "white",
            height: "300px",
            lineHeight: "300px",
            textAlign: "center",
            fontSize: "24px",
          }}
        >
          케러셀
        </section>
        {/* 여름 추천템 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 여름 추천템 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                <p>{item.name}</p>
                <p>{item.price}원</p>
              </div>
            ))}
          </div>
          {/* Link는 <a>랑 비슷하지만 <a>태그는 페이지를 새로 불러오고
          Link태그는 브라우저의 주소만 바꿀 뿐 페이지를 새로 불러오지 않는다 */}
          <Link to="/products">더보기</Link>
        </section>
        {/* 추가적인 데이터 */}
        <section
          style={{
            marginTop: "56px",
            textAlign: "center",
          }}
        >
          <h2>🔥 세일 상품 🔥</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품1
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품2
            </div>
            <div
              style={{
                width: "200px",
                height: "240px",
                backgroundColor: "#EEEEEE",
              }}
            >
              상품3
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
