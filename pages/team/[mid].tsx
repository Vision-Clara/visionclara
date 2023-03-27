import Link from "next/link";
import { useRouter } from "next/router";

const Member = () => {
  const router = useRouter();
  const { mid } = router.query;

  return (
    <>
      <h2>Member Profile {mid}</h2>
      <Link href="./">Back</Link>
    </>
  );
};

export default Member;
