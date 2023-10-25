// import { Outlet } from "react-router-dom";
import { type FC } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { Scrollbars } from "react-custom-scrollbars";
import TopHead from "@/components/TopHead";
import LeftNavBar from "@/components/LeftNavBar";
import CheckPermission from "@/utils/checkPermission";

const Layout: FC = () => {
  return CheckPermission() ? (
    <div className="bg-[#f3f3f3] w-screen h-screen">
      {/* 头部导航 */}
      <TopHead />

      {/* 左侧导航与内容展示部分 */}
      <div
        className="p-[20px] flex justify-between items-center"
        // style={{
        //   height: "calc(100vh - 60px)",
        // }}
      >
        {/* 左侧导航 */}
        <LeftNavBar />

        {/* 内容展示 */}
        <Scrollbars
          className="bg-[#fff]"
          autoHide
          style={{
            width: "calc(100vw - 260px)",
            height: "calc(100vh - 100px)"
          }}
          renderTrackVertical={() => <div className="custom-track-vertical" />}
          renderThumbVertical={() => (
            <div
              style={{ height: "100px" }}
              className="custom-thumb-vertical"
            />
          )}
        >
          <div className="p-[20px]">
            <Outlet />
          </div>
        </Scrollbars>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default Layout;
