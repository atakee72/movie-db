import { addDoc, collection, query, doc, deleteDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../config/firebaseConfig";
import { Button } from "../styles/Button.styles";
import transformDate from "../utils/transformDate";
import { AuthContext } from "../store/AuthContext";
import { useContext } from "react";
import { onSnapshot } from "firebase/firestore";
import { documentId } from "firebase/firestore";

function Chat() {
  console.log("db :>> ", db);
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const { user } = useContext(AuthContext);

  //   const getMessages = async () => {                      //no need anymore
  //     const q = query(collection(db, "chat"));

  //     const querySnapshot = await getDocs(q);
  //     const msgs = [];
  //     querySnapshot.forEach((doc) => {
  //       // doc.data() is never undefined for query doc snapshots
  //       //   console.log(doc.id, " => ", doc.data());
  //       //   console.log("doc", doc);                          //2 c your documents
  //       msgs.push(doc.data());
  //     });
  //     // console.log("msgs :>> ", msgs);
  //     setMessages(msgs);
  //   };

  const getUpdatedMsgs = () => {
    const q = query(collection(db, "chat"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const msgs = [];
      querySnapshot.forEach((doc) => {
        msgs.push(doc.data());
      });
      setMessages(msgs);
    });
  };

  const handleTxtSubmit = async () => {
    const msgObject = {
      text: text,
      author: user.email,
      date: new Date(),
    };

    const docRef = await addDoc(collection(db, "chat"), msgObject);
    console.log("Document written with ID: ", docRef.id);
  };
  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, "chat", documentId()));
      alert("Document has been deleted successfully.");
    } catch (error) {
      alert("Document could not be deleted.");
    }
  };

  const handleTxtInput = (e) => {
    const txtInput = e.target.value;
    setText(txtInput);
  };

  useEffect(() => {
    // getMessages();           //no need for it anymore
    getUpdatedMsgs();
  }, []);

  return (
    <div className="outerChat">
      <h1>Chat Screen</h1>
      <div>
        {messages &&
          messages.map((message, i) => {
            return (
              <div className="cardContainer" key={i}>
                <p>{messages[i].author}</p>
                <p>{messages[i].text}</p>
                <p>{transformDate(messages[i].date?.seconds)}</p>
                <p>
                  <Button onClick={handleDelete}>Delete message</Button>
                </p>
              </div>
            );
          })}
      </div>
      <div className="msgInpBtn">
        <input
          type="text"
          name="chat"
          id="chat"
          onClick={handleTxtInput}
          style={{
            height: "30px",
            borderRadius: "4px",
            border: "none",
            margin: "5px 10px 20px 5px",
            fontFamily: "Verdana",
            width: "75vh",
          }}
        />
        <Button onClick={handleTxtSubmit}>Send message</Button>
      </div>
    </div>
  );
}

export default Chat;
