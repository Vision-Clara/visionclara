import Link from "next/link";
import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <>
      <h2>Project {pid}</h2>
      <Link href="./">Back</Link>
    </>
  );
};

export default Project;
