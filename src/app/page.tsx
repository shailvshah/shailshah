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
                Architecting systems where{' '}
                <span className="font-medium text-[var(--text-primary)]">
                  algorithmic intelligence
                </span>{' '}
                meets{' '}
                <span className="font-medium text-[var(--text-primary)]">engineering reality</span>.
                I bridge the gap between theoretical modeling and production—building the data
                backbones and cloud infrastructure needed to make{' '}
                <span className="font-medium text-[var(--text-primary)]">Agentic AI</span> and{' '}
                <span className="font-medium text-[var(--text-primary)]">predictive analytics</span>{' '}
                scalable, resilient, and effective.
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
                  Fueled by the challenge of turning product ambition into engineering reality.
                </p>
                <div className="font-body mt-auto border-l-2 border-[var(--accent-core)] pl-4 text-lg leading-relaxed text-[var(--text-secondary)]">
                  Writing code is satisfying, but solving the business puzzle is what truly drives
                  me. I thrive in{' '}
                  <span className="text-[var(--text-primary)]">dynamic environments</span>
                  , navigating the gap between a &quot;cool demo&quot; and a viable product. I
                  don&apos;t just drive architecture; I deconstruct the strategy to ensure that
                  technical complexity transforms into tangible commercial value.
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
                        Unveiled key operational inefficiencies for senior leadership through
                        automated data-driven insights.
                      </li>
                      <li>
                        Engineered robust Python/Splunk solutions to automate IoT device monitoring,
                        replacing manual reporting.
                      </li>
                      <li>
                        Revamped building commissioning processes, boosting deployment efficiency by{' '}
                        <span className="font-medium text-[var(--text-primary)]">20%</span>.
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
                      Dec 2021 — 2023
                    </div>
                  </div>
                  <div className="font-body max-w-lg text-[var(--text-primary)] opacity-90 md:w-2/3">
                    <ul className="list-disc space-y-2 pl-4 text-base leading-relaxed text-[var(--text-secondary)]">
                      <li>
                        Established a unified data architecture to ensure seamless integration
                        across diverse product lines.
                      </li>
                      <li>
                        Built an innovative resolution system for diagnosing IoT/network
                        malfunctions, leveraging SNMP telemetry and network topology to pinpoint
                        root causes.
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
                      Senior AI Engineer
                    </p>
                    <div className="mt-2 font-mono text-xs text-[var(--text-tertiary)]">
                      2023 — 2024
                    </div>
                  </div>
                  <div className="font-body max-w-lg text-[var(--text-primary)] opacity-90 md:w-2/3">
                    <p className="mb-4 text-base leading-relaxed">
                      Spearheaded the{' '}
                      <span className="font-medium text-[var(--text-primary)]">
                        Tenant Intelligence Platform
                      </span>
                      , fusing Large Language Models (LLM) with Knowledge Graphs to derive
                      actionable insights from OT data.
                    </p>
                    <ul className="list-disc space-y-2 pl-4 text-base leading-relaxed text-[var(--text-secondary)]">
                      <li>
                        Designed a RAG architecture to query unstructured manual data against
                        real-time IoT telemetry.
                      </li>
                      <li>
                        Built the semantic layer connecting discrete building systems (HVAC,
                        Lighting, Access) into a unified Knowledge Graph.
                      </li>
                      <li>
                        Significantly reduced incident response time by providing context-aware AI
                        diagnostics to facility managers.
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
                      2024 — Present
                    </div>
                  </div>
                  <div className="font-body max-w-lg text-[var(--text-primary)] opacity-90 md:w-2/3">
                    <p className="mb-4 text-base leading-relaxed">
                      Architected and shipped{' '}
                      <a
                        href="https://chromewebstore.google.com/detail/robin/aledejppcnonenmfpagnhchclhcaddem"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-[var(--accent-core)] hover:underline"
                      >
                        Robin
                      </a>
                      , an AI co-pilot for property operations. Built the entire solution—from
                      application layer to AI inference—to automate facility management workflows.
                    </p>
                    <ul className="list-disc space-y-2 pl-4 text-base leading-relaxed text-[var(--text-secondary)]">
                      <li>
                        Designed a secure, no-code architecture requiring{' '}
                        <span className="font-medium text-[var(--text-primary)]">
                          zero integration overhead
                        </span>
                        .
                      </li>
                      <li>
                        Engineered production-ready agentic workflows capable of handling complex,
                        real-world operational data.
                      </li>
                      <li>
                        Led the full product lifecycle from concept to production, delivering
                        tangible automation value.
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
