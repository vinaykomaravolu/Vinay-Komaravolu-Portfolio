export const projectData = [
    {
        title: "Lumen",
        link: "https://github.com/vinaykomaravolu/Lumen",
        description: "Lumen is a 3D platformer with growing/shrinking mechanics and an emphasis on fast-paced “speedrunning” gameplay using a dynamic movement system.",
        image: "/images/lumen.jpg",
        tags: ["Game Development"],
        tech: ["Unity", "C#", "Blender"]
    },
    {
        title: "Cyberity App",
        link: "https://github.com/dcsil/Cyberity-App",
        description: "Cyberity aims to provide a safer work environment for companies and prevent insider threats. This is a web application to analyze user behavior via logs and identify insider threats.",
        image: "/images/cyberity.jpg",
        tags: ["Cybersecurity", "Web App"],
        tech: ["React", "Material UI", "Javascript", "Python", "Flask"]
    },
    {
        title: "VRRaytracer",
        link: "https://github.com/vinaykomaravolu/VRRaytracer",
        description: "This is my version of a randomized raytracer. Instead of sending a ray at every pixel into the scene, it sends a ray at every pixel in a random direction. ",
        image: "/images/vraytracer.jpg",
        tags: ["Graphics", "Raytracing"],
        tech: ["C++"]
    },
    {
        title: "DaTeam SDC App",
        link: "https://github.com/csc302-spring-2021/proj-DaTeam",
        description: "Web application with a minimalistic and crisp design that allowed doctors to easily create/view/modify standardized medical notes and store it in a database. This data can then be processed by health organizations.",
        image: "/images/sdc.gif",
        tags: ["Health", "Web App"],
        tech: ["React", "TailwinCss", "Typscript", "SQL", "Express", "Figma"]
    },
    {
        title: "OpenGL Graphics Engine",
        link: "https://github.com/vinaykomaravolu/OpenGL-Graphics-Engine",
        description: "Graphics Engine made from the ground up entirely using OpenGL, GLFW, C++, GLSL. This engine enables user to easily load models and textures for rendering and viewing.",
        image: "/images/castle.gif",
        tags: ["Graphics", "Model View"],
        tech: ["C++", "OpenGL", "OpenAL", "GLSL", "GLFW", "ImGUI"]
    },
    {
        title: "VText",
        link: "https://github.com/vinaykomaravolu/VText",
        description: "VText is a Windows text/Code editor made entirely from C++, GLSL, GLFW, openGL, and Imgui. VText allows the user to create file/directories, edit new and old files, and run python files. VText also uses runs Windows Command Prompt commands and displays the output in the text editor itself.",
        image: "/images/vtext.jpg",
        tags: ["Graphics", "Text Editor"],
        tech: ["C++", "Python", "OpenGL", "GLSL", "GLFW", "ImGUI"]
    },
    {
        title: "VPlayer",
        link: "https://github.com/vinaykomaravolu/vplayer",
        description: "Native desktop music player for Windows, Linux, Mac.",
        image: "/images/vplayer.jpg",
        tags: ["Native Desktop App", "Music Player"],
        tech: ["React", "Electron", "Typescript", "TailwindCss", "Lowdb", "Figma"]
    },
    {
        title: "Image Repository",
        link: "https://github.com/vinaykomaravolu/Vinay-Image-Repository",
        description: "Image repository for uploading images to a public view space. This was created fro the shopify challenge.",
        image: "/images/vimage.jpg",
        tags: ["Web App", "Image Repository"],
        tech: ["React", "Python", "Javascript", "Material UI", "MongoDB", "Flask"]
    },
    {
        title: "Shoppies",
        link: "https://github.com/vinaykomaravolu/Vinay-Shoppies",
        description: "Movie nominating web application. This was created for the shopify challenge.",
        image: "/images/vshoppies.jpg",
        tags: ["Web App", "Movie Nominations"],
        tech: ["React", "Python", "Javascript", "Material UI", "MongoDB", "Flask"]
    },
];

export const experienceData = [
    {
        title: "AMD Vulkan Developer",
        description: "After my 3rd year at University of Toronto I was fortunate enough to get a Job at AMD as a Vulkan Developer where I was able to partake in challanges just like a regular employer. It was here that I was able to meet some amazing people who have helped me through my journey!",
        image: "/images/amd.jpg",
        tags: ["Graphics", "Vulkan", "Google Stadia", "C++", "Python", "Visual Studio", "Drivers", "Virtualization"],
        date: "May 2019 - May 2020",
        workdone: [
            {
                header: "Vulkan",
                content: ["Debugging and modifying Vulkan drivers for the API and latest graphics cards.", "Debugged games with passthrough configurations and VM configurations.", "Optimized Vulkan drivers for performance and stability using C++.", "Worked with AMD partnered games and software developers in debugging applications."]
            },
            {
                header: "Google Stadia",
                content: ["Ownership of Google Stadia’s internal test bundle used by various teams.", "Improved Vulkan paradigms and performance of their software by working with Google Stadia team in debugging, testing, and implementing example applications.", "Compiled findings of Vulkan extension optimization that was tested on Linux VM’s for the Google Stadia team."]
            }
        ],
    }
]

export const educationData = {
    title: "University of Toronto",
    description: "University of toronto",
    image: "/images/uoft.png",
    degree: "Bachelors  Computer Science",
    GPA: "3.5",
    date: "September 2016 - April 2021",
    courses: ["Computer Graphics", "Web Dev", "Programming Languages", "Software Design", "Business of Software", "Engineering Large Softwares", "Operating Systems", "Human Computer Interaction", "Artifical Intelligence", "Algorithm Design", "Video Game Design", "Machine Learning", "Software Tools/ System Programming", "Statistics & Probability", "Linear Algebra"],
}

export const skillsData = [
    {
        title: "Technical Languages",
        content: ["C++", "Javascript", "Typescript", "Python", "C#", "Bash", "GLSL"]
    },
    {
        title: "Web Technologies",
        content: ["React", "TailwindCSS", "Flask", "Material UI", "Electron", "Github Actions", "MongoDB", "ExpressJs"]
    },
    {
        title: "Graphics Technologies",
        content: ["OpenGl", "Vulkan", "OpenAL"]
    },
    {
        title: "Tools & Softwares",
        content: ["Blender", "Unity", "Git", "Visual Studio", "Visual Studio Code", "CMake", "TeamCity", "Perforce", "Docker", "VirtualBox", "Figma"]
    },
]