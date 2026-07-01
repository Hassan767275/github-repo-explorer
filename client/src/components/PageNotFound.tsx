import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="text-center">
      <h1 className="text-white text-3xl font-bold">
        Page Not Found Go Back to the Homepage{" "}
        <Link className="text-blue-700" to={"/"}>
          Here
        </Link>
      </h1>
    </div>
  );
}
