import { ReactComponent as LinkedinLogo } from "../../assets/logo-linkedin.svg";
import { ReactComponent as GithubLogo } from "../../assets/logo-github.svg";

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.linkedin.com/in/dhruv-nijhawan-803baa206/">
        <LinkedinLogo />
      </a>
      <a href="https://github.com/dhruvnijhawann">
        <GithubLogo />
      </a>
    </div>
  );
};
