import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { clearErrors } from "../JS/actions/User";
const Notification = ({ error }) => {
  const [show, setshow] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      setshow(false);
      dispatch(clearErrors());
    }, 3000);
  }, [show, dispatch]);
  return (
    <div>
      {show && (
        <div>
          {" "}
          {toast.error(error.msg)}
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
      )}
    </div>
  );
};

export default Notification;