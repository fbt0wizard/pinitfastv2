import React, { useState, useEffect } from "react";
import "./dashboard.css";
import { getData } from "../../redux/api/fetchAllInfo";
import { useDispatch, useSelector } from "react-redux";
import { Bottom } from "../../component/bottom/Bottom";
import { Nav } from "../../component/nav/Nav";
import { useAlert } from "react-alert";
import { ChatData } from "../../component/chat-hero/ChatData";
import { ModalPop } from "../../component/modal/ModalPop";
import { Loader } from "../../component/loader/Loader";
import "react-toastify/dist/ReactToastify.css";
import { DashboardStyled } from "./Dashboard.style";
import { ModalStyled } from "../../component/image-comp/ImageComponent.style";

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { loading, user } = useSelector((state) => state.allData);
  const { progress, height } = useSelector((state) => state.dataUpload)
  
  const { alertUpdate, trigger, triggerErr, error } = useSelector(
    (state) => state.alert
  );
  const [attModal, setAttModal] = useState(false);
  const [inputHeight, setInputHeight] = useState(71);

  const alert = useAlert();

  useEffect(() => {
    if (alertUpdate !== "") {
      alert.success(<div className="alert-error">{alertUpdate}</div>);
    }
  }, [trigger]);
  useEffect(() => {
    if (error !== "") {
      // alert.error(<div className="alert-error">{error}</div>);
    }
  }, [triggerErr]);

  useEffect(() => {
    getData(user.userName, dispatch);
  }, []);

  function closeModal() {
    setAttModal(false);
  }
  if (loading) {
    return <Loader />;
  } else {
    return (
      <DashboardStyled>
        <Nav />
        <div className="processing" style={{width: progress, height: height}}></div>
        <ChatData
          inputHeight={inputHeight}
        />
        {attModal? <ModalStyled>
          <ModalPop closeModal={closeModal} />
        </ModalStyled>: null}
        <Bottom openModal={() => setAttModal(true)} setInputHeight={setInputHeight} />
      </DashboardStyled>
    );
  }
};
