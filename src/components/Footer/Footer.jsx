import SocialLinks from '../SocialLinks/SocialLinks';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex flex-col md:flex-row mt-10 items-center justify-evenly bg-blue-950/75 p-10 text-xl">
      <SocialLinks />
      <div className="mt-5 md:mt-0">{`Copyright © ${currentYear} Borislav Pachev. All rights reserved.`}</div>
    </footer>
  );
}
