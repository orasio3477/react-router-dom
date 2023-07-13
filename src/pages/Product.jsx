// 상품 페이지
import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";

export default function Product() {
  const { id } = useParams();
  const [selectedItem, setSelectedItem] = useState("");
  const items = [
    {
      name: "멋진 바지",
      price: 20000,
      options: [28, 30, 32],
      likes: 100,
    },
    {
      name: "멋진 셔츠",
      price: 10000,
      options: ["small", "medium", "large"],
      likes: 200,
    },
    {
      name: "멋진 신발",
      price: 30000,
      options: [230, 240, 250, 260, 270],
      likes: 300,
    },
  ];
  // id 변수는 문자열 형태
  // URL에서 받아온 id 값을 사용하여
  // items 배열에서 현재 선택된 상품의 정보를 가져오기 위해 사용
  const currentItem = items[id - 1];

  return (
    <>
      <div>
        <h1
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          상세 페이지
        </h1>
        <div
          style={{
            display: "flex",
            gap: "44px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "200px",
              height: "240px",
              backgroundColor: "#068FFF",
            }}
          >
            {currentItem.name}
          </div>
          <div>
            <h3>가격: {currentItem.price}</h3>
            <h3>좋아요: {currentItem.likes}</h3>
            <h3>구매옵션 : {selectedItem}</h3>
            <select
              value={selectedItem}
              onChange={(e) => {
                setSelectedItem(e.target.value);
              }}
              style={{
                width: "100px",
              }}
            >
              <option value="">선택하세요</option>
              {currentItem.options.map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
