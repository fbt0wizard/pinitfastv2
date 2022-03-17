// parent is Dashboard jsx
import { useRef, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { ChatChest } from "../chat-chest/ChatChest";
import { ImageComponent } from "../image-comp/ImageComponent";
import { ChatDataStyled, ChatDisplayed, Content } from "./ChatData.style";

export const ChatData = ({ allShare, deleteUser, inputHeight }) => {
  const scrollDiv = useRef(null);
  const { dataReturned, rollUp, virgin } = useSelector((state) => state.allData);

  useLayoutEffect(() => {
    document.title = "My Page";
    getHeight();
  }, [inputHeight, rollUp]);

  function getHeight() {
    var browserHeight = window.innerHeight;
    let myHeight = browserHeight - 50 - inputHeight;
    scrollDiv.current.style.height = myHeight.toString() + "px";
    scrollDiv.current.scrollTop = scrollDiv.current.scrollHeight;
  }

  window.addEventListener("resize", function () {
    getHeight();
  });

  return (
    <ChatDataStyled>
          <ChatDisplayed ref={scrollDiv}>
            {virgin? <h1>hello nigga</h1> : null }
        <Content>
          {dataReturned.map((item) =>
            item.image ? (
              <ImageComponent
                key={item.id}
                getHeight={getHeight}
                deleteUser={deleteUser}
                item={item}
                allShare={allShare}
              />
            ) : (
              <ChatChest
                key={item.id}
                item={item}
                allShare={allShare}
                deleteUser={deleteUser}
              />
            )
          )}
          </Content>
        </ChatDisplayed>
    </ChatDataStyled>
  );
};
