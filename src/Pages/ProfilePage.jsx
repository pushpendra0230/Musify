// import React from 'react';
// import NavBar from '../Components/FixedHomeComponents/NavBar';
// import SideBar from '../Components/FixedHomeComponents/SideBar';

// const Navbar = () => (
//     <nav className="navbar sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ease-in-out">
//         <div className="max-w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-4 justify-center md:justify-between">
//             <div className="logo text-2xl font-extrabold">
//                 <a
//                     href="#"
//                     className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
//                 >
//                     Portfo<span className="text-blue-500">lio.</span>
//                 </a>
//             </div>
//             <ul className="menu flex space-x-6 hidden md:flex">
//                 {["home", "about", "services", "skills", "contact"].map((item) => (
//                     <li key={item}>
//                         <a
//                             href={`#${item}`}
//                             className="text-gray-800 hover:text-blue-500 transition duration-300 py-2 px-4 rounded-lg hover:bg-gray-100 hover:shadow-md hover:shadow-blue-500"
//                         >
//                             {item.charAt(0).toUpperCase() + item.slice(1)}
//                         </a>
//                     </li>
//                 ))}
//             </ul>
//             <div className="menu-btn block md:hidden text-gray-800 absolute right-4">
//                 <i className="fas fa-bars"></i>
//             </div>
//         </div>
//     </nav>
// );

// const Section = ({ id, title, children }) => (
//     <section id={id} className="py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
//             {children}
//         </div>
//     </section>
// );

// const CardComponent = () => {
//     return (
//         <div>
//             <Navbar />
//             <Section id="home" title="Welcome">
//                 <div className="relative flex flex-col items-center justify-center min-h-[50vh] bg-gray-50 py-20 mt-20">
//                     <div
//                         className="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-40"
//                         style={{
//                             backgroundImage:
//                                 "url('https://media.istockphoto.com/id/1463407189/photo/business-finance-data-analytics-graph-financial-management-technology-advisor-using-kpi.jpg?s=612x612&w=0&k=20&c=whzsxTsYbJFsiDHqeH8RnEZ8-yh1GxrUPkacanXKq38=')",
//                         }}
//                     ></div>
//                     <div className="relative z-10 text-center">
//                         <div className="text-lg text-white mb-2 drop-shadow-md">
//                             Hello, my name is
//                         </div>
//                         <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
//                             Pushpendra Soni
//                         </h1>
//                         <p className="text-lg text-white mb-6 drop-shadow-md">
//                             And I'm a{" "}
//                             <span className="text-white font-medium">
//                                 MERN Full Stack Developer
//                             </span>
//                         </p>
//                         <a
//                             href="https://drive.google.com/file/d/1Xb8dlXKqJauevE2ybn0xn_q85qly8EpN/view"
//                             className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-blue-600 hover:scale-110 transform transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                         >
//                             Hire me
//                         </a>
//                     </div>
//                 </div>
//             </Section>

