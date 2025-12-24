import { Link } from "react-router-dom";

function CurrentURL() {
  return (
    <>
      <div className="bg-white p-4">
        <p>
          <Link to={"/"} className="hover:text-gray-500">
            Home
          </Link>{" "}
          / About PORCELANOSA Group
        </p>
      </div>
    </>
  );
}

export default CurrentURL;
