const Footer = () => {
  return (
    <footer className="bg-gray-900">
      <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-between">
        <span className="text-xs md:text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Kevin
          </a>
          . All Rights Reserved.
        </span>
          <p className="text-gray-500 text-xs md:text-sm">
            Made with ❤️ by{" "}
            <a
              href="https://www.linkedin.com/in/kongsun-leu-502881145/"
              className="underline"
            >
              Kevin
            </a>
          </p>
      </div>
    </footer>
  );
};

export default Footer;
