//* Dependencies
import "../firebaseInit.ts";
import db from "../firebaseInit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { useRef } from "react";
import "../styles/test.css";

//* test
var testArr: any = [];
const querySnapshot = await getDocs(collection(db, "projects"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data().title}`);
  testArr.push({
    title: doc.data().title,
    desc: doc.data().desc,
    img: doc.data().img,
  });
});

//? Test
async function addItem(title: string /*, img: Array<string>*/) {
  const docRef = await addDoc(collection(db, "projects"), {
    desc: "Lorem Ipsum dolor sit amet",
    img: [
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
      "https://via.placeholder.com/300",
    ],
    title: title,
  });
  console.log("Document written with ID: ", docRef.id);
  location.reload();
}
//?

//* Logic
export default function Test() {
  const titleI: any = useRef(null);
  const imgI: any = useRef(null);

  const handleClick = () => {
    addItem(titleI.current.value);
  };

  return (
    <>
      <button>Add Item</button>
      <input ref={titleI} type="text" id="title" name="message" />

      <button onClick={handleClick}>Log message</button>

      <div className="projectContainer">
        {testArr.map((data: any, key: any) => {
          return (
            <>
              <div className="project" key={key}>
                <div className="images">
                  {data.img.map((data: string, key: any) => {
                    return (
                      <img src={data} key={key} alt="img" className="image" />
                    );
                  })}
                </div>
                <h2 style={{ width: 300, textAlign: "center" }}>
                  {data.title}
                </h2>
                <p style={{ width: 300, textAlign: "justify", padding: 10 }}>
                  {data.desc}
                </p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
