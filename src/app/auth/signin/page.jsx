import SignInPage from "@/app/_components/SignInPage";
import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const Signin = async () => {
  const session = await getSession();
  if (session) {
    redirect("/");
  }

  return <SignInPage />;


};
export default Signin;
