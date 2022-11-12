import { createContext, useReducer, useState } from "react";

import contentReducer from "../reducers/contentReducer";

export const ModalContext = createContext();

export default ({ children }) => {
  const [modalShow, setModalShow] = useState(null);
  const [content, dispatch] = useReducer(contentReducer, {
    Content: "",
    Password: "",
    Url: "",
    Id: "",
    IsModified: false,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const modalContextData = {
    modalShow,
    setModalShow,
    content,
    dispatch,
    setErrorMessage,
    errorMessage,
  };
  return <ModalContext.Provider value={modalContextData}>{children}</ModalContext.Provider>;
};