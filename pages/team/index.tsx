import Link from "next/link";

const Team = () => {
  return (
    <>
      <h1>Team Member Page</h1>
      <div>
        <ul>
          <li>
            <Link href="/team/1">Member Profile 1</Link>
          </li>
          <li>
            <Link href="/team/2">Member Profile 2</Link>
          </li>
          <li>
            <Link href="/team/3">Member Profile 3</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Team;
