import { Link } from "@remix-run/react";

function Header() {

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between bg-white p-4">
      <h1 className="text-3xl text-black">
        <Link to="/" className="font-bold">👩‍💻 UI/UX를 사랑하는 프론트엔드 개발자</Link>
      </h1>
    </header>
  );
}

export default Header;
