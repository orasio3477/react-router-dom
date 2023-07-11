import React from "react";
import { Outlet } from "react-router-dom";
// react-router-dom에서 Outlet기능 지원
// Outlet : nested routes(중첩 라우팅)이 어디에 보여질지 지정하는 용도로 사용
// 중첩 라우팅 : 라우팅 맵핑을 최상위 컴포넌트 뿐만 아니라
//              여러 개의 컴포넌트에 걸쳐서 단계별로 정의하는 라우팅 기법
// 중첩 라우팅을 통해 상위 컴포넌트를 레이아웃화 할 수 있음
import { Link } from "react-router-dom";

function Layout() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          position: "relative",
          paddingBottom: "90px",
          boxSizing: "border-box",
        }}
      >
        {/* Header */}
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "24px",
            backgroundColor: "#000000",
            color: "white",
          }}
        >
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
            }}
          >
            <div>로고</div>
          </Link>
          <div
            style={{
              display: "flex",
              gap: "12px",
            }}
          >
            <Link
              to="login"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <div>로그인</div>
            </Link>
            <Link
              to="signup"
              style={{
                textDecoration: "none",
                color: "white",
              }}
            >
              <div>회원가입</div>
            </Link>
          </div>
        </header>

        {/* Outlet 컴포넌트는 라우팅 컴포넌트 내부에서 사용되며, 
        중첩된 자식 라우트가 렌더링되는 위치를 지정 */}
        <Outlet />

        {/* footer */}
        <footer
          style={{
            marginTop: "24px",
            display: "flex",
            justifyContent: "space-between",
            padding: "24px",
            backgroundColor: "#EEEEEE",
            color: "black",
            // 추가 css
            position: "absolute",
            bottom: 0,
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div>문의하기</div>
          <div>SNS 채널들</div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
