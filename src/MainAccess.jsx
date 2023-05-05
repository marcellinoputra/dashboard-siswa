import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function MainAccess() {
  const navigate = useNavigate();
  function checkLogin() {
    const admin = localStorage.getItem("token");
    if (admin == undefined) {
      navigate("/admin/sign-in");
    } else {
      navigate("/home");
    }
  }
  useEffect(() => {
    checkLogin();
  }, []);
  return <></>;
}
