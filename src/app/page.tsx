import { Home as HeroSection } from '@/components/Home';
import { Section } from '@/components/Section';
import { SocialHeader } from '@/components/SocialHeader';
import { ParticleBackground } from '@/components/ParticleBackground';
import { FadeIn } from '@/components/FadeIn';

export default function Home() {
  return (
    <main className="h-screen w-full snap-y snap-proximity overflow-x-hidden overflow-y-scroll scroll-smooth bg-[var(--background)]">
      <SocialHeader />

      <Section id="home">
        <ParticleBackground />
        <FadeIn>
          <HeroSection />
        </FadeIn>
      </Section>

      <Section
        id="about"
        className="border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 backdrop-blur-sm"
      >
        <div className="grid w-full max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
          {/* Card 1: Background */}
          <FadeIn>
            <div className="flex flex-col gap-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40 p-8 backdrop-blur-sm transition-all hover:border-[var(--accent-core)]/30 hover:bg-[var(--bg-secondary)]/60">
              <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-4">
                <div className="h-2 w-2 rounded-full bg-[var(--accent-core)]"></div>
                <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--text-secondary)] uppercase">
                  My Background
                </h3>
              </div>
              <p className="font-body text-lg leading-relaxed text-[var(--text-secondary)]">
                I love to work where{' '}
                <span className="font-medium text-[var(--text-primary)]">technology</span>,{' '}
                <span className="font-medium text-[var(--text-primary)]">data</span>, and{' '}
                <span className="font-medium text-[var(--text-primary)]">AI</span> come together to
                create practical, high-impact systems. My approach is grounded in understanding what
                truly matters to the business and shaping{' '}
                <span className="font-medium text-[var(--text-primary)]">
                  scalable engineering solutions
                </span>{' '}
                around it. By combining strong data foundations with intelligent, adaptive software,
                I build platforms that enable teams to move faster, make better decisions, and turn
                ambitious ideas into outcomes that last.
              </p>
            </div>
          </FadeIn>

          {/* Card 2: Motivation */}
          <FadeIn delay={200}>
            <div className="flex flex-col gap-6 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40 p-8 backdrop-blur-sm transition-all hover:border-[var(--accent-core)]/30 hover:bg-[var(--bg-secondary)]/60">
              <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-4">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[var(--accent-core)]"></div>
                <h3 className="font-mono text-xs font-bold tracking-[0.2em] text-[var(--text-secondary)] uppercase">
                  Motivation
                </h3>
              </div>
              <div className="flex h-full flex-col justify-between gap-4">
                <p className="font-heading text-2xl leading-tight font-light text-[var(--text-primary)]">
                  From building systems to shaping how and why they get built.
                </p>
                <div className="font-body mt-auto border-l-2 border-[var(--accent-core)] pl-4 text-lg leading-relaxed text-[var(--text-secondary)]">
                  I’m motivated by hard problems that don’t come with clean boundaries. I like
                  staying close to the work, especially where systems need to evolve under real
                  constraints and imperfect information. Over time, my focus has shifted toward
                  building things that continue to behave well as scale, usage, and autonomy
                  increase.
                  <br />
                  <br />
                  <span className="font-bold text-[var(--text-primary)]">
                    Powered by coffee, tech blogging, and dissecting the business models behind
                    successful products.
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section
        id="skills"
        className="border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]"
      >
        <div className="w-full max-w-5xl">
          <FadeIn>
            <div className="mb-12 flex flex-col gap-4">
              <h3 className="font-mono text-sm font-bold tracking-[0.2em] text-[var(--accent-core)] uppercase">
                Skills & Capabilities
              </h3>
              <p className="font-body max-w-xl text-lg text-[var(--text-secondary)]">
                My skills are built for production: separating core, data, system and user
                experience.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Bucket 1: The Brain (Compute & Logic) */}
            <FadeIn delay={100}>
              <div className="group flex flex-col gap-4 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/20 p-6 transition-all hover:border-[var(--accent-core)]/30 hover:bg-[var(--bg-secondary)]/40">
                <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-3">
                  <div className="h-1.5 w-1.5 rounded-sm bg-[var(--text-primary)]"></div>
                  <h4 className="font-mono text-xs font-bold tracking-widest text-[var(--text-primary)] uppercase">
                    Core
                  </h4>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium tracking-wider text-[var(--text-tertiary)] uppercase">
                    Languages & Frameworks
                  </span>
                  <ul className="flex list-disc flex-col gap-2 pl-4 font-mono text-sm text-[var(--text-secondary)] marker:text-[var(--accent-core)]">
                    <li>Python, Go, C++, SQL</li>
                    <li>PyTorch, NumPy, Scipy, Tensorflow, Pandas, Scikit</li>
                    <li>LangChain, Agno</li>
                    <li>OpenAI / Anthropic SDKs / LiteLLM</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Bucket 2: The Memory (Data & State) */}
            <FadeIn delay={200}>
              <div className="group flex flex-col gap-4 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/20 p-6 transition-all hover:border-[var(--accent-core)]/30 hover:bg-[var(--bg-secondary)]/40">
                <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-3">
                  <div className="h-1.5 w-1.5 rounded-sm bg-[var(--text-primary)]"></div>
                  <h4 className="font-mono text-xs font-bold tracking-widest text-[var(--text-primary)] uppercase">
                    Data
                  </h4>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium tracking-wider text-[var(--text-tertiary)] uppercase">
                    Storage & Analytics
                  </span>
                  <ul className="flex list-disc flex-col gap-2 pl-4 font-mono text-sm text-[var(--text-secondary)] marker:text-[var(--accent-core)]">
                    <li>Postgres, Redis, Milvus, Chroma</li>
                    <li>Kestra, Airflow</li>
                    <li>Splunk, Tableau, Looker</li>
                    <li>Plotly, matplotlib, seaborn</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Bucket 3: The Plumbing (Infra & Signal) */}
            <FadeIn delay={300}>
              <div className="group flex flex-col gap-4 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/20 p-6 transition-all hover:border-[var(--accent-core)]/30 hover:bg-[var(--bg-secondary)]/40">
                <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-3">
                  <div className="h-1.5 w-1.5 rounded-sm bg-[var(--text-primary)]"></div>
                  <h4 className="font-mono text-xs font-bold tracking-widest text-[var(--text-primary)] uppercase">
                    System
                  </h4>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium tracking-wider text-[var(--text-tertiary)] uppercase">
                    Infrastructure & Protocols
                  </span>
                  <ul className="flex list-disc flex-col gap-2 pl-4 font-mono text-sm text-[var(--text-secondary)] marker:text-[var(--accent-core)]">
                    <li>AWS, GCP, K8s, GitOps</li>
                    <li>FastAPI, gRPC, NATS, MQTT</li>
                    <li>MCP Servers, A2A</li>
                    <li>Grafana, Langfuse</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Bucket 4: The Interface (Vibe Coding) */}
            <FadeIn delay={400}>
              <div className="group flex flex-col gap-4 rounded-sm border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/20 p-6 transition-all hover:border-[var(--accent-core)]/30 hover:bg-[var(--bg-secondary)]/40">
                <div className="flex items-center gap-3 border-b border-[var(--border-subtle)] pb-3">
                  <div className="h-1.5 w-1.5 rounded-sm bg-[var(--text-primary)]"></div>
                  <h4 className="font-mono text-xs font-bold tracking-widest text-[var(--text-primary)] uppercase">
                    User Experience
                  </h4>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-medium tracking-wider text-[var(--text-tertiary)] uppercase">
                    Frontend & UX (Vibe Coding)
                  </span>
                  <ul className="flex list-disc flex-col gap-2 pl-4 font-mono text-sm text-[var(--text-secondary)] marker:text-[var(--accent-core)]">
                    <li>TypeScript, Next.js, React</li>
                    <li>Tailwind CSS, HTML</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section
        id="experience"
        className="min-h-screen border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 py-24"
      >
        <div className="w-full max-w-4xl">
          <FadeIn>
            <h3 className="mb-12 font-mono text-sm font-bold tracking-[0.2em] text-[var(--accent-core)] uppercase">
              Experience
            </h3>
          </FadeIn>
          <div className="relative ml-3 space-y-16 border-l border-[var(--border-subtle)] md:ml-6">
            {/* Education Marker: B.Tech */}
            <FadeIn delay={100}>
              <div className="relative py-4">
                <div className="absolute top-1/2 -left-[6px] -mt-1.5 h-3 w-3 rotate-45 border border-[var(--border-subtle)] bg-[var(--bg-background)] ring-4 ring-[var(--bg-background)]"></div>
                <div className="flex items-center gap-4 pl-8 opacity-50 transition-opacity hover:opacity-100 md:pl-12">
                  <span className="h-[1px] w-8 bg-[var(--border-subtle)]"></span>
                  <span className="font-mono text-xs tracking-wider text-[var(--text-tertiary)] uppercase">
                    2013-2017 •{' '}
                    <span className="font-bold text-[var(--text-secondary)]">
                      B.Tech in Computer Science, SRM University, India
                    </span>
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Phase 1: Early Innovation */}
            <FadeIn delay={200}>
              <div className="group relative pl-8 opacity-60 transition-opacity hover:opacity-100 md:pl-12">
                {/* Timeline Dot */}
                <div className="absolute top-3 -left-[5px] h-2.5 w-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] ring-4 ring-[var(--bg-background)] transition-all group-hover:border-[var(--accent-core)] group-hover:bg-[var(--accent-core)]"></div>

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
                  <div className="md:w-1/3">
                    <h4 className="font-heading text-2xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-core)]">
                      Early Innovation
                    </h4>
                    <p className="font-mono text-sm text-[var(--text-secondary)]">
                      Mentor & Developer
                    </p>
                    <div className="mt-2 font-mono text-xs text-[var(--text-tertiary)]">
                      2016 — 2018
                    </div>
                  </div>
                  <div className="font-body max-w-lg text-[var(--text-primary)] opacity-90 md:w-2/3">
                    <ul className="list-disc space-y-2 pl-4 text-base leading-relaxed text-[var(--text-secondary)]">
                      <li>
                        <span className="font-bold text-[var(--text-primary)]">
                          The Climber (AI Mentor):
                        </span>{' '}
                        Mentored cohorts of 30+ students, translating complex AI concepts into
                        deployable knowledge.
                      </li>
                      <li>
                        <span className="font-bold text-[var(--text-primary)]">
                          Freelance (Blockchain):
                        </span>{' '}
                        Delivered a functional Ethereum Supply Chain prototype, integrating React
                        with Solidity smart contracts.
                      </li>
                      <li>
                        <span className="font-bold text-[var(--text-primary)]">
                          TCS (Developer):
                        </span>{' '}
                        Engineered an AIML-based Chatbot for airline support, directly optimizing
                        customer engagement metrics.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Education Marker: Masters */}
            <FadeIn delay={300}>
              <div className="relative py-4">
                <div className="absolute top-1/2 -left-[6px] -mt-1.5 h-3 w-3 rotate-45 border border-[var(--border-subtle)] bg-[var(--bg-background)] ring-4 ring-[var(--bg-background)]"></div>
                <div className="flex items-center gap-4 pl-8 opacity-50 transition-opacity hover:opacity-100 md:pl-12">
                  <span className="h-[1px] w-8 bg-[var(--border-subtle)]"></span>
                  <span className="font-mono text-xs tracking-wider text-[var(--text-tertiary)] uppercase">
                    2018-2020 •{' '}
                    <span className="font-bold text-[var(--text-secondary)]">
                      MS Data Science, IIT Chicago
                    </span>
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Phase 2: Enverus */}
            <FadeIn delay={400}>
              <div className="group relative pl-8 opacity-70 transition-opacity hover:opacity-100 md:pl-12">
                <div className="absolute top-3 -left-[5px] h-2.5 w-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] ring-4 ring-[var(--bg-background)] transition-all group-hover:border-[var(--accent-core)] group-hover:bg-[var(--accent-core)]"></div>

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
                  <div className="md:w-1/3">
                    <h4 className="font-heading text-2xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-core)]">
                      Enverus
                    </h4>
                    <p className="font-mono text-sm text-[var(--text-secondary)]">
                      Data Science Intern
                    </p>
                    <div className="mt-2 font-mono text-xs text-[var(--text-tertiary)]">2019</div>
                  </div>
                  <div className="font-body max-w-lg text-[var(--text-primary)] opacity-90 md:w-2/3">
                    <p className="mb-4 text-base leading-relaxed">
                      Optimized{' '}
                      <span className="font-medium text-[var(--text-primary)]">
                        MarketViews Symbol Search
                      </span>{' '}
                      for over
                      <span className="font-medium text-[var(--text-primary)]">
                        {' '}
                        80 million assets
                      </span>
                      , implementing NLP to significantly improve result relevance.
                    </p>
                    <ul className="list-disc space-y-2 pl-4 text-base leading-relaxed text-[var(--text-secondary)]">
                      <li>
                        Designed high-performance SQL Server procedures to handle massive-scale data
                        retrieval.
                      </li>
                      <li>
                        Built custom Dash analytics to visualize search performance, enabling
                        data-driven A/B testing.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Phase 3: SpanIdea */}
            <FadeIn delay={200}>
              <div className="group relative pl-8 opacity-80 transition-opacity hover:opacity-100 md:pl-12">
                <div className="absolute top-3 -left-[5px] h-2.5 w-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] ring-4 ring-[var(--bg-background)] transition-all group-hover:border-[var(--accent-core)] group-hover:bg-[var(--accent-core)]"></div>

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
                  <div className="md:w-1/3">
                    <h4 className="font-heading text-2xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-core)]">
                      SpanIdea Systems
                    </h4>
                    <p className="font-mono text-sm text-[var(--text-secondary)]">Data Scientist</p>
                    <div className="mt-2 font-mono text-xs text-[var(--text-tertiary)]">
                      Jun 2020 — Mar 2021
                    </div>
                  </div>
                  <div className="font-body max-w-lg text-[var(--text-primary)] opacity-90 md:w-2/3">
                    <ul className="list-disc space-y-2 pl-4 text-base leading-relaxed text-[var(--text-secondary)]">
                      <li>
                        Optimized search ranking algorithms through advanced metric analysis and NLP
                        integration.
                      </li>
                      <li>
                        Developed predictive models and analytics pipelines that directly informed
                        critical product roadmap decisions.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Phase 4: View Inc (DE) */}
            <FadeIn delay={200}>
              <div className="group relative pl-8 opacity-90 transition-opacity hover:opacity-100 md:pl-12">
                <div className="absolute top-3 -left-[5px] h-2.5 w-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] ring-4 ring-[var(--bg-background)] transition-all group-hover:border-[var(--accent-core)] group-hover:bg-[var(--accent-core)]"></div>

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
                  <div className="md:w-1/3">
                    <h4 className="font-heading text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-core)]">
                      View, Inc.
                    </h4>
                    <p className="font-mono text-sm text-[var(--text-secondary)]">Data Engineer</p>
                    <div className="mt-2 font-mono text-xs text-[var(--text-tertiary)]">
                      Mar 2021 — Nov 2021
                    </div>
                  </div>
                  <div className="font-body max-w-lg text-[var(--text-primary)] opacity-90 md:w-2/3">
                    <ul className="list-disc space-y-2 pl-4 text-base leading-relaxed text-[var(--text-secondary)]">
                      <li>
                        Played a pivotal role in assessing senior leadership strategies through the
                        presentation of crucial metrics, unveiling operational inefficiencies
                        through data-driven insights.
                      </li>
                      <li>
                        Engineered robust and scalable solutions utilizing Python and Splunk,
                        establishing an automated system for monitoring and evaluating IoT device
                        data.
                      </li>
                      <li>
                        Revamped the building commissioning process by introducing an innovative
                        approach, leading to a notable 20% enhancement in deployment efficiency.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Phase 5: View Inc (DE II) */}
            <FadeIn delay={200}>
              <div className="group relative pl-8 opacity-90 transition-opacity hover:opacity-100 md:pl-12">
                <div className="absolute top-3 -left-[5px] h-2.5 w-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] ring-4 ring-[var(--bg-background)] transition-all group-hover:border-[var(--accent-core)] group-hover:bg-[var(--accent-core)]"></div>

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
                  <div className="md:w-1/3">
                    <h4 className="font-heading text-xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-core)]">
                      View, Inc.
                    </h4>
                    <p className="font-mono text-sm text-[var(--text-secondary)]">
                      Data Engineer II
                    </p>
                    <div className="mt-2 font-mono text-xs text-[var(--text-tertiary)]">
                      Nov 2021 — Sep 2023
                    </div>
                  </div>
                  <div className="font-body max-w-lg text-[var(--text-primary)] opacity-90 md:w-2/3">
                    <ul className="list-disc space-y-2 pl-4 text-base leading-relaxed text-[var(--text-secondary)]">
                      <li>
                        Built production microservices in Go for an edge IoT platform, enabling
                        reliable ingestion and processing of device telemetry at scale.
                      </li>
                      <li>
                        Developed a root-cause analysis service using device metadata and IoT
                        telemetry, applying statistical analysis to generate health metrics and
                        surface failure patterns.
                      </li>
                      <li>
                        Implemented low-latency data pipelines using MongoDB, MQTT, and Protocol
                        Buffers, supporting observability, alerting, and production reliability
                        across distributed systems.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Phase 6: View Inc (Senior AI) */}
            <FadeIn delay={200}>
              <div className="group relative pl-8 transition-opacity hover:opacity-100 md:pl-12">
                <div className="absolute top-3 -left-[5px] h-2.5 w-2.5 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] ring-4 ring-[var(--bg-background)] transition-all group-hover:border-[var(--accent-core)] group-hover:bg-[var(--accent-core)]"></div>

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
                  <div className="md:w-1/3">
                    <h4 className="font-heading text-2xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-core)]">
                      View, Inc.
                    </h4>
                    <p className="font-mono text-sm text-[var(--text-secondary)]">
                      Sr. AI Engineer
                    </p>
                    <div className="mt-2 font-mono text-xs text-[var(--text-tertiary)]">
                      Oct 2023 — Oct 2024
                    </div>
                  </div>
                  <div className="font-body max-w-lg text-[var(--text-primary)] opacity-90 md:w-2/3">
                    <ul className="list-disc space-y-2 pl-4 text-base leading-relaxed text-[var(--text-secondary)]">
                      <li>
                        Designed and implemented an LLM-based agent (LangChain, Agno) that reduced
                        internal onboarding and IoT device troubleshooting time by 15% by automating
                        guided resolution workflows.
                      </li>
                      <li>
                        Integrated agentic capabilities into an existing production product to
                        deliver on-demand tenant intelligence from Operational Technology (OT) data,
                        supporting existing customers without disrupting existing systems.
                      </li>
                      <li>
                        Built tenant-level insights by combining occupancy, leasing, and financial
                        signals, enabling faster and more informed decision-making beyond static
                        regional or industry-based reporting.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Phase 7: Neeve */}
            <FadeIn delay={200}>
              <div className="group relative pl-8 md:pl-12">
                <div className="absolute top-3 -left-[5px] h-2.5 w-2.5 animate-pulse rounded-full border border-[var(--border-subtle)] bg-[var(--bg-primary)] ring-4 ring-[var(--bg-background)] transition-all group-hover:border-[var(--accent-core)] group-hover:bg-[var(--accent-core)]"></div>

                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
                  <div className="md:w-1/3">
                    <h4 className="font-heading text-2xl font-bold text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-core)]">
                      Neeve
                    </h4>
                    <p className="font-mono text-sm text-[var(--text-secondary)]">AI Lead</p>
                    <div className="mt-2 font-mono text-xs text-[var(--text-tertiary)]">
                      Oct 2024 — Present
                    </div>
                  </div>
                  <div className="font-body max-w-lg text-[var(--text-primary)] opacity-90 md:w-2/3">
                    <p className="mb-4 text-base leading-relaxed">
                      Leading the AI product strategy for{' '}
                      <span className="font-medium text-[var(--text-primary)]">Robin</span>, the
                      industry’s first agentic AI for building operations.
                    </p>
                    <ul className="list-disc space-y-2 pl-4 text-base leading-relaxed text-[var(--text-secondary)]">
                      <li>
                        Owned AI product strategy and architecture for Robin, translating ambiguous
                        customer and market needs into production-grade LLM systems through direct
                        engagement with customers and domain SMEs.
                      </li>
                      <li>
                        Led end-to-end delivery and cross-functional execution, aligning
                        engineering, product, sales, and senior leadership (SLT) to ship
                        production-ready agentic workflows with automated end-to-end evaluation,
                        safety guardrails, and measurable real-world performance.
                      </li>
                      <li>
                        Scaled teams and execution in a high-velocity startup environment, managing
                        and mentoring engineers, setting technical standards, and establishing
                        continuous feedback loops that enabled rapid iteration and strategic pivots
                        without disrupting development cycles or platform stability.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      <Section
        id="projects"
        className="border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]"
      >
        <div className="flex w-full flex-col items-center justify-center py-24 text-center">
          <FadeIn>
            <h3 className="mb-8 font-mono text-sm font-bold tracking-[0.2em] text-[var(--accent-core)] uppercase">
              Projects
            </h3>
            <div className="flex flex-col items-center gap-6 rounded-sm border border-dashed border-[var(--border-subtle)] bg-[var(--bg-secondary)]/30 p-12 backdrop-blur-sm">
              <div className="flex items-center gap-2 rounded-full bg-[var(--accent-core)]/10 px-3 py-1 text-[var(--accent-core)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent-core)] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--accent-core)]"></span>
                </span>
                <span className="font-mono text-xs font-bold tracking-widest uppercase">
                  Classified
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-heading text-xl font-light text-[var(--text-secondary)]">
                  Project Archives Encrypted
                </p>
                <p className="font-mono text-xs tracking-widest text-[var(--text-tertiary)] uppercase">
                  Awaiting Clearance Level 5...
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </main>
  );
}
