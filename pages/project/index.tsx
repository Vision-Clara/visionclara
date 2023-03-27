import Link from "next/link";

const Project = () => {
  return (
    <>
      <h1>Project Page</h1>{" "}
      <div>
        <ul>
          <li>
            <Link href="/project/1">Project 1</Link>
          </li>
          <li>
            <Link href="/project/2">Project 2</Link>
          </li>
          <li>
            <Link href="/project/3">Project 3</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Project;
