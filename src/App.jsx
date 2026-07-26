import { useEffect, useState } from 'react';
import {
  ActionIcon,
  Anchor,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Group,
  Image,
  List,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Tooltip,
} from '@mantine/core';
import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBriefcase,
  IconChevronDown,
  IconChevronUp,
  IconCode,
  IconDownload,
  IconMail,
  IconSchool,
  IconSparkles,
} from '@tabler/icons-react';
import { educationData, experienceData, highlights, links, projectData, skillsData } from './data';
import resumeUrl from './assets/Vinay_Komaravolu_Resume.pdf';

const navItems = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Experience', '#experience'],
  ['Projects', '#projects'],
  ['Education', '#education'],
];

const sectionStops = [
  ['Top', 'top'],
  ['About', 'about'],
  ['Skills', 'skills'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Education', 'education'],
];

function ChipGroup({ items, variant = 'light' }) {
  return (
    <Group gap={8} className="chip-row">
      {items.map((item) => (
        <Badge key={item} variant={variant} radius="sm" className="badge">
          {item}
        </Badge>
      ))}
    </Group>
  );
}

function Header() {
  return (
    <Box component="header" className="site-header">
      <Container size="xl" className="header-inner">
        <Anchor href="#top" className="brand" underline="never">
          VK
        </Anchor>
        <Group gap={4} className="nav-links">
          {navItems.map(([label, href]) => (
            <Anchor key={label} href={href} underline="never" className="nav-link">
              {label}
            </Anchor>
          ))}
        </Group>
        <Group gap={8} className="header-actions">
          <Tooltip label="Email">
            <ActionIcon component="a" href={links.email} variant="subtle" aria-label="Email Vinay">
              <IconMail size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="GitHub">
            <ActionIcon component="a" href={links.github} target="_blank" rel="noreferrer" variant="subtle" aria-label="GitHub">
              <IconBrandGithub size={20} />
            </ActionIcon>
          </Tooltip>
          <Tooltip label="LinkedIn">
            <ActionIcon component="a" href={links.linkedin} target="_blank" rel="noreferrer" variant="subtle" aria-label="LinkedIn">
              <IconBrandLinkedin size={20} />
            </ActionIcon>
          </Tooltip>
          <Button
            component="a"
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            variant="outline"
            size="sm"
            leftSection={<IconDownload size={18} />}
            className="header-resume"
          >
            <span className="header-resume-label">Resume</span>
          </Button>
        </Group>
      </Container>
    </Box>
  );
}

function Hero() {
  return (
    <Box id="top" component="section" className="hero">
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 36, md: 64 }} verticalSpacing={48} className="hero-grid">
          <Stack gap="xl" className="hero-copy">
            <Badge leftSection={<IconSparkles size={14} />} variant="filled" radius="sm" className="hero-kicker">
              Graphics-minded software developer
            </Badge>
            <Stack gap="md">
              <Title className="hero-title">Vinay Komaravolu</Title>
              <Text className="hero-subtitle">
                I build tools, systems, and web applications with a practical eye for performance, interaction, and craft.
              </Text>
            </Stack>
            <SimpleGrid cols={{ base: 2, xs: 3 }} spacing="sm" className="highlight-grid">
              {highlights.map((item) => (
                <Paper key={item} className="metric" radius="sm">
                  <Text>{item}</Text>
                </Paper>
              ))}
            </SimpleGrid>
          </Stack>
          <Box className="portrait-wrap">
            <Image src="/images/vinay.png" alt="Vinay Komaravolu" className="portrait" />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function About() {
  return (
    <Box id="about" component="section" className="section about-band">
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 28, md: 60 }}>
          <Stack gap="sm">
            <Text className="eyebrow">About</Text>
            <Title order={2}>Engineer with a graphics core and product instincts.</Title>
          </Stack>
          <Stack gap="md" className="body-copy">
            <Text>
              I am a software engineer with more than five years of industry experience, including roles at NVIDIA and AMD. My work spans graphics programming, GPU simulation, compiler engineering, and developer tools, with a focus on building systems that are reliable, performant, and practical for other engineers to use.
            </Text>
            <Text>
              I hold a computer science degree from the University of Toronto and continue to sharpen my craft through side projects, game development, and hands-on experimentation with new technologies.
            </Text>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function ProjectCard({ project }) {
  return (
    <Card component="article" className={project.spotlight ? 'project-card project-card-featured' : 'project-card'} radius="sm" padding={0}>
      <Image src={project.image} alt={`${project.title} project preview`} className="project-image" />
      <Stack gap="md" className="project-content">
        <Group justify="space-between" align="flex-start" gap="sm">
          <Box className="project-title-block">
            <Title order={3}>{project.title}</Title>
            <ChipGroup items={project.tags} />
          </Box>
          <Tooltip label="Open project">
            <ActionIcon component="a" href={project.link} target="_blank" rel="noreferrer" variant="light" aria-label={`Open ${project.title}`}>
              <IconArrowUpRight size={18} />
            </ActionIcon>
          </Tooltip>
        </Group>
        <Text className="project-description">{project.description}</Text>
        <ChipGroup items={project.tech} variant="outline" />
      </Stack>
    </Card>
  );
}

function Projects() {
  const featured = projectData.filter((project) => project.spotlight);
  const supporting = projectData.filter((project) => !project.spotlight);

  return (
    <Box id="projects" component="section" className="section">
      <Container size="xl">
        <Group justify="space-between" align="flex-end" className="section-heading">
          <Box>
            <Text className="eyebrow">Projects</Text>
            <Title order={2}>Projects that span graphics, games, and web apps.</Title>
          </Box>
          <Anchor href={links.github} target="_blank" rel="noreferrer" className="section-link">
            More on GitHub
          </Anchor>
        </Group>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
          {featured.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </SimpleGrid>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="lg" mt="lg">
          {supporting.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Experience() {
  return (
    <Box id="experience" component="section" className="section experience-band">
      <Container size="xl">
        <Box className="section-heading">
          <Text className="eyebrow">Experience</Text>
          <Title order={2}>Building graphics systems, compilers, and engineering tools.</Title>
        </Box>
        <Stack gap={64} className="experience-list">
          {experienceData.map((experience) => (
            <SimpleGrid
              key={`${experience.company}-${experience.title}`}
              cols={{ base: 1, md: 2 }}
              spacing={{ base: 28, md: 52 }}
              className="experience-entry"
            >
              <Stack gap="md">
                <Box>
                  <Title order={3} className="experience-title">{experience.title}</Title>
                  <Text className="role-company">{experience.company}</Text>
                </Box>
                <Text className="body-copy">{experience.summary}</Text>
                <ChipGroup items={experience.tags} />
              </Stack>
              <Paper className="timeline-panel" radius="sm">
                <Image
                  src={experience.image}
                  alt={experience.imageType === 'logo' ? `${experience.company} logo` : `${experience.company} campus sign`}
                  className={experience.imageType === 'logo' ? 'experience-logo' : 'experience-image'}
                />
                <Group gap="sm" mb="md">
                  <ThemeIcon variant="light" radius="sm">
                    <IconBriefcase size={18} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={700}>{experience.date}</Text>
                    <Text size="sm" c="dimmed">{experience.company} engineering experience</Text>
                  </Box>
                </Group>
                <List spacing="sm" className="work-list">
                  {experience.workdone.map((item) => (
                    <List.Item key={item}>{item}</List.Item>
                  ))}
                </List>
              </Paper>
            </SimpleGrid>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

function Skills() {
  return (
    <Box id="skills" component="section" className="section">
      <Container size="xl">
        <Box className="section-heading">
          <Text className="eyebrow">Skills</Text>
          <Title order={2}>A practical toolkit for building interactive software.</Title>
        </Box>
        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
          {skillsData.map((skill) => (
            <Paper key={skill.title} className="skill-panel" radius="sm">
              <Group gap="sm" mb="md">
                <ThemeIcon variant="light" radius="sm">
                  <IconCode size={18} />
                </ThemeIcon>
                <Title order={3}>{skill.title}</Title>
              </Group>
              <ChipGroup items={skill.content} variant="outline" />
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Education() {
  return (
    <Box id="education" component="section" className="section education-band">
      <Container size="xl">
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing={{ base: 28, md: 52 }}>
          <Box>
            <Text className="eyebrow">Education</Text>
            <Title order={2}>{educationData.title}</Title>
            <Group mt="lg" gap="sm">
              <Badge leftSection={<IconSchool size={14} />} variant="filled" radius="sm">
                {educationData.degree}
              </Badge>
              <Badge variant="light" radius="sm">{educationData.gpa}</Badge>
              <Badge variant="light" radius="sm">{educationData.date}</Badge>
            </Group>
          </Box>
          <Paper className="education-panel" radius="sm">
            <Image src={educationData.image} alt={`${educationData.title} logo`} className="school-mark" />
            <Divider my="md" />
            <ChipGroup items={educationData.courses} />
          </Paper>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

function Footer() {
  return (
    <Box component="footer" className="footer">
      <Container size="xl">
        <Group justify="space-between" align="center" gap="md" className="footer-inner">
          <Box>
            <Title order={2}>Let's build something visual.</Title>
            <Text c="dimmed">Open to software, graphics, and web engineering opportunities.</Text>
          </Box>
        </Group>
      </Container>
    </Box>
  );
}

function SectionNavigator() {
  const [activeIndex, setActiveIndex] = useState(0);
  const atEnd = activeIndex === sectionStops.length - 1;
  const targetIndex = atEnd ? 0 : activeIndex + 1;
  const [targetLabel, targetId] = sectionStops[targetIndex];

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.42;
      let nextIndex = 0;

      sectionStops.forEach(([, id], index) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) {
          nextIndex = index;
        }
      });

      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 48) {
        nextIndex = sectionStops.length - 1;
      }

      setActiveIndex(nextIndex);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  const navigate = () => {
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Tooltip label={atEnd ? 'Back to top' : `Next: ${targetLabel}`} position="left">
      <ActionIcon
        className="section-navigator"
        variant="filled"
        size="xl"
        radius="sm"
        aria-label={atEnd ? 'Back to top' : `Go to ${targetLabel}`}
        onClick={navigate}
      >
        {atEnd ? <IconChevronUp size={24} /> : <IconChevronDown size={24} />}
      </ActionIcon>
    </Tooltip>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <Footer />
      <SectionNavigator />
    </>
  );
}
