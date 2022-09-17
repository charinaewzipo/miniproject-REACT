import { useEffect } from "react";
const Alert = ({ msg, type, setAlert, list }) => {
  //ตั้งค่าให้alert 3วิ
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ show: false, msg: "", type: "" });
    }, 3000);
    return () => clearTimeout(timeOut);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [list]);

  return <p className={`alert ${type}`}>{msg}</p>;
};
export default Alert;
