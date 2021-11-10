import Thumbnail from "../Thumbnail/Thumbnail";
import FlipMove from "react-flip-move";

function Results({ results }) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 l:grid-cols-3 xl:grid-cols-4 3xl:flex flex-wrap justify-center">
      {results.map((element) => (
        <Thumbnail key={element.id} result={element} />
      ))}
    </FlipMove>
  );
}

export default Results;
