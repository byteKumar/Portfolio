"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import awsLogo from "../../../public/aws.png";

function BulletList({ items }) {
  return (
    <ul className="space-y-2 list-none">
      {items.map((item) => (
        <li key={item} className="flex items-start space-x-2">
          <span className="text-gray-400 dark:text-white/40 mt-1.5 text-xs flex-shrink-0">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

const summaryBullets = [
  "Added a SQL WHERE clause to Redshift SHOW TABLES, SCHEMAS, COLUMNS, and GRANTS so a driver can ask for only the metadata it needs instead of downloading the catalog and throwing rows away.",
  "Reused PostgreSQL's analyzer and executor. SHOW output is not a real table, so I built a synthetic result description, prepared the expression once, and evaluated it per candidate row.",
  "Shipped as 11 reviewable changes. Core grammar and safety first, then grants, local catalog narrowing, datashare, and Glue. Pushdown only reduces work. The full WHERE still decides which rows come back.",
  "Fixed the 100k-row cap so it applies after filtering. On the demo cluster, materialized-view discovery went from 0 rows to 40, and rows fetched dropped from about 2,041 to 40.",
];

function AmazonCard({ onOverview, onJourney }) {
  const buttonClass = "inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs sm:text-sm font-medium";

  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-white/10 space-y-3">
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-[4.2rem] flex-shrink-0 overflow-hidden rounded-md">
          <Image src={awsLogo} alt="AWS" fill className="object-contain" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">
            Software Development Engineer Intern
          </h3>
          <p className="text-gray-500 dark:text-white/50 text-xs sm:text-sm font-normal break-words mb-2">
            Amazon — Redshift RedCat, Catalog & Data Governance | Jun 2026 – Sept 2026
          </p>
        </div>
      </div>
      <BulletList items={summaryBullets} />
      <div className="pt-2 flex flex-wrap gap-2">
        <button onClick={onOverview} className={buttonClass}>
          <span>Overview</span>
        </button>
        <button onClick={onJourney} className={buttonClass}>
          <span>View Journey</span>
        </button>
      </div>
    </div>
  );
}

function BackButton({ onBack }) {
  return (
    <button
      onClick={onBack}
      className="mt-0.5 p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
      aria-label="Back to Experience"
    >
      <svg className="w-5 h-5 text-gray-600 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );
}

function AmazonOverview({ onBack, onJourney }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const steps = [
    { n: "01", title: "Ask", text: "A driver sends SHOW with a WHERE clause instead of downloading the catalog." },
    { n: "02", title: "Resolve", text: "SHOW has no table, so a synthetic result description lets PostgreSQL analyze the predicate." },
    { n: "03", title: "Check", text: "The expression is prepared once. ExecQual keeps or drops each candidate row." },
    { n: "04", title: "Narrow", text: "A source may scan less. The full WHERE still decides which rows come back." },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-3">
        <BackButton onBack={onBack} />
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-white/40 mb-1">
            Amazon · Redshift RedCat · Jun 2026 – Sept 2026
          </p>
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-white leading-tight">
            SHOW could list a schema. It could not answer a smaller question.
          </h3>
        </div>
      </div>

      <div className="space-y-3 text-[15px] sm:text-base leading-7 font-light text-gray-700 dark:text-white/75">
        <p>
          JDBC, ODBC, and the Python driver can ask for only the views, or only the tables. The server command underneath them, <span className="font-normal text-gray-900 dark:text-white">SHOW TABLES</span>, accepted one LIKE pattern on the object name. The driver fetched every relation and threw the rest away. A legacy cap of about 100,000 rows applied before that client filter, so a match past the cap never arrived.
        </p>
        <p>
          I added a <span className="font-normal text-gray-900 dark:text-white">WHERE</span> clause to SHOW TABLES, SCHEMAS, COLUMNS, and GRANTS. The server filters first. The cap then counts matches, not the unfiltered catalog.
        </p>
      </div>

      <ol className="grid gap-3 sm:grid-cols-2">
        {steps.map((step) => (
          <li key={step.n} className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414] p-4">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400 dark:text-white/40">{step.n}</p>
            <p className="mt-1 text-sm font-medium text-gray-900 dark:text-white">{step.title}</p>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/65">{step.text}</p>
          </li>
        ))}
      </ol>

      <p className="text-[15px] sm:text-base leading-7 font-light text-gray-700 dark:text-white/75">
        Each temporary tuple is wiped before the next row, so a large schema does not pile up memory that the client will never see. Supported pushdown is mostly exact names and fixed prefixes. Richer predicates still return the right rows, and they may scan more.
      </p>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-xl border border-gray-200 dark:border-white/10 p-4 sm:p-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400 dark:text-white/40">Large-schema benchmark</p>
          <p className="mt-1 text-3xl font-light text-gray-900 dark:text-white">~21×</p>
          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/65">Exact table lookup, about 2,665 ms to 127 ms, on a schema of about 30,300 tables. A broad filter that still matches most rows was about 1.3×.</p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-white/10 p-4 sm:p-5">
          <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400 dark:text-white/40">The cluster I ran</p>
          <p className="mt-1 text-3xl font-light text-gray-900 dark:text-white">~2.2×</p>
          <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/65">About 2,000 objects. Materialized-view discovery went from 0 rows to 40. Rows fetched dropped from about 2,041 to 40.</p>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 text-sm leading-6 text-gray-600 dark:text-white/70">
        <div className="rounded-xl bg-gray-50 dark:bg-white/[0.04] p-4">
          <p className="font-medium text-gray-900 dark:text-white">Shipped, in review</p>
          <p className="mt-1">Eleven changes: grammar and the safety allowlist, then execution, grants, and safe narrowing for the local catalog, datashare, and Glue.</p>
        </div>
        <div className="rounded-xl bg-gray-50 dark:bg-white/[0.04] p-4">
          <p className="font-medium text-gray-900 dark:text-white">Still outside the product path</p>
          <p className="mt-1">The official JDBC driver does not emit this predicate yet. That was proven with a patched demo driver. Projection stayed a separate feature.</p>
        </div>
      </div>

      <button
        onClick={onJourney}
        className="inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs sm:text-sm font-medium"
      >
        <span>View Journey</span>
      </button>
    </div>
  );
}

const chapters = [
  { id: "question", label: "The question" },
  { id: "contract", label: "The contract" },
  { id: "path", label: "The path" },
  { id: "grants", label: "Grants" },
  { id: "memory", label: "Memory" },
  { id: "narrow", label: "Narrowing" },
  { id: "proof", label: "Proof" },
];

const pathStages = [
  {
    n: "01",
    title: "Parser",
    file: "grammar",
    text: "SHOW productions accept a WHERE clause. The raw tree is stored on the statement. Copy, equality, and the debug printer grow the same field. Nothing runs yet.",
  },
  {
    n: "02",
    title: "Analyze",
    file: "analyzer",
    text: "A synthetic range-table entry is built from that command's result descriptor. Analysis resolves table_type, table_name, and ordinal_position the way SELECT would.",
  },
  {
    n: "03",
    title: "Allowlist",
    file: "safety check",
    text: "A walker keeps the safe subset and rejects the rest with a specific error: unknown column, function call, subquery, aggregate, window. The walker is the compatibility promise.",
  },
  {
    n: "04",
    title: "Collect",
    file: "collectors",
    text: "Each source still produces candidates. The local catalog scans its tables. Glue uses the Glue API. A datashare asks the producer. The filter has to be right for every one of them.",
  },
  {
    n: "05",
    title: "Prepare once",
    file: "prepare once",
    text: "ExecPrepareExpr builds the runtime tree a single time per statement. Parameter bindings attach here. The per-row loop never recompiles the expression.",
  },
  {
    n: "06",
    title: "Qualify, cap, send",
    file: "ExecQual",
    text: "Each candidate becomes a tuple. ExecQual returns true or false. Only matches count toward LIMIT and the row cap. Survivors are sorted by leaf name and emitted.",
  },
];

const changes = [
  { id: "01", title: "Grammar and the safety allowlist", detail: "The clause exists, names resolve, and unsupported shapes die at analysis." },
  { id: "02", title: "Executor on TABLES, SCHEMAS, COLUMNS", detail: "Prepare once, qualify every candidate, then sort and emit." },
  { id: "03", title: "The feature gate", detail: "A switch that can turn the clause off on its own, and a discovery-version bump so a driver can see the server can filter." },
  { id: "04", title: "Non-batch GRANTS", detail: "The command the brief had listed as a follow-up. Streaming, not buffered." },
  { id: "05", title: "Inline filter for buffered callers", detail: "TABLES, SCHEMAS, and COLUMNS keep only matches, then sort." },
  { id: "06 · 10", title: "Local catalog narrowing", detail: "Exact names and fixed-prefix LIKE become index or range bounds." },
  { id: "07 – 09", title: "Datashare", detail: "Safe fields travel with the producer request. The consumer still rechecks the full predicate." },
  { id: "11", title: "Glue name prefixes", detail: "A fixed table-name prefix becomes a safe GetTables pattern. Anything richer stays local." },
];

function Chapter({ id, kicker, title, children }) {
  return (
    <section id={id} className="scroll-mt-32 space-y-4">
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-white/40 mb-1">{kicker}</p>
        <h4 className="text-2xl sm:text-[1.7rem] font-light tracking-tight text-gray-900 dark:text-white">{title}</h4>
      </div>
      <div className="space-y-4 text-[15px] sm:text-base leading-7 font-light text-gray-700 dark:text-white/75">
        {children}
      </div>
    </section>
  );
}

function Diagram({ kicker, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#141414] overflow-hidden">
      {kicker ? (
        <div className="px-4 sm:px-5 py-2.5 border-b border-gray-100 dark:border-white/10 text-[11px] uppercase tracking-[0.16em] text-gray-400 dark:text-white/40">
          {kicker}
        </div>
      ) : null}
      <div className="p-4 sm:p-5">{children}</div>
    </div>
  );
}

function ExecutionWalk() {
  const steps = [
    {
      title: "The statement",
      body: "SHOW TABLES FROM SCHEMA dev.public WHERE table_type = 'VIEW'",
      mono: true,
    },
    {
      title: "Grammar and parse-analyze, already in place",
      body: "The clause becomes a comparison of the table_type column against the constant VIEW.",
    },
    {
      title: "Dispatch",
      body: "A legacy discovery path that still sees WHERE errors, so an old path cannot ignore the predicate. The live path continues.",
    },
    {
      title: "Collect the schema",
      body: "The walkthrough gathers 5,000 candidate rows into a vector. Nothing has been filtered yet.",
    },
    {
      title: "Filter",
      body: "The predicate is built once. Each row becomes a heap tuple, then ExecQual says whether it matches.",
    },
  ];

  return (
    <Diagram kicker="One statement through execution">
      <ol className="relative space-y-4 pl-6">
        <div className="absolute left-[7px] top-1.5 bottom-1.5 w-px bg-gray-200 dark:bg-white/15" />
        {steps.map((step) => (
          <li key={step.title} className="relative">
            <span className="absolute -left-6 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-gray-900 dark:border-white bg-white dark:bg-[#141414]" />
            <p className="text-sm font-medium text-gray-900 dark:text-white">{step.title}</p>
            <p className={`mt-1 text-sm leading-6 text-gray-600 dark:text-white/70 ${step.mono ? "font-mono text-[12.5px] text-gray-900 dark:text-white break-words" : ""}`}>
              {step.body}
            </p>
          </li>
        ))}
      </ol>
      <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-end gap-3">
        <div>
          <div className="h-2 rounded-full bg-gray-900 dark:bg-white" />
          <p className="mt-2 text-xs text-gray-500 dark:text-white/50">5,000 candidates</p>
        </div>
        <p className="pb-5 text-xs tracking-wide text-gray-400 dark:text-white/40">ExecQual</p>
        <div>
          <div className="h-2 rounded-full bg-gray-200 dark:bg-white/10 overflow-hidden">
            <div className="h-full w-[8%] rounded-full bg-gray-900 dark:bg-white" />
          </div>
          <p className="mt-2 text-xs text-gray-500 dark:text-white/50">50 matches</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-600 dark:text-white/65">
        {["The row cap sees the 50", "Sort by name", "Send the result"].map((item) => (
          <span key={item} className="rounded-full border border-gray-200 dark:border-white/15 px-3 py-1">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 text-sm">
        <p className="rounded-xl bg-gray-50 dark:bg-white/[0.04] px-3 py-2.5 text-gray-600 dark:text-white/70">
          <span className="block font-medium text-gray-900 dark:text-white">SHOW SCHEMAS</span>
          Same loop, with the descriptor and tuple builder for that command.
        </p>
        <p className="rounded-xl bg-gray-50 dark:bg-white/[0.04] px-3 py-2.5 text-gray-600 dark:text-white/70">
          <span className="block font-medium text-gray-900 dark:text-white">SHOW COLUMNS</span>
          Same loop, with the descriptor and tuple builder for that command.
        </p>
      </div>
    </Diagram>
  );
}

function GrantsChain() {
  const layers = [
    ["Grants entry", "Creates the predicate. Knows the user asked about grants on one object."],
    ["User and role walk", "Orchestrates the scan: users, then roles. Passes the predicate through."],
    ["One identity", "Has found a permission for someone like alice. Still passes the predicate through."],
    ["Tuple is built", "The row finally exists, so this is where the match runs."],
  ];

  return (
    <Diagram kicker="Where the predicate is born, and where it runs">
      <ol className="space-y-2">
        {layers.map(([name, text], index) => (
          <li key={name} style={{ marginLeft: index * 12 }} className="rounded-xl border border-gray-200 dark:border-white/10 px-3 py-2.5">
            <p className="font-mono text-[13px] text-gray-900 dark:text-white">{name}</p>
            <p className="mt-0.5 text-sm leading-6 text-gray-600 dark:text-white/65">{text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-white/65">
        The role walk is the same shape as the user walk, and it also evaluates only once the tuple exists. privilege_type is filled in at that last step, so the predicate cannot run any earlier.
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-gray-50 dark:bg-white/[0.04] p-3">
          <p className="text-[11px] uppercase tracking-[0.14em] text-gray-400 dark:text-white/40">User statement</p>
          <p className="mt-1 font-mono text-[12px] leading-5 text-gray-900 dark:text-white">SHOW GRANTS ON TABLE t1 WHERE privilege_type = &apos;SELECT&apos;</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-white/65">The statement is streaming. A real predicate is returned, and each row is filtered.</p>
        </div>
        <div className="rounded-xl bg-gray-50 dark:bg-white/[0.04] p-3">
          <p className="text-[11px] uppercase tracking-[0.14em] text-gray-400 dark:text-white/40">Consumer RPC</p>
          <p className="mt-1 font-mono text-[12px] leading-5 text-gray-900 dark:text-white">Producer asked for grants on t1</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-white/65">There is no WHERE clause on this hop. The predicate stays empty, and every row goes back to the consumer, who filters.</p>
        </div>
      </div>
    </Diagram>
  );
}

function GrantOutcomes() {
  const cases = [
    { id: "A", when: "privilege_type = 'SELECT'", result: "The row matches", action: "Send the row", ret: "count it" },
    { id: "B", when: "privilege_type = 'INSERT'", result: "The row misses", action: "Free the tuple", ret: "do not count it" },
    { id: "C", when: "predicate is null", result: "Skip the test", action: "Send the row", ret: "return true" },
  ];
  const layouts = [
    {
      title: "ON TABLE",
      note: "11 columns in the notes",
      cols: ["database", "schema", "object_name", "object_type", "privilege_type", "identity_id", "identity_name", "identity_type", "privilege_scope", "grantor_name"],
    },
    {
      title: "ON DATABASE",
      note: "8 columns, no object name, type, or schema",
      cols: ["database", "privilege_type", "identity_id", "identity_name", "identity_type", "privilege_scope", "grantor_name", "admin_option"],
    },
    {
      title: "COLUMN GRANTS",
      note: "12 columns in the notes, including column_name",
      cols: ["database", "schema", "object_name", "column_name", "privilege_type", "identity_id", "identity_name", "identity_type", "privilege_scope", "grantor_name"],
    },
  ];

  return (
    <Diagram kicker="Three outcomes, three row shapes">
      <div className="grid gap-2 sm:grid-cols-3">
        {cases.map((item) => (
          <div key={item.id} className="rounded-xl border border-gray-200 dark:border-white/10 p-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-gray-400 dark:text-white/40">Case {item.id}</p>
            <p className="mt-1 font-mono text-[12px] text-gray-900 dark:text-white">{item.when}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-white/70">{item.result}</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{item.action}</p>
            <p className="font-mono text-[12px] text-gray-500 dark:text-white/45">{item.ret}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-white/65">
        A finished table-grant tuple looks like [dev, public, t1, TABLE, SELECT, alice, user, …]. The builder answers who has access to this object.
      </p>
      <div className="mt-4 space-y-3">
        {layouts.map((layout) => (
          <div key={layout.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{layout.title}</p>
              <p className="text-xs text-gray-400 dark:text-white/40">{layout.note}</p>
            </div>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {layout.cols.map((col) => (
                <span key={col} className="rounded-md bg-gray-50 dark:bg-white/[0.05] px-2 py-1 font-mono text-[11px] text-gray-700 dark:text-white/75">
                  {col}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Diagram>
  );
}

function TupleChoice() {
  const branches = [
    { test: "the request is for a database", call: "Build a database-grant tuple" },
    { test: "the row names a column", call: "Build a column-grant tuple" },
    { test: "otherwise", call: "Build an object-grant tuple" },
  ];

  return (
    <Diagram kicker="Which builder runs">
      <ol className="space-y-2">
        {branches.map((branch, index) => (
          <li key={branch.call} className="flex flex-col gap-1 rounded-xl border border-gray-200 dark:border-white/10 px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-gray-500 dark:text-white/50">
              <span className="mr-2 font-mono text-xs text-gray-400">{index === 0 ? "if" : index === 1 ? "else if" : "else"}</span>
              {branch.test}
            </p>
            <p className="font-mono text-[12.5px] text-gray-900 dark:text-white">{branch.call}</p>
          </li>
        ))}
      </ol>
      <div className="mt-4 rounded-xl bg-gray-50 dark:bg-white/[0.04] p-3 text-sm leading-6 text-gray-600 dark:text-white/70">
        <p className="font-medium text-gray-900 dark:text-white">SHOW GRANTS FOR a user, role, or PUBLIC</p>
        A different question: what can this identity access? It uses a different input and its own renderer. The output shape stays stable. The input does not, so it cannot share the object-grant builder.
      </div>
    </Diagram>
  );
}

function LimitWalk() {
  const grants = [
    { n: 1, priv: "INSERT", counter: 0 },
    { n: 2, priv: "SELECT", counter: 1, send: true },
    { n: 3, priv: "DELETE", counter: 1 },
    { n: 4, priv: "UPDATE", counter: 1 },
    { n: 5, priv: "SELECT", counter: 2, send: true },
    { n: 6, priv: "INSERT", counter: 2 },
    { n: 7, priv: "SELECT", counter: 3, send: true, stop: true },
  ];

  return (
    <Diagram kicker="LIMIT 3, fifty grants on the table">
      <p className="text-sm text-gray-600 dark:text-white/65">
        The counter counts SELECT matches. It is checked at the top of the loop, before the next tuple is built.
      </p>
      <ol className="mt-3 space-y-1.5">
        {grants.map((grant) => (
          <li key={grant.n} className="grid grid-cols-[2rem_5rem_1fr_auto] items-center gap-2 text-sm">
            <span className="font-mono text-xs text-gray-400">{grant.n}</span>
            <span className={`font-mono text-[12px] ${grant.send ? "text-gray-900 dark:text-white" : "text-gray-400 dark:text-white/40"}`}>{grant.priv}</span>
            <span className="h-1.5 rounded-full bg-gray-100 dark:bg-white/10 overflow-hidden">
              <span className="block h-full rounded-full bg-gray-900 dark:bg-white" style={{ width: `${(grant.counter / 3) * 100}%` }} />
            </span>
            <span className="font-mono text-[12px] text-gray-500 dark:text-white/50 tabular-nums">{grant.counter}/3{grant.stop ? "  stop" : ""}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-sm text-gray-500 dark:text-white/50">Grants 8 through 50 are never built.</p>
    </Diagram>
  );
}

function GrantStatement() {
  const stages = [
    { n: "1", where: "grammar", text: "The grants statement holds the raw where clause and limitCount = 5." },
    { n: "2", where: "analyzer", text: "An 11-column descriptor. privilege_type = 'SELECT' becomes a comparison against the privilege column." },
    { n: "3", where: "grants execution", text: "The feature gate is checked, the predicate is prepared once, and each permission is built, matched, sent and counted, or freed." },
    { n: "4", where: "client", text: "The caller receives the filtered rows, already capped by LIMIT." },
  ];

  return (
    <Diagram kicker="SHOW GRANTS ON TABLE t1 WHERE privilege_type = 'SELECT' LIMIT 5">
      <ol className="grid gap-2 sm:grid-cols-2">
        {stages.map((stage) => (
          <li key={stage.n} className="rounded-xl border border-gray-200 dark:border-white/10 p-3">
            <p className="text-[11px] uppercase tracking-[0.14em] text-gray-400 dark:text-white/40">{stage.n} · {stage.where}</p>
            <p className="mt-1 text-sm leading-6 text-gray-700 dark:text-white/75">{stage.text}</p>
          </li>
        ))}
      </ol>
    </Diagram>
  );
}

function MemoryStory() {
  const beats = [
    "Create the tuple in the scratch context.",
    "The match starts and empties the expression context. The tuple is not in that context.",
    "The match reads the tuple from the scratch context. It is still alive.",
    "The match returns true or false.",
    "The caller empties the scratch context. The tuple is freed.",
  ];
  const calls = [
    { n: "1", when: "Before the loop", call: "MemoryContextSwitchTo(scratch)", line: "Allocations now land on the disposable page." },
    { n: "2", when: "Each iteration", call: "MemoryContextReset(scratch)", line: "Tuple and strings go back to zero bytes." },
    { n: "3", when: "After the loop", call: "MemoryContextSwitchTo(caller)", line: "Later work in the session returns to the caller context." },
  ];
  const allocs = [
    ["CStringGetTextDatum(\"dev\")", "palloc 1"],
    ["CStringGetTextDatum(\"public\")", "palloc 2"],
    ["CStringGetTextDatum(\"my_table\")", "palloc 3"],
    ["CStringGetTextDatum(\"VIEW\")", "palloc 4"],
    ["heap_formtuple(...)", "palloc 5"],
  ];

  return (
    <div className="space-y-3">
      <Diagram kicker="Two contexts, one iteration">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-gray-50 dark:bg-white/[0.04] p-3">
            <p className="font-mono text-[13px] text-gray-900 dark:text-white">scratch context</p>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/65">Where the tuple lives. Emptied after the match returns.</p>
          </div>
          <div className="rounded-xl bg-gray-50 dark:bg-white/[0.04] p-3">
            <p className="font-mono text-[13px] text-gray-900 dark:text-white">expression context</p>
            <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/65">Where ExecQual’s temporaries live. Emptied inside the match, before the tuple is read.</p>
          </div>
        </div>
        <ol className="mt-4 space-y-2">
          {beats.map((beat, index) => (
            <li key={beat} className="flex gap-3 text-sm leading-6 text-gray-700 dark:text-white/75">
              <span className="font-mono text-xs text-gray-400 pt-1">{index + 1}</span>
              <span>{beat}</span>
            </li>
          ))}
        </ol>
      </Diagram>
      <Diagram kicker="20,000 rows, with and without a reset">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Left until the statement ends</p>
            <div className="mt-3 h-16 rounded-lg bg-gray-100 dark:bg-white/10 p-1 flex items-end">
              <div className="h-full w-full rounded-md bg-gray-900 dark:bg-white/80" />
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-white/65">About 300 bytes times 20,000 rows. Roughly 6 MB sits there until SHOW finishes.</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">Wiped every row</p>
            <div className="mt-3 h-16 rounded-lg bg-gray-100 dark:bg-white/10 p-1 flex items-end">
              <div className="h-2 w-8 rounded-sm bg-gray-900 dark:bg-white" />
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-white/65">Peak stays one tuple, about 300 bytes. The other rows never accumulate.</p>
          </div>
        </div>
      </Diagram>
      <Diagram kicker="The three calls">
        <ol className="grid gap-2">
          {calls.map((call) => (
            <li key={call.n} className="rounded-xl border border-gray-200 dark:border-white/10 p-3">
              <p className="text-[11px] uppercase tracking-[0.14em] text-gray-400 dark:text-white/40">{call.n} · {call.when}</p>
              <p className="mt-1 font-mono text-[12.5px] text-gray-900 dark:text-white break-words">{call.call}</p>
              <p className="mt-1 text-sm text-gray-600 dark:text-white/65">{call.line}</p>
            </li>
          ))}
        </ol>
      </Diagram>
      <Diagram kicker="Why one reset, instead of five frees">
        <ul className="space-y-1.5">
          {allocs.map(([call, slot]) => (
            <li key={slot} className="flex items-center justify-between gap-3 text-sm">
              <span className="font-mono text-[12px] text-gray-800 dark:text-white/80 break-all">{call}</span>
              <span className="shrink-0 text-xs text-gray-400 dark:text-white/40">{slot}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-white/65">
          Some of those helpers never hand back a pointer the caller can pfree. MemoryContextReset frees the whole page in one call.
        </p>
      </Diagram>
    </div>
  );
}

function ClusterTraces() {
  const traces = [
    { sql: "SHOW TABLES FROM SCHEMA dev.public WHERE table_type = 'TABLE'", scan: "full_scan", flow: "10 scanned → 10 kept", note: "Every object in that schema was a table, so the filter keeps the whole scan." },
    { sql: "SHOW SCHEMAS FROM DATABASE dev WHERE schema_name = 'public'", scan: "equality_pushdown", flow: "1 scanned → 1 kept", note: "The exact schema name is the lookup key." },
    { sql: "SHOW COLUMNS FROM TABLE dev.public.perf_test_1 WHERE column_name = 'id'", scan: "equality_pushdown", flow: "1 scanned → 1 kept", note: "Same pattern, on a column name." },
    { sql: "WHERE table_name = 'perf_test_5' AND table_type = 'VIEW'", scan: "equality_pushdown", flow: "1 scanned → 0 kept", note: "The name hint returns the table. The predicate sees it is not a view and drops it." },
    { sql: "After CREATE VIEW test_view, WHERE table_type = 'VIEW'", scan: "full_scan", flow: "11 scanned → 1 kept", note: "Type still cannot narrow the catalog. The filter keeps the one view." },
    { sql: "WHERE table_name = 'test_view'", scan: "equality_pushdown", flow: "1 scanned → 1 kept", note: "The same view, found by name." },
  ];

  return (
    <Diagram kicker="What the cluster log was showing">
      <ul className="space-y-2">
        {traces.map((trace) => (
          <li key={trace.sql} className="rounded-xl border border-gray-200 dark:border-white/10 p-3">
            <p className="font-mono text-[12px] sm:text-[13px] leading-5 text-gray-900 dark:text-white break-words">{trace.sql}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-gray-900 px-2.5 py-0.5 font-mono text-[11px] text-white dark:bg-white dark:text-gray-900">{trace.scan}</span>
              <span className="text-xs text-gray-500 dark:text-white/50">{trace.flow}</span>
            </div>
            <p className="mt-1.5 text-sm leading-6 text-gray-600 dark:text-white/65">{trace.note}</p>
          </li>
        ))}
      </ul>
    </Diagram>
  );
}

function OperatorTable() {
  const rows = [
    ["=", "WHERE table_type = 'VIEW'"],
    ["<>", "WHERE table_name <> 'w6_t1'"],
    ["LIKE", "WHERE table_name LIKE 'w6_%'"],
    ["NOT LIKE", "WHERE table_name NOT LIKE 'w6_v%'"],
    ["ILIKE", "WHERE table_name ILIKE 'W6_T%'"],
    ["IN", "WHERE table_type IN ('VIEW', 'TABLE')"],
    ["IS NULL", "WHERE remarks IS NULL"],
    ["IS NOT NULL", "WHERE remarks IS NOT NULL"],
    ["AND", "WHERE table_type = 'VIEW' AND table_name LIKE 'w6_v%'"],
    ["OR", "WHERE table_name = 'w6_t1' OR table_name = 'w6_v1'"],
    ["NOT", "WHERE NOT table_type = 'VIEW'"],
    ["Nested", "WHERE (table_type = 'VIEW' OR table_type = 'TABLE') AND table_name LIKE 'w6_%'"],
    ["LIMIT", "WHERE table_name LIKE 'w6_%' LIMIT 2"],
    ["Cast", "WHERE table_name = 42"],
  ];
  const tests = [
    ["Validation", "Parse-analyze accepts the valid shapes and rejects the rest."],
    ["Filtering", "End to end: equality, IN, LIKE, ILIKE, AND, OR, IS NULL, NOT LIKE, LIMIT."],
    ["Unknown column", "An unknown column produces an error."],
  ];

  return (
    <div className="space-y-3">
      <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 dark:bg-white/[0.04] text-[11px] uppercase tracking-[0.14em] text-gray-400 dark:text-white/40">
            <tr>
              <th className="px-3 py-2 font-medium w-28">Operator</th>
              <th className="px-3 py-2 font-medium">Example</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(([op, example]) => (
              <tr key={op} className="border-t border-gray-100 dark:border-white/10">
                <td className="px-3 py-2 font-mono text-[12px] text-gray-900 dark:text-white whitespace-nowrap">{op}</td>
                <td className="px-3 py-2 font-mono text-[12px] text-gray-600 dark:text-white/70">{example}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="grid gap-2">
        {tests.map(([name, purpose]) => (
          <div key={name} className="rounded-xl border border-gray-200 dark:border-white/10 px-3 py-2.5">
            <p className="font-mono text-[12.5px] text-gray-900 dark:text-white">{name}</p>
            <p className="text-sm text-gray-600 dark:text-white/65">{purpose}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function EdgeTable() {
  const rows = [
    ["Empty candidate set", "An empty list returns before any executor state is built", "Tested"],
    ["No matches", "Zero rows, and that is success", "Tested"],
    ["Empty string", "table_name = '' evaluates and returns empty", "Tested"],
    ["NULL", "A comparison with NULL is unknown. IS NULL is the predicate that matches.", "Tested"],
    ["Implicit cast", "table_name = 42 is accepted because PostgreSQL inserts the cast", "Tested"],
    ["Unknown column", "Rejected at parse-analyze: column does not exist", "Tested"],
    ["Subquery or aggregate", "Rejected by the subset check", "Tested"],
    ["Legacy LIKE plus WHERE", "Rejected in the grammar", "Tested"],
    ["GUC off", "Rejected before execution", "Tested"],
    ["Dropped owner", "The scan returns rows and does not crash", "Tested"],
    ["Case", "= is case-sensitive. ILIKE is not.", "Tested"],
    ["Cross-database and external schema", "The same filter runs on the rows that come back", "Tested"],
    ["Prepared statement", "Param nodes pass validation and bind at EXECUTE", "Tested"],
    ["WHERE on the legacy path", "The legacy path errors instead of ignoring the clause", "Tested"],
    ["No WHERE", "A statement with no WHERE clause does nothing extra", "Covered by existing SHOW tests"],
    ["Runtime fault", "PG_TRY / PG_CATCH clears executor state and rethrows", "By structure"],
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10">
      <table className="w-full min-w-[520px] text-left text-sm">
        <thead className="bg-gray-50 dark:bg-white/[0.04] text-[11px] uppercase tracking-[0.14em] text-gray-400 dark:text-white/40">
          <tr>
            <th className="px-3 py-2 font-medium">Edge</th>
            <th className="px-3 py-2 font-medium">What happens</th>
            <th className="px-3 py-2 font-medium">Evidence</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([edge, what, evidence]) => (
            <tr key={edge} className="border-t border-gray-100 dark:border-white/10 align-top">
              <td className="px-3 py-2 text-gray-900 dark:text-white whitespace-nowrap">{edge}</td>
              <td className="px-3 py-2 text-gray-600 dark:text-white/70">{what}</td>
              <td className="px-3 py-2 text-gray-500 dark:text-white/50 whitespace-nowrap">{evidence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ children }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] px-4 py-3.5 text-sm sm:text-[15px] leading-7 text-gray-800 dark:text-white/85">
      {children}
    </div>
  );
}

function CodeBlock({ label, children }) {
  return (
    <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-[#161616]">
      {label ? (
        <div className="px-4 py-2 text-[11px] tracking-[0.14em] uppercase text-white/40 border-b border-white/10">
          {label}
        </div>
      ) : null}
      <pre className="px-4 py-3 overflow-x-auto text-[12px] sm:text-[13px] leading-6 text-[#e8e8e8] font-mono">{children}</pre>
    </div>
  );
}

function AmazonJourney({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="space-y-10 sm:space-y-14">
      <div className="flex items-start gap-3">
        <button
          onClick={onBack}
          className="mt-0.5 p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg transition-colors"
          aria-label="Back to Experience"
        >
          <svg className="w-5 h-5 text-gray-600 dark:text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-white/40 mb-1">
            Amazon · Redshift RedCat · Jun 2026 – Sept 2026
          </p>
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-white leading-tight">
            Teaching a catalog command to answer a smaller question
          </h3>
          <p className="mt-2 text-sm sm:text-base font-light text-gray-500 dark:text-white/50 max-w-2xl">
            SHOW WHERE, from the SQL a driver sends to the predicate that keeps or drops each row.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {chapters.map((chapter, index) => (
          <button
            key={chapter.id}
            type="button"
            onClick={() => jump(chapter.id)}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/15 px-3 py-1.5 text-xs sm:text-sm text-gray-600 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
          >
            <span className="text-gray-400 dark:text-white/35 tabular-nums">{String(index + 1).padStart(2, "0")}</span>
            {chapter.label}
          </button>
        ))}
      </div>

      <Chapter id="question" kicker="01 — The question" title="A driver asks for the views. The server sends the whole schema.">
        <p>
          Start with a JDBC caller. <span className="font-normal text-gray-900 dark:text-white">getTables(catalog, schema, table, types[])</span> is allowed to pass <span className="font-normal text-gray-900 dark:text-white">VIEW</span>, or <span className="font-normal text-gray-900 dark:text-white">TABLE</span> and <span className="font-normal text-gray-900 dark:text-white">VIEW</span>, and it should receive only those objects. ODBC and the Python driver have the same shape. The server command underneath them, <span className="font-normal text-gray-900 dark:text-white">SHOW TABLES</span>, could not say that.
        </p>
        <p>
          SHOW TABLES, SHOW COLUMNS, and SHOW SCHEMAS accepted one trailing LIKE pattern, and that pattern applied to the leaf object name. A client that wanted views, a mix of types, a case-insensitive match, or a compound condition such as table type plus a name prefix had no server syntax for it. The driver issued something like <span className="font-normal text-gray-900 dark:text-white">SHOW TABLES FROM SCHEMA dev.public LIKE &apos;%&apos;</span>, received every relation, and discarded the unwanted rows in driver code.
        </p>
        <p>
          SHOW TABLES returns regular tables, views, materialized views, late-binding views, external tables, shared tables, federated tables, and more. Every new subtype made fetch-and-discard worse. The Metadata API follow-up said it directly: the table-type filter lived in the driver. The driver got the full SHOW result and filtered table type locally, and it did not support filtering on subtype.
        </p>
        <Callout>
          There is a correctness hole inside that cost story. SHOW had a legacy row cap, on the order of 100,000 rows. The old order was collect a broad result, apply the cap, return that slice, then let the client filter. A matching row past the cap never reached the client, so the client could not recover it. Filtering on the server first means the cap counts only rows that already match.
        </Callout>
        <p>
          Four pressures sat on that gap, and they all wanted the same clause. Driver compliance was the primary one: getTables-style type filters had to become a server predicate. ODBC <span className="font-normal text-gray-900 dark:text-white">SQL_ATTR_METADATA_ID</span> folds identifier arguments to uppercase and matches them case-insensitively. SHOW LIKE was case-sensitive only. There was no ILIKE, and a general WHERE absorbs ILIKE without another one-off keyword. Customers already had this kind of predicate on SVV, including <span className="font-normal text-gray-900 dark:text-white">svv_all_tables WHERE database_name IN (...)</span>. The SVV version of that gap had a separate fix in flight. If SHOW is supposed to become the recommended discovery path, it needs the same kind of predicate, on one result shape rather than an N-leg UNION ALL.
        </p>
        <p>
          The grammar was also growing one keyword at a time. Each new filter meant another optional clause in the grammar, plus another branch in the discovery code. A general WHERE collapses those into one path. Later filters, including owner or last-altered time, become a column on the result, which is a descriptor change, and the grammar stays still.
        </p>
        <p>
          The discovery plan already called SHOW WHERE and projection a funded item for the second half of 2026. I was the intern on Redshift RedCat, Catalog & Data Governance, from June 2026 to September 2026. Projection stayed a separate work item. WHERE is the half I built.
        </p>
      </Chapter>

      <Chapter id="contract" kicker="02 — The contract" title="What I agreed to finish before the grammar moved">
        <p>
          The two-month must-finish list was a WHERE clause on three commands: <span className="font-normal text-gray-900 dark:text-white">SHOW TABLES FROM SCHEMA</span>, <span className="font-normal text-gray-900 dark:text-white">SHOW COLUMNS FROM TABLE</span>, and <span className="font-normal text-gray-900 dark:text-white">SHOW SCHEMAS FROM DATABASE</span>. The expression subset, evaluated on the server after enumeration, was equality and inequality, LIKE and NOT LIKE, ILIKE and NOT ILIKE, IN and NOT IN, IS NULL and IS NOT NULL, AND, OR, NOT, parentheses, string literals, and bound parameters. LIMIT still applies after WHERE. An empty result is success, the same way LIKE already worked. Column names resolve case-insensitively. A type error such as <span className="font-normal text-gray-900 dark:text-white">ordinal_position = &apos;foo&apos;</span> fails at parse time, which is an error, and the session stays up.
        </p>
        <p>
          Filterable columns are the columns that command already returns. For SHOW TABLES that includes database, schema, table name, table type, ACL, remarks, and, when extended fields are on, owner, last altered, last modified, dist style, and table subtype. SHOW COLUMNS and SHOW SCHEMAS each use their own result descriptor. Filtering on an extended column while that GUC is off is a clear error. Evaluating those columns as NULL would have produced surprising empty results.
        </p>
        <p>
          Left outside the original scope, on purpose: subqueries, JOINs, CTEs, aggregates, window functions, function calls such as LOWER or SUBSTR, cross-column comparisons such as <span className="font-normal text-gray-900 dark:text-white">schema_name = table_name</span>, RESULT_SCAN over SHOW, and projection. Projection is the other half of the same effort. Drivers hurt more from extra rows than from extra columns, and trying to ship both risked finishing neither. BETWEEN and timestamp comparisons on last-altered and last-modified were in the recommended first version. LOWER and UPPER were an explicit no, because ILIKE already covers case folding.
        </p>
        <p>
          SHOW DATABASES, FUNCTIONS, PROCEDURES, PARAMETERS, GRANTS, and CONSTRAINTS were follow-ups in the brief. The brief estimated that a fourth command is about 50 lines plus tests once the framework exists. GRANTS later became stretch work and did ship. Predicate pushdown into the local catalog, datashare RPC, and Glue was written down as a stretch goal. The first design applied WHERE only after the rows were gathered. I finished that core early, and the rest of the internship extended the same rule into those sources.
        </p>
        <p>
          LIKE was already public, so the design conversation was about coexistence. Four options were written down. A: LIKE or WHERE, never both. B: both allowed, AND-ed together, so a driver can append WHERE to a call site that already sends LIKE. C: rewrite LIKE into WHERE internally, so there is one evaluator. D: deprecate LIKE. The brief recommended B, and it said not to start week-2 grammar work until this and the clause order were signed off. C is cleaner on paper, and it was deferred, because today&apos;s LIKE is sometimes pushed into a catalog ScanKey and sometimes applied after the fact. Sugaring it into WHERE can silently lose that pushdown. D is a breaking change. Clause order in the brief follows PostgreSQL as far as SHOW has those clauses: LIKE, then WHERE, then LIMIT.
        </p>
        <p>
          The tests I kept from the implementation record a stricter grammar than that recommendation. A statement that uses the legacy LIKE clause and a WHERE clause together is rejected at parse time, with an error that you cannot use both. The LIKE a caller wants is written inside the WHERE expression — <span className="font-normal text-gray-900 dark:text-white">WHERE table_name LIKE &apos;w6_%&apos;</span> — and that operator is part of the supported subset. Those are two different LIKEs. The legacy keyword stays where it already was. The new clause is the general predicate.
        </p>
        <p>
          A new configuration switch gates the feature so it can roll back on its own. It is separate from the existing queryless-discovery switch. The discovery version is bumped so a driver can see that the server can filter and can skip its own client-side filter. Sort stays what it already was: sort by the leaf name after filtering. There is no ORDER BY.
        </p>
      </Chapter>

      <Chapter id="path" kicker="03 — The path" title="One statement, from the client back to the client">
        <p>
          SHOW commands are utility statements. They are dispatched as utility statements. They do not go through the planner, so there is no RangeTblEntry, no Plan, and no PlanState waiting to be reused. The output rows are synthesized. There is no physical catalog table whose columns are named <span className="font-normal text-gray-900 dark:text-white">table_name</span> or <span className="font-normal text-gray-900 dark:text-white">ordinal_position</span>.
        </p>
        <p>
          A hand-written resolver would have hard-coded every result column and type, then reimplemented operator lookup, coercion, the rule that WHERE must be boolean, and three-valued NULL logic. That copy would drift from SELECT. The project was a reuse of the analyzer and the executor. PostgreSQL already splits WHERE into three phases, and the server already uses them for SELECT, UPDATE, and DELETE. Phase one transforms the expression and coerces it to boolean. Phase two is <span className="font-normal text-gray-900 dark:text-white">ExecPrepareExpr</span>, which builds the runtime tree once. Phase three is <span className="font-normal text-gray-900 dark:text-white">ExecQual</span> per row. FALSE and NULL do not pass a WHERE clause. That NULL behavior is already correct, so IS NULL works on columns such as remarks without a special case.
        </p>
        <p>
          The missing piece is that <span className="font-normal text-gray-900 dark:text-white">transformExpr</span> can only resolve <span className="font-normal text-gray-900 dark:text-white">table_type</span> if the parse state has a range-table entry whose tuple descriptor exposes <span className="font-normal text-gray-900 dark:text-white">table_type</span>. The analysis step builds that synthetic entry from the SHOW result descriptor. A values-style entry is the closest existing pattern, because there is no real relation. After analysis, a walker rejects anything outside the safe subset. What remains is a boolean expression, a whitelist of comparison operators, IN-lists, null tests, column references, constants, parameters, and type relabels. The infrastructure underneath can already analyze more SQL than we are willing to promise. Every accepted operator is a compatibility promise. A future workload can extend the walker and add tests, and the core stays.
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {pathStages.map((stage) => (
            <div key={stage.n} className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-4">
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  <span className="text-gray-400 dark:text-white/35 mr-2 tabular-nums">{stage.n}</span>
                  {stage.title}
                </p>
                <p className="text-[11px] font-mono text-gray-400 dark:text-white/35 text-right">{stage.file}</p>
              </div>
              <p className="text-sm leading-6 text-gray-600 dark:text-white/65">{stage.text}</p>
            </div>
          ))}
        </div>

        <p>
          Take one statement all the way through. The caller writes <span className="font-normal text-gray-900 dark:text-white">SHOW TABLES FROM SCHEMA dev.public WHERE table_type = &apos;VIEW&apos;</span>. Grammar and parse-analyze, already in place, turn that into a comparison of the table_type column against the constant VIEW. Execution starts at the SHOW TABLES dispatcher. A legacy discovery path that sees a WHERE clause errors immediately, so an old code path cannot silently ignore the predicate. The live path collects candidates for the schema — in the walkthrough, 5,000 rows — then builds the predicate once. For each row it forms a heap tuple and asks ExecQual. The walkthrough&apos;s 5,000 candidates become 50 matches. Those 50 are what the row cap sees. Then they are sorted by name and sent. The 5,000 and the 50 are a picture of the loop, and they are separate from the benchmark numbers later on this page.
        </p>

        <ExecutionWalk />

        <p>
          SHOW SCHEMAS and SHOW COLUMNS follow the same pattern, each with its own result descriptor and tuple builder. The SQL meaning is one predicate. The tuple layout is per command, because each command&apos;s result columns are different.
        </p>
        <p>
          The original filter loop was modeled on <span className="font-normal text-gray-900 dark:text-white">ExecScan</span>: create an executor state, attach parameter bindings, prepare the qual, fill a slot the same way the existing tuple builder already does, point the scan slot at that tuple, reset the expression context per row, and erase rows that fail ExecQual. Buffered callers — TABLES, SCHEMAS, COLUMNS — keep matching tuples and then sort. Streaming callers — GRANTS and COLUMN GRANTS — evaluate and emit immediately. In both forms the cap increments only for matching rows.
        </p>
        <p>
          Error text was treated as part of the feature. An unknown column comes back as column &quot;foo&quot; does not exist in the SHOW TABLES result. A function call comes back as function calls are not supported in WHERE for SHOW; use ILIKE for case-insensitive matching. A subquery comes back as subqueries are not supported. A bad comparison such as <span className="font-normal text-gray-900 dark:text-white">ordinal_position = &apos;foo&apos;</span> comes out of PostgreSQL as operator does not exist. A disabled GUC is a feature-not-supported error before any execution.
        </p>
        <Callout>
          The predicate object is shared. It owns parameter values, compilation, NULL handling, the full-row check, and cleanup. A predicate can parse and still fail on one row — division by zero, a bad regular expression, a bad cast. Cleanup restores the caller memory context before executor state is freed, so the failure is a normal query error and the session stays usable. That cleanup is the next chapter&apos;s whole subject, because the per-row tuple is where the memory goes.
        </Callout>
      </Chapter>

      <Chapter id="grants" kicker="04 — Grants" title="The row does not exist until the last function builds it">
        <p>
          TABLES, SCHEMAS, and COLUMNS can build their candidate rows up front, store them, filter them, and sort them. GRANTS cannot, in the interesting case. A grant row is assembled as the scan walks users and roles. The column a WHERE clause wants — <span className="font-normal text-gray-900 dark:text-white">privilege_type</span> — is filled in at the bottom of that walk, inside the function that builds the tuple. Evaluating the predicate any earlier would be asking a question about a field that does not exist yet.
        </p>
        <p>
          So the predicate is created once, at the grants entry point, and passed down. The user-and-role walk is the orchestrator: scan users, then roles. The user walk and the role walk pass the predicate through. Evaluation happens only when the tuple is built, which is also the moment the row is complete: database, schema, object, type, privilege, identity, grantor. A user statement such as <span className="font-normal text-gray-900 dark:text-white">SHOW GRANTS ON TABLE t1 WHERE privilege_type = &apos;SELECT&apos;</span> is streaming, the setup returns a real predicate, and each row is filtered. A request from a consumer for the grants on that table arrives with no WHERE clause. Setup returns an empty predicate, and every row goes back to the consumer. The consumer is the one who filters. The producer does not invent a predicate the caller did not send.
        </p>

        <GrantsChain />

        <p>
          Once the tuple exists, three cases fall out of one function. If the privilege matches, skip the free, send the row, and return true so the caller can count it. If it does not match, free the tuple and return false. If the predicate pointer is null, skip the test and send the row. That third case is the RPC path and any caller that has no WHERE clause. It has to be a short-circuit, because there is nothing to evaluate.
        </p>

        <GrantOutcomes />

        <p>
          The builder picks a layout from the request, because those column counts are different result descriptors and the synthetic entry has to match the one analysis already used. A database-level request builds a database-grant tuple. A row that carries a column name builds a column-grant tuple. Everything else builds an object-grant tuple. Building the tuple answers who has access to this specific object. <span className="font-normal text-gray-900 dark:text-white">SHOW GRANTS FOR</span> a user, role, or PUBLIC is a different question — what can this identity access — and it uses a different input and its own renderer. The output shape of that listing is stable. The input is not the same, so it cannot share the object-grant builder.
        </p>

        <TupleChoice />

        <p>
          LIMIT on a streaming command is a count of matches, checked before the next row is built. Suppose the user asks for three SELECT grants and the producer has fifty grants on the table. INSERT does not increment the counter. SELECT does. The moment the counter reaches 3, the loop breaks, and grants 8 through 50 are never turned into tuples. Checking at the top of the loop is what makes that true. Checking after the work would build, evaluate, and throw away one extra row every time the limit was already satisfied.
        </p>

        <CodeBlock label="The counter is matches, and it is checked first">
{`for (const auto& grant : grants) {
    if (matches == limit) {
        break;   // already have enough matches
    }
    // build the tuple, test it, send or free
}`}
        </CodeBlock>

        <LimitWalk />

        <p>
          Put the whole GRANT statement back together and it is the same six stages as TABLES, with a different collector. The grammar stores the raw where clause and the limit. Analysis attaches the grants descriptor and resolves privilege_type. Execution checks the feature gate, prepares the predicate once, and walks permissions. Each match is sent and counted. Each miss is freed. The client receives a filtered, limit-capped result.
        </p>

        <GrantStatement />
      </Chapter>

      <Chapter id="memory" kicker="05 — Memory" title="Every row allocates a tuple. The next row has to start from zero.">
        <p>
          Building a tuple, for tables and for grants, allocates. A text column such as <span className="font-normal text-gray-900 dark:text-white">dev</span>, <span className="font-normal text-gray-900 dark:text-white">public</span>, or <span className="font-normal text-gray-900 dark:text-white">VIEW</span> is a <span className="font-normal text-gray-900 dark:text-white">palloc</span> inside the current PostgreSQL memory context. After ExecQual has said yes or no, that tuple is garbage. PostgreSQL does not free it because the statement ended. It frees a context when someone resets that context. If the loop never resets, a schema of 20,000 tables at about 300 bytes of temporary tuple each leaves about 6 MB allocated until the whole SHOW finishes. The result the client wanted might have been 40 rows. The other 19,960 tuples were only there to be rejected.
        </p>
        <p>
          Two contexts keep that safe, and the order between them is the whole trick. The scratch context is where the tuple lives. It is emptied after the match returns, once the true or false has been read. The expression context is where ExecQual&apos;s own temporary results live. It is emptied inside the match, before the tuple is read. That order matters. The match has to see the tuple. The tuple must not sit in the context the match is about to wipe.
        </p>

        <MemoryStory />

        <p>
          The same cleanup runs when a row faults. A bad cast or a division by zero is caught, the caller context is restored, executor state is freed, and the error is rethrown as a query error. The session can take the next statement.
        </p>

      </Chapter>

      <Chapter id="narrow" kicker="06 — Narrowing" title="Ask the source for less, then check the real predicate anyway">
        <p>
          Once the inline filter was correct, the remaining cost was obvious. A type filter still has to look at every object, build a tuple, and throw most of them away. That saves the network, because the client receives 40 rows instead of 3,000, and it still spends the classification work. An exact name can do better. The local catalog already knows how to look up <span className="font-normal text-gray-900 dark:text-white">table_name = &apos;orders&apos;</span> with an index key. A fixed prefix can bound a range. Glue already accepts a name pattern on its existing GetTables path, behind that pattern-pushdown setting. A datashare producer can be sent the fields it knows how to apply. The same SQL text cannot be handed to all three.
        </p>
        <p>
          So pushdown is a narrowing hint. The extractor keeps safe top-level conjuncts: exact name matches and fixed-prefix LIKE. <span className="font-normal text-gray-900 dark:text-white">table_type = &apos;VIEW&apos;</span> usually cannot be pushed, because the source still has to classify the object before it knows the type. OR, IN, ILIKE, a nested NOT, and a leading-wildcard LIKE can still be correct through the inline check, and they may scan everything. Every candidate that survives the hint is passed through ExecQual on the original WHERE. If a hint is loose, or a source cannot accept it, the query may do more work, and the set of rows stays the same. That is the safety argument for the whole stretch: pushdown changes how much work a source does. The full WHERE decides which rows come back.
        </p>
        <p>
          There are two savings, and they stay separate when I talk about speed. A type or subtype filter may still scan broadly and then return only the matches. That is a transfer saving. An exact name or a fixed prefix can also narrow the local catalog scan. That saves classification work and transfer. Exact-name cases are faster for that reason. The gain depends on whether the predicate is sargable and how selective it is.
        </p>
        <p>
          The cluster logs from the internship are the picture of that split. I turned statement logging up and ran SHOW against a small schema of <span className="font-normal text-gray-900 dark:text-white">perf_test_*</span> tables.
        </p>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            ["full_scan", "A type filter. The catalog cannot narrow on table_type, so every candidate is built and the inline filter keeps or drops it."],
            ["equality_pushdown", "An exact schema, table, or column name. The lookup returns that one object, and WHERE still runs on it."],
            ["prefix_pushdown", "A fixed-prefix LIKE. The name range is bounded. The inline filter remains the membership test."],
          ].map(([name, text]) => (
            <div key={name} className="rounded-xl border border-gray-200 dark:border-white/10 p-4">
              <p className="font-mono text-xs text-gray-900 dark:text-white mb-2">{name}</p>
              <p className="text-sm leading-6 text-gray-600 dark:text-white/65">{text}</p>
            </div>
          ))}
        </div>

        <ClusterTraces />

        <p>
          The line to read in those logs is the pair of counts. <span className="font-normal text-gray-900 dark:text-white">rows_scanned</span> is what the hint asked the source to touch. <span className="font-normal text-gray-900 dark:text-white">SHOW WHERE filter: N rows in, M rows out</span> is the membership test. When they differ, the hint was wider than the predicate, and the predicate won.
        </p>
        <p>
          The old cap order was the dangerous one: collect a broad candidate set, apply the cap, return that slice, then let the client filter. A match outside the first cap-sized slice is gone. The new order evaluates WHERE first and counts only matches toward the cap. This project wires that ordering for its FROM SCHEMA and FROM TABLE paths. The batched FROM DATABASE path has its own LIKE behavior and was not wired to this predicate layer. An 18.2× figure from a GRANTS batch or FROM DATABASE path belongs to that other work. I leave it off this project.
        </p>
        <p>
          The eleven changes are that story in review order. The brief estimated about 800 to 1,200 lines including tests, with most of the parser and node plumbing being mechanical. The thinking was the synthetic range table, the allowlist, the executor wiring, and later the pushdown. I split it so each change could be reviewed on its own. The original week plan stopped at a GUC, docs, a sanity benchmark, and local-catalog pushdown only if the core had merged. The core finished early, so the stretch — grants, datashare, Glue prefixes — landed in the same internship, under the same rule.
        </p>

        <ol className="space-y-3">
          {changes.map((change) => (
            <li key={change.id} className="flex gap-3 sm:gap-4">
              <span className="mt-0.5 w-[5.5rem] shrink-0 font-mono text-[11px] sm:text-xs tracking-wide text-gray-500 dark:text-white/45">
                {change.id}
              </span>
              <span>
                <span className="block text-gray-900 dark:text-white font-normal">{change.title}</span>
                <span className="block text-sm leading-6">{change.detail}</span>
              </span>
            </li>
          ))}
        </ol>

        <Callout>
          Across all eleven, the rule did not change. Push down what a source can safely use. The full WHERE decides the final result.
        </Callout>
      </Chapter>

      <Chapter id="proof" kicker="07 — Proof" title="What I measured, what I tested, and what is still outside the product path">
        <p>
          Two demos, and they prove different things. The server demo uses a stock JDBC REPL that sends raw SHOW SQL. No patched driver is involved, because the SQL reaches Redshift directly. The walkthrough was an exact table name, <span className="font-normal text-gray-900 dark:text-white">table_subtype = &apos;MATERIALIZED VIEW&apos;</span> with LIMIT 5, then LIKE, ILIKE, and AND, then the same WHERE on SHOW COLUMNS, SHOW SCHEMAS, and SHOW GRANTS, then an empty result, then rejected shapes such as an aggregate or a non-boolean expression. That demo shows capability and SQL behavior. Materialized views were already filterable somewhere in the stack. The change is where the filter runs, and how many rows come back.
        </p>
        <p>
          The client demo used a prepared cluster of about 2,000 tables and 40 materialized views. Baseline TRACE shows the stock driver sending a broad SHOW and filtering locally. A patched demo driver turns the same metadata call into <span className="font-normal text-gray-900 dark:text-white">WHERE table_subtype =</span> a bound parameter, visible in TRACE. A raw SHOW confirms the same 40-row answer. SHOW GRANTS filtered by privilege and identity was the functional extra on that demo. The patched JAR is a demo integration. The official JDBC driver does not yet emit this predicate. Emission from the official driver is a remaining production step, together with final compatibility validation and keeping selective SHOW cases in recurring regression coverage.
        </p>
        <p>
          Selectivity and catalog size decide the gain, so the numbers stay attached to the experiment that produced them.
        </p>

        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-gray-200 dark:border-white/10 p-4 sm:p-5 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400 dark:text-white/40">Large-schema benchmark</p>
            <p className="text-3xl font-light text-gray-900 dark:text-white">~21×</p>
            <p>
              <span className="font-normal text-gray-900 dark:text-white">dblarge.schema_large</span>, exact table lookup, about 2,665 ms down to 127 ms. That schema is about 30,300 tables. The comparable exact-name case on <span className="font-normal text-gray-900 dark:text-white">dbmedium.schema_large</span>, about 3,181 objects, was about 6×. A broad VIEW predicate was about 1.3×, because many rows still match.
            </p>
            <p>
              A materialized-view or subtype filter on the medium schema still classifies a broad candidate set, then returns 40 rows instead of about 3,181. Transfer drops by about 99%. Latency in that writeup was about 3.8×. That is the transfer saving. It is a different experiment from the index-narrowed exact-name case.
            </p>
          </div>
          <div className="rounded-xl border border-gray-200 dark:border-white/10 p-4 sm:p-5 space-y-3">
            <p className="text-[11px] uppercase tracking-[0.16em] text-gray-400 dark:text-white/40">The cluster I probed</p>
            <p className="text-3xl font-light text-gray-900 dark:text-white">~2.2×</p>
            <p>
              About 2,000 objects, plus 40 materialized views. <span className="font-normal text-gray-900 dark:text-white">getTables</span> for MATERIALIZED VIEW returned 0 rows before the patched driver emitted WHERE, and 40 rows after. Rows fetched dropped from about 2,041 to 40, about 99% fewer rows on the wire. Latency on that cluster was about 2.2×. When the number has to be the one from this cluster, I say about 2 to 3×, and I keep 21× labeled as the large-schema exact-name benchmark.
            </p>
            <p>
              Before pushdown, the sanity target was different. On a 10,000-table snapshot, <span className="font-normal text-gray-900 dark:text-white">SHOW TABLES WHERE table_name LIKE &apos;t%&apos;</span> was expected to be at most 10 to 15% slower than the existing LIKE path, because of one expression context and a slot per row. Pushdown is what turns a selective predicate into a speedup.
            </p>
          </div>
        </div>

        <p>
          Cantos is a third kind of evidence, and it is a guard. The candidate build was compared with a baseline. The captured run passed overall and showed no statistically significant regression signal. I call that regression testing with Cantos, or Cantos jj-diff. Targeted SHOW measurements show the benefit of filtering. Cantos is the check that the rest of the system held its speed.
        </p>
        <p>
          The operators I included are the contract from the brief, exercised as SQL. Equality, inequality, LIKE, NOT LIKE, ILIKE, IN, IS NULL, IS NOT NULL, AND, OR, NOT, nested boolean structure, LIMIT after WHERE, and an implicit cast such as comparing a name to an integer, which PostgreSQL accepts by inserting a cast.
        </p>

        <OperatorTable />

        <p>
          Around that subset, the edges are part of the behavior a caller can rely on. An empty result returns zero rows and is success, and an empty candidate set never builds executor state. An empty string compares normally. NULL follows PostgreSQL: a comparison with NULL is unknown, and IS NULL is the way to ask. An unknown column dies at parse-analyze. A subquery, an aggregate, or a window dies in the subset validator. The legacy LIKE clause combined with WHERE dies in the grammar. A disabled GUC dies before execution. A dropped table owner does not crash the scan. A cross-database query and an external schema still run the same filter on the rows that come back. Prepared statements go through as Param nodes and are evaluated at execute time, because RAFF cannot bind an extended-protocol parameter onto a SHOW utility statement; PREPARE and EXECUTE cover that case. A runtime fault inside one row is caught, the executor state is cleaned up, and the error is rethrown as a query error.
        </p>

        <EdgeTable />

        <p>
          The test layers stop where the evidence stops. Parser and negative tests check that SHOW WHERE parses into a statement that carries the clause, and that the validator rejects a subquery, a function call, an unknown column, a type mismatch, and a disabled switch. The integration tests cover equality and IN on table_type, LIKE and ILIKE, AND, OR with parentheses, IS NULL, NOT LIKE, a prepared statement with <span className="font-normal text-gray-900 dark:text-white">table_type = $1</span>, LIMIT after WHERE, an unknown column, and the feature-off error. Three of them anchor the rest: one for validation at parse-analyze, one for end-to-end filtering, and one for an unknown column. Integration goldens for TABLES, SCHEMAS, and COLUMNS cover a positive match and a no-match across local, cross-database, cross-cluster datashare, external schema, and direct connect or DSW. Existing SHOW tests were required to keep passing unchanged, because the LIKE path was left in place. Glue and Lake Formation tests are gated on that infrastructure. Parse and executor errors that do not depend on the discovery source are tested once locally, which keeps them from being copied across five contexts.
        </p>
        <p>
          The implementation of the eleven changes was complete and in review by the end of the internship. What a customer still needs, before this is an ordinary production capability, is the rest of the path: finish compatibility validation, emit the predicate from the official JDBC driver, and keep selective SHOW cases in recurring regression coverage. The deliberate limits stay. Subqueries, aggregates, windows, and arbitrary function calls are rejected. Supported pushdown is mainly safe name-oriented predicates. Richer boolean shapes still return the right rows through the inline check, and they may scan more. SHOW SELECT projection is a separate feature. A new SHOW command can reuse the result descriptor, the shared analysis, and the row evaluator, and can add its own narrowing later. A new optimization is held to the same rule as the eleven changes: it can reduce work, and it has to agree with the full predicate.
        </p>
        <Callout>
          A driver can now ask for the rows it actually wants. The server resolves that question against a result that was never a table, checks it with the same executor SELECT uses, throws away the temporary tuple before the next row, and only then lets a source skip work it can prove is irrelevant. The rows that come back are the rows the predicate accepted.
        </Callout>
      </Chapter>
    </div>
  );
}

export default function AmazonExperience({ mode = "card", onOverview, onJourney, onBack }) {
  if (mode === "overview") {
    return <AmazonOverview onBack={onBack} onJourney={onJourney} />;
  }
  if (mode === "journey") {
    return <AmazonJourney onBack={onBack} />;
  }
  return <AmazonCard onOverview={onOverview} onJourney={onJourney} />;
}
