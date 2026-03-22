import { useEffect, useMemo, useState } from 'react'
import Reveal from './components/Reveal'
import SectionTitle from './components/SectionTitle'
import { profile, projects, services, skillGroups, stats } from './data/portfolio'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

const iconMap = {
  WebApps: (
    <path
      d="M4.75 7.75h14.5m-11.5 9.5h8m-9.5-13.5h11a2 2 0 0 1 2 2v11.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2V5.75a2 2 0 0 1 2-2Z"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  APIs: (
    <path
      d="M8.25 8.25 5.5 11l2.75 2.75m7.5-5.5L18.5 11l-2.75 2.75m-3.5 4 3-13.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  UIUX: (
    <path
      d="M12 4.75c3.59 0 6.5 2.91 6.5 6.5s-2.91 6.5-6.5 6.5-6.5-2.91-6.5-6.5 2.91-6.5 6.5-6.5Zm0 0v13m-6.5-6.5h13"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
}

const socials = [
  { label: 'Email', href: profile.socialLinks.email },
  { label: 'GitHub', href: profile.socialLinks.github, pending: !profile.socialLinks.github },
  {
    label: 'LinkedIn',
    href: profile.socialLinks.linkedin,
    pending: !profile.socialLinks.linkedin,
  },
]

function App() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  message: ""
});
  const sendWhatsApp = () => {
  const text = encodeURIComponent(
    `Hi Ayyanar 👋

Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`
  );

  window.open(
    `https://wa.me/916382678350?text=${text}`,
    "_blank"
  );
};
  const [activeSection, setActiveSection] = useState('home')

  const sectionIds = useMemo(() => navItems.map((item) => item.id), [])

  useEffect(() => {
    const observers = []

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)

      if (!element) {
        return
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          rootMargin: '-35% 0px -45% 0px',
          threshold: 0.1,
        },
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [sectionIds])

  return (
    <div className="relative overflow-hidden bg-[#050816] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-cyan-500/12 blur-[140px]" />
        <div className="absolute right-[-8rem] top-72 h-80 w-80 rounded-full bg-fuchsia-500/12 blur-[130px]" />
        <div className="absolute left-[-10rem] top-[32rem] h-96 w-96 rounded-full bg-blue-500/12 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_42%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_20%,transparent_80%,rgba(255,255,255,0.03))]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/55 backdrop-blur-2xl">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#home" className="text-sm font-semibold tracking-[0.35em] text-white">
            AYYANAR
          </a>

          <div className="hidden items-center gap-2 rounded-full border border-white/20 bg-white/10 p-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.id

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`rounded-full px-4 py-2 text-sm transition duration-300 ${
                    isActive
                      ? ' text-cyan-950 '
                      : 'text-cyan-300  hover:text-slate-950'
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>

          <a
            href="/Professional Minimalist CV Resume.pdf"
            download
            className="inline-flex items-center rounded-full border border-white/30  px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]  text-cyan-800 shadow-[0_16px_40px_rgba(255,255,255,0.14)] transition duration-300 hover:scale-[1.03]  hover:text-cyan-300"
          >
            Download Resume
          </a>
        </nav>
      </header>

      <main className="relative mx-auto flex w-full max-w-7xl flex-col gap-24 px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:gap-32 lg:px-10">
        <section id="home" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm text-slate-200 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_20px_rgba(74,222,128,0.9)]" />
              Available for internship and freelance-ready web projects
            </div>

            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em]  text-cyan-800">
                Developer
              </p>
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
                {profile.firstName}
                <span className="mt-2 block bg-gradient-to-r from-slate-200 via-white to-cyan-200 bg-clip-text text-transparent">
                  {profile.role}
                </span>
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
                {profile.tagline}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em]  text-cyan-800 transition duration-300 hover:scale-[1.03] hover:bg-cyan-100 hover:text-cyan-300"
              >
                View Projects
              </a>
              <a
                href="/Professional Minimalist CV Resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-800 shadow-[0_16px_40px_rgba(255,255,255,0.14)] transition duration-300 hover:scale-[1.03] hover:bg-slate-100 hover:text-cyan-300"
              >
                Download Resume
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <Reveal
                  key={stat.label}
                  delay={0.1 + index * 0.08}
                  className="rounded-3xl border border-white/10 bg-white/6 p-5 backdrop-blur-xl"
                >
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                </Reveal>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:justify-self-end">
            <div className="relative mx-auto max-w-md animate-[float_6s_ease-in-out_infinite]">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 via-white/10 to-fuchsia-500/20 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/8 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <div className="rounded-[1.75rem] border border-white/10 bg-slate-950/80 p-8">
                  <div className="mx-auto flex aspect-square w-56 items-center justify-center rounded-full border border-cyan-300/35 bg-[radial-gradient(circle_at_30%_30%,rgba(125,211,252,0.35),rgba(15,23,42,0.95)_55%)] shadow-[0_0_60px_rgba(56,189,248,0.24)]">
                    <div className="flex h-44 w-44 items-center justify-center rounded-full border border-white/12 bg-white/6 text-center backdrop-blur-xl">
                      <div>
                        {/* <p className="text-5xl font-semibold tracking-[0.18em] text-white">AM</p>
                        <p className="mt-3 text-sm uppercase tracking-[0.28em] text-cyan-100/75">
                          Developer
                        </p> */}
                        <img src='profile.jpeg' className='rounded-full'/>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        Contact
                      </p>
                      <div className="mt-3 space-y-2 text-sm text-slate-300">
                        <p>{profile.email}</p>
                        <p>{profile.phone}</p>
                        <p>{profile.location}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-sm text-slate-300">
                      <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                          Education
                        </p>
                        <p className="mt-2 font-medium text-white">
                          Bachelor of Information & Technology
                        </p>
                      </div>
                      <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                          Focus
                        </p>
                        <p className="mt-2 font-medium text-white">Frontend + Backend Growth</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="about" className="space-y-10">
          <Reveal>
            <SectionTitle
              eyebrow="About"
              title="Clean interfaces, steady growth, and a builder’s mindset."
              description="The portfolio is shaped from the details in your resume and presented like a polished SaaS landing page, with a darker visual system, layered glass surfaces, and motion that stays subtle."
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-2xl">
              <div className="space-y-5 text-base leading-8 text-slate-300">
                {profile.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.08} className="grid gap-6">
              <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-2xl">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Education</p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{profile.education.degree}</h3>
                <p className="mt-2 text-slate-300">{profile.education.school}</p>
                <p className="mt-1 text-sm text-slate-500">{profile.education.period}</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-2xl">
                <p className="text-xs uppercase tracking-[0.32em] text-slate-500">Languages</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {profile.languages.map((language) => (
                    <span
                      key={language}
                      className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm text-slate-200"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="skills" className="space-y-10">
          <Reveal>
            <SectionTitle
              eyebrow="Technical Skills"
              title="An evolving toolkit organized for product-focused development."
              description="Each skill block balances what is explicitly present in your resume with the full-stack direction you described, while keeping the experience visually premium and easy to scan."
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group, index) => (
              <Reveal
                key={group.title}
                delay={index * 0.06}
                className="group rounded-[2rem] border border-white/10 bg-white/6 p-7 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35 hover:bg-white/8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{group.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-slate-400">
                      {group.description}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-2xl border border-cyan-300/20 bg-cyan-300/10" />
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-slate-950/60 px-4 py-2 text-sm text-slate-200 transition duration-300 group-hover:border-cyan-300/20 group-hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </section>

     <section id="projects" className="space-y-10">
  <Reveal>
    <SectionTitle
      eyebrow="Projects"
      title="Selected work centered around practical product functionality."
      description="Real-world projects presented with strong UI, interaction, and case-study structure."
    />
  </Reveal>

  {/* FLEX CONTAINER */}
  <div className="flex flex-col gap-6">
    {projects.map((project, index) => (
      <Reveal
        key={project.title}
        delay={index * 0.08}
        className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
      >
        {/* FLEX ROW */}
        <div className="flex flex-col gap-8 p-8 lg:flex-row">
          
          {/* LEFT SIDE */}
          <div className="lg:w-[55%]">
            <span className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-100">
              {project.status}
            </span>

            <h3 className="mt-5 text-3xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-4 text-base leading-8 text-slate-300">
              {project.description}
            </p>

            {/* STACK */}
            <div className="mt-6 flex flex-wrap gap-3">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-slate-900 px-4 py-2 text-sm text-slate-200 transition hover:bg-cyan-400 hover:text-black"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* METRICS (Optional but powerful) */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xl font-bold text-white">100+</p>
                <p className="text-xs text-slate-400">Orders Tested</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">5+</p>
                <p className="text-xs text-slate-400">Core Features</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">99%</p>
                <p className="text-xs text-slate-400">Reliability</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:w-[45%] flex flex-col justify-between rounded-[1.75rem] border border-white/10 bg-slate-900 p-6">
            
            {/* PREVIEW (simplified clean UI) */}
            <div className="mb-6 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-4">
  <p className="mb-2 text-sm text-slate-400">Project Preview</p>

  <div className="h-40 w-full overflow-hidden rounded-xl bg-slate-700/50">
    <img
      src={`/${project.image}`}
      alt={project.title}
      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
    />
  </div>
</div>

            {/* HIGHLIGHTS */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                Highlights
              </p>

              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </ul>
            </div>

            {/* ACTION BUTTONS */}
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-400">
                {project.focus}
              </span>

              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-2 text-xs font-bold uppercase tracking-[0.22em] text-white shadow-lg transition hover:scale-105"
                >
                  Live Demo
                </a>
              )}

              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-slate-800 px-4 py-2 text-xs text-white hover:bg-slate-700"
                >
                  GitHub
                </a>
              ) : (
                <a
                  href="https://github.com/ayyanar76"
                  target="_blank"
                  className="rounded-full bg-slate-800 px-4 py-2 text-xs text-white hover:bg-slate-700"
                >
                  Profile
                </a>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    ))}
  </div>
</section>
        <section id="resume" className="space-y-10">
          <Reveal>
            <SectionTitle
              eyebrow="Resume"
              title="A quick-access resume card built into the experience."
              description="This section turns the resume details into a stylish preview surface while still keeping a direct download action available."
            />
          </Reveal>

          <Reveal className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Resume Snapshot</p>
              <h3 className="mt-5 text-3xl font-semibold text-white">{profile.fullName}</h3>
              <p className="mt-2 text-slate-300">{profile.role}</p>
              <div className="mt-8 space-y-4 text-sm text-slate-300">
                <p>{profile.email}</p>
                <p>{profile.phone}</p>
                <p>{profile.location}</p>
              </div>
              <a
                href="/Professional Minimalist CV Resume.pdf"
                download
                className="mt-8 inline-flex rounded-full border border-white/30  px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em]   shadow-[0_16px_40px_rgba(255,255,255,0.14)] transition duration-300 hover:scale-[1.03]  hover:text-black"
              >
                Download Resume
              </a>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
              <div className="rounded-[1.5rem] border border-white/8 bg-white/5 p-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm font-medium text-white">{profile.fullName}</p>
                    <p className="text-sm text-slate-400">{profile.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400/90" />
                    <span className="h-3 w-3 rounded-full bg-amber-300/90" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
                  </div>
                </div>

                <div className="grid gap-6 pt-6 md:grid-cols-[0.8fr_1.2fr]">
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Education</p>
                      <p className="mt-3 font-medium text-white">{profile.education.degree}</p>
                      <p className="mt-1 text-sm text-slate-400">{profile.education.school}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Core Skills</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {['JavaScript', 'React', 'Node.js', 'API', 'Python'].map((item) => (
                          <span
                            key={item}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Experience Highlight</p>
                    <div className="mt-3 rounded-2xl border border-white/8 bg-white/5 p-4">
                      <p className="text-lg font-medium text-white">Ecommerce Website</p>
                      <p className="mt-3 text-sm leading-7 text-slate-300">
                        Full ecommerce website with authentication, authorization, admin
                        workflows, and responsive design.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="services" className="space-y-10">
          <Reveal>
            <SectionTitle
              eyebrow="Services"
              title="Ways I can contribute to modern product experiences."
              description="This optional section turns your focus areas into a clear service offering, which helps the portfolio feel more premium and client-ready."
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service, index) => {
              const iconKey = service.title.replace(/[^A-Za-z]/g, '')

              return (
                <Reveal
                  key={service.title}
                  delay={index * 0.06}
                  className="rounded-[2rem] border border-white/10 bg-white/6 p-7 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-cyan-300/35"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-6 w-6 text-cyan-100"
                      stroke="currentColor"
                      strokeWidth="1.7"
                    >
                      {iconMap[iconKey]}
                    </svg>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{service.description}</p>
                </Reveal>
              )
            })}
          </div>
        </section>

   <section id="contact" className="space-y-10">
  <Reveal>
    <SectionTitle
      eyebrow="Contact"
      title="Let’s turn ideas into polished digital products."
      description="Start a quick conversation directly on WhatsApp with your project details."
    />
  </Reveal>

  <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
    
    {/* LEFT SIDE */}
    <Reveal className="space-y-6 rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-2xl">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Reach Out</p>
        <h3 className="mt-4 text-3xl font-semibold text-white">
          Start a conversation
        </h3>
      </div>

      <div className="space-y-4 text-sm text-slate-300">
        <p>{profile.email}</p>
        <p>{profile.phone}</p>
        <p>{profile.location}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        {socials.map((social) =>
          social.pending ? (
            <span
              key={social.label}
              className="rounded-full border border-dashed border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-500"
            >
              Add {social.label}
            </span>
          ) : (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel={social.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-full border border-white/30  px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] flex items-center justify-center text-cyan-800 shadow  hover:text-cyan-300"
            >
              {social.label}
            </a>
          )
        )}
      </div>
    </Reveal>

    {/* RIGHT SIDE - WHATSAPP CHAT UI */}
    <Reveal
      delay={0.08}
      className="rounded-[2rem] border border-white/10 bg-white/6 p-8 backdrop-blur-2xl"
    >
      <form className="grid gap-5">

        {/* INPUTS */}
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none focus:border-green-400"
        />

        <input
          type="email"
          placeholder="your@email.com"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none focus:border-green-400"
        />

        <textarea
          rows="4"
          placeholder="Type your message..."
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none focus:border-green-400"
        />

        {/* CHAT PREVIEW + BUTTON */}
        <div className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-slate-950/70 p-3">
          
          <p className="text-xs text-slate-400 truncate">
            {form.message || "Type your message..."}
          </p>

          <button
            type="button"
            onClick={sendWhatsApp}
            className="flex items-center gap-2 rounded-xl bg-green-500 px-5 py-2 text-sm font-semibold text-white shadow-lg transition duration-300 hover:scale-105 hover:bg-green-600"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48A11.8 11.8 0 0 0 12.03 0C5.4 0 .01 5.39.01 12c0 2.12.55 4.2 1.6 6.04L0 24l6.18-1.61A11.94 11.94 0 0 0 12.03 24c6.63 0 12.02-5.39 12.02-12 0-3.2-1.25-6.21-3.53-8.52Z" />
            </svg>

            Send
          </button>
        </div>
      </form>
    </Reveal>
  </div>
</section>
      </main>

      <footer className="relative border-t border-white/10 bg-slate-950/60 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© 2026 {profile.fullName}. Crafted with React, Tailwind CSS, and motion.</p>
          <div className="flex flex-wrap gap-4">
            {socials.map((social) =>
              social.pending ? (
                <span key={social.label} className="text-slate-500">
                  Add {social.label}
                </span>
              ) : (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noreferrer' : undefined}
                className="transition duration-300 hover:text-white"
              >
                {social.label}
              </a>
              ),
            )}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
