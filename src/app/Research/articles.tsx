import React from "react"
import { Frac, Sym } from "./math"

export type Block =
  | { type: "h2"; id: string; number: string; text: string }
  | { type: "h3"; number: string; text: string }
  | { type: "h4"; number: string; text: string }
  | { type: "p"; text: React.ReactNode; lead?: string }
  | { type: "list"; items: { lead?: string; text: React.ReactNode }[] }
  | { type: "table"; number: string; caption: string; head: string[]; rows: (string[] | { group: string })[] }
  | { type: "figure"; number: number; src: string; width: number; height: number; alt: string; caption: string; narrow?: boolean }
  | { type: "equation"; number: string; content: React.ReactNode }

export type Article = {
  slug: string
  kind: string
  year: string
  title: string
  summary: string
  authors: { name: string; me?: boolean }[]
  affiliation: string
  abstract: string[]
  keywords: string[]
  highlights: { value: string; label: string }[]
  contribution: string
  links: { label: string; href: string }[]
  body: Block[]
  dataAvailability: string
  authorContributions: string
  references: string[]
}

const fig = "/research/code-sustainability"

export const articles: Article[] = [
  {
    slug: "ai-driven-code-sustainability",
    kind: "Research Paper",
    year: "2026",
    title: "AI-Driven Code Sustainability: Architectures, Datasets, and Profiling Mechanisms for Energy-Efficient Software",
    summary:
      "A TypeScript sustainability dataset built by transpiling and profiling Python efficiency benchmarks, used to fine-tune lightweight language models with QLoRA to flag energy-inefficient code — and why the same recipe helped one model and collapsed another.",
    authors: [
      { name: "Elbert Tany" },
      { name: "Moses Handoyo", me: true },
      { name: "Kenneth Sean Ternadi" },
      { name: "Anderies" },
      { name: "Andry Chowanda" },
    ],
    affiliation: "Computer Science Department, School of Computer Science, Bina Nusantara University, Jakarta, Indonesia",
    abstract: [
      "This research addresses the growing energy footprint of the information and communication technology (ICT) sector, where software inefficiencies represent a significant yet often overlooked source of computational waste. We focus on TypeScript, a language central to modern web development in which energy-inefficient patterns frequently hide beneath asynchronous logic and heavy abstraction. To overcome the scarcity of green-coding benchmarks for this ecosystem, we construct a targeted dataset by transpiling and relabeling Python efficiency benchmarks (Mercury and Venus), applying a z-score-based statistical method to assign efficiency labels within each task group and generating inefficient variants that reproduce common energy smells. The result is a training corpus of 2,958 profiled TypeScript solutions and a separate, task-disjoint testing corpus of 14,793 solutions, from which a class-balanced evaluation subset of 800 samples (200 per label) is drawn. Using this dataset, we fine-tune two lightweight language models (DeepSeek-R1-Distill-Llama-8B and Qwen3.5-9B) with Quantized Low-Rank Adaptation (QLoRA) under a common evaluation harness. The two models respond to the identical recipe in opposite ways: fine-tuning raises the accuracy of the reasoning-distilled DeepSeek model from 15.1% to 63.4%, partly by teaching it to emit a parseable label, whereas it drives the instruction-tuned Qwen model from 46.5% down to 25.1% by amplifying a pre-existing bias into a full mode collapse. This divergence indicates that, at this scale, outcomes are dominated by model-specific output behavior and dataset class balance rather than by the fine-tuning step in isolation.",
      "We therefore position the reusable dataset and labeling pipeline as the principal validated contribution and report the fine-tuning results as a cautionary methodological finding. This work bridges artificial intelligence and sustainable software engineering.",
    ],
    keywords: ["Code Sustainability", "Energy Smells", "TypeScript", "Large Language Models", "QLoRA", "Fine-Tuning"],
    highlights: [
      { value: "2,958", label: "Profiled training solutions" },
      { value: "14,793", label: "Task-disjoint test solutions" },
      { value: "15.1 → 63.4%", label: "DeepSeek-R1 accuracy after QLoRA" },
      { value: "46.5 → 25.1%", label: "Qwen3.5 accuracy (mode collapse)" },
    ],
    contribution:
      "Dataset curation, energy profiling, and statistical efficiency labeling. Drafted the abstract, methodology, results and discussion, and conclusion.",
    links: [{ label: "Dataset & code", href: "https://github.com/Natur7a/AI-Driven-Code-Sustainability" }],
    body: [
      { type: "h2", id: "introduction", number: "I", text: "Introduction" },
      { type: "p", text: "The world’s servers, cell phones, and data centers run billions of lines of code every second. Although the digital world has no physical form, it depends on physical infrastructure that consumes significant resources. The information and communication technology (ICT) sector is estimated to produce at least 1.7% of global greenhouse gas (GHG) emissions [1]. Data from 2022 show that the sector consumed approximately 1,183 TWh of electricity, or around 4.7% of global electricity usage [1]." },
      { type: "p", text: "The rapid expansion of data centers and advanced computation shows the scale of this issue. In Ireland, data centers accounted for 18% of national electricity consumption in 2022 [1], and this share may increase to 25% to 33% by 2030 [2]. These facilities support both everyday applications and rapidly growing artificial intelligence (AI) systems. Training and deploying these systems increases energy demand and contributes to the sector’s carbon footprint [1], [3]. Cloud and content data center electricity use increased by 63% between 2020 and 2022 [1], while global climate targets require ICT emissions to be reduced by 45% by 2030 [4]. Therefore, reducing this impact is a critical responsibility for the sector, including software developers." },
      { type: "p", text: "Code sustainability is one important effort to address this challenge. While hardware efficiency and renewable energy are essential, software also determines resource utilization." },
      { type: "p", text: "Software affects processor workload, memory usage, execution time, and energy consumption. Prior studies show that energy consumption, execution time, and memory usage are closely related but not always interchangeable [5]. An algorithm that solves a problem with lower energy intensity is therefore more sustainable. Across millions of requests, small inefficiencies can become large-scale waste. This makes sustainable software engineering an important research direction for reducing the environmental impact of digital systems [6]." },
      { type: "p", text: "The rapid adoption of AI as coding assistants adds another layer of complexity. AI coding assistants can accelerate code generation, supporting the current trend of rapid software delivery. However, if AI-generated code is blindly accepted, it may introduce suboptimal code that wastes computational resources. Studies on code generation tools show that AI coding assistants are useful but still require careful evaluation due to quality, robustness, and security concerns [7], [8]. In addition, existing code-generation benchmarks have mostly focused on functional correctness, while computational efficiency has only recently become a dedicated evaluation concern [9]." },
      { type: "p", text: "However, the same technology that increases energy demand can also support sustainability. AI-driven techniques can be used to detect and refactor energy-inefficient code, helping developers align software development with environmental responsibility." },
      { type: "p", text: "This study focuses on TypeScript, a language widely used in modern web development. In TypeScript applications, inefficiencies can be hidden behind asynchronous logic, abstraction layers, and framework-based development. TypeScript is especially relevant because the modern web landscape heavily relies on JavaScript and TypeScript ecosystems. Stack Overflow’s 2025 Developer Survey reports TypeScript as one of the most used programming languages among professional developers [10]. The State of JavaScript survey also shows the continued importance of TypeScript in the JavaScript ecosystem [11]. Despite the growing importance of sustainable software engineering, current development workflows still lack lightweight automated tools to detect and refactor inefficient TypeScript code. This creates a gap between sustainability goals and the tools available to developers." },
      { type: "p", text: "This research addresses this gap by developing and evaluating machine learning models that detect and flag energy inefficiencies in TypeScript source code. Energy-inefficient code increases computational resource usage and energy consumption, which are directly related to sustainability challenges in the ICT sector. To achieve this objective, this research constructs a TypeScript dataset containing efficient and inefficient code implementations, fine-tunes two lightweight language models using QLoRA [12], and evaluates their effectiveness in identifying inefficient code under a common evaluation harness. Measuring the runtime and energy impact of repairing the flagged inefficiencies is outside the scope of this study; it depends on a detection stage that is reliable enough to act on, which Section IV shows is not yet the case, and is therefore left to future work." },
      { type: "p", text: "The two main contributions of this research are the following. First, this study constructs a TypeScript sustainability dataset that classifies code into four classes: efficient, neutral, inefficient, and not evaluable, addressing the scarcity of green-coding benchmarks for the TypeScript ecosystem. Second, this study fine-tunes and evaluates lightweight, resource-efficient language models using QLoRA to demonstrate the viability of local AI models for detecting non-sustainable code without excessive computational resources." },

      { type: "h2", id: "literature-review", number: "II", text: "Literature Review" },
      { type: "p", text: "To understand the current state of AI Code-sustainability, it is necessary to see the historical evolution of software energy profiling methodologies. Over the past decades, there are couple transitions. The approach to checking and optimizing software sustainability has transitioned and changed from rudimentary physical measurements to sophisticated, predictive AI." },
      { type: "h3", number: "A", text: "The Era of Physical Hardware Measurement" },
      { type: "p", text: "At the start era of Green AI, some sustainability efforts were mostly are hardware focused. Software energy consumption could only be calculated as a black box by attaching some physical instrumentation. This physical instrumentation are multimeters, oscilloscopes, or specialized power meters directly to the executing host machine. The work by Tiwari et al., demonstrated how digital multimeters and oscilloscopes could be used to physically measure the instruction-level power cost of microprocessors [13]. This method actually provide highly accurate readings of total system power draw, but it lacked granularity for more complex software systems. Developers could observe the overall energy consumed during an application’s lifecycle, but in case of attributing specific energy spikes to individual algorithms, classes, or code blocks was nearly impossible [14]. This lack of visibility made targeted software refactoring very unworkable, as developers could not really easily recognize the software’s footprint from background operating system noise." },
      { type: "h3", number: "B", text: "System-Level Estimation and Power Models" },
      { type: "p", text: "In the early times of 2010s, the industry realized that since software dictates how hard the hardware works, it could also be used to measure energy use. Developers used built-in technologies like Intel RAPL and OS tools like PowerTOP to estimate power consumption directly from the system. By monitoring how much the CPU, memory, and hard drives were working, analytical models could trace power usage back to specific running programs. Frameworks such as the GREENSOFT model provide a broader reference framework for sustainable software engineering [15], while tools such as JoularJX enable source-level energy monitoring of executing software [16]. Once developers were able to track the energy use directly through software tools, it gives a way for major studies comparing the efficiency of different programming languages. For example, Pereira et al. showed that interpreted environments like JavaScript and TypeScript burn through significantly more power to complete the exact same tasks as compiled languages like C or Rust [5]. This period hammered home a critical takeaway: the specific algorithms and coding languages a developer chooses directly shape the software’s overall energy footprint [17]. This mindset change is what really the push for sustainable software." },
      { type: "h3", number: "C", text: "Static Analysis and the Emergence of Energy Smells" },
      { type: "p", text: "While runtime power modeling provided much needed granularity, it required executing the code in tightly controlled environments, which proved burdensome for continuous integration pipelines. To enable early-stage optimization, the focus shifted toward static code analysis. This period made it clear what “energy smells” are. Energy smells are coding practices. They include things, like polling creating objects that are not needed or querying databases in inefficient ways. Studies have shown that in modern application development, these smells are often behavioral and heavily tied to framework constraints and resource limitations [18]." },
      { type: "p", text: "In web ecosystems dominated by TypeScript [10], [11], inefficiencies often hide beneath complex asynchronous logic and heavy type abstractions. By correlating compile-time software metrics with established run-time execution profiles [19], developers gained the ability to proactively detect energy hotspots without executing the program." },
      { type: "h3", number: "D", text: "Data-Driven Approaches and Machine Learning" },
      { type: "p", text: "As codebases grew rapidly, it became too hard to make rules for tools that check the code by hand. So around 2010 people introduced data-driven optimization approaches [6]. They started using data to make these tools work better." },
      { type: "p", text: "Researchers began constructing datasets of profiled code and applying statistical machine learning algorithms to predict execution efficiency. This transition to machine learning also sparked a philosophical shift within the AI research community. This change to using machine learning also made people think about what’s important in a different way. In 2020 Schwartz and others came up with the idea of “Green AI”. It said that the people who make software need to stop using “Red AI” which only cares about being right even if it uses a lot of energy [3]. While early machine learning techniques successfully captured general energy trends, they often struggled with the semantic nuances, dynamic typing characteristics, and complex abstractions inherent in languages like JavaScript and TypeScript, necessitating more advanced language comprehension capabilities." },
      { type: "h3", number: "E", text: "AI-Driven Optimization and Large Language Models" },
      { type: "p", text: "Nowadays, the newest approach to software sustainability uses Large Language Models (LLMs) to find and fix code that is energy wasting. Since LLMs great at understanding context, they can spot tricky “energy smells” that older static analyzers and basic machine learning models completely miss. Running massive AI models on the other side, constantly creates its own environmental problems [20], [21]. To make these AI tools more sustainable to deploy, Hu et al. introduced Low-Rank Adaptation (LoRA). This method saves a massive amount of computational power by freezing most of the model’s original weights and only training a tiny new section [22]. Building on that idea, current research heavily relies on Quantized Low-Rank Adaptation (QLoRA) [12]. QLoRA compresses the main model down to just 4 bits and only updates a small add-on. This breakthrough allows developers to fine-tune huge AI models on standard, everyday computers instead of relying on giant, power-hungry server farms [23]–[25]. This also marks the latest achievement in software energy profiling: we have moved from simply measuring hardware power to using local, energy-efficient AI to automatically write more sustainable code." },

      { type: "h2", id: "methodology", number: "III", text: "Methodology" },
      { type: "p", text: "This section explains the approach on how to evaluate the relationship between software architecture and energy efficiency. It presents the dataset construction, model configuration, and experimental procedures employed to assess the effectiveness of AI-driven code optimization for energy efficiency. Fig. 1 presents an overview of the complete pipeline, which is organized into three stages. The data pipeline collects Python efficiency benchmarks (Mercury and Venus), transpiles them into standalone TypeScript, profiles each solution in a controlled Node.js environment to estimate its runtime and energy cost, and applies a z-score-based labeling scheme to produce two separate labeled corpora: a training corpus and a task-disjoint testing corpus. The modeling stage then fine-tunes the selected lightweight language models on the training corpus using QLoRA. Finally, the evaluation stage assesses the fine-tuned adapters against their base counterparts on a class-balanced subset drawn from the testing corpus. Each of these stages is described in detail in the remainder of this section." },
      { type: "figure", number: 1, src: `${fig}/methodology.png`, width: 1896, height: 3116, narrow: true, alt: "Five-stage pipeline: dataset construction, profiling and energy estimation, statistical labelling and splitting, QLoRA fine-tuning, and evaluation.", caption: "Overview of the research methodology." },
      { type: "h3", number: "A", text: "Dataset Creation" },
      { type: "h4", number: "1", text: "TypeScript Code" },
      { type: "p", text: "This research requires a standalone TypeScript code dataset, mainly focusing on code without any dependencies and external libraries. Due to the lack of public datasets available for TypeScript benchmarks for sustainability, this research constructs its dataset by extracting and converting Python-based benchmarks, specifically from Mercury by Du et al. [9], and Venus by Du et al. [26]. In addition to baseline implementations, an inefficient code variant is generated for each sample to simulate real-world suboptimal patterns." },
      { type: "h4", number: "2", text: "Statistical Efficiency Labeling" },
      { type: "p", text: "Once the full solution set for each task is profiled, each solution is assigned an efficiency label through a z-score-based statistical method applied within its task group. For a given task t, let {r₁, r₂, …, rₙ} and {e₁, e₂, …, eₙ} denote the measured runtime and estimated energy values across all successful solutions. The per-sample z-scores are computed as:" },
      {
        type: "equation",
        number: "1",
        content: (
          <>
            <Sym base="z" sub="runtime" sup="(i)" /> = <Frac num={<><Sym base="r" sub="i" /> − <Sym base="μ" sub="r" /></>} den={<Sym base="σ" sub="r" />} />,
            <span className="inline-block w-8" />
            <Sym base="z" sub="energy" sup="(i)" /> = <Frac num={<><Sym base="e" sub="i" /> − <Sym base="μ" sub="e" /></>} den={<Sym base="σ" sub="e" />} />
          </>
        ),
      },
      { type: "p", text: "where µr, σr and µe, σe are the mean and standard deviation of runtime and energy values within task t, respectively. A minimum of three successful solutions per task is required for the standard deviation to be statistically meaningful; task groups with fewer solutions default to the neutral label. Each sample is then classified as follows:" },
      {
        type: "list",
        items: [
          { lead: "Efficient:", text: <><Sym base="z" sub="runtime" sup="(i)" /> &lt; −1.0 and <Sym base="z" sub="energy" sup="(i)" /> &lt; −1.0, indicating performance at least one standard deviation below the task mean in both dimensions simultaneously.</> },
          { lead: "Inefficient:", text: <><Sym base="z" sub="runtime" sup="(i)" /> &gt; +1.0 or <Sym base="z" sub="energy" sup="(i)" /> &gt; +1.0, indicating that the solution is at least one standard deviation worse than the task mean in at least one dimension.</> },
          { lead: "Neutral:", text: "all remaining solutions that fall within the [−1, +1] band in both dimensions." },
        ],
      },
      { type: "p", text: "Solutions that fail to execute after transpilation — runtime errors, syntax errors, wrong answers, or timeouts — receive no z-score and are assigned the not evaluable label, which is retained as a fourth class rather than discarded, since detecting code that cannot even be profiled is itself a useful signal. For solutions drawn from Mercury, the resulting labels are cross-validated against Mercury’s published runtime percentile rankings to detect systematic labeling errors introduced by the transpilation step. A Cohen’s κ agreement score is computed between the two label sets; samples with conflicting labels are inspected manually and resolved by majority vote among the research authors." },
      { type: "h4", number: "3", text: "Training and Testing Corpora" },
      { type: "p", text: "Rather than splitting a single pool of solutions, the pipeline was run twice over disjoint sets of benchmark tasks, producing an independent training corpus and testing corpus. Holding out entire task groups — rather than individual solutions — guarantees that no solution to a problem seen during fine-tuning reappears at evaluation time, and therefore removes the possibility of task-level leakage that a naive stratified split over solutions would allow." },
      { type: "p", text: "Table I summarises the composition of both corpora. The training corpus contains 2,958 standalone TypeScript solutions drawn from 205 task groups, of which 2,170 executed successfully under the profiling harness and received a z-score-based efficiency label, while 788 (26.6%) terminated with a runtime error, wrong answer, or timeout after transpilation and form the not evaluable class. The labeled portion spans 194 task groups with a median of 11 solutions per group (range 1–30). The testing corpus is substantially larger, containing 14,793 solutions over 533 task groups, of which 7,934 were labeled across 459 task groups and 6,859 (46.4%) are not evaluable." },
      {
        type: "table",
        number: "I",
        caption: "Composition of the TypeScript sustainability corpora",
        head: ["Component", "Train", "Test"],
        rows: [
          ["Total transpiled TypeScript solutions", "2,958", "14,793"],
          ["Task groups before profiling", "205", "533"],
          ["Solutions profiled successfully", "2,170", "7,934"],
          ["Solutions failing execution (not evaluable)", "788", "6,859"],
          ["Solutions receiving an efficiency label", "2,170", "7,934"],
          ["Task groups with a valid label", "194", "459"],
          ["Task groups with fewer than 3 solutions (neutral)", "12", "87"],
          ["Median solutions per labeled task group", "11", "9"],
        ],
      },
      { type: "p", text: "Table II reports the resulting label distributions. Both corpora are heavily skewed: neutral accounts for 70.7% of the labeled training samples while efficient accounts for only 0.4%. This is a direct consequence of the conjunctive efficient criterion described in Section 2 — a solution must be more than one standard deviation better than its task mean in both runtime and energy simultaneously — and it is the single most important property of the dataset for interpreting the results in Section IV." },
      {
        type: "table",
        number: "II",
        caption: "Efficiency label distribution over the labeled samples of each corpus",
        head: ["Label", "Train count", "Train share", "Test count", "Test share"],
        rows: [
          ["Efficient", "9", "0.4%", "639", "8.1%"],
          ["Neutral", "1,535", "70.7%", "6,407", "80.8%"],
          ["Inefficient", "626", "28.8%", "888", "11.2%"],
          ["Total", "2,170", "100.0%", "7,934", "100.0%"],
        ],
      },
      { type: "p", text: "Because a model evaluated on this natural distribution could score highly by simply never predicting the minority classes, evaluation is not performed over the testing corpus as a whole. Instead, a class-balanced evaluation subset is drawn from it by sampling 200 solutions uniformly at random from each of the four classes (not evaluable, neutral, efficient, and inefficient), giving 800 test items in total, as summarized in Table III. Balancing the subset fixes the chance-level accuracy of a constant predictor at exactly 25%, which makes any degenerate single-class behavior immediately visible in the headline accuracy figure rather than hidden behind the class prior — a property that proves decisive in Section IV-B." },
      {
        type: "table",
        number: "III",
        caption: "Class-balanced evaluation subset drawn from the testing corpus",
        head: ["Class", "Available", "Sampled"],
        rows: [
          ["Not evaluable", "6,859", "200"],
          ["Neutral", "6,407", "200"],
          ["Efficient", "639", "200"],
          ["Inefficient", "888", "200"],
          ["Total", "14,793", "800"],
        ],
      },
      { type: "h4", number: "4", text: "Language Models" },
      { type: "p", text: "This research uses two language models to evaluate the effectiveness of fine-tuning them on the generated TypeScript dataset for detecting and flagging non-sustainable code. The following models were selected because they incorporate recent advances in the field while remaining lightweight enough to run on mid-range local machines." },
      {
        type: "list",
        items: [
          { lead: "DeepSeek-R1 (8B):", text: "Developed by DeepSeek AI, DeepSeek-R1 8B is a reasoning-focused language model aimed at analytical problem solving, structured text generation, and code-related tasks." },
          { lead: "Qwen3.5 (9B):", text: "Developed by Alibaba Cloud’s Qwen team, Qwen3.5 9B is a compact general-purpose language model intended for instruction following, code generation, and multilingual reasoning." },
        ],
      },
      { type: "p", text: "These models were fine-tuned on the training corpus using QLoRA, producing task-specific fine-tuned models, and evaluated on the class-balanced subset of the testing corpus described in Section 3." },
      { type: "h3", number: "B", text: "Energy Measurement Methods" },
      { type: "p", text: "Energy consumption is not measured with external physical instrumentation in this study. Instead, per-execution energy is estimated in software using CodeCarbon, which wraps each profiled tsx subprocess and reports the energy attributed to the tracked execution window in kilowatt-hours." },
      { type: "p", text: "The tracker is configured with a sampling interval of ∆tₛ = 1 s (measure_power_secs), with file logging disabled so that tracker overhead does not enter the measured window. The reported figure is converted to joules as" },
      {
        type: "equation",
        number: "2",
        content: (
          <>
            <Sym base="E" sub="i" /> = 3.6 × 10<sup>6</sup> · <Sym base="Ê" sub="i" sup="kWh" />
          </>
        ),
      },
      { type: "p", text: "where Êᵢᵏᵂʰ is the energy reported by the tracker for the execution window of solution i and 3.6 × 10⁶ is the exact conversion constant from kilowatt-hours to joules." },
      { type: "p", text: "Because all experiments were executed on Windows 11, the Intel RAPL model-specific registers are not exposed to userspace, and CodeCarbon’s direct hardware-counter path is therefore unavailable on this platform. All energy values reported in this paper consequently originate from CodeCarbon’s utilisation-scaled thermal-design-power (TDP) model, of the form" },
      {
        type: "equation",
        number: "3",
        content: (
          <>
            <Sym base="P̂" sub="i" /> = <Sym base="TDP" sub="CPU" /> · <Sym base="u" sub="i" /> + <Sym base="P̂" sub="RAM" />
          </>
        ),
      },
      {
        type: "equation",
        number: "4",
        content: (
          <>
            <Sym base="Ê" sub="i" sup="kWh" /> = <Frac num={<><Sym base="P̂" sub="i" /> · Δ<Sym base="t" sub="i" /></>} den="3.6 × 10⁶" />
          </>
        ),
      },
      { type: "p", text: "where TDP_CPU is the processor thermal design power in watts, obtained by CodeCarbon from its internal processor reference table for the Intel Core i7-14650HX; uᵢ ∈ [0, 1] is the observed processor utilisation fraction during the window; P̂_RAM is the memory power term estimated from installed capacity; and ∆tᵢ is the tracked duration in seconds. Where the tracker returned no usable reading, a constant-power fallback was applied," },
      {
        type: "equation",
        number: "5",
        content: (
          <>
            <Sym base="E" sub="i" /> = <Sym base="P" sub="fb" /> · <Sym base="t" sub="i" />,
            <span className="inline-block w-8" />
            <Sym base="P" sub="fb" /> = 15.0 W
          </>
        ),
      },
      { type: "p", text: "with tᵢ the wall-clock duration of the execution in seconds." },
      { type: "p", text: "Table IV summarises the variables, units, and sources of (2)–(5). The energy figures used throughout this paper are therefore model-based estimates rather than physically sampled power draw, and are described as such wherever they appear." },
      {
        type: "table",
        number: "IV",
        caption: "Variables, units, and sources of the energy estimation model",
        head: ["Symbol", "Unit", "Source or assumption"],
        rows: [
          ["Êᵢᵏᵂʰ", "kWh", "Reported by CodeCarbon tracker"],
          ["Eᵢ", "J", "Derived via (2)"],
          ["TDP_CPU", "W", "CodeCarbon reference table"],
          ["uᵢ", "—", "Observed CPU utilization fraction"],
          ["P̂_RAM", "W", "CodeCarbon memory model, 16 GB installed"],
          ["Δtᵢ", "s", "Tracked execution window"],
          ["Δtₛ", "s", "Sampling interval, fixed at 1.0"],
          ["P_fb", "W", "Constant fallback, fixed at 15.0"],
          ["tᵢ", "s", "Wall-clock duration of execution"],
        ],
      },
      { type: "p", text: "Each profiled solution is thus associated with two measurements: a wall-clock runtime obtained from the Node.js high-resolution timer (process.hrtime.bigint()), and an estimated energy figure derived as above for the same execution window. These two quantities are treated as separate axes in the labeling scheme of Section 2 rather than as substitutes for one another; in the collected data they are only weakly correlated (Pearson r = 0.13). Section IV-C discusses the limits of the energy axis in detail." },
      { type: "h4", number: "1", text: "Experimental Environment" },
      { type: "p", text: "To ensure reproducibility of the metrics, all measurements were conducted within a controlled hardware and software environment. The research was conducted on a Lenovo laptop (Model 83DG) equipped with an Intel Core i7-14650HX processor and 16 GB of RAM, running Windows 11 Home 64-bit (Build 26200). The entire measurement stack, including the execution harness and the data processing modules, runs on Node.js using the V8 engine, with the CodeCarbon tracker supervising each profiled execution. The same environment and the same harness were used for both the training and the testing corpora, so that z-scores computed in one corpus are comparable in meaning to those computed in the other." },
      { type: "p", text: "The experiment also stripped non-essential background processes and maintained a constant AC power supply as a way to isolate the energy variable. All metrics are captured server-side to bypass client-side hardware discrepancies. Time-series data for execution and resource utilization are recorded using the Node.js process.hrtime.bigint() function for sub-millisecond precision, while the corresponding energy figure for the same window is obtained from CodeCarbon." },
      { type: "h4", number: "2", text: "Execution Protocol" },
      { type: "p", text: "To minimize measurement variation caused by background processes and runtime inconsistencies, this study adopts a structured execution protocol consisting of three steps." },
      {
        type: "list",
        items: [
          { lead: "Input Standardization:", text: "To ensure consistent experimental conditions, all code variants are executed using identical and deterministic input data. This controlled setup eliminates variability introduced by differences in input size or complexity." },
          { lead: "Warm-up Execution:", text: "Modern JavaScript runtimes, such as the V8 engine used in Node.js, rely on Just-In-Time (JIT) compilation. Since this research uses TypeScript and TypeScript is transpiled into JavaScript before execution, the same JIT behavior applies. By performing three to five unrecorded warm-up iterations, the runtime is allowed to reach a stable optimized state." },
          { lead: "Repeated Execution:", text: "Each code sample is executed N times (typically between 10 and 30 iterations), and statistical measures such as the mean and standard deviation are computed to reduce the impact of random system fluctuations." },
        ],
      },

      { type: "h2", id: "results", number: "IV", text: "Results and Discussion" },
      { type: "p", text: "This section reports the QLoRA fine-tuning outcomes for two target models: DeepSeek-R1-Distill-Llama-8B (denoted Run A) and Qwen3.5-9B (denoted Run B). Both are evaluated on the held-out TypeScript sustainability test set. Evaluation is performed over the class-balanced subset described in Section 3, which contains 200 samples for each of the four classes (not evaluable, neutral, efficient, and inefficient) for a total of 800 test items. For each model we report the un-adapted base model and the QLoRA fine-tuned adapter, together with the proportion of outputs that could not be parsed into a valid label (unparsed). Both models are evaluated under an identical generation and label-extraction harness; the two runs therefore differ in the underlying model, not in the evaluation procedure." },
      { type: "p", text: "We report both models deliberately. They respond to the same fine-tuning recipe in opposite ways, and this divergence is the central empirical result of this section." },
      { type: "h3", number: "A", text: "Overall Accuracy and Format Compliance" },
      { type: "p", text: "Table V summarises four quantities for each configuration. Accuracy is the share of all 800 test items assigned the correct label, with an unparsed generation counted as incorrect. Unparsed is the share of generations from which the harness could not extract any of the four labels. Accuracy (parsed) is accuracy restricted to the subset of items that did yield a parseable label, and therefore measures classification quality with format compliance factored out. Macro-F1 is the unweighted mean of the four per-class F1 scores; because the test set is class-balanced, it penalises degenerate single-class behaviour far more sharply than accuracy does. Per-class precision, recall, and F1 are reported in Table VI; precision is computed over predictions actually emitted for a class, so unparsed generations do not enter its denominator, while recall is taken over all 200 items of the true class." },
      {
        type: "table",
        number: "V",
        caption: "Overall accuracy, unparsed-output rate, accuracy restricted to parsed outputs, and macro-F1 on the class-balanced test set. Run A and Run B are two different base models evaluated under an identical harness.",
        head: ["Configuration", "Acc.", "Unpars.", "Acc. parsed", "Macro-F1"],
        rows: [
          ["Run A · DeepSeek base", "15.1%", "63.0%", "40.9%", "0.172"],
          ["Run A · DeepSeek fine-tuned", "63.4%", "21.1%", "80.3%", "0.691"],
          ["Run B · Qwen base", "46.5%", "6.2%", "49.6%", "0.400"],
          ["Run B · Qwen fine-tuned", "25.1%", "0.0%", "25.1%", "0.103"],
        ],
      },
      { type: "p", text: "DeepSeek-R1-Distill (Run A) is a reasoning-distilled model that emits verbose chain-of-thought before committing to an answer. In its un-adapted state this produces a high unparsed rate of 63.0% and a correspondingly low overall accuracy of 15.1%: most responses never yield a recoverable label, and of the four classes only efficient is identified with any reliability (47.0%). QLoRA fine-tuning raises accuracy to 63.4% (a gain of 48.3 percentage points) while reducing the unparsed rate to 21.1%. Restricting the comparison to parsed outputs separates the two contributions. On items that yielded a parseable label, the base model is correct 40.9% of the time and the adapter 80.3%, a gain of 39.4 percentage points. Since the unrestricted gain is 48.3 percentage points, approximately four fifths of the improvement survives after format compliance is factored out. The adapter therefore acquired genuine classification skill rather than merely learning to emit a well-formed label, although the remaining fifth of the gain is attributable to the drop in unparsed output from 63.0% to 21.1%. Macro-F1 moves consistently with this reading, rising from 0.172 to 0.691." },
      {
        type: "table",
        number: "VI",
        caption: "Per-class precision, recall, and F1 on the class-balanced test set (800 items, 200 per class). Unparsed outputs are counted as incorrect in recall and excluded from the precision denominator.",
        head: ["Class", "Precision", "Recall", "F1"],
        rows: [
          { group: "Run A · DeepSeek base" },
          ["Not evaluable", "1.000", "0.095", "0.174"],
          ["Neutral", "0.556", "0.025", "0.048"],
          ["Efficient", "0.414", "0.470", "0.440"],
          ["Inefficient", "0.073", "0.015", "0.025"],
          { group: "Run A · DeepSeek fine-tuned" },
          ["Not evaluable", "0.894", "0.760", "0.822"],
          ["Neutral", "0.982", "0.275", "0.430"],
          ["Efficient", "0.605", "0.805", "0.691"],
          ["Inefficient", "1.000", "0.695", "0.820"],
          { group: "Run B · Qwen base" },
          ["Not evaluable", "0.950", "0.855", "0.900"],
          ["Neutral", "0.000", "0.000", "0.000"],
          ["Efficient", "0.335", "0.870", "0.484"],
          ["Inefficient", "0.540", "0.135", "0.216"],
          { group: "Run B · Qwen fine-tuned" },
          ["Not evaluable", "0.000", "0.000", "0.000"],
          ["Neutral", "0.000", "0.000", "0.000"],
          ["Efficient", "0.250", "1.000", "0.400"],
          ["Inefficient", "1.000", "0.005", "0.010"],
        ],
      },
      { type: "p", text: "Qwen3.5 (Run B) behaves very differently. As a cleaner instruction-following model it already emits a directly parseable label in most cases, with only 6.2% unparsed output and a base accuracy of 46.5%. This apparent competence is uneven, however: the base model is already biased toward efficient, predicting it for 181 of 200 neutral samples and 143 of 200 inefficient samples. Under QLoRA fine-tuning this bias is amplified rather than corrected: accuracy falls to 25.1% and the adapter collapses to a single-class predictor (Section IV-B). Because Qwen emits almost no unparsed output either before or after adaptation, its parsed-only accuracy is nearly identical to its raw accuracy (49.6% and 25.1%), confirming that none of its behaviour is a formatting artifact. The severity of the collapse is clearest in macro-F1, which falls from 0.400 to 0.103 — a far sharper signal than the accuracy drop, since a constant predictor over four balanced classes attains 25% accuracy but a macro-F1 of only 0.100. Table VI also shows that the degeneration did not begin with fine-tuning: the Qwen base model already scores F1 = 0.000 on neutral, failing to recover a single one of its 200 instances." },
      { type: "p", text: "The 31 percentage-point gap between the two base models (15.1% vs 46.5%) is thus a difference between models, driven largely by their output styles, since the harness is held constant. It must not be interpreted as a property of the fine-tuning method. In particular, DeepSeek’s low base accuracy is in large part an artifact of its reasoning-dump output being hard to parse, and should be treated as a lower bound rather than a faithful measure of its latent judgment." },
      { type: "h3", number: "B", text: "Per-Class Behavior and Mode Collapse" },
      { type: "p", text: "Fig. 2 shows the full confusion matrices and Fig. 3 the per-class accuracies. The two models tell opposite stories at the class level." },
      { type: "figure", number: 2, src: `${fig}/confusion-matrices.png`, width: 2100, height: 1660, alt: "Four row-normalised confusion matrices for the base and fine-tuned DeepSeek and Qwen models.", caption: "Confusion matrices for the base and fine-tuned models. Rows are true labels, columns are predicted labels (the rightmost column counts unparsed outputs). Panels (a)–(b) correspond to DeepSeek-R1-Distill (Run A) and (c)–(d) to Qwen3.5 (Run B); panel (d) shows the fine-tuned Qwen adapter collapsing to a single class." },
      { type: "figure", number: 3, src: `${fig}/per-class-accuracy.png`, width: 2136, height: 852, alt: "Bar charts of per-class accuracy for base and fine-tuned models in Run A and Run B.", caption: "Per-class accuracy of the base and fine-tuned models for DeepSeek-R1-Distill (Run A, left) and Qwen3.5 (Run B, right)." },
      { type: "p", text: "In Run A the fine-tuned DeepSeek adapter is broadly competent across classes, reaching 76.0% on not evaluable, 80.5% on efficient, and 69.5% on inefficient, with neutral remaining the hardest class at 27.5%. The residual errors are dominated by leakage into efficient (roughly 52% of neutral samples were predicted as efficient) and by the remaining unparsed outputs, rather than by confusion among the substantive classes." },
      { type: "p", text: "In Run B the fine-tuned Qwen adapter degenerates: it predicts efficient for approximately 99.9% of samples (799 of 800; Fig. 2d). Its 25.1% accuracy is therefore not evidence of partial skill but an artifact of the balanced test set — a constant efficient predictor scores exactly 25% by construction. Per-class accuracy is 100% on efficient and approximately 0% everywhere else. This is a textbook mode collapse: the adapter has learned to emit a single dominant label regardless of input. The change analysis is consistent with this — of the 281 predictions that changed after fine-tuning, 198 (70%) were regressions and only 27 (under 10%) were improvements. Critically, the seed of this collapse is already present in the Qwen base model’s pre-existing efficient bias, which fine-tuning amplifies into a total collapse." },
      { type: "h3", number: "C", text: "Threats to Validity" },
      { type: "p", text: "Several issues qualify these results and should be resolved before the numbers are treated as primary findings." },
      { type: "p", lead: "Cross-model rather than controlled comparison.", text: "Run A and Run B use two different base models (DeepSeek-R1-Distill-Llama-8B and Qwen3.5-9B). The contrast between them therefore confounds model identity, pre-training, and output style, and cannot isolate any single causal factor. In particular, the 31-point base-accuracy gap is not evidence about the fine-tuning method; it is primarily a difference in how parseably each base model expresses its answer." },
      { type: "p", lead: "Format versus judgment.", text: "For DeepSeek (Run A) the headline accuracy gain coincides with a drop in unparsed outputs from 63.0% to 21.1%, so raw accuracy conflates two distinct abilities: producing a parseable label and producing the correct one. Conditioning on successfully parsed outputs separates them and shows that 39.4 of the 48.3 percentage-point gain is retained (Table V), so the majority of the improvement reflects classification rather than formatting." },
      { type: "p", text: "This conditioning is not a full parser ablation: it does not establish whether the items that remain unparsed after fine-tuning are systematically harder than those that parse, and if they are, the parsed-only figure is optimistic. Reporting accuracy separately for each parser rule, and inspecting the residual 21.1% of unparsed generations by true class, would close that gap." },
      { type: "p", lead: "Mode collapse: mechanism not experimentally isolated.", text: "The Run B adapter collapses onto efficient, which is the rarest class in the training corpus (9 samples, 0.3% of 2,958) rather than the most frequent (neutral, 51.9%). The collapse is therefore not the textbook majority-class default that a skewed label distribution alone would predict. It coincides instead with a bias already present in the unadapted Qwen model, which predicts efficient for 181 of 200 neutral and 143 of 200 inefficient items before any fine-tuning (Table VI). The evidence available here is consistent with fine-tuning amplifying a pre-existing base-model prior, but severe under-representation of efficient in the training data, an excessive adapter learning rate, insufficient regularization, and the prompt format all remain uncontrolled alternative explanations. No remediation experiment was performed in this study, so the causal mechanism is diagnosed rather than demonstrated, and the attribution should be read as a hypothesis. Section V sets out the experiments required to test it." },
      { type: "p", lead: "Balanced evaluation versus deployment distribution.", text: "The 800-item evaluation subset is balanced by construction, whereas the natural distribution of the testing corpus is dominated by neutral (Table II). Balancing is what makes the Run B collapse legible, but it also means the reported accuracies are not estimates of in-the-wild performance on a real TypeScript codebase, where the prior over classes is very different." },
      { type: "h3", number: "D", text: "Summary" },
      { type: "p", text: "Evaluated under an identical harness, the same QLoRA recipe produces opposite outcomes on two small models. On DeepSeek-R1-Distill (Run A) it lifts accuracy from 15.1% to 63.4%, partly by teaching the model to emit a parseable label and partly through genuine per-class improvement. On Qwen3.5 (Run B) it reduces accuracy from 46.5% to 25.1% and collapses the adapter to a single-class predictor. Taken together, the two runs indicate that the method is promising but model-sensitive and unstable: label-extraction behavior and class balance, rather than the fine-tuning step alone, are decisive factors that the present pipeline does not yet control." },

      { type: "h2", id: "conclusion", number: "V", text: "Conclusion" },
      { type: "p", text: "This work developed and evaluated lightweight language models that detect energy-inefficient code patterns in TypeScript. To do this, we constructed a TypeScript sustainability dataset by converting and relabeling Python efficiency benchmarks, yielding a labeled training corpus and a task-disjoint testing corpus from which a class-balanced evaluation subset of 800 samples was drawn. Next, we fine-tuned two small models (DeepSeek-R1-Distill-Llama-8B and Qwen3.5-9B) using QLoRA. We tested both models under the same harness." },
      { type: "p", text: "The empirical results are broader and more nuanced than a single accuracy figure would suggest. On the reasoning-distilled DeepSeek model, QLoRA fine-tuning raised the overall accuracy and improved the F1 score on all four classes. Part of this gain reflects improved output formatting rather than improved judgment, but conditioning the comparison on successfully parsed outputs shows that most of it does not: roughly four fifths of the accuracy gain survives once format compliance is factored out. On the instruction-tuned Qwen model, which already produced parseable output, the identical procedure instead amplified a pre-existing efficient bias into a full mode collapse. The same recipe helped one model and broke the other, demonstrating that outcomes at this scale are dominated by model-specific output behavior and by the dataset’s class balance, rather than by the fine-tuning step in isolation." },
      { type: "p", text: "We therefore draw two conclusions. First, the principal validated contribution of this study is the TypeScript sustainability dataset and the accompanying labeling and energy-estimation pipeline, which are independent of any single model result and reusable for future work." },
      { type: "p", text: "Second, fine-tuning small models for this task is possible but not yet reliable. The procedure produced a genuine improvement on one model and a total mode collapse on the other, and the factors that determine which outcome occurs are not yet controlled: the collapse is consistent with amplification of a pre-existing bias in the base model, but the training corpus’s severe class imbalance, the adapter learning rate, and the prompt format all remain untested alternatives. Treating these as a cautionary methodological result is more defensible than reporting the favorable model in isolation." },
      { type: "p", text: "Future work follows directly from these limitations. A single standardized harness should be applied across all models, with accuracy reported conditionally on successfully parsed outputs so that formatting and classification gains are not correlated, and with a within-model parser ablation to quantify the formatting contribution directly. Class-balancing strategies — class-weighted or focal loss, minority-class oversampling, and a reduced adapter learning rate — should be evaluated in a controlled ablation that varies one factor at a time, so that the contribution of label imbalance can be separated from that of the base model’s pre-existing output prior. Because the efficient class contains only nine training instances, oversampling alone is unlikely to be sufficient, and revisiting the conjunctive labeling criterion that produces so small a class is itself a prerequisite." },
    ],
    dataAvailability:
      "The TypeScript sustainability dataset, comprising the labeled training corpus and the task-disjoint testing corpus, together with the transpilation and profiling pipeline, the z-score labeling scripts, and the QLoRA training and evaluation configurations, are publicly available at https://github.com/Natur7a/AI-Driven-Code-Sustainability. The base model weights are available from their respective publishers under their original licenses.",
    authorContributions:
      "Elbert, Moses, and Kenneth collaborated on the presentation and reference and citation management. Elbert and Kenneth also directed the project management and coordination. Elbert performed model fine tuning and model testing, and drafted the introduction. Moses performed dataset curation, energy profiling, and statistical efficiency labeling, and drafted the abstract, methodology, results and discussion, and conclusion. Kenneth provided the literature review. Anderies and Andry directed the research process and supervised the research, providing critical review and validation.",
    references: [
      "S. Ayers, S. Ballan, V. Gray, and R. McDonald, Measuring the Emissions & Energy Footprint of the ICT Sector: Implications for Climate Action. Washington, DC, USA and Geneva, Switzerland: The World Bank and International Telecommunication Union, 2024. doi:10.1596/978-92-61-38541-5. Available: https://documents.worldbank.org/en/publication/documents-reports/documentdetail/099121223165540890",
      "Government of Ireland, Department of Enterprise, Trade and Employment, Government Statement on the Role of Data Centres in Ireland's Enterprise Strategy. Dublin, Ireland, July 27, 2022. Available: https://enterprise.gov.ie/en/publications/government-statement-on-role-of-data-centres-in-enterprise-strategy.html",
      "R. Schwartz, J. Dodge, N. A. Smith, and O. Etzioni, “Green AI,” Communications of the ACM, vol. 63, no. 12, pp. 54–63, Dec. 2020. doi:10.1145/3381831.",
      "International Telecommunication Union, “ICT industry to reduce greenhouse gas emissions by 45 per cent by 2030,” Press Release, Feb. 27, 2020.",
      "R. Pereira, M. Couto, F. Ribeiro, R. Rua, J. Cunha, J. P. Fernandes, and J. Saraiva, “Energy Efficiency across Programming Languages: How Do Energy, Time, and Memory Relate?” in Proc. 2017 ACM SIGPLAN International Conference on Software Language Engineering (SLE '17), 2017, pp. 256–267. doi:10.1145/3136014.3136031.",
      "C. König, D. J. Lang, and I. Schaefer, “Sustainable Software Engineering: Concepts, Challenges, and Vision,” ACM Transactions on Software Engineering and Methodology, vol. 34, no. 5, Art. no. 135, pp. 1–28, 2025. doi:10.1145/3709352.",
      "B. Zhang, P. Liang, X. Zhou, A. Ahmad, and M. Waseem, “Practices and Challenges of Using GitHub Copilot: An Empirical Study,” in Proc. 35th International Conference on Software Engineering and Knowledge Engineering (SEKE 2023), 2023, pp. 124–129. doi:10.18293/SEKE2023-077.",
      "Y. Fu, P. Liang, A. Tahir, Z. Li, M. Shahin, J. Yu, and J. Chen, “Security Weaknesses of Copilot-Generated Code in GitHub Projects: An Empirical Study,” ACM Transactions on Software Engineering and Methodology, 2025. doi:10.1145/3716848.",
      "M. Du, A. T. Luu, B. Ji, Q. Liu, and S.-K. Ng, “Mercury: A Code Efficiency Benchmark for Code Large Language Models,” in Advances in Neural Information Processing Systems, vol. 37, 2024, pp. 16601–16622. doi:10.52202/079017-0529. Available: https://arxiv.org/abs/2402.07844",
      "Stack Overflow, “Stack Overflow Developer Survey 2025,” 2025. Available: https://survey.stackoverflow.co/2025/",
      "State of JS, “The State of JavaScript 2024,” 2024. Available: https://2024.stateofjs.com/en-US",
      "T. Dettmers, A. Pagnoni, A. Holtzman, and L. Zettlemoyer, “QLoRA: Efficient Finetuning of Quantized LLMs,” in Advances in Neural Information Processing Systems, vol. 36, 2023, pp. 10088–10115. doi:10.48550/arXiv.2305.14314. Available: https://arxiv.org/abs/2305.14314",
      "V. Tiwari, S. Malik, and A. Wolfe, “Power analysis of embedded software: A first step towards software power minimization,” IEEE Transactions on Very Large Scale Integration (VLSI) Systems, vol. 2, no. 4, pp. 437–445, Dec. 1994.",
      "A. Noureddine, R. Rouvoy, and L. Seinturier, “A review of energy measurement approaches,” ACM SIGOPS Operating Systems Review, vol. 47, no. 3, pp. 42–49, 2013.",
      "S. Naumann, M. Dick, E. Kern, and T. Johann, “The GREENSOFT Model: A Reference Model for Green and Sustainable Software and Its Engineering,” Sustainable Computing: Informatics and Systems, vol. 1, no. 4, pp. 294–304, Dec. 2011, doi:10.1016/j.suscom.2011.06.004.",
      "A. Noureddine, “PowerJoular and JoularJX: Multi-Platform Software Power Monitoring Tools,” in Proc. 2022 18th Int. Conf. Intelligent Environments (IE), Biarritz, France, 2022, pp. 1–4, doi:10.1109/IE54923.2022.9826760.",
      "M. Meissner, S. Kamthania, N. Rawtani, J. Bucek, K.-D. Lange, and S. Kounev, “Experience and Guidelines for Sorting Algorithm Choices and Their Energy Efficiency,” in Proc. ACM/SPEC International Conference on Performance Engineering Companion (ICPE '22 Companion), 2022, pp. 137–144. doi:10.1145/3491204.3527468.",
      "D. Prestat, N. Moha, R. Villemaire, and F. Avellaneda, “DynAMICS: A Tool-Based Method for the Specification and Dynamic Detection of Android Behavioral Code Smells,” IEEE Transactions on Software Engineering, vol. 50, no. 4, pp. 765–784, Apr. 2024. doi:10.1109/TSE.2024.3363223.",
      "D. Connolly Bree and M. Ó Cinnéide, “Weighted Metrics for the Development of Energy Efficient Software,” in Proc. 1st International Workshop on Designing Software (Designing '24), Lisbon, Portugal, 2024, pp. 64–69. doi:10.1145/3643660.3643946.",
      "A.-R. I. Sayyid-Ali, D. U. Khan, and N. A. Bhatti, “Are LLM Web Search Engines Sustainable? A Web-Measurement Study of Real-Time Fetching,” in Proc. ACM Web Conference 2026 (WWW '26), Dubai, United Arab Emirates, 2026, pp. 2083–2093. doi:10.1145/3774904.3792278.",
      "L. Li and Z. Lu, “EcoThink: A Green Adaptive Inference Framework for Sustainable and Accessible Agents,” in Proc. ACM Web Conference 2026 (WWW '26), Dubai, United Arab Emirates, 2026, pp. 9125–9135. doi:10.1145/3774904.3792995. Available: https://arxiv.org/abs/2603.25498",
      "E. J. Hu, Y. Shen, P. Wallis, Z. Allen-Zhu, Y. Li, S. Wang, L. Wang, and W. Chen, “LoRA: Low-Rank Adaptation of Large Language Models,” arXiv preprint arXiv:2106.09685, 2021. doi:10.48550/arXiv.2106.09685.",
      "Z. Wang et al., “Parameter-Efficient Fine-Tuning in Large Models: A Survey of Methodologies,” arXiv preprint arXiv:2410.19878, 2024.",
      "M. S. R. Avinash, “Profiling LoRA/QLoRA Fine-Tuning Efficiency on Consumer GPUs: An RTX 4060 Case Study,” arXiv preprint arXiv:2509.12229, 2025, doi:10.48550/arXiv.2509.12229.",
      "J. T. Licardo, N. Tanković, I. Osman, I. Lorencin, and S. Baressi Šegota, “Performance Trade-Offs of Optimizing Small Language Models for E-Commerce,” Big Data and Cognitive Computing, vol. 10, no. 5, Art. no. 155, 2026, doi:10.3390/bdcc10050155.",
      "M. Du, A. T. Luu, Y. Liu, Y. Qing, D. Huang, X. He, Q. Liu, Z. Ma, and S.-K. Ng, “Afterburner: Reinforcement Learning Facilitates Self-Improving Code Efficiency Optimization,” in Advances in Neural Information Processing Systems, vol. 38, pp. 9944–9976, 2025, doi:10.52202/085713-0304.",
    ],
  },
]

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug)
}
