import React, { useState, useEffect } from "react";
import CreateIcon from "@mui/icons-material/Create";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import ArticleIcon from "@mui/icons-material/Article";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import "./Feed.css";
import InputOptions from "./InputOptions";
import Post from "./Post";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setinput] = useState("");
  const user = useSelector(selectUser);
  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const sendPost = (e) => {
    e.preventDefault(); //no refresh
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setinput("");
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setinput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOptions title="Photo" Icon={AddAPhotoIcon} color="#7085F9" />
          <InputOptions title="Video" Icon={VideoLibraryIcon} color="#E7A33E" />
          <InputOptions
            title="Event"
            Icon={EventAvailableIcon}
            color="#C0CBcD"
          />
          <InputOptions
            title="Write article"
            Icon={ArticleIcon}
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Poste */}
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
      {/* <Post name="Ghost" description="Test" message="message" photoUrl="" /> */}
    </div>
  );
}

export default Feed;
