import { useSelector } from "react-redux";

function MainBlock() {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      className="block"
      style={
        theme
          ? { background: "lightgrey", color: "black", border: "2px solid black" }
          : { background: "black", color: "grey", border: "2px solid lightgrey" }
      }
    >
      <div className="block__card">
        <h2>Это первая карточка</h2>
        <p>Текст в первой карточке</p>
      </div>
      <div className="block__card">
        <h2>Это вторая карточка</h2>
        <p>Текст во второй карточке</p>
      </div>
      <div className="block__card">
        <h2>Это третья карточка</h2>
        <p>Текст в третьей карточке</p>
      </div>
    </div>
  );
}

export default MainBlock;
