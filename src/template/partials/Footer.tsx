import Link from "next/link";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Footer: React.FC = () => (
  <footer className="flex justify-center items-center">
    <p className="flex justify-center !text-primary-light hover:text-primary items-center gap-4">
      &copy; {new Date().getFullYear()} Heron Amaral. All rights reserved.{" "}
      <Link href="https://github.com/heronoa">
        <GitHubIcon />
      </Link>
      <Link href="https://www.linkedin.com/in/heron-amaral-49a9a1179/">
        <LinkedInIcon />
      </Link>
      <Link href="mailto:heron.amaral@gmail.com">
        <EmailIcon />
      </Link>
    </p>
  </footer>
);

export default Footer;