//             <Section id="about" title="About Me">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
//                     <div className="relative group">
//                         <img
//                             src="https://media.licdn.com/dms/image/v2/D5603AQHuQAKEECrVxQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731229744318?e=1743033600&v=beta&t=QJg-Islm4slROZ_gzlLnbyY51bjU_mNAu5SsKDqLSFI"
//                             alt="Pushpendra Soni"
//                             className="rounded-full w-98 h-68 object-cover transform hover:scale-125 hover:shadow-lg hover:shadow-blue-500 transition-all duration-300 ease-in-out"
//                         />
//                     </div>
//                     <div>
//                         <h3 className="text-3xl font-semibold text-gray-800 mb-6 flex justify-center">
//                             I'm Pushpendra
//                         </h3>
//                         <p className="relative group p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 mb-4 hover:border-r-blue-400 hover:border-b-blue-400 hover:border-t-gray-400 hover:border-l-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white">
//                             I'm a passionate developer with a focus on creating amazing web
//                             experiences. I'm constantly learning and exploring new
//                             technologies to improve my skills.
//                         </p>
//                         <div className="flex justify-center">
//                             <a
//                                 href="https://drive.google.com/uc?export=download&id=1Xb8dlXKqJauevE2ybn0xn_q85qly8EpN"
//                                 className="bg-blue-500 text-white rounded-full p-3 w-32 hover:bg-blue-600 hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 mt-7 block"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                             >
//                                 Download CV
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </Section>
//             <div className="relative -top-10 px-6 md:px-12 lg:px-24 xl:px-36">
//                 {/* Moves section up */}
//                 <div id="services">
//                     <h2 className="text-2xl font-bold mb-6 flex justify-center">
//                         My Services
//                     </h2>
//                     {/* Responsive grid layout */}
//                     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
//                         {[
//                             {
//                                 title: "UI/UX Designer",
//                                 description:
//                                     "As a UI/UX Designer, I focus on creating user-friendly and visually appealing interfaces. I design with the user's needs in mind, ensuring intuitive layouts and seamless experiences across devices, from wireframes to high-fidelity prototypes.",
//                             },
//                             {
//                                 title: "Backend Developer",
//                                 description:
//                                     "As a Backend Developer, I build and manage the server-side logic and databases that power web applications. I focus on developing scalable APIs, optimizing performance, and ensuring security to maintain a reliable and smooth user experience.",
//                             },
//                             {
//                                 title: "React.js Developer",
//                                 description:
//                                     "As a React.js Developer, I create fast, interactive web applications by building reusable components and managing state. I use the latest React features to ensure applications are modular, efficient, and scalable for better user experiences.",
//                             },
//                             {
//                                 title: "MongoDB Specialist",
//                                 description:
//                                     "As a MongoDB Specialist, I design and optimize NoSQL databases for high-performance applications. I focus on efficient data modeling, indexing strategies, and ensuring scalability while maintaining data integrity.",
//                             },
//                             {
//                                 title: "Data Structures & Algorithms",
//                                 description:
//                                     "I specialize in Data Structures and Algorithms, optimizing code for efficiency and scalability. With a strong grasp of problem-solving techniques, I develop high-performance solutions for complex challenges.",
//                             },
//                             {
//                                 title: "Tailwind CSS Expert",
//                                 description:
//                                     "As a Tailwind CSS Expert, I build modern, responsive UIs with utility-first styling. I optimize designs for speed and maintainability, ensuring a seamless and visually appealing user experience.",
//                             },
//                         ].map((service, index) => (
//                             <div
//                                 key={index}
//                                 className="relative group p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 mb-4 hover:border-r-blue-400 hover:border-b-blue-400 hover:border-t-gray-400 hover:border-l-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
//                             >
//                                 <div className="mb-4">
//                                     <h4 className="text-xl font-semibold text-gray-800 group-hover:text-white flex justify-center">
//                                         {service.title}
//                                     </h4>
//                                 </div>
//                                 <p className="text-gray-600 text-lg group-hover:text-white">
//                                     {service.description}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <Section id="skills" title="My Skills">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
//                     <div className="relative group">
//                         <img
//                             src="https://media.licdn.com/dms/image/v2/D5603AQHuQAKEECrVxQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731229744318?e=1743033600&v=beta&t=QJg-Islm4slROZ_gzlLnbyY51bjU_mNAu5SsKDqLSFI"
//                             alt="Pushpendra Soni"
//                             className="rounded-full w-98 h-68 object-cover transform hover:scale-125 hover:shadow-lg hover:shadow-blue-500 transition-all duration-300 ease-in-out"
//                         />
//                     </div>
//                     <div>
//                         <p className="relative group p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 mb-4 hover:border-r-blue-400 hover:border-b-blue-400 hover:border-t-gray-400 hover:border-l-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white">
//                             I have expertise in a wide range of technologies, enabling me to
//                             build scalable, efficient, and user-friendly applications. My
//                             foundation in Data Structures & Algorithms (DSA) helps me solve
//                             complex problems with optimized solutions. With React.js, I create
//                             dynamic and responsive user interfaces, while Node.js allows me to
//                             build scalable back-end APIs. I also work with MongoDB for
//                             flexible NoSQL database management. Additionally, my skills in
//                             HTML, CSS, and JavaScript enable me to develop high-performance,
//                             accessible websites and applications. These skills allow me to
//                             deliver end-to-end solutions, from front-end to back-end
//                             development.
//                         </p>
//                     </div>
//                 </div>
//                 <div>
//                     {[
//                         { skill: "DSA (Data Structures & Algorithms)", level: "70%" },
//                         { skill: "React.js", level: "80%" },
//                         { skill: "TailwindCss", level: "90%" },
//                         { skill: "Node.js", level: "75%" },
//                         { skill: "MongoDB", level: "75%" },
//                         { skill: "HTML", level: "90%" },
//                         { skill: "CSS", level: "65%" },
//                         { skill: "JavaScript", level: "70%" },
//                     ].map((item, index) => (
//                         <div
//                             key={index}
//                             className="relative group p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-md hover:shadow-blue-500 mb-4 transform transition-all duration-300 hover:scale-105"
//                         >
//                             <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300"></div>
//                             <div className="relative z-10">
//                                 <div className="flex justify-between mb-1">
//                                     <span className="text-gray-800 group-hover:text-white">
//                                         {item.skill}
//                                     </span>
//                                     <span className="text-gray-800 group-hover:text-white">
//                                         {item.level}
//                                     </span>
//                                 </div>
//                                 <div className="h-2 bg-gray-200 rounded-full">
//                                     <div
//                                         className="h-full bg-teal-500 rounded-full"
//                                         style={{ width: item.level }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </Section>
//             <Section id="contact" title="Contact Me">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                     <div className="space-y-4">
//                         {[
//                             { head: "Name", subTitle: "Pushpendra Soni" },
//                             { head: "Mobile Number", subTitle: "+91 6350247952" },
//                             { head: "Email", subTitle: "sonipushpendra256@gmail.com" },
//                         ].map((contact, index) => (
//                             <div
//                                 key={index}
//                                 className="relative group p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 mb-4 hover:border-r-blue-400 hover:border-b-blue-400 hover:border-t-gray-400 hover:border-l-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
//                             >
//                                 <div className="mb-4">
//                                     <h4 className="text-xl font-semibold text-gray-800 group-hover:text-white">
//                                         {contact.head}
//                                     </h4>
//                                 </div>
//                                 <p className="text-black text-lg group-hover:text-white">
//                                     {contact.subTitle}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="space-y-4">
//                         {[
//                             { head: "Address", subTitle: "Jaipur" },
//                             {
//                                 head: "LinkedIn",
//                                 subTitle: "LinkedIn Profile",
//                                 link: "https://www.linkedin.com/in/pushpendra-soni-1913702a1/",
//                             },
//                             {
//                                 head: "GitHub",
//                                 subTitle: "GitHub Profile",
//                                 link: "https://github.com/pushpendra0230",
//                             },
//                         ].map((contact, index) => {
//                             const content = (
//                                 <div className="relative group p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 mb-4 hover:border-r-blue-400 hover:border-b-blue-400 hover:border-t-gray-400 hover:border-l-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white cursor-pointer">
//                                     <div className="mb-4">
//                                         <h4 className="text-xl font-semibold text-gray-800 group-hover:text-white">
//                                             {contact.head}
//                                         </h4>
//                                     </div>
//                                     <p className="text-black text-lg group-hover:text-white">
//                                         {contact.subTitle}
//                                     </p>
//                                 </div>
//                             );

