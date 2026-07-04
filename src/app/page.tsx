export default function Home() {
  const age = Math.floor(
    (Date.now() - new Date("2004-04-01").getTime()) / 31557600000
  );

  return (
    <main className="min-h-screen bg-void-950 text-zinc-400 font-mono lowercase-all selection:bg-zinc-400 selection:text-void-950">
      {/* ═══ nav ═══ */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-void-950/95 border-b border-zinc-800/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <span className="text-zinc-500 text-[10px] sm:text-xs tracking-widest">
            cl@google:~$
          </span>
          <div className="flex gap-2 sm:gap-6 text-[10px] sm:text-xs">
            {["about", "projects", "likes", "contact"].map((s) => (
              <a
                key={s}
                href={`#${s}`}
                className="text-zinc-600 brutal-hover px-1.5 sm:px-2 py-1 border border-transparent hover:border-zinc-200"
              >
                /{s}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ═══ hero ═══ */}
      <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 max-w-5xl mx-auto pt-16">
        <div className="space-y-5 sm:space-y-6">
          <p className="text-zinc-700 text-xs tracking-[0.3em]">
            // initializing profile...
          </p>

          <h1 className="text-4xl sm:text-7xl md:text-8xl font-bold text-zinc-200 leading-none tracking-tighter">
            <span className="glitch" data-text="charles">
              charles
            </span>
            <br />
            <span className="glitch" data-text="lovelace">
              lovelace
            </span>
            <span className="animate-blink text-zinc-600 ml-1">█</span>
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs">
            <span className="text-zinc-300 border border-zinc-700 px-3 py-1 inline-block w-fit">
              sr. software engineer
            </span>
            <span className="text-zinc-600">go @ google</span>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <span className="text-zinc-600">he/him</span>
            <span className="text-zinc-700 hidden sm:inline">|</span>
            <span className="text-zinc-700">{age} yrs</span>
          </div>

          <p className="text-zinc-600 text-xs max-w-md leading-relaxed">
            scaling distributed systems. less abstraction, more concurrency.
            <br />
            currently keeping things alive at google cloud.
          </p>

          <div className="flex gap-3 pt-4">
            <a
              href="#about"
              className="brutal-hover text-xs border border-zinc-700 text-zinc-400 px-4 sm:px-5 py-2.5 sm:py-2 active:scale-95"
            >
              cat ./about.md
            </a>
            <a
              href="#projects"
              className="brutal-hover text-xs border border-zinc-700 text-zinc-400 px-4 sm:px-5 py-2.5 sm:py-2 active:scale-95"
            >
              ls ./projects/
            </a>
          </div>
        </div>

        <div className="mt-12 sm:mt-20 text-zinc-800 text-[10px] leading-relaxed hidden sm:block">
          <pre className="overflow-hidden">{`
  ╔══════════════════════════════════════════════╗
  ║  system:   arch linux 6.7.4                  ║
  ║  shell:    zsh 5.9                           ║
  ║  editor:   neovim 0.10                       ║
  ║  lang:     go 1.22 | rust (learning)         ║
  ║  uptime:   ${age} years                           ║
  ╚══════════════════════════════════════════════╝
          `}</pre>
        </div>
        <div className="mt-12 text-zinc-800 text-[10px] leading-relaxed sm:hidden">
          <div className="space-y-0.5">
            <p>sys: arch linux 6.7.4</p>
            <p>shell: zsh 5.9</p>
            <p>editor: neovim 0.10</p>
            <p>lang: go 1.22 | rust</p>
            <p>uptime: {age} years</p>
          </div>
        </div>
      </section>

      <ChainDivider />

      {/* ═══ about ═══ */}
      <section id="about" className="px-4 sm:px-6 max-w-5xl mx-auto py-16 sm:py-24">
        <SectionHeader label="about" command="cat ~/about.md" />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 mt-8 sm:mt-12">
          <div className="space-y-6">
            <div className="rough-border bg-void-900 p-4 sm:p-6 space-y-4">
              <p className="text-zinc-600 text-[10px] tracking-widest mb-4">
                // trajectory.log
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                sempre fui aquele moleque desmontando computadores e fuçando em
                terminais desde criança. entrei na faculdade de ciência da
                computação sabendo exatamente o que queria: resolver problemas
                complexos sem firula.
              </p>
              <p className="text-zinc-400 text-sm leading-relaxed">
                hoje, escalo sistemas distribuídos na google usando go. menos
                abstração inútil, mais concorrência limpa.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rough-border bg-void-900 p-4 sm:p-6">
              <p className="text-zinc-600 text-[10px] tracking-widest mb-4">
                // stats.json
              </p>
              <div className="space-y-3 text-xs">
                {[
                  { key: "name", val: '"charles lovelace"' },
                  { key: "role", val: '"sr. software engineer"' },
                  { key: "company", val: '"google"' },
                  { key: "language", val: '"go (golang)"' },
                  { key: "born", val: '"2004-04-01"' },
                  { key: "orientation", val: '"heterossexual"' },
                  { key: "pronouns", val: '"he/him"' },
                  { key: "cat", val: '"void (black cat)"' },
                  { key: "status", val: '"compiling..."' },
                ].map(({ key, val }) => (
                  <div key={key} className="flex gap-2">
                    <span className="text-zinc-600">{`"${key}":`}</span>
                    <span className="text-zinc-400">{val},</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ChainDivider />

      {/* ═══ projects ═══ */}
      <section id="projects" className="px-4 sm:px-6 max-w-5xl mx-auto py-16 sm:py-24">
        <SectionHeader label="projects" command="ls -la ~/projects/" />

        <div className="grid md:grid-cols-1 gap-4 sm:gap-6 mt-8 sm:mt-12">
          {[
            {
              title: "GopherScale / Load-Balancer",
              desc: "um balanceador de carga distribuído escrito puramente em go, utilizando channels e goroutines para lidar com milhões de requisições por segundo com latência mínima.",
              tags: ["go", "distributed-systems", "load-balancing", "channels"],
              status: "stable",
            },
            {
              title: "Void.Mutex / Deadlock-Detector",
              desc: "ferramenta de cli que analisa stacks de concorrência em tempo de execução para prever e alertar sobre potenciais deadlocks em ecossistemas de microserviços.",
              tags: ["go", "concurrency", "cli", "debugging"],
              status: "active",
            },
            {
              title: "Null_Stream / gRPC-Orchestrator",
              desc: "orquestrador de serviços baseado em grpc. reduz a sobrecarga de comunicação entre nós na nuvem aplicando compressão agressiva e roteamento otimizado.",
              tags: ["go", "grpc", "microservices", "cloud"],
              status: "beta",
            },
          ].map((proj, i) => (
            <article
              key={i}
              className="card-static rough-border bg-void-900 p-4 sm:p-6 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <span className="text-zinc-700 text-xs">
                      {String(i).padStart(2, "0")}
                    </span>
                    <h3 className="text-zinc-200 text-base sm:text-lg font-bold tracking-tight">
                      {proj.title}
                    </h3>
                    <span
                      className={`text-[10px] px-2 py-0.5 border ${
                        proj.status === "stable"
                          ? "border-zinc-600 text-zinc-500"
                          : proj.status === "active"
                            ? "border-zinc-500 text-zinc-400"
                            : "border-zinc-700 text-zinc-600"
                      }`}
                    >
                      [{proj.status}]
                    </span>
                  </div>

                  <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-zinc-600 border border-zinc-800 px-2 py-0.5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 sm:pt-1">
                  <button className="brutal-hover text-xs border border-zinc-700 text-zinc-500 px-4 py-1.5">
                    view src
                  </button>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-800/50">
                <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] text-zinc-700">
                  <span>lang: go</span>
                  <span className="hidden sm:inline">|</span>
                  <span>license: mit</span>
                  <span className="hidden sm:inline">|</span>
                  <span>
                    last commit: {new Date().toISOString().split("T")[0]}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-zinc-700 text-xs">
            $ find ~/projects -name &quot;*.go&quot; | wc -l
            <br />
            <span className="text-zinc-500">
              {" "}
              → too many to count
            </span>
          </p>
        </div>
      </section>

      <ChainDivider />

      {/* ═══ likes / dislikes ═══ */}
      <section id="likes" className="px-4 sm:px-6 max-w-5xl mx-auto py-16 sm:py-24">
        <SectionHeader label="likes && dislikes" command="cat ~/preferences.yml" />

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8 mt-8 sm:mt-12">
          <div className="rough-border bg-void-900 p-4 sm:p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-zinc-500 text-xs">+</span>
              <h3 className="text-zinc-300 text-sm font-bold">
                things i tolerate
              </h3>
            </div>

            <ul className="space-y-3 text-sm">
              {[
                "go (golang) — the only language that respects my time",
                "rock antigo — nirvana, alice in chains, the good stuff",
                "silêncio absoluto — the ultimate productivity tool",
                "goroutines — concurrency done right",
                "void (meu gato preto) dormindo no teclado — the only acceptable interruption",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-zinc-400">
                  <span className="text-zinc-600 shrink-0">[+]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rough-border bg-void-900 p-4 sm:p-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-zinc-500 text-xs">-</span>
              <h3 className="text-zinc-300 text-sm font-bold">
                things that trigger a segfault
              </h3>
            </div>

            <ul className="space-y-3 text-sm">
              {[
                "café — água gelada ou chá preto, nada mais",
                "reuniões que poderiam ser um email — waste of cpu cycles",
                "código verboso — java feelings, no thanks",
                "pessoas excessivamente animadas de manhã — error: too much energy before noon",
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-zinc-400">
                  <span className="text-zinc-600 shrink-0">[-]</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ChainDivider />

      {/* ═══ contact ═══ */}
      <section id="contact" className="px-4 sm:px-6 max-w-5xl mx-auto py-16 sm:py-24">
        <SectionHeader label="contact" command="cat ~/.ssh/authorized_keys" />

        <div className="rough-border bg-void-900 p-5 sm:p-8 mt-8 sm:mt-12 max-w-2xl">
          <p className="text-zinc-600 text-[10px] tracking-widest mb-6">
            // available channels
          </p>

          <div className="space-y-4 text-sm">
            {[
              { proto: "github", handle: "@charleslovelace", href: "https://github.com/charleslovelace" },
              { proto: "email", handle: "charles@lovelace.dev", href: "mailto:charles@lovelace.dev" },
              { proto: "linkedin", handle: "/in/charleslovelace", href: "#" },
            ].map(({ proto, handle, href }) => (
              <div key={proto} className="flex items-center gap-3 sm:gap-4">
                <span className="text-zinc-700 text-xs w-16 sm:w-20 shrink-0">{proto}:</span>
                <a
                  href={href}
                  className="text-zinc-400 brutal-hover border border-transparent hover:border-zinc-200 px-2 py-0.5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {handle}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-zinc-800/50">
            <p className="text-zinc-700 text-xs">
              $ echo &quot;preferred contact: email or github issues&quot;
              <br />
              <span className="text-zinc-500">
                &gt; don&apos;t dm me on linkedin asking about microservices at 7am.
              </span>
            </p>
          </div>
        </div>
      </section>

      <ChainDivider />

      {/* ═══ footer ═══ */}
      <footer className="px-4 sm:px-6 max-w-5xl mx-auto py-12 pb-24">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-zinc-700">
          <div className="space-y-1">
            <p>
              built with mass and void. next.js + tailwind.
            </p>
            <p>no cookies. no analytics. no javascript frameworks were harmed.</p>
          </div>
          <div className="text-right space-y-1">
            <p>
              &copy; {new Date().getFullYear()} charles lovelace
            </p>
            <p className="text-zinc-800">
              pid: {Math.floor(Math.random() * 65535)} | exit code: 0
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <pre className="text-zinc-800 text-[10px] leading-tight inline-block">
{`
     /\\_/\\
    ( o.o )   < void says: go write some go.
     > ^ <
    /|   |\\
   (_|   |_)
`}
          </pre>
        </div>
      </footer>
    </main>
  );
}

/* ── components ── */

function SectionHeader({
  label,
  command,
}: {
  label: string;
  command: string;
}) {
  return (
    <div className="space-y-2">
      <p className="text-zinc-700 text-[10px] tracking-widest">
        // section:{label}
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-zinc-200 tracking-tight">
        <span className="glitch" data-text={label}>
          {label}
        </span>
        <span className="animate-blink text-zinc-600 ml-1 text-lg">█</span>
      </h2>
      <p className="text-zinc-700 text-xs font-mono">$ {command}</p>
    </div>
  );
}

function ChainDivider() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2 select-none" aria-hidden="true">
      <div className="chain-divider text-[10px] overflow-hidden">
        ||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||===||
      </div>
    </div>
  );
}
