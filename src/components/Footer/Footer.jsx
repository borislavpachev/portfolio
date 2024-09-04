import SocialLinks from "../SocialLinks/SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center justify-evenly bg-blue-950/75 p-10 text-xl">
      <SocialLinks/>
      <div>{`Copyright © ${currentYear} Borislav Pachev. All rights reserved.`}</div>
    </footer>
  );
}
