/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function Layout(props) {
  console.log(props)
  return (
    <>
      <Navbar />
      <Outlet />
      <footer></footer>
    </>
  )
}