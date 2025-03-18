import Link from "next/link";

const Home = () => {
  return (
    <div className="flex gap-6  ">
      <Link
        href="/"
        className="text-3xl border-white rounded-md border-[1px] p-2"
      >
        Home
      </Link>
      <Link
        href="/todos"
        className="text-3xl border-white rounded-md border-[1px] p-2"
      >
        Todos
      </Link>
    </div>
  );
};

export default Home;
