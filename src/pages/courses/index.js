import Head from "next/head";
import Link from "next/link";

function Courses({ data }) {
  return (
    <>
      <Head>
        <title>Courses | Online Courses | Microservice Architecture</title>
      </Head>

      <main className="container mt-12 mx-auto">
        <Link href="/">
          <a>Home Page</a>
        </Link>
        <h1 className="text-3xl">Fetching courses words</h1>
        <ul>
          {data.map((todo) => {
            return (
              <li key={todo.id} className="border border-indigo-700 p-4">
                {todo?.title ?? "-"}{" "}
                <Link href={`/courses/${todo.id}`}>
                  <a>
                    <br /> Launch
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </>
  );
}

Courses.getInitialProps = async () => {
  try {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => json);
    return { data };
  } catch (error) {}
};

export default Courses;
