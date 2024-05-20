import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookChat = () => {
  return (
    <div>
      <FacebookProvider appId="431168596293065" chatSupport>
        <CustomChat pageId="321889554340238" minimized={false} />
      </FacebookProvider>
    </div>
  );
};

export default FacebookChat;
