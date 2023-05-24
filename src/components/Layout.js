// import {
//   FileOutlined,
//   PieChartOutlined,
//   UserOutlined,
//   DesktopOutlined,
//   TeamOutlined,
// } from "@ant-design/icons";
// import { Breadcrumb, Layout, Menu, theme } from "antd";
// import { useState } from "react";
// import Navbar from '../layouts/Navbar.js';


// const { Header, Content, Footer, Sider } = Layout;
// function getItem(label, key, icon, children) {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   };
// }
// const items = [
//   getItem("Dashboard", "1", <PieChartOutlined />),
//   getItem("Bike Details", "2", <DesktopOutlined />),
//   getItem("Add New Bike", "3", <DesktopOutlined />),
//   getItem("Payment", "4", <DesktopOutlined />),
//   getItem("Review", "5", <DesktopOutlined />),
//   getItem("Complain", "6", <DesktopOutlined />),
//   //   getItem("User", "sub1", <UserOutlined />, [
//   //     getItem("Tom", "3"),
//   //     getItem("Bill", "4"),
//   //     getItem("Alex", "5"),
//   //   ]),
//   //   getItem("Team", "sub2", <TeamOutlined />, [
//   //     getItem("Team 1", "6"),
//   //     getItem("Team 2", "8"),
//   //   ]),
//   //   getItem("Files", "9", <FileOutlined />),
// ];
// const App = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   return (
//     <>
//     <Navbar/>
//     <Layout
//       style={{
//         minHeight: "100vh",
//       }}
//     >
//       <Sider
//         collapsible
//         collapsed={collapsed}
//         onCollapse={(value) => setCollapsed(value)}
//       >
//         {/* <div
//           style={{
//             margin: 16,
//           }}
//         >
//           {" "}
//           <div
//             style={{
//               fontSize: 30,
//               color: "#59ce8f",
//               textAlign: "center",
//               justifyContent: "center",
//               marginTop: 10,
//             }}
//           >
//             Garage Name
//           </div>
//           <div
//             style={{
//               fontSize: 15,
//               color: "#59ce8f",
//               textAlign: "center",
//               justifyContent: "center",
//               marginBottom: 20,
//             }}
//           >
//             Powered by BroRental
//           </div>
//         </div> */}

//         <Menu
//           theme="dark"
//           defaultSelectedKeys={["1"]}
//           mode="inline"
//           items={items}
//         />
//       </Sider>
//       <Layout className="site-layout">
//         <Header
//           style={{
//             padding: 0,
//             background: colorBgContainer,
//           }}
//         />

//         <Content
//           style={{
//             margin: "0 16px",
//           }}
//         >
//           {/* <Breadcrumb
//             style={{
//               margin: "16px 0",
//             }}
//           >
//             <Breadcrumb.Item>User</Breadcrumb.Item>
//             <Breadcrumb.Item>Bill</Breadcrumb.Item>
//           </Breadcrumb> */}
//           <div
//             style={{
//               padding: 24,
//               minHeight: 360,
//               background: colorBgContainer,
//             }}
//           >
//             Bill is a cat.
//           </div>
//         </Content>
//         <Footer
//           style={{
//             textAlign: "center",
//           }}
//         >
//           Ant Design ©2023 Created by Ant UED
//         </Footer>
//       </Layout>
//     </Layout>
//     </>
//   );
// };
// export default App;