//                             return contact.link ? (
//                                 <a
//                                     key={index}
//                                     href={contact.link}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="block"
//                                 >
//                                     {content}
//                                 </a>
//                             ) : (
//                                 <div key={index}>{content}</div>
//                             );
//                         })}
//                     </div>
//                 </div>
//             </Section>
//         </div>
//     );
// };
// export default CardComponent;







import React from 'react';
import NavBar from '../Components/FixedHomeComponents/NavBar';
// import SideBar from '../Components/FixedHomeComponents/SideBar';

const Navbar = () => (
    <nav className="navbar sticky top-0 z-50 bg-white shadow-md transition-all duration-300 ease-in-out">
        <div className="max-w-full md:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-4 justify-center md:justify-between">
            <div className="logo text-2xl font-extrabold">
                <a
                    href="#"
                    className="text-gray-800 hover:text-blue-500 transition-colors duration-300"
                >
                    Portfo<span className="text-blue-500">lio.</span>
                </a>
            </div>
            <ul className="menu flex space-x-6 hidden md:flex">
                {["home", "about", "services", "skills", "contact"].map((item) => (
                    <li key={item}>
                        <a
                            href={`#${item}`}
                            className="text-gray-800 hover:text-blue-500 transition duration-300 py-2 px-4 rounded-lg hover:bg-gray-100 hover:shadow-md hover:shadow-blue-500"
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="menu-btn block md:hidden text-gray-800 absolute right-4">
                <i className="fas fa-bars"></i>
            </div>
        </div>
    </nav>
);

const Sections = ({ id, title, children }) => (
    <section id={id} className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
            {children}
        </div>
    </section>
);

const CardComponent = () => {
    return (
        // <div className="flex bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 text-white h-screen overflow-hidden">
        //     {/* ✅ Sidebar */}
        //     <div className="w-64 fixed h-full">
        //         <SideBar />
        //     </div>

        //     {/* ✅ Main Content */}
        <div className="min-h-screen bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500">
            <div className="h-full">
                {/* ✅ Navbar */}
                <NavBar />

                <div>
                    <Navbar />

                    <div>
                        <Sections id="home" title="Welcome">
                            <div className="relative flex flex-col items-center justify-center min-h-[50vh] bg-gray-50 py-20 mt-20">
                                <div
                                    className="absolute inset-0 bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-40"
                                    style={{
                                        backgroundImage:
                                            "url('https://media.istockphoto.com/id/1463407189/photo/business-finance-data-analytics-graph-financial-management-technology-advisor-using-kpi.jpg?s=612x612&w=0&k=20&c=whzsxTsYbJFsiDHqeH8RnEZ8-yh1GxrUPkacanXKq38=')",
                                    }}
                                ></div>
                                <div className="relative z-10 text-center">
                                    <div className="text-lg text-white mb-2 drop-shadow-md">
                                        Hello, my name is
                                    </div>
                                    <h1 className="text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
                                        Pushpendra Soni
                                    </h1>
                                    <p className="text-lg text-white mb-6 drop-shadow-md">
                                        And I'm a{" "}
                                        <span className="text-white font-medium">
                                            MERN Full Stack Developer
                                        </span>
                                    </p>
                                    <a
                                        href="https://drive.google.com/file/d/1Xb8dlXKqJauevE2ybn0xn_q85qly8EpN/view"
                                        className="inline-block bg-blue-500 text-white px-8 py-3 rounded-full text-lg font-medium shadow-md hover:bg-blue-600 hover:scale-110 transform transition-transform duration-300 hover:shadow-lg hover:shadow-blue-500"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Hire me
                                    </a>
                                </div>
                            </div>
                        </Sections>

                        <Sections id="about" title="About Me">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
                                <div className="relative group">
                                    <img
                                        src="https://media.licdn.com/dms/image/v2/D5603AQHuQAKEECrVxQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731229744318?e=1743033600&v=beta&t=QJg-Islm4slROZ_gzlLnbyY51bjU_mNAu5SsKDqLSFI"
                                        alt="Pushpendra Soni"
                                        className="rounded-full w-98 h-68 object-cover transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500 transition-all duration-300 ease-in-out"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-semibold text-gray-800 mb-6 flex justify-center">
                                        I'm Pushpendra
                                    </h3>
                                    <p className="relative group p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 mb-4 hover:border-r-blue-400 hover:border-b-blue-400 hover:border-t-gray-400 hover:border-l-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white">
                                        I'm a passionate developer with a focus on creating amazing web
                                        experiences. I'm constantly learning and exploring new
                                        technologies to improve my skills.
                                    </p>
                                    <div className="flex justify-center">
                                        <a
                                            href="https://drive.google.com/uc?export=download&id=1Xb8dlXKqJauevE2ybn0xn_q85qly8EpN"
                                            className="bg-blue-500 text-white rounded-full p-3 w-32 hover:bg-blue-600 hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 mt-7 block"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            Download CV
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Sections>
                        <div className="relative -top-10 px-6 md:px-12 lg:px-24 xl:px-36">
                            {/* Moves section up */}
                            <div id="services">
                                <h2 className="text-2xl font-bold mb-6 flex justify-center">
                                    My Services
                                </h2>
                                {/* Responsive grid layout */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                                    {[
                                        {
                                            title: "UI/UX Designer",
                                            description:
                                                "As a UI/UX Designer, I focus on creating user-friendly and visually appealing interfaces. I design with the user's needs in mind, ensuring intuitive layouts and seamless experiences across devices, from wireframes to high-fidelity prototypes.",
                                        },
                                        {
                                            title: "Backend Developer",
                                            description:
                                                "As a Backend Developer, I build and manage the server-side logic and databases that power web applications. I focus on developing scalable APIs, optimizing performance, and ensuring security to maintain a reliable and smooth user experience.",
                                        },
                                        {
                                            title: "React.js Developer",
                                            description:
                                                "As a React.js Developer, I create fast, interactive web applications by building reusable components and managing state. I use the latest React features to ensure applications are modular, efficient, and scalable for better user experiences.",
                                        },
                                        {
                                            title: "MongoDB Specialist",
                                            description:
                                                "As a MongoDB Specialist, I design and optimize NoSQL databases for high-performance applications. I focus on efficient data modeling, indexing strategies, and ensuring scalability while maintaining data integrity.",
                                        },
                                        {
                                            title: "Data Structures & Algorithms",
                                            description:
                                                "I specialize in Data Structures and Algorithms, optimizing code for efficiency and scalability. With a strong grasp of problem-solving techniques, I develop high-performance solutions for complex challenges.",
                                        },
                                        {
                                            title: "Tailwind CSS Expert",
                                            description:
                                                "As a Tailwind CSS Expert, I build modern, responsive UIs with utility-first styling. I optimize designs for speed and maintainability, ensuring a seamless and visually appealing user experience.",
                                        },
                                    ].map((service, index) => (
                                        <div
                                            key={index}
                                            className="relative group p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 mb-4 hover:border-r-blue-400 hover:border-b-blue-400 hover:border-t-gray-400 hover:border-l-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
                                        >
                                            <div className="mb-4">
                                                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-white flex justify-center">
                                                    {service.title}
                                                </h4>
                                            </div>
                                            <p className="text-gray-600 text-lg group-hover:text-white">
                                                {service.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <Sections id="skills" title="My Skills">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
                                <div className="relative group">
                                    <img
                                        src="https://media.licdn.com/dms/image/v2/D5603AQHuQAKEECrVxQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1731229744318?e=1743033600&v=beta&t=QJg-Islm4slROZ_gzlLnbyY51bjU_mNAu5SsKDqLSFI"
                                        alt="Pushpendra Soni"
                                        className="rounded-full w-98 h-68 object-cover transform hover:scale-110 hover:shadow-lg hover:shadow-blue-500 transition-all duration-300 ease-in-out"
                                    />
                                </div>
                                <div>
                                    <p className="relative group p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 mb-4 hover:border-r-blue-400 hover:border-b-blue-400 hover:border-t-gray-400 hover:border-l-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white">
                                        I have expertise in a wide range of technologies, enabling me to
                                        build scalable, efficient, and user-friendly applications. My
                                        foundation in Data Structures & Algorithms (DSA) helps me solve
                                        complex problems with optimized solutions. With React.js, I create
                                        dynamic and responsive user interfaces, while Node.js allows me to
                                        build scalable back-end APIs. I also work with MongoDB for
                                        flexible NoSQL database management. Additionally, my skills in
                                        HTML, CSS, and JavaScript enable me to develop high-performance,
                                        accessible websites and applications. These skills allow me to
                                        deliver end-to-end solutions, from front-end to back-end
                                        development.
                                    </p>
                                </div>
                            </div>
                            <div>
                                {[
                                    { skill: "DSA (Data Structures & Algorithms)", level: "70%" },
                                    { skill: "React.js", level: "80%" },
                                    { skill: "TailwindCss", level: "90%" },
                                    { skill: "Node.js", level: "75%" },
                                    { skill: "MongoDB", level: "75%" },
                                    { skill: "HTML", level: "90%" },
                                    { skill: "CSS", level: "65%" },
                                    { skill: "JavaScript", level: "70%" },
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="relative group p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:shadow-md hover:shadow-blue-500 mb-4 transform transition-all duration-300 hover:scale-105"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 rounded-lg transition-all duration-300"></div>
                                        <div className="relative z-10">
                                            <div className="flex justify-between mb-1">
                                                <span className="text-gray-800 group-hover:text-white">
                                                    {item.skill}
                                                </span>
                                                <span className="text-gray-800 group-hover:text-white">
                                                    {item.level}
                                                </span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded-full">
                                                <div
                                                    className="h-full bg-teal-500 rounded-full"
                                                    style={{ width: item.level }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Sections>
                        <Sections id="contact" title="Contact Me">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-4">
                                    {[
                                        { head: "Name", subTitle: "Pushpendra Soni" },
                                        { head: "Mobile Number", subTitle: "+91 6350247952" },
                                        { head: "Email", subTitle: "sonipushpendra256@gmail.com" },
                                    ].map((contact, index) => (
                                        <div
                                            key={index}
                                            className="relative group p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 mb-4 hover:border-r-blue-400 hover:border-b-blue-400 hover:border-t-gray-400 hover:border-l-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white"
                                        >
                                            <div className="mb-4">
                                                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                                                    {contact.head}
                                                </h4>
                                            </div>
                                            <p className="text-black text-lg group-hover:text-white">
                                                {contact.subTitle}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="space-y-4">
                                    {[
                                        { head: "Address", subTitle: "Jaipur" },
                                        {
                                            head: "LinkedIn",
                                            subTitle: "LinkedIn Profile",
                                            link: "https://www.linkedin.com/in/pushpendra-soni-1913702a1/",
                                        },
                                        {
                                            head: "GitHub",
                                            subTitle: "GitHub Profile",
                                            link: "https://github.com/pushpendra0230",
                                        },
                                    ].map((contact, index) => {
                                        const content = (
                                            <div className="relative group p-6 border-2 border-gray-300 rounded-lg shadow-lg hover:scale-105 transform transition-all duration-300 hover:shadow-lg hover:shadow-blue-500 mb-4 hover:border-r-blue-400 hover:border-b-blue-400 hover:border-t-gray-400 hover:border-l-gray-400 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:text-white cursor-pointer">
                                                <div className="mb-4">
                                                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-white">
                                                        {contact.head}
                                                    </h4>
                                                </div>
                                                <p className="text-black text-lg group-hover:text-white">
                                                    {contact.subTitle}
                                                </p>
                                            </div>
                                        );

                                        return contact.link ? (
                                            <a
                                                key={index}
                                                href={contact.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block"
                                            >
                                                {content}
                                            </a>
                                        ) : (
                                            <div key={index}>{content}</div>
                                        );
                                    })}
                                </div>
                            </div>
                        </Sections>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CardComponent;