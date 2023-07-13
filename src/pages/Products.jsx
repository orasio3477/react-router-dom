// 리스트 페이지
import React from "react";
import { Link } from "react-router-dom";
import { searchParams, useSearchParams } from "react-router-dom";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
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
      <div
        style={{
          marginTop: "56px",
          textAlign: "center",
        }}
      >
        <h2>🔥 여름 추천템 🔥</h2>
        <button
          onClick={() => {
            setSearchParams({
              sort: "price",
            });
          }}
          style={{
            marginBottom: "10px",
          }}
        >
          가격 정렬
        </button>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          {items.map((item, index) => (
            <Link to={`/products/${index + 1}`} key={index}>
              <div
                style={{
                  width: "200px",
                  height: "240px",
                  backgroundColor: "#068FFF",
                }}
              >
                <p>{item.name}</p>
                <p>{item.price}원</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
