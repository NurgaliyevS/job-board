import Link from "next/link";
import { handleSignIn } from "./handleSignIn";
import { useSession } from "next-auth/react";
import { usePlausible } from "next-plausible";

const CTANAME = "Make My Meals";

function CTAButton(props) {
  const { plausibleNameBeforeLogin, plausibleNameAfterLogin  } = props;

  const { data: session } = useSession();
  const plausible = usePlausible();

  return (
    <>
      {!session?.user ? (
        <Link
          href="#"
          className="btn btn-primary btn-wide no-underline"
          onClick={(e) => {
            e.preventDefault();
            plausible(plausibleNameBeforeLogin);
            handleSignIn(e);
          }}
        >
          {CTANAME}
        </Link>
      ) : (
        <Link
          href="/meal"
          className="btn btn-primary btn-wide no-underline"
          title="Meal page"
          rel="nofollow"
          onClick={() => {
            plausible(plausibleNameAfterLogin);
          }}
        >
          {CTANAME}
        </Link>
      )}
    </>
  );
}

export default CTAButton;
