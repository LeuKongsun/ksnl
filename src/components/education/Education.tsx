const Education = () => {
  return (
    <section id="education" className="flex flex-col max-w-screen-md items-center text-white mt-4 mb-16">
      <h1 className="text-2xl text-teal-500 font-bold mb-8">EDUCATIONS</h1>

      {/* <div className="p-8"> */}
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              Apr-Oct 2023 (Short Term)
            </time>
            <h3 className="text-lg font-semibold text-teal-500">
              Cloud computing, at{" "}
              <a href="https://www.aupp.edu.kh/" className="text-blue-500">
                AUPP
              </a>
            </h3>
            <p className="text-base font-normal text-gray-400">
              Understanding IBM products, cloud computing, Serverless,
              Deployment, Docker, Grafana, Prometheus, Kubernetes
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2015 - 2019
            </time>
            <h3 className="text-lg font-semibold text-teal-500">
              Bachelor of Computer Science -{" "}
              <a href="https://www.rupp.edu.kh/" className="text-blue-500">
                RUPP
              </a>
            </h3>
            <p className="text-base font-normal text-gray-400">
              Studied Data structures and algorithms, C/C++, Object Oriented
              Programming, Database Systems, Computer Networks, Java
              Programming, Web Development, Project Management and Software
              Engineering
            </p>
          </li>
          <li className="ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2018 - 2019 (Basic & Advanced Courses)
            </time>
            <h3 className="text-lg font-semibold text-teal-500">
              Software Eningeering Course -{" "}
              <a href="https://www.kshrd.com.kh/" className="text-blue-500">
                KSHRD
              </a>
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              A scholarship provided by{" "}
              <a href="https://www.koica.go.kr" className="text-blue-500">
                KOICA
              </a>{" "}
              and{" "}
              <a href="https://www.webcash.co.kr" className="text-blue-500">
                WEBCASH
              </a>{" "}
              for students. I have learned Java and Spring Boot Framework, and
              Android App Development.
            </p>
          </li>
        </ol>
      {/* </div> */}
    </section>
  );
};

export default Education;
