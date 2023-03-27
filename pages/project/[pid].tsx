import { useRouter } from "next/router";

const Project = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <div>Project {pid}</div>;
};

export default Project;
