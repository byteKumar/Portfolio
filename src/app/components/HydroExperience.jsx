"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import hydrowLogo from "../../../public/hydrow.jpg";

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
  "Built internal tooling for authoring and publishing strength-workout content, including single-set video, bodyweight, and athlete-created routine workflows.",
  "Extended NestJS workout APIs with workout-history retrieval, interval metrics, custom routines, body-focus metadata, and max-weight fields, and added 15 Jest end-to-end tests for the new flows.",
  "Developed HyAdmin diagnostics for strength-device logs, including force visualizations, sampling controls, zoom, permalink sharing, and workout search.",
  "Delivered member-site updates for LYQUID collections, muscle-load insights, payment-card display, and administrative age-gating requirements.",
];

function HydrowMark() {
  return (
    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-md">
      <Image src={hydrowLogo} alt="Hydrow" fill className="object-cover" />
    </div>
  );
}

function HydroCard({ onOverview, onJourney }) {
  const buttonClass = "inline-flex items-center space-x-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-gray-300 dark:border-white/20 text-gray-700 dark:text-white/70 hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200 rounded text-xs sm:text-sm font-medium";

  return (
    <div className="bg-white dark:bg-[#1a1a1a] rounded-lg p-5 sm:p-6 shadow-sm border border-gray-200 dark:border-white/10 space-y-3">
      <div className="flex items-center gap-3">
        <HydrowMark />
        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-light text-gray-900 dark:text-white mb-2">
            Full-Stack Engineer
          </h3>
          <p className="text-gray-500 dark:text-white/50 text-xs sm:text-sm font-normal break-words mb-2">
            Hydrow — Strength, LYQUID | Jan 2026 – May 2026
          </p>
          <p className="text-sm leading-6 font-light text-gray-600 dark:text-white/70">
            Allegrow and HyAdmin are Hydrow&#39;s internal workout-authoring and operations tools. LYQUID is the strength product.
          </p>
        </div>
      </div>
      <BulletList items={summaryBullets} />
      <p className="text-sm leading-6 font-light text-gray-600 dark:text-white/65">
        Payment-card and age-gating work was display and validation on the member site.
      </p>
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

function HydroOverview({ onBack, onJourney }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const steps = [
    { n: "01", title: "Author", text: "Allegrow is where a strength video gets its sets, durations, captions, and publish time." },
    { n: "02", title: "Store", text: "The workout API keeps history, interval stats, custom routines, body focus, and max weight." },
    { n: "03", title: "Inspect", text: "HyAdmin turns a strength firmware log into sampled charts a teammate can share." },
    { n: "04", title: "Show", text: "The member site presents the LYQUID collection, the stats, and the payment and age rules." },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-start gap-3">
        <BackButton onBack={onBack} />
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-white/40 mb-1">
            Hydrow · Strength, LYQUID · Jan 2026 – May 2026
          </p>
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-white leading-tight">
            A strength workout had to be authored, stored, inspected, and shown.
          </h3>
        </div>
      </div>

      <div className="space-y-3 text-[15px] sm:text-base leading-7 font-light text-gray-700 dark:text-white/75">
        <p>
          Hydrow was adding LYQUID, a strength product, beside the rowing experience. A workout is not one screen. Someone has to describe the sets, the API has to remember the session, an operator has to read the machine log when a set looks wrong, and a member has to see the right collection and the right stat.
        </p>
        <p>
          I worked across those four surfaces from January through May 2026. Allegrow and HyAdmin are Next.js. The workout API is NestJS and TypeORM. The member site is Next.js with Tailwind, Stripe, and Cypress.
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
        The thread is the same on every surface. A rule in the editor has to survive into the API, and a field the API stores has to show up in admin or on the member site. I kept the changes small enough to review, and I covered the API changes with end-to-end tests.
      </p>

      <div className="grid gap-3 sm:grid-cols-2 text-sm leading-6 text-gray-600 dark:text-white/70">
        <div className="rounded-xl bg-gray-50 dark:bg-white/[0.04] p-4">
          <p className="font-medium text-gray-900 dark:text-white">What the commits show</p>
          <p className="mt-1">Authoring rules, workout history and tags, firmware-log charts, and the member-facing LYQUID and payment behavior. Each one is a change I authored.</p>
        </div>
        <div className="rounded-xl bg-gray-50 dark:bg-white/[0.04] p-4">
          <p className="font-medium text-gray-900 dark:text-white">What I do not put on the page</p>
          <p className="mt-1">No invented speedups. Log-plot scripts with no author history stay off this story. A PDF viewer at the end of May was a proof of concept.</p>
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
  { id: "product", label: "The product" },
  { id: "author", label: "Authoring" },
  { id: "api", label: "The API" },
  { id: "inspect", label: "Diagnostics" },
  { id: "member", label: "The member" },
  { id: "record", label: "The record" },
];

const surfaces = [
  { n: "01", title: "Allegrow", text: "Next.js studio where a producer builds the video: sets, durations, captions, filters, and when an athlete routine goes live." },
  { n: "02", title: "Workout API", text: "NestJS and TypeORM. History, interval stats, custom routines, body-focus tags, and the weight fields the clients read." },
  { n: "03", title: "HyAdmin", text: "Next.js console for badges, collections, workout search, and the charts that read a strength firmware log." },
  { n: "04", title: "Members web", text: "Next.js site a member actually opens: collections, stats, payment methods, and who is allowed to administer LYQUID." },
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

function HydroJourney({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const jump = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const authoring = [
    ["Single set", "A single-set tag on a video has to apply to every movement. The annotation and the enforcement landed together."],
    ["Bodyweight time", "An athlete-led bodyweight movement needs an intro duration and a work duration, not a silent zero."],
    ["Block order", "Block indexes are allowed to increase as blocks are added, instead of being forced back into a fixed order on every save."],
    ["Publish time", "An athlete-developed routine can be saved now and published at a chosen time."],
    ["Draft status", "Autosave shows when the draft was last saved, so a producer can tell the write succeeded."],
    ["Captions and filters", "A single-set LYQUID workout may ship with no closed captions. Non-LYQUID workouts can filter by difficulty and body focus."],
  ];

  const apiWork = [
    ["History by id", "A client can retrieve workout history for one workout instead of only a broad list."],
    ["Interval stats", "The internal workout-by-id response carries interval stats beside the workout."],
    ["Custom routine", "An athlete custom routine can be fetched by id."],
    ["Body focus", "A workout video can store body-focus tags, and the video sync job copies those tags."],
    ["Weight fields", "Intervals expose a max weight. Rower movement weight stores a max one-rep-max in newtons. A merge had dropped the accessory adjustment on starting weight and max weight, and that logic was restored."],
    ["Muscle usage", "A zero total no longer divides by zero when muscle usage is computed."],
  ];

  const charts = [
    ["Sample", "Default sampling is 20 Hz. Frequencies above 25 Hz are dropped so the chart stays readable."],
    ["Hands", "Left and right series can be combined, with contrasting colors so the two sides stay distinct."],
    ["Force", "A force series in pounds sits with the position trace. Range-of-motion lines mark the ends of the movement."],
    ["Zoom", "The y-axis zooms, and zoom stays aligned when more than one chart is on screen."],
    ["Share", "A permalink opens the same firmware-log chart again, instead of asking someone to re-upload the file."],
  ];

  return (
    <div className="space-y-10 sm:space-y-14">
      <div className="flex items-start gap-3">
        <BackButton onBack={onBack} />
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.18em] text-gray-400 dark:text-white/40 mb-1">
            Hydrow · Strength, LYQUID · Jan 2026 – May 2026
          </p>
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-white leading-tight">
            Four surfaces, one strength workout
          </h3>
          <p className="mt-2 text-sm sm:text-base font-light text-gray-500 dark:text-white/50 max-w-2xl">
            From the set a producer describes, to the row the API stores, to the log an operator reads, to the page a member opens.
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

      <Chapter id="product" kicker="01 — The product" title="LYQUID is a strength workout. It does not live in one repository.">
        <p>
          Hydrow already had a rowing experience. LYQUID is the strength product beside it. A member completes a strength set. The machine writes a firmware log. A producer has already decided what that set is: which movements, how long the intro is, whether captions exist, and when the routine becomes public. None of that is one app.
        </p>
        <p>
          I joined as a full-stack engineer from January 2026 to May 2026 and took pieces of that path in four codebases. The commits are under my name. The story below is those commits, grouped by surface, not a tour of the whole company.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {surfaces.map((surface) => (
            <div key={surface.n} className="rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1a1a1a] p-4">
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                <span className="text-gray-400 dark:text-white/35 mr-2 tabular-nums">{surface.n}</span>
                {surface.title}
              </p>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/65">{surface.text}</p>
            </div>
          ))}
        </div>
      </Chapter>

      <Chapter id="author" kicker="02 — Authoring" title="The editor has to refuse a video the player cannot run.">
        <p>
          Allegrow is the studio. It is Next.js, with MUI, Tailwind, and Mux for the video itself. My work sat on the strength interval editor, the video page, and athlete-developed routines.
        </p>
        <p>
          A strength video is a sequence of movements. If the video is tagged as a single set, every movement has to obey that tag. Bodyweight work on an athlete-led workout needs an intro and a work duration, or the timeline lies. Block indexes are allowed to increase as the editor adds blocks, instead of being forced back into a fixed order on every save. Duration start time had its own bug, and I fixed that separately from the interval logic.
        </p>
        <Diagram kicker="Rules the editor now holds">
          <ul className="space-y-3">
            {authoring.map(([title, text]) => (
              <li key={title} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <span className="text-sm font-medium text-gray-900 dark:text-white">{title}</span>
                <span className="text-sm leading-6 text-gray-600 dark:text-white/65">{text}</span>
              </li>
            ))}
          </ul>
        </Diagram>
        <p>
          Publishing is part of authoring. An athlete-developed routine can wait until a chosen time. While the producer is still editing, autosave reports when the draft was last saved. Closed captions can be absent on a single-set LYQUID workout. For workouts that are not LYQUID, difficulty and body focus became filters instead of fields you scroll past.
        </p>
      </Chapter>

      <Chapter id="api" kicker="03 — The API" title="The clients can only show what the workout service is willing to return.">
        <p>
          The data API is a NestJS service on TypeORM, with Postgres, Redis, and Jest end-to-end tests. I worked in workouts, rower profiles, and the Svexa muscle path, plus the script that syncs workout videos.
        </p>
        <p>
          History was the first gap. A caller needed one workout, not a scan of everything that person had done. The internal shape of that response then needed interval stats, because a set-level view is useless if the only payload is the workout header. Athlete custom routines needed the same treatment: fetch by id.
        </p>
        <Diagram kicker="Fields and routes I added or repaired">
          <ul className="space-y-3">
            {apiWork.map(([title, text]) => (
              <li key={title} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-4">
                <span className="text-sm font-medium text-gray-900 dark:text-white">{title}</span>
                <span className="text-sm leading-6 text-gray-600 dark:text-white/65">{text}</span>
              </li>
            ))}
          </ul>
        </Diagram>
        <p>
          Body focus is the link back to Allegrow. The video can store the tags, and the sync job has to copy them, or the filter in the studio and the tag on the server drift apart. Weight is the link to the machine. Intervals expose a max weight. Rower movement weight stores a max one-rep-max in newtons. A merge had dropped the accessory adjustment for starting weight and max weight. I restored it so the new field did not ship by breaking the one beside it.
        </p>
        <p>
          The muscle-usage fix is small and worth naming. When total usage is zero, the percentage math divided by zero. The fix returns a defined result instead of a crash. The history, video, rower, and muscle changes went out with end-to-end tests, not only a unit of the happy path.
        </p>
      </Chapter>

      <Chapter id="inspect" kicker="04 — Diagnostics" title="A bad set is a log file until someone can see the hands move.">
        <p>
          HyAdmin is the internal console: Next.js, MUI, Chart.js, and S3 for the log objects. Before the charts, I did the quieter admin work. Program sequences sort by default and across columns. Saving a movement warns when an accessory is required, and a save that used to fail with no message now fails in the open. Placeholder order can be sorted. Safety parameters reject a decimal where an integer is required, and the reverse.
        </p>
        <p>
          Badges and collections are how strength content is grouped. Badges can be filtered by the modality they require, and a badge can be saved when modality is still empty. Collections gained modality, a LYQUID image, and banner images, through a form section that the edit page and the collection page both use.
        </p>
        <p>
          Operators also needed to find a session. HyAdmin can search workouts by rower id or by workout id, then download and analyze. That search is what opens the firmware log.
        </p>
        <Diagram kicker="What the strength chart is for">
          <div className="grid gap-3 sm:grid-cols-2">
            {charts.map(([title, text]) => (
              <div key={title} className="rounded-xl border border-gray-200 dark:border-white/10 p-4">
                <p className="text-sm font-medium text-gray-900 dark:text-white">{title}</p>
                <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </Diagram>
        <p>
          The chart work is the longest thread in the internship, and the commit history shows it. Header and intervals came first. Then the set chart, zoom, hand colors, force in pounds, sampling, and the permalink. Most of the later commits are review passes on that same screen, not new products. The screen lives under the brake-controller tools, and the log parser is shared so the page does not decode the file inline.
        </p>
      </Chapter>

      <Chapter id="member" kicker="05 — The member" title="The public site has to tell the truth about a LYQUID workout.">
        <p>
          The members web app is Next.js with Tailwind, Radix, Stripe, and Cypress. It is the surface a member sees, so the changes are smaller and stricter than the admin charts.
        </p>
        <p>
          A collection deep link has to land on a LYQUID collection, not a rowing layout with the wrong art. On a LYQUID workout, the stat that matters is muscle load, not the efficiency number used for rowing. Accessory choice and the arrow icons were updated to match that flow.
        </p>
        <p>
          Payment had a quiet bug: a newly added card was not becoming the default payment method. I removed the logic that left the old card in place. On the subscription step, a LYQUID admin has to be at least 18, and the page says so instead of failing later.
        </p>
        <p>
          The last change in that repo, at the end of May, displays PDF content as a proof of concept. I leave it described that way. It is not a finished document product.
        </p>
      </Chapter>

      <Chapter id="record" kicker="06 — The record" title="The work is the commits, and the commits stop where the evidence stops.">
        <p>
          Allegrow accounts for the authoring rules, from early February through mid-May. The API accounts for history, stats, tags, and weight, from the first week of January through mid-May. HyAdmin accounts for the console and the charts, from late January through late May. The member site accounts for collections, stats, payment, and the age check, from late January through the end of May.
        </p>
        <p>
          I do not attach a speedup to this internship. The repositories do not contain a benchmark I ran. What they contain is behavior: a video the editor will accept, a response the API will return, a chart an operator can reopen, and a member page that shows muscle load.
        </p>
        <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/[0.04] p-4 sm:p-5 text-sm leading-6">
          Separate log-plot scripts sit next to the firmware-log work in time, and they have no author history. They are not part of this story. A chart on this page is one I committed in HyAdmin.
        </div>
      </Chapter>
    </div>
  );
}

export default function HydroExperience({ mode = "card", onOverview, onJourney, onBack }) {
  if (mode === "overview") {
    return <HydroOverview onBack={onBack} onJourney={onJourney} />;
  }
  if (mode === "journey") {
    return <HydroJourney onBack={onBack} />;
  }
  return <HydroCard onOverview={onOverview} onJourney={onJourney} />;
}
