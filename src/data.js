export const links = {
  email: 'mailto:vinay.komaravolu@gmail.com',
  github: 'https://github.com/vinaykomaravolu',
  linkedin: 'https://www.linkedin.com/in/vinay-komaravolu/',
};

export const highlights = [
  'Graphics systems',
  'Compiler engineering',
  'Software tooling',
  'Game tooling',
  'React applications',
  'Performance-minded C++',
];

export const projectData = [
  {
    title: 'Lumen',
    link: 'https://github.com/vinaykomaravolu/Lumen',
    description:
      'A 3D platformer with growing and shrinking mechanics, fast movement, and speedrunning-focused level flow.',
    image: '/images/lumen.jpg',
    tags: ['Game Development'],
    tech: ['Unity', 'C#', 'Blender'],
    spotlight: true,
  },
  {
    title: 'Cyberity App',
    link: 'https://github.com/dcsil/Cyberity-App',
    description:
      'A security web app that analyzes user behavior from logs to help companies identify possible insider threats.',
    image: '/images/cyberity.jpg',
    tags: ['Cybersecurity', 'Web App'],
    tech: ['React', 'Material UI', 'JavaScript', 'Python', 'Flask'],
    spotlight: true,
  },
  {
    title: 'OpenGL Graphics Engine',
    link: 'https://github.com/vinaykomaravolu/OpenGL-Graphics-Engine',
    description:
      'A rendering engine built from the ground up with OpenGL, GLFW, C++, and GLSL for loading and viewing textured models.',
    image: '/images/castle-preview.jpg',
    tags: ['Graphics', 'Model Viewer'],
    tech: ['C++', 'OpenGL', 'OpenAL', 'GLSL', 'GLFW', 'ImGui'],
    spotlight: true,
  },
  {
    title: 'VRRaytracer',
    link: 'https://github.com/vinaykomaravolu/VRRaytracer',
    description:
      'A randomized raytracer that experiments with sending rays in random directions across the scene.',
    image: '/images/vraytracer.jpg',
    tags: ['Graphics', 'Raytracing'],
    tech: ['C++'],
  },
  {
    title: 'DaTeam SDC App',
    link: 'https://github.com/csc302-spring-2021/proj-DaTeam',
    description:
      'A clean medical-note application for doctors to create, view, modify, and store standardized notes for downstream analysis.',
    image: '/images/sdc.gif',
    tags: ['Health', 'Web App'],
    tech: ['React', 'Tailwind CSS', 'TypeScript', 'SQL', 'Express', 'Figma'],
  },
  {
    title: 'VText',
    link: 'https://github.com/vinaykomaravolu/VText',
    description:
      'A native Windows text and code editor with file management, command output, and Python execution support.',
    image: '/images/vtext.jpg',
    tags: ['Graphics', 'Text Editor'],
    tech: ['C++', 'Python', 'OpenGL', 'GLSL', 'GLFW', 'ImGui'],
  },
  {
    title: 'VPlayer',
    link: 'https://github.com/vinaykomaravolu/vplayer',
    description: 'A native desktop music player for Windows, Linux, and macOS.',
    image: '/images/vplayer.jpg',
    tags: ['Native Desktop App', 'Music Player'],
    tech: ['React', 'Electron', 'TypeScript', 'Tailwind CSS', 'Lowdb', 'Figma'],
  },
  {
    title: 'Image Repository',
    link: 'https://github.com/vinaykomaravolu/Vinay-Image-Repository',
    description:
      'An image repository for uploading images to a public viewing space, created for the Shopify challenge.',
    image: '/images/vimage.jpg',
    tags: ['Web App', 'Image Repository'],
    tech: ['React', 'Python', 'JavaScript', 'Material UI', 'MongoDB', 'Flask'],
  },
  {
    title: 'Shoppies',
    link: 'https://github.com/vinaykomaravolu/Vinay-Shoppies',
    description: 'A movie nomination web application created for the Shopify challenge.',
    image: '/images/vshoppies.jpg',
    tags: ['Web App', 'Movie Nominations'],
    tech: ['React', 'Python', 'JavaScript', 'Material UI', 'MongoDB', 'Flask'],
  },
];

export const experienceData = [
  {
    title: 'Compiler Engineer / Software Tools Architect',
    company: 'NVIDIA',
    date: 'August 2021 - Present',
    image: '/images/nvidia-logo.png',
    imageType: 'logo',
    summary:
      'Progressed from graphics engineering on GPU simulation infrastructure into compiler engineering and software tools architecture for an internal system design language.',
    tags: ['Compiler Engineering', 'System Design', 'GPU Simulation', 'C++', 'OpenGL', 'Developer Tools'],
    workdone: [
      'Developed FakeGL, an internal GPU simulation tool with an OpenGL-like interface for modeling and exercising graphics workloads.',
      'Built and maintained simulation workflows that help engineers reason about GPU behavior before hardware-level validation.',
      'Transitioned from graphics engineering into compiler engineering and software tools architecture.',
      'Design and evolve compiler infrastructure and developer tooling for an internal system design language.',
    ],
  },
  {
    title: 'Vulkan Developer',
    company: 'AMD',
    date: 'May 2019 - May 2020',
    image: '/images/amd.jpg',
    imageType: 'photo',
    summary:
      'Worked on Vulkan driver debugging, performance, stability, virtualization workflows, and internal tooling with AMD and partner teams.',
    tags: ['Graphics', 'Vulkan', 'C++', 'Python', 'Drivers', 'Virtualization'],
    workdone: [
      'Debugged and modified Vulkan drivers for current graphics cards and API behavior.',
      'Investigated games in passthrough and virtual machine configurations.',
      'Optimized Vulkan driver paths for performance and stability using C++.',
      'Owned internal Google Stadia test bundle workflows used by multiple teams.',
    ],
  },
];

export const educationData = {
  title: 'University of Toronto',
  image: '/images/uoft.png',
  degree: 'Bachelor of Science, Computer Science',
  gpa: '3.6 GPA',
  date: 'September 2016 - April 2021',
  courses: [
    'Computer Graphics',
    'Web Development',
    'Programming Languages',
    'Software Design',
    'Business of Software',
    'Engineering Large Software',
    'Operating Systems',
    'Human Computer Interaction',
    'Artificial Intelligence',
    'Algorithm Design',
    'Video Game Design',
    'Machine Learning',
    'Systems Programming',
    'Statistics & Probability',
    'Linear Algebra',
  ],
};

export const skillsData = [
  {
    title: 'Languages',
    content: ['C++', 'JavaScript', 'TypeScript', 'Python', 'Perl', 'C#', 'Bash', 'GLSL'],
  },
  {
    title: 'Web',
    content: ['React', 'Tailwind CSS', 'Flask', 'Material UI', 'Electron', 'GitHub Actions', 'MongoDB', 'Express'],
  },
  {
    title: 'Graphics',
    content: ['OpenGL', 'Vulkan', 'OpenAL', 'GLSL', 'Unity', 'Blender'],
  },
  {
    title: 'Tools',
    content: ['Git', 'Visual Studio', 'VS Code', 'CMake', 'TeamCity', 'Perforce', 'Docker', 'VirtualBox', 'Figma'],
  },
];
