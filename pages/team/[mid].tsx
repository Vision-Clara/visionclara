import { useRouter } from "next/router";

const Member = () => {
  const router = useRouter();
  const { mid } = router.query;

  return <div>Member Profile {mid}</div>;
};

export default Member;
