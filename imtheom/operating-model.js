(function(){
  const OPERATING_MODEL_DATA = {"front":{"title":"AI Governance Operating Model","subtitle":"An Operating Model for AI Governance","version":"Version 1.0","owner":"AI Governance Committee","reviewed":"June 2026","disclaimer":"Disclaimer: prepared for informational purposes only, based on information available at the time of publication. It is not intended and does not constitute legal advice or legal opinion on any specific facts or circumstances. I shall not have any liability in connection with any use of these materials. This post does not establish an attorney-client relationship with the recipient. Please seek advice from qualified counsel. The output may vary and not cover your circumstances in full and should not be relied upon as is."},"sections":[{"number":1,"title":"Framing Note","id":"section-1","blocks":[{"kind":"p","text":"This operating model sets out a generalized governance architecture for AI at the Company, a hypothetical enterprise used to make the architecture concrete. It is a working architecture rather than a policy to adopt unaltered.","condition":{}},{"kind":"p","text":"The methodology anchors to the NIST AI Risk Management Framework. NIST supplies the durable spine because it is a voluntary, function-based framework that states what good AI governance does rather than fixing a list of statutory obligations, and a framework defined by function survives the regulatory churn that is currently destabilizing the state-law layer and inviting federal preemption. ISO/IEC 42001 supplies the management-system shell that procurement and audit teams recognize, and the EU AI Act supplies the binding obligation overlay for any activity that touches the EU market or falls into its high-risk categories. NIST is the operating layer; the other two map onto it.","condition":{}},{"kind":"p","text":"The body states the architecture in full and references each annex at the point it becomes relevant (for example, the intake form at Annex A), so that a reader who stops at the end of the body sees the whole design and knows where the operating detail lives. The annexes carry that detail, meaning the routing, the schema, the rubric, and the escalation specifics, which an implementer needs and an evaluator can defer.","condition":{}},{"kind":"p","text":"The Company is a hypothetical Fortune-scale financial enterprise: a regulated institution whose AI touches credit, fraud, anti-money-laundering, and customer decisions, and whose governance sits inside an existing model-risk and cybersecurity supervisory perimeter.","condition":{"sector":"finance"}},{"kind":"p","text":"The Company is a hypothetical large technology enterprise: a software business whose AI ships inside products to users at scale and whose governance sits alongside an existing engineering and model-deployment discipline.","condition":{"sector":"tech"}},{"kind":"p","text":"The Company is a hypothetical law firm: a professional-services partnership whose AI touches client matters, privileged material, and work product, and whose governance sits inside existing duties of competence, confidentiality, supervision, and conflicts management.","condition":{"sector":"law_firm"}},{"kind":"p","text":"The Company is a hypothetical large enterprise outside financial services, technology, and legal practice, for example in retail or manufacturing: an organization that procures and deploys AI across its operations and whose governance has to stand on its own rather than inside a sector-specific supervisory regime.","condition":{"sector":"other"}},{"kind":"p","text":"The Company both develops and deploys AI: it builds and fine-tunes models of its own, and it procures AI from third parties.","condition":{"postures":["both"]}},{"kind":"p","text":"The Company primarily develops AI: it builds and fine-tunes models of its own, and procures selectively.","condition":{"postures":["builds"]}},{"kind":"p","text":"The Company deploys third-party AI rather than building its own: its AI arrives through procured products and platforms.","condition":{"postures":["deploys"]}}]},{"number":2,"title":"The Operating Thesis","id":"section-2","blocks":[{"kind":"p","text":"AI governance is an operating layer, not a document. The policy that states the Company’s principles is necessary and insufficient; what governs is the machinery that decides which AI systems the Company may build or buy, on what evidence, with whose sign-off, and under what monitoring once they are live. A governance program earns its keep when it connects the decisions that teams otherwise make in isolation across Legal, the business, security, model risk, and the board, so that the Company holds a single coherent posture toward its AI rather than a collection of separate initiatives that each made local sense.","condition":{}},{"kind":"p","text":"The NIST AI Risk Management Framework gives that machinery its spine through four functions that this operating model treats as the load-bearing structure rather than as background vocabulary. Govern establishes the accountability, the committee, and the culture in which the other three operate, and it runs across all of them rather than sitting beside them. Map establishes context and identifies risk, which in this operating model means the intake flow, the risk-tier classification, and the registry that records what the Company actually runs. Measure assesses and tracks risk, which means the evaluation and testing that happen at the review gates. Manage acts on risk, which means the gate decisions themselves, the monitoring of deployed systems, and the escalation and incident response when something breaches a threshold. Every component that follows maps to one of these four functions, the NIST Generative AI Profile extends them to the Company’s generative systems, and the crosswalk at Annex E carries the mapping to ISO/IEC 42001 clauses and EU AI Act obligations in full.","condition":{}},{"kind":"p","text":"The program is built to flex. The regulatory environment for AI is moving weekly, the state-law layer is contested ground rather than settled doctrine, and the federal layer is actively deregulatory and preemption-oriented. An operating model that hard-codes a single jurisdiction’s current statute as its control logic breaks the moment that statute changes, and it signals to a sophisticated reader that its author mistook a compliance checklist for a governance program. This operating model governs to the NIST functions and treats specific statutory obligations as a configurable overlay, so that when a state law is repealed, replaced, or preempted (as Colorado’s was, as the federal task force is pressing others to be) the underlying control survives and only the notice, documentation, and filing obligations flex around it.","condition":{}}]},{"number":3,"title":"Scope: What the Operating Model Governs","id":"section-3","blocks":[{"kind":"p","text":"A governance program cannot govern what it has not defined, and the most common way these programs fail in their first year is that the inventory is invisible: systems enter the Company through a procurement contract, a vendor feature toggle, a data-science notebook, or an embedded capability inside a SaaS product the business already licensed, and none of them ever reaches the governance machinery because no one agreed in advance what counted.","condition":{}},{"kind":"p","text":"This operating model governs any AI system the Company develops, fine-tunes, procures, embeds, or deploys, where an AI system is any engineered system that, for a given set of human-defined objectives, generates outputs such as predictions, recommendations, content, or decisions that influence physical or virtual environments, following the NIST and OECD definition that the EU AI Act and ISO/IEC 42001 also track. The definition reaches three cases that teams routinely try to route around: third-party AI embedded in a licensed product, foundation models the Company fine-tunes or adapts (governed as development rather than as procurement), and agentic systems that take actions rather than only producing outputs, governed at the highest scrutiny the use-case tier supports because the capacity to act compounds every downstream risk.","condition":{}},{"kind":"p","text":"The scope turns on function, not on whether a contract or a roadmap labels a system “AI.” A vendor that rebrands a model as “automation” or “decisioning” does not move its product outside this operating model, and a use-case owner who describes a system as “just a workflow” does not exempt it. The classification that follows decides how much scrutiny each system receives; the scope decides only that it enters the machinery at all.","condition":{}},{"kind":"p","text":"Because the Company develops and fine-tunes models of its own, the scope reaches its internal work as squarely as its vendor relationships. A fine-tuned foundation model, a retrained classifier, or a model assembled from open weights enters the machinery as a developed system, with the development obligations the registry and the gates impose, even when the base model came from outside. The Company treats the moment a team decides to adapt a model as the moment the system enters scope, rather than waiting for the adapted model to reach deployment.","condition":{"postures":["builds","both"]}}]},{"number":4,"title":"Component One: The Risk-Tier Classification Model","id":"section-4","blocks":[{"kind":"p","text":"Everything else in this operating model is a function of how a use case gets classified, because the tier determines what diligence attaches, which gates the system must clear, what the registry captures, and who must sign off before it ships. Tiering is therefore the load-bearing judgment in the program, and it is the judgment a sophisticated reader checks first.","condition":{}},{"kind":"p","text":"The model uses four tiers, deliberately aligned to the EU AI Act’s risk categories so that a single classification serves both the NIST-anchored domestic posture and the EU obligation overlay rather than forcing the Company to run two parallel taxonomies.","condition":{}},{"kind":"table","rows":[["Tier","Definition","What the tier triggers"],["Prohibited","Uses the Company will not pursue regardless of business value, because law bars them or they fall outside the Company’s risk appetite. Tracks the EU AI Act prohibited-practices list and the Company’s own red lines.","Hard stop at intake. No gate clears these. Escalation to the committee only to confirm the classification and document the refusal."],["High-Risk","Uses where a failure, bias, or opacity creates material risk to a person’s rights, safety, access to a service, or finances, or to the Company’s own resilience and regulatory standing. Tracks EU AI Act Annex III together with the Company’s sector-specific high-stakes uses.","Full gate sequence with named sign-off at each gate. Mandatory bias and performance evaluation documented before deployment. Heightened registry fields, vendor diligence, human oversight, and EU conformity-assessment logic where the system serves the EU market."],["Limited-Risk","Uses that interact with people or shape decisions but where the consequence of error is recoverable and bounded, typically carrying a transparency obligation rather than a full control stack.","Lightweight gate. Disclosure to affected people that they are interacting with AI. Registration in the registry. Spot-check evaluation rather than full pre-deployment testing. Escalation only if the use expands toward a high-risk decision."],["Minimal-Risk","Uses with no meaningful effect on individuals’ rights or on the Company’s operations and standing, where governance would be friction without protection.","Registration only. Auto-clears the gate on attestation by the use-case owner. Periodic audit that the classification still holds."]],"condition":{}},{"kind":"p","text":"The judgment that makes this model operate, rather than read as a tidy taxonomy, is that tier is a property of the use and its context, not of the technology. The same large language model lands in different tiers depending on what it is pointed at: minimal when it drafts internal email, limited when it answers a customer question with disclosure, high-risk when it produces the rationale for a decision that denies a person something they applied for. A governance program that classifies by model name or vendor will misfire in both directions, waving through a dangerous deployment of an “approved” model and strangling a harmless one. The rubric at Annex C carries the decision logic that moves a use case across the limited-to-high boundary, which is where the consequential calls cluster and where the program most needs a written standard rather than a reviewer’s instinct.","condition":{}},{"kind":"p","text":"Beyond the base use, context raises a tier. The capacity to act without a human in the loop moves a system up, because autonomy compounds the consequence of error, so an agentic system that executes rather than recommends carries more risk than its underlying task implies. Scale and irreversibility move it up for the same reason, since a model whose single decision is small but whose decisions run at volume, or whose errors cannot be unwound, carries aggregate risk that a per-decision view misses.","condition":{}},{"kind":"table","rows":[["Tier","Representative uses at the Company"],["Prohibited","Social scoring of customers; manipulative or deceptive design; untargeted scraping to build facial-recognition databases."],["High-Risk","Credit underwriting and adverse-action decisioning; fraud and AML models that can freeze funds or close accounts; biometric identity verification at onboarding; models feeding regulatory capital or risk reporting; automated employment decision tools in hiring."],["Limited-Risk","Customer-facing chat assistants with disclosure; servicing copilots; internal knowledge retrieval; document summarization a person checks before relying on."],["Minimal-Risk","Code completion; drafting assistance; back-office text classification with a human owner; meeting transcription."]],"condition":{"sector":"finance"}},{"kind":"table","rows":[["Tier","Representative uses at the Company"],["Prohibited","Social scoring; manipulative or deceptive design; emotion inference in the employment context; untargeted facial-recognition scraping."],["High-Risk","Models that gate access to the product for protected groups; safety-critical content moderation at scale; biometric features; models that make or materially shape hiring; and models the Company ships to customers for a high-risk use."],["Limited-Risk","User-facing assistants and copilots with disclosure; recommendation and ranking surfaces; generative features subject to human review; internal retrieval."],["Minimal-Risk","Code completion; internal drafting and summarization; back-office classification with a human owner; telemetry triage."]],"condition":{"sector":"tech"}},{"kind":"table","rows":[["Tier","Representative uses at the Company"],["Prohibited","Any use that would breach client confidentiality by design, mislead a court or a client, or substitute machine output for a lawyer’s required judgment."],["High-Risk","Models that touch privileged or confidential client material; tools that draft or analyze documents a lawyer files or relies on without review; conflicts-screening and intake models; models used in e-discovery or investigations where error changes a legal outcome; automated employment decision tools in the firm’s own hiring."],["Limited-Risk","Client-facing or internal assistants with disclosure and supervision; research and drafting copilots whose output a lawyer reviews; knowledge retrieval across the firm’s own work product."],["Minimal-Risk","Citation formatting; internal drafting assistance; transcription; back-office classification with a human owner."]],"condition":{"sector":"law_firm"}},{"kind":"table","rows":[["Tier","Representative uses at the Company"],["Prohibited","Social scoring; manipulative or deceptive design; emotion inference in the employment context; untargeted facial-recognition scraping."],["High-Risk","Models that decide or materially shape access to a product, service, or benefit; safety-relevant operational models; biometric identification; automated employment decision tools in hiring and promotion."],["Limited-Risk","Customer-facing assistants with disclosure; content generation subject to human review; internal knowledge retrieval; summarization a person checks before relying on."],["Minimal-Risk","Code completion; drafting assistance; back-office text classification with a human owner; transcription."]],"condition":{"sector":"other"}},{"kind":"p","text":"For a Company that fine-tunes or builds for the EU market, the tier fixes a question a deploy-only organization never faces. When the Company fine-tunes a third-party foundation model for a high-risk use, it does not merely deploy that model, it modifies it, and under the EU AI Act that modification can make the Company the provider of a high-risk system, with the provider’s full obligations rather than the deployer’s lighter set. The tier classification is therefore the trigger that routes a fine-tuning project into provider-grade diligence, documented in the registry and tested at the gates.","condition":{"postures":["builds","both"],"markets":["eu"]}}]},{"number":5,"title":"Component Two: The Review Gates","id":"section-5","blocks":[{"kind":"p","text":"A tier model with nothing behind it is a taxonomy. The gates are where classification becomes consequence: the defined points in an AI system’s lifecycle at which it cannot proceed without a specific, documented decision, and where the scrutiny scales with the tier so that high-risk systems clear every gate with named sign-off while minimal-risk systems clear a single gate on attestation.","condition":{}},{"kind":"p","text":"The gates sit at the lifecycle’s decision points, where exposure crystallizes and a stop is still cheap, rather than as a uniform tax applied evenly to every system. Placement is itself the judgment, because a gate in the wrong place either fires too late to prevent the harm or too often to be respected, and a governance program that people route around because its gates are friction without protection has failed more completely than one with no gates at all, since it now carries cost and produces shadow AI at the same time.","condition":{}},{"kind":"table","rows":[["Gate","Lifecycle point","What it checks","Accountable owner","Applies to"],["Gate 0: Intake and classification","A use case is proposed, or a procurement touches AI.","That the use case is registered, scoped, and assigned a risk tier. Routes everything downstream.","AI Governance Office for triage; committee for contested tiers.","All tiers."],["Gate 1: Design and data","Before development or fine-tuning begins, or before a vendor is selected.","Data provenance and rights, training-data transparency obligations, lawful basis, bias exposure in the design, vendor-diligence sufficiency.","Use-case owner, with Legal and the validation owner.","High and limited; review proportionate to tier."],["Gate 2: Pre-deployment validation","Before a system goes live to real users or real decisions.","Performance and bias evaluation against documented thresholds, explainability sufficient for the use, human-oversight design, security review, and EU conformity assessment where applicable. The hard gate for high-risk systems.","Validation owner, Security, Legal; committee sign-off for high-risk.","High mandatory; limited spot-check; minimal attestation."],["Gate 3: Deployment authorization","The decision to release.","That every prior gate is satisfied and documented, that a named owner with authority accepts residual risk, and that monitoring is configured before launch rather than after.","Accountable executive owner; committee for high-risk.","High and limited."],["Gate 4: Post-deployment monitoring and change","Continuously after launch, and at any material change or retraining.","Drift, performance degradation, incident signals, and whether a change is material enough to reopen earlier gates. Retraining or repurposing re-triggers classification.","Use-case owner, with the validation owner and the AI Governance Office.","All deployed systems, intensity by tier."]],"condition":{}},{"kind":"p","text":"A gate that no one can fail is theater, so each gate carries a defined failure path. When a system cannot clear a gate, the gate owner either returns it with documented conditions or escalates it, and a high-risk system that fails pre-deployment validation cannot reach release on a business override alone: the residual-risk acceptance at Gate 3 has to come from a named owner with the authority and the accountability to accept it, recorded in the registry and reported to the committee. The escalation thresholds, the named owners, and the timelines live in Annex F, Escalation and Incident Response.","condition":{}},{"kind":"p","text":"In a regulated financial institution the gates extend a discipline the Company already runs rather than inventing a new one. A mature model-risk practice already validates models independently, accepts risk through a defined hierarchy, and monitors performance in production, so the pre-deployment validation gate aligns to independent model validation, the deployment-authorization gate aligns to the existing risk-acceptance and approval hierarchy, and the monitoring gate aligns to ongoing model performance monitoring. AI governance rides on a control the institution understands, which is what makes adoption realistic rather than aspirational.","condition":{"sector":"finance"}},{"kind":"p","text":"In a technology company the gates align to the release discipline the Company already runs. Engineering teams already stage changes, gate them on evaluation and test suites, release behind flags, and watch production telemetry, so the pre-deployment validation gate aligns to model evaluation and pre-release testing, the deployment-authorization gate aligns to the existing release-approval and rollout process, and the monitoring gate aligns to production monitoring and on-call. AI governance extends the release pipeline rather than competing with it, which is what keeps it from being routed around.","condition":{"sector":"tech"}},{"kind":"p","text":"In a law firm the gates align to the professional-responsibility structure the firm already runs. The firm already screens new matters, clears conflicts, and supervises work product under named partners, so the intake-and-classification gate aligns to matter intake and conflicts screening, the pre-deployment validation gate aligns to supervisory review of the tool against the firm’s competence and confidentiality duties, and the deployment-authorization gate aligns to sign-off by the partner accountable for the work. AI governance extends supervision into the firm’s tooling rather than standing beside it as a separate bureaucracy.","condition":{"sector":"law_firm"}},{"kind":"p","text":"Where the Company sits outside financial services, technology, and legal practice, it may not have a single mature control discipline the gates can ride on, and the gates then stand as their own structure rather than extending an existing one. The Company places each gate at the point where the decision is real, meaning whether to build or buy, whether to deploy, and whether to keep running, and assigns each gate a named owner with the authority to stop the system, so that the gate sequence supplies the rigor that a model-risk or release-engineering practice supplies in a sector that already has one.","condition":{"sector":"other"}},{"kind":"p","text":"Where the Company operates under the New York Department of Financial Services cybersecurity regulation, the security review folded into the pre-deployment validation gate and the monitoring at the post-deployment gate carry the Part 500 obligations as the Department’s October 2024 guidance explains them for AI-related cybersecurity risk, applying the existing requirements to AI rather than adding new ones. The gates assess AI-specific risks, meaning the model’s exposure to adversarial manipulation, the third-party and supply-chain risk it introduces, and the data it concentrates, inside the institution’s existing cybersecurity program rather than in a separate AI review, so that one control satisfies both the governance obligation and the supervisory one.","condition":{"sector":"finance","markets":["ny"]}},{"kind":"p","text":"For a system the Company builds or fine-tunes for a high-risk use that serves the EU market, the pre-deployment validation gate carries the EU AI Act’s provider obligations as a heightened evidentiary standard rather than as a separate process. Conformity assessment, the technical documentation the Act requires, the logging and human-oversight design, and the registration obligations attach at this gate, so that the Company runs one validation sequence with the EU layer raised on top of it. Under the timeline as extended by the 2026 Omnibus agreement, the Act’s high-risk obligations phase in on two tracks, December 2, 2027 for stand-alone high-risk systems in the Annex III areas and August 2, 2028 for high-risk systems integrated into products already regulated under EU product-safety law, and the Company treats the date that applies to its systems as the planning horizon rather than waiting for it to arrive.","condition":{"postures":["builds"],"markets":["eu"]}},{"kind":"p","text":"For a third-party high-risk system the Company deploys into the EU market, the pre-deployment validation gate carries the EU AI Act’s deployer obligations. The Company confirms the provider supplied a system that meets the Act’s requirements, operates it in line with the provider’s instructions, assigns competent human oversight, keeps the logs the system generates, and registers its use where the Act requires. Under the timeline as extended by the 2026 Omnibus agreement, the high-risk obligations phase in on two tracks, December 2, 2027 for stand-alone high-risk systems in the Annex III areas and August 2, 2028 for high-risk systems integrated into products already regulated under EU product-safety law, and the gate is where the Company verifies the deployer obligations are met before the system goes live.","condition":{"postures":["deploys"],"markets":["eu"]}},{"kind":"p","text":"For the Company that both builds and deploys, the pre-deployment validation gate carries the EU AI Act’s obligations on whichever side of the provider-and-deployer line a given system falls. For a system the Company builds or fine-tunes for a high-risk use on the EU market, the gate carries the provider obligations, meaning conformity assessment, the technical documentation the Act requires, the logging and human-oversight design, and registration. For a third-party high-risk system the Company deploys into the EU market, the same gate carries the deployer obligations, meaning confirming the provider met the Act’s requirements, operating the system on the provider’s instructions, assigning competent human oversight, keeping the logs, and registering the use. Under the timeline as extended by the 2026 Omnibus agreement, the high-risk obligations phase in on two tracks, December 2, 2027 for stand-alone high-risk systems in the Annex III areas and August 2, 2028 for high-risk systems integrated into products already regulated under EU product-safety law, and the Company treats the date that applies to each system as the planning horizon, running one validation sequence with the EU layer raised on top of it for the systems it builds and the systems it buys alike.","condition":{"postures":["both"],"markets":["eu"]}}]},{"number":6,"title":"The Intake Flow","id":"section-6","blocks":[{"kind":"p","text":"Intake is the front door, and the program’s entire inventory depends on whether people walk through it or around it. The design problem is a tension that intake either resolves or fails on: governance needs to see every AI use case, and the people proposing those use cases will route them through governance only if doing so is fast enough and clear enough that compliance is easier than evasion. An intake process that takes weeks and reads as an interrogation produces a clean queue and a large shadow inventory of systems that never entered it.","condition":{}},{"kind":"p","text":"Intake is mandatory at the earliest of several triggers, so that a use case cannot mature in the dark and surface only when it is ready to deploy and too sunk to stop: when a team forms an intent to build or fine-tune a model, when a procurement or renewal touches AI (caught by a flag in the procurement workflow so that governance review is a gate on the contract, not an afterthought), when an existing licensed product turns on an AI feature, and when a previously registered system is repurposed for a materially different use. The procurement flag matters disproportionately, because the largest source of ungoverned AI in a large organization is rarely the model a team builds deliberately; it is the AI capability that arrives switched on inside software the business already bought.","condition":{}},{"kind":"p","text":"The form itself stays short by design and does the classification work through routing rather than through length. It captures the use-case owner and accountable executive, a plain-language description of what the system does and what decision or output it produces, the people or populations it affects, the data it uses and where that data came from, whether the system is built, fine-tuned, or procured, and whether it serves or touches the EU market or EU residents. Those answers drive automatic provisional tiering, and the routing logic sends the case where its provisional tier requires: minimal-risk cases clear on the owner’s attestation and land in the registry, limited-risk cases route to the AI Governance Office for confirmation and a transparency-obligation check, and high-risk and contested cases route to the committee with the full diligence stack attached. The form, the routing logic, and the schedule of what attaches at each tier are set out at Annex A.","condition":{}},{"kind":"p","text":"The service-level commitment is part of the control, not a courtesy. Minimal-risk intake clears within a day, limited-risk within a defined short window, and high-risk cases get a scoping response quickly even though full clearance takes longer, because the failure the service level defends against is the one where governance becomes the bottleneck that justifies going around it. A program that cannot answer fast loses the inventory it exists to protect.","condition":{}}]},{"number":7,"title":"The Model and System Registry","id":"section-7","blocks":[{"kind":"p","text":"The registry answers the failure mode that quietly defeats more AI governance programs than any sophisticated risk an organization worries about: the invisible inventory, the gap between the systems an organization believes it runs and the systems it actually runs. A program cannot monitor, audit, retire, or defend a model it does not know exists, and when a regulator, an auditor, or an incident asks the Company what AI it is running and on what data, the registry is the answer or the absence of one.","condition":{}},{"kind":"p","text":"The registry is the Company’s single authoritative inventory of every AI system in scope, populated at intake and maintained across the lifecycle as a living record rather than a point-in-time snapshot that is accurate the day someone builds it and decays from there. It carries every system in scope, whether built or bought, and it holds the fields that let the Company answer the questions it will actually face.","condition":{}},{"kind":"table","rows":[["Field","What it records","Why it matters"],["System ID and name","Unique identifier and plain-language name.","Lets every other system, contract, and incident reference the model unambiguously."],["Use-case owner and accountable executive","The person who runs it and the executive accountable for it.","Diffuse accountability is the precondition for governance failure; the registry forces a single name."],["Risk tier and classification date","Current tier and when it was set.","Drives every downstream control; the date surfaces classifications that have gone stale."],["Build / fine-tune / procure status","Whether the Company developed, adapted, or bought the system.","Determines the obligation set, and for fine-tuned third-party models, flags the provider-status question."],["EU AI Act role","Provider, deployer, or both, for this system.","A fine-tuned high-risk model can make the Company a provider under Article 25; the registry is where that determination lives."],["Foundation model lineage","The base model, version, and provider for built or fine-tuned systems.","A vulnerability or license change in a base model propagates to everything built on it; lineage makes the blast radius visible."],["Training and input data sources","What data trained, fine-tuned, or feeds the system, and its provenance.","Answers training-data transparency obligations and surfaces rights, privacy, and bias exposure at the source."],["Affected populations","Who the system’s outputs touch.","Routes the right bias, fairness, and notice obligations to the right systems."],["Evaluation status and results","Latest performance and bias testing against thresholds.","The evidence the pre-deployment gate produced, kept where monitoring and audit can find it."],["Human-oversight design","How and where a human can review, override, or halt the system.","Distinguishes a recommendation from an unsupervised decision; load-bearing for high-risk and agentic systems."],["Deployment status and environments","Whether and where the system is live.","Separates an approved pilot from a production system at scale, which carry different risk."],["Monitoring configuration and last review","What is monitored and when someone last checked it.","Turns post-deployment monitoring from an intention into a tracked obligation."],["Vendor and contract reference","For procured systems, the vendor and the governing agreement.","Links the system to its diligence record, audit rights, and indemnities."],["Linked incidents","Any escalations or incidents involving the system.","Builds the history that drift and pattern analysis depend on."]],"condition":{}},{"kind":"p","text":"Several fields carry weight that is not obvious until the Company needs them, and they are the fields a build-and-deploy organization cannot afford to leave blank. The EU AI Act role field exists because the provider-versus-deployer distinction determines which obligation set applies, and a Company that fine-tunes a third-party model for a consequential use crosses that line, so recording the determination at registration keeps the Company from discovering its provider obligations during an enforcement inquiry. The foundation-model lineage field exists because a built system inherits risk as much as it creates it, and when a base model ships a vulnerability, a license change, or a withdrawn capability, the Company needs to know in minutes which of its systems sit downstream rather than reconstructing the dependency by hand. The human-oversight field exists because the single most consequential distinction in the inventory is whether a person stands between the model and the world, and that distinction governs how the program classifies, gates, and monitors a system. The full schema, field by field, with the validation rules and the why-this-field notes on the remaining fields, is at Annex B.","condition":{"postures":["builds","both"]}},{"kind":"p","text":"Several fields carry weight that is not obvious until the Company needs them, and for an organization that deploys rather than builds they are the fields that make a procured system governable. The vendor-and-contract-reference field exists because a deployed system’s diligence record, audit rights, and indemnities live in its governing agreement, and the registry is what links the running system to the contract that governs it. The EU AI Act role field exists because even a deployer carries obligations under the Act, and recording the Company’s role as deployer at registration fixes which obligations attach. The human-oversight field exists because the single most consequential distinction in the inventory is whether a person stands between the model and the world, and that distinction governs how the program classifies, gates, and monitors a procured system as much as a built one. The full schema, field by field, with the validation rules and the why-this-field notes on the remaining fields, is at Annex B.","condition":{"postures":["deploys"]}}]},{"number":8,"title":"Vendor and Third-Party AI Diligence","id":"section-8","blocks":[{"kind":"p","text":"Every organization that procures AI has to decide what it demands to know before a third party’s model touches its data, its customers, or its decisions. Vendor diligence is that control, and it is where the provider-and-deployer distinction in the law stops being theoretical.","condition":{}},{"kind":"p","text":"The EU AI Act splits obligations between the provider that develops an AI system and the deployer that uses one, and it assigns the provider the heavier set, including the technical documentation, the conformity assessment, the quality-management system, and the post-market monitoring. The Company is usually the deployer of a vendor’s system and inherits the lighter obligations, and the diligence standard starts by fixing, for every procured system, which side of that line the Company stands on, because that determination sets what the Company must demand from the vendor and what it must produce itself.","condition":{}},{"kind":"p","text":"The diligence standard scales with the tier of the use the Company intends. For a high-risk procured system the Company demands the evidence it would have to produce had it built the system itself: documentation of the model’s training data and its provenance sufficient to meet transparency obligations, the vendor’s own evaluation and bias-testing results with the methodology behind them, model cards and intended-use and known-limitation documentation, the security posture and the vendor’s own AI and cybersecurity controls, contractual audit rights, a defined allocation of liability and indemnity for the model’s failures, notice obligations when the vendor materially changes or retrains the model, and flow-down of these terms to the vendor’s own sub-processors and model suppliers. For limited and minimal uses the standard compresses to the proportionate subset.","condition":{}},{"kind":"p","text":"Training-data provenance has moved from a nicety to a contractual demand, because a vendor who cannot or will not describe what its model was trained on is selling the Company a system it may not be able to deploy lawfully in the markets that now require disclosure, and cannot defend if asked. The diligence checklist, mapped to the ISO/IEC 42001 and EU AI Act provider and deployer split and carrying the tier-scaled evidence schedule, is at Annex D.","condition":{}},{"kind":"p","text":"Because the Company fine-tunes procured models, Article 25 of the EU AI Act can pull it across the line from deployer to provider. A deployer becomes a provider when it puts its own name or trademark on a high-risk system, makes a substantial modification to one, or changes the intended purpose of one in a way that renders it high-risk, and fine-tuning a procured foundation model for a high-risk use sits close to the center of that provision. For every model the Company intends to fine-tune, the diligence therefore fixes not only what the vendor must supply but what the Company itself will owe as a provider once it is done, because the Company inherits the provider’s documentation, conformity, and monitoring obligations the moment it crosses that line.","condition":{"postures":["builds","both"],"markets":["eu"]}},{"kind":"p","text":"Where the Company operates under the New York Department of Financial Services cybersecurity regulation, third-party AI diligence carries the regulation’s third-party service-provider security requirements as well. The Company assesses a vendor’s AI risk and its cybersecurity risk in one diligence rather than two disconnected ones, so that the model’s exposure, the data it concentrates, and the access it is granted are evaluated against the same Part 500 standard the institution applies to any critical service provider.","condition":{"sector":"finance","markets":["ny"]}},{"kind":"p","text":"California’s AB 2013 requires developers of generative AI made available to Californians to publish documentation of the data used to train the system, so a vendor selling into the Company’s California footprint should be able to meet that documentation standard. The Company treats a vendor’s inability to describe its training data sufficiently as an enterprise diligence blocker, declining to deploy a high-risk system whose provider cannot meet the documentation standard the law sets for developers, rather than treating the gap as a paperwork item to resolve later.","condition":{"markets":["ca"]}},{"kind":"p","text":"For systems touching the EU market, provenance carries the EU AI Act’s own data-governance and transparency expectations. The diligence demands training-data documentation sufficient to meet the Act’s standard and to support the technical documentation the Act requires a provider to hold, so that the Company can place a system on the EU market without a documentation gap it cannot close after the fact.","condition":{"markets":["eu"]}},{"kind":"p","text":"Where the Company fine-tunes or builds for the EU market, the EU AI Act’s general-purpose-AI transparency obligations can reach the Company’s own development as well, so the provenance discipline applies to the data the Company uses to train or adapt a model and not only to what it demands from a vendor. The Company documents its own training and fine-tuning data to the standard it requires of its vendors, so that a model it develops can enter the EU market on the same footing as one it buys.","condition":{"postures":["builds","both"],"markets":["eu"]}}]},{"number":9,"title":"Roles and Responsibilities","id":"section-9","blocks":[{"kind":"p","text":"Governance fails when accountability is diffuse, when everyone reviews and no one decides, and when a system ships because four teams each assumed another team owned the call. The matrix puts a single accountable owner on every governance decision and makes explicit where Legal advises, where security tests, where the business owns the outcome, and where the committee holds the authority to stop a deployment. It distributes work across the people who do it and concentrates accountability on the people who answer for it.","condition":{}},{"kind":"table","rows":[["Activity / Decision","Use-case owner","Legal","Security","Model Risk","AI Gov. Committee"],["Use-case intake and description","A","C","I","I","I"],["Risk-tier classification","R","C","I","C","A (contested)"],["Data rights and lawful basis","C","A","I","C","I"],["Bias and performance validation","C","C","I","A","I"],["Security and resilience review","C","C","A","C","I"],["EU role determination","C","A","I","C","I"],["Deployment authorization (high-risk)","R","C","C","C","A"],["Residual-risk acceptance","C","C","I","C","A"],["Post-deployment monitoring","A","I","C","R","I"],["Incident response and escalation","C","C","C","C","A"],["Policy and operating model maintenance","I","C","C","C","A"]],"condition":{}},{"kind":"p","text":"R responsible, A accountable, C consulted, I informed.","condition":{},"note":true},{"kind":"p","text":"The committee is the Govern function made operational: a standing body that holds the authority to stop a deployment, owns the tier classifications that intake escalates as contested, accepts residual risk on high-risk systems, and owns the operating model itself. Its voting membership spans Legal, the validation owner, security, privacy, and the business lines that own the highest-risk uses. Legal sits as accountable for the determinations that are legal in nature, meaning data rights, lawful basis, the provider-versus-deployer call, and regulatory obligations, and as consulted elsewhere, which keeps Legal from becoming the bottleneck owner of decisions the business should own while keeping the legal calls where they belong. The committee charter, membership, quorum, and decision rights sit alongside the escalation thresholds at Annex F.","condition":{}},{"kind":"p","text":"In a financial institution the committee commonly sits with the Chief Legal Officer, the Chief Risk Officer, or a dedicated head of AI governance who reports to one of them, and the validation-owner role on the matrix is the institution’s model-risk-management function.","condition":{"sector":"finance"}},{"kind":"p","text":"In a technology company the committee commonly sits with the General Counsel, a Chief Trust or Chief Risk Officer, or a head of AI governance, with voting weight from engineering and model-safety leadership, and the validation-owner role on the matrix is the team that owns model evaluation and release.","condition":{"sector":"tech"}},{"kind":"p","text":"In a law firm the committee commonly sits with the General Counsel, the managing partner, or a practice-group leadership body, and its membership includes the partners accountable for the highest-risk uses of AI in client work.","condition":{"sector":"law_firm"}},{"kind":"p","text":"Where the Company sits outside financial services, technology, and legal practice, the committee commonly sits with the General Counsel or a Chief Risk or Compliance Officer, and the validation-owner role on the matrix is whichever team the Company makes accountable for testing a model before it is deployed.","condition":{"sector":"other"}},{"kind":"p","text":"In the law-firm configuration, read the Model Risk column as the validation-owner role, which sits with the conflicts and professional-responsibility function rather than with a model-risk department. The partners and staff who clear conflicts, supervise work product, and hold the firm’s competence and confidentiality duties are the ones accountable for validating a tool before it touches client matters.","condition":{"sector":"law_firm"}}]},{"number":10,"title":"Escalation and Incident Response","id":"section-10","blocks":[{"kind":"p","text":"A governance program is judged in its incidents, not in its steady state, and the difference between a contained problem and a public one is usually whether the path existed before the problem arrived rather than improvised during it. Escalation runs on defined thresholds rather than on judgment in the moment, because the moment is exactly when judgment is worst and when the incentive to minimize is strongest.","condition":{}},{"kind":"p","text":"Escalation triggers on a gate failure the gate owner cannot resolve within the gate, on a deployed system that breaches a performance, bias, or drift threshold the registry records, on an incident in which an AI system causes or contributes to customer harm, a wrongful denial of service, a discriminatory outcome, a security breach, or a regulatory exposure, and on the discovery of an ungoverned system already in production. Each trigger carries a named owner, a severity classification, and a timeline, and the severity drives how far and how fast the escalation travels, up to the committee and, for the most serious, to executive leadership and the board.","condition":{}},{"kind":"p","text":"The incident path carries the Company’s external obligations as well as its internal ones, because a serious AI incident is frequently also a reportable event. The thresholds, the named owners, the severity tiers, and the timelines are set out in full in Annex F, Escalation and Incident Response.","condition":{}},{"kind":"p","text":"For a financial institution, an AI incident that produces a wrongful denial, a discriminatory outcome, or an erroneous adverse action implicates consumer-protection and fair-lending obligations, so the incident path routes to the notice, adverse-action, and remediation duties those regimes impose rather than treating the event as an internal model failure alone. The Company identifies which obligation is triggered, who must be notified, and on what timeline, before the operational fix is closed out.","condition":{"sector":"finance"}},{"kind":"p","text":"Where the Company operates under the New York Department of Financial Services cybersecurity regulation, a security event involving an AI system can trigger the regulation’s notification obligation, and the incident path routes to that 72-hour notification rather than discovering the clock after it has run. The 72-hour clock runs from the determination that a reportable Cybersecurity Incident occurred, so the severity classification drives that determination promptly rather than letting it slip to a later review.","condition":{"sector":"finance","markets":["ny"]}},{"kind":"p","text":"Where an incident touches an EU high-risk system, the EU AI Act’s serious-incident reporting attaches, and the incident path routes to the Act’s notification obligation on its timeline. The Company treats an incident involving a high-risk system on the EU market as reportable under the Act unless it has affirmatively determined otherwise, so that the reporting decision is made deliberately rather than missed.","condition":{"markets":["eu"]}},{"kind":"p","text":"For a law firm, an AI incident that exposes privileged or confidential client material, or that taints work product a client relied on, implicates the firm’s duties to its clients and to the bar, so the incident path routes to client notification and to the professional-responsibility reporting those duties require. The firm identifies which client is affected, what the duty of candor to the client and to any tribunal requires, and on what timeline, before the matter is treated as closed.","condition":{"sector":"law_firm"}},{"kind":"p","text":"For a technology company, an AI incident that harms users, exposes their data, or produces an unsafe output at scale implicates user-notification duties and platform-liability exposure, so the incident path routes to breach-notification, user-disclosure, and product-safety obligations rather than to an internal postmortem alone. The Company identifies which users are affected, what disclosure is owed, and on what timeline, before the fix is closed out.","condition":{"sector":"tech"}},{"kind":"p","text":"Where the Company sits outside financial services, technology, and legal practice, a serious AI incident still tends to trigger a sector-specific or general regulatory-reporting obligation, whether a data-breach notification, a product-safety duty, or a sector regulator’s requirement, so the incident path routes the use-case owner and Legal to identify which regime applies, who must be notified, and on what timeline, before the operational fix is closed out. The Company does not assume that the absence of an AI-specific statute means the absence of a reporting duty.","condition":{"sector":"other"}}]},{"number":11,"title":"The Regulatory Posture: Built to Flex","id":"section-11","blocks":[{"kind":"p","text":"The reason this operating model anchors to NIST and treats statutes as an overlay becomes visible the moment the live regulatory landscape is laid out, because that landscape is moving in three directions at once and any control logic wired to a single instrument inherits that instrument’s instability.","condition":{}},{"kind":"table","rows":[["Layer","Instrument","Status","Bearing on the Company"],["Federal","No comprehensive AI statute; governance by executive action","Current posture is deregulatory and preemption-oriented","The federal layer constrains rather than commands; its direction is to clear state law away, not to impose a federal control standard."],["Federal","EO 14365, Ensuring a National Policy Framework for Artificial Intelligence (Dec 11, 2025)","In effect","Directs federal preemption of conflicting state AI laws through a DOJ litigation task force, which is what makes state-specific control logic a liability."],["Federal","EO, Promoting Advanced Artificial Intelligence Innovation and Security (Jun 2, 2026)","In effect","Voluntary AI security review and AI-enabled critical-infrastructure cybersecurity; relevant to the Company’s security posture at the gates."],["Federal","White House Legislative Recommendations (Mar 2026)","Proposed, not law","Would establish a single national framework preempting the state patchwork; a planning signal, not yet an obligation."],["New York","NYC Local Law 144 (Jul 5, 2023)","In effect","Bias audits and candidate notice for automated employment decision tools; directly governs the Company’s hiring-related AI."],["New York","NYDFS AI guidance within Part 500 (Oct 2024)","In effect","Brings AI risk expressly into the financial-services cybersecurity regulation; directly applicable where the Company is a regulated financial institution."],["New York","RAISE Act (effective Jan 1, 2027)","Enacted","Frontier-model safety and disclosure; relevant if the Company’s own development reaches frontier scale."],["New York","LOADinG Act (2024)","In effect","Governs automated decision systems used by NY state government; a directional signal for the Company rather than a direct obligation."],["California","AB 2013, GenAI Training Data Transparency (effective Jan 1, 2026)","In effect","Drives the training-data provenance demand in vendor diligence for systems touching California."],["California","TFAIA and SB 942, AI Transparency Act (2026)","In effect; SB 942 effective Jan 1, 2026","Frontier transparency and AI-content disclosure obligations for the California market."],["EU","EU AI Act","Binding and extraterritorial; high-risk obligations phase in Dec 2, 2027 (stand-alone Annex III) and Aug 2, 2028 (product-integrated)","The binding obligation overlay for any system touching the EU market or EU residents; the planning horizon for high-risk systems."],["Colorado","SB 24-205, repealed and replaced by SB 26-189","SB 26-189 enacted May 14, 2026; key obligations begin Jan 1, 2027","The cautionary tale: the algorithmic-discrimination-plus-impact-assessment model is contested ground, which is precisely why control logic should not wire to it."]],"condition":{}},{"kind":"p","text":"The landscape teaches the design. The state layer is volatile, with New York legislating actively, California building a transparency regime, and Colorado having already enacted, stayed, repealed, and replaced the most ambitious duty-of-care model in the country, which is the clearest evidence available that the algorithmic-discrimination-plus-impact-assessment approach is unsettled doctrine rather than a stable target. The federal layer is pressing to clear the state layer away through preemption rather than to replace it with a federal control standard, which means a company cannot wait for federal clarity that the current posture is structured not to provide. The EU layer is the one binding, durable obligation set, and it reaches the Company extraterritorially.","condition":{}},{"kind":"p","text":"A control wired to a specific statute breaks when that statute moves, and in this environment statutes move constantly. A control built to a NIST function holds, because the function states what good governance does, meaning govern, map, measure, and manage, independent of which jurisdiction currently requires it and on what timeline. The operating model therefore governs to the function and treats the statutory obligations as a configurable overlay that the framework crosswalk at Annex E keeps current: when New York adds an obligation, when California’s transparency rules bite, when the EU deadline arrives, or when a federal preemption ruling clears a state law away, the Company adjusts the notice, documentation, and filing layer while the underlying control, meaning the tiering, the gates, the registry, the diligence, and the monitoring, stands. That is what it means for a governance program to be built to flex, and it is the difference between a program that survives a regulatory year like this one and a compliance checklist that someone has to rewrite every quarter.","condition":{}}]},{"number":12,"title":"Maintenance","id":"section-12","blocks":[{"kind":"p","text":"The operating model is a living instrument, and a governance program that does not maintain its own controls is a snapshot that decays. The committee reviews the operating model on a fixed quarterly cadence and on a trigger basis whenever a material regulatory change lands, a serious incident exposes a gap, or the Company’s own AI development crosses into a capability or scale the current model did not anticipate. The framework crosswalk at Annex E absorbs regulatory change first, so that an update to an obligation flows into the operating model through the crosswalk rather than through a wholesale rewrite. The version, the owner, and the review date sit on the document, because a governance artifact that cannot say when it was last reviewed and by whom invites the question of whether it governs anything at all.","condition":{}}]},{"number":13,"title":"Annexes","id":"section-13","blocks":[{"kind":"p","text":"The body references each annex at the point it becomes relevant, and the annexes are drafted as separate artifacts after the operating model is built. The body states the architecture in full and points to each annex where the operating detail lives, so the body carries the design while the annexes carry the routing, the schema, the rubric, and the escalation specifics an implementer needs. Annexes A, B, and C are published with this document; Annexes D through G are available on request.","condition":{}},{"kind":"p","text":"Annex A. AI Use Case Intake Form. The form, the routing logic, and the schedule of what attaches at each risk tier. Available with this document.","condition":{}},{"kind":"p","text":"Annex B. Model and System Registry Schema. The schema field by field, with validation rules and why-this-field notes on the non-obvious fields. Available with this document.","condition":{}},{"kind":"p","text":"Annex C. Risk-Tier Classification Rubric. The decision logic that moves a use case across the limited-to-high boundary. Available with this document.","condition":{}},{"kind":"p","text":"Annex D. Vendor and Third-Party AI Diligence Checklist. Mapped to the ISO/IEC 42001 and EU AI Act provider and deployer split, with the tier-scaled evidence schedule. Available on request.","condition":{}},{"kind":"p","text":"Annex E. Framework Crosswalk. NIST function to ISO/IEC 42001 clause to EU AI Act obligation, as a living reference table. Available on request.","condition":{}},{"kind":"p","text":"Annex F. Escalation and Incident Response. Named owners, severity tiers, thresholds, and timelines for gate failures and deployed-system incidents. Available on request.","condition":{}},{"kind":"p","text":"Annex G. Responsible AI Principles. The principles layer that sits above the controls. Available on request.","condition":{}}]}]};
  const LABELS = {
    sector: { finance: 'Finance', tech: 'Tech', law_firm: 'Law firm', other: 'Other' },
    posture: { both: 'Builds and deploys', builds: 'Builds or adapts AI', deploys: 'Deploys third-party AI' }
  };
  const DEFAULT_POSTURE = { finance: 'both', tech: 'builds', law_firm: 'deploys', other: 'deploys' };

  function qs(id){ return document.getElementById(id); }
  function cleanCompany(value){ return (value || '').replace(/\s+/g, ' ').trim(); }
  function possessive(name){ return /s$/i.test(name) ? name + '’' : name + '’s'; }
  function articleFor(name){ return /^[AEIOU]/i.test(name) ? 'an ' + name : 'a ' + name; }

  function personalizeText(text, company){
    const name = cleanCompany(company);
    if (!name) return text;
    const poss = possessive(name);
    let out = text;
    out = out.replace('For a Company that fine-tunes or builds for the EU market, the tier fixes', 'For ' + name + ', if it fine-tunes or builds for the EU market, the tier fixes');
    out = out.replace('and a Company that fine-tunes a third-party model for a consequential use crosses that line', 'and when ' + name + ' fine-tunes a third-party model for a consequential use, it crosses that line');
    out = out.replace(/the Company’s/g, poss).replace(/The Company’s/g, poss);
    out = out.replace(/the Company's/g, poss).replace(/The Company's/g, poss);
    out = out.replace(/the Company/g, name).replace(/The Company/g, name);
    return out;
  }

  function visible(block, cfg){
    const c = block.condition || {};
    if (c.sector && c.sector !== cfg.sector) return false;
    if (c.postures && !c.postures.includes(cfg.posture)) return false;
    if (c.markets && c.markets.some(m => !cfg[m])) return false;
    return true;
  }

  function configFromParams(){
    const params = new URLSearchParams(window.location.search);
    const sector = ['finance','tech','law_firm','other'].includes(params.get('sector')) ? params.get('sector') : 'finance';
    const posture = ['both','builds','deploys'].includes(params.get('posture')) ? params.get('posture') : (DEFAULT_POSTURE[sector] || 'both');
    return {
      company: cleanCompany(params.get('company')),
      sector,
      posture,
      ny: params.get('ny') !== '0',
      ca: params.get('ca') !== '0',
      eu: params.get('eu') !== '0'
    };
  }

  function updateUrl(cfg){
    const params = new URLSearchParams();
    if (cfg.company) params.set('company', cfg.company);
    params.set('sector', cfg.sector);
    params.set('posture', cfg.posture);
    params.set('ny', cfg.ny ? '1' : '0');
    params.set('ca', cfg.ca ? '1' : '0');
    params.set('eu', cfg.eu ? '1' : '0');
    history.replaceState(null, '', window.location.pathname + '?' + params.toString());
  }

  function make(tag, className, text){
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (text !== undefined) el.textContent = text;
    return el;
  }

  function appendTable(parent, rows, cfg){
    const wrap = make('div', 'om-table-wrap');
    const table = make('table', 'om-table');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');
    rows.forEach((row, idx) => {
      const tr = document.createElement('tr');
      row.forEach(cell => {
        const el = document.createElement(idx === 0 ? 'th' : 'td');
        el.textContent = personalizeText(cell, cfg.company);
        tr.appendChild(el);
      });
      (idx === 0 ? thead : tbody).appendChild(tr);
    });
    table.append(thead, tbody);
    wrap.appendChild(table);
    parent.appendChild(wrap);
  }

  function appendParagraph(parent, block, cfg){
    const text = personalizeText(block.text, cfg.company);
    const p = make('p', block.note ? 'om-note' : '');
    const annexMatch = text.match(/^Annex ([A-C])\.\s/);
    if (annexMatch) {
      p.className = 'om-annex-link-line';
      const a = document.createElement('a');
      a.href = '/imtheom/annex-' + annexMatch[1].toLowerCase() + '/';
      a.textContent = text;
      p.appendChild(a);
    } else {
      p.textContent = text;
    }
    parent.appendChild(p);
  }

  function appendRequestOnlyAnnexBlock(parent, blocks, cfg){
    const group = make('div', 'om-request-only-block');
    group.tabIndex = 0;
    group.setAttribute('aria-label', 'Annexes available on request');
    group.appendChild(make('div', 'om-helper-message', 'Available on request.'));
    blocks.forEach(block => appendParagraph(group, Object.assign({}, block, {
      text: block.text.replace(/\s*Available on request\.$/, '')
    }), cfg));
    parent.appendChild(group);
  }

  function appendSectionBlocks(parent, blocks, cfg){
    let requestOnly = [];
    function flushRequestOnly(){
      if (!requestOnly.length) return;
      appendRequestOnlyAnnexBlock(parent, requestOnly, cfg);
      requestOnly = [];
    }
    blocks.forEach(block => {
      if (block.kind === 'p' && /^Annex [D-G]\.\s/.test(block.text)) {
        requestOnly.push(block);
        return;
      }
      flushRequestOnly();
      if (block.kind === 'p') appendParagraph(parent, block, cfg);
      if (block.kind === 'table') appendTable(parent, block.rows, cfg);
    });
    flushRequestOnly();
  }

  function currentSectionId(){
    const sections = Array.from(document.querySelectorAll('.om-section'));
    let current = sections[0] ? sections[0].id : null;
    sections.forEach(section => {
      if (section.getBoundingClientRect().top <= 160) current = section.id;
    });
    return current;
  }

  function renderToc(container){
    container.innerHTML = '';
    OPERATING_MODEL_DATA.sections.forEach(section => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + section.id;
      a.textContent = section.number + '. ' + section.title;
      li.appendChild(a);
      container.appendChild(li);
    });
  }

  function appendPrintCover(parent, cfg, markets){
    const cover = make('section', 'om-cover');
    cover.setAttribute('aria-label', 'PDF cover');
    const image = document.createElement('img');
    image.src = '/imtheom/assets/ai-governance-operating-model-cover.png';
    image.alt = personalizeText(OPERATING_MODEL_DATA.front.title, cfg.company) + ' cover';
    cover.appendChild(image);
    parent.appendChild(cover);
  }

  function appendProcessExhibit(parent){
    const exhibit = make('aside', 'om-exhibit om-exhibit--path');
    exhibit.appendChild(make('div', 'om-exhibit__label', 'Operating control path'));
    const flow = make('div', 'om-flow');
    [
      ['Intake', 'Use facts enter once.'],
      ['Risk tier', 'Classification fixes scrutiny.'],
      ['Review gates', 'Evidence clears or stops work.'],
      ['Registry', 'The system record stays live.'],
      ['Monitoring', 'Drift and incidents reopen review.']
    ].forEach(step => {
      const item = make('div', 'om-flow__item');
      item.appendChild(make('strong', '', step[0]));
      item.appendChild(make('span', '', step[1]));
      flow.appendChild(item);
    });
    exhibit.appendChild(flow);
    parent.appendChild(exhibit);
  }

  function appendTierExhibit(parent){
    const exhibit = make('aside', 'om-exhibit');
    exhibit.appendChild(make('div', 'om-exhibit__label', 'Tier consequence ladder'));
    const ladder = make('div', 'om-tier-ladder');
    [
      ['Prohibited', 'Stop at intake.'],
      ['High-risk', 'Full gate sequence and committee sign-off.'],
      ['Limited-risk', 'Proportionate gate review and disclosure where relevant.'],
      ['Minimal-risk', 'Registry record and owner attestation.']
    ].forEach(row => {
      const item = make('div', 'om-tier-ladder__item');
      item.appendChild(make('strong', '', row[0]));
      item.appendChild(make('span', '', row[1]));
      ladder.appendChild(item);
    });
    exhibit.appendChild(ladder);
    parent.appendChild(exhibit);
  }

  function appendGateExhibit(parent){
    const exhibit = make('aside', 'om-exhibit');
    exhibit.appendChild(make('div', 'om-exhibit__label', 'Gate sequence'));
    const gates = make('div', 'om-gate-map');
    [
      ['0', 'Intake and classification'],
      ['1', 'Design, data, and vendor evidence'],
      ['2', 'Pre-deployment validation'],
      ['3', 'Deployment authorization'],
      ['4', 'Monitoring and change review']
    ].forEach(gate => {
      const item = make('div', 'om-gate-map__item');
      item.appendChild(make('span', '', 'Gate ' + gate[0]));
      item.appendChild(make('strong', '', gate[1]));
      gates.appendChild(item);
    });
    exhibit.appendChild(gates);
    parent.appendChild(exhibit);
  }

  function appendRegistryExhibit(parent){
    const exhibit = make('aside', 'om-exhibit');
    exhibit.appendChild(make('div', 'om-exhibit__label', 'Registry lifecycle'));
    const lifecycle = make('div', 'om-registry-map');
    [
      'Proposed',
      'In review',
      'Evaluation approved',
      'Live',
      'Suspended or retired'
    ].forEach(state => lifecycle.appendChild(make('span', '', state)));
    exhibit.appendChild(lifecycle);
    parent.appendChild(exhibit);
  }

  function appendSectionExhibit(parent, sectionNumber){
    if (sectionNumber === 2) appendProcessExhibit(parent);
    if (sectionNumber === 4) appendTierExhibit(parent);
    if (sectionNumber === 5) appendGateExhibit(parent);
    if (sectionNumber === 7) appendRegistryExhibit(parent);
  }

  function renderDocument(cfg, preservePlace){
    const article = qs('om-document');
    if (!article) return;
    const anchor = preservePlace ? currentSectionId() : null;
    article.innerHTML = '';
    article.className = 'om-sheet om-body';
    const markets = ['ny','ca','eu'].filter(m => cfg[m]).map(m => ({ny:'NY',ca:'CA',eu:'EU'}[m])).join(', ') || 'No selected market overlays';

    appendPrintCover(article, cfg, markets);

    article.appendChild(make('div', 'om-rule-light'));
    article.appendChild(make('div', 'om-document-kicker', 'Operating Model'));
    article.appendChild(make('h1', 'om-title', personalizeText(OPERATING_MODEL_DATA.front.title, cfg.company)));
    article.appendChild(make('p', 'om-subtitle', personalizeText(OPERATING_MODEL_DATA.front.subtitle, cfg.company)));

    const meta = make('div', 'om-meta-row');
    [['Version', OPERATING_MODEL_DATA.front.version.replace('Version ', '')], ['Owner', OPERATING_MODEL_DATA.front.owner], ['Last reviewed', OPERATING_MODEL_DATA.front.reviewed]].forEach(pair => {
      const span = document.createElement('span');
      const strong = document.createElement('strong');
      strong.textContent = pair[0] + ': ';
      span.append(strong, document.createTextNode(pair[1]));
      meta.appendChild(span);
    });
    article.appendChild(meta);

    const config = make('div', 'om-print-config');
    config.textContent = 'Configured for: ' + (cfg.company || 'the Company') + ' | Sector: ' + LABELS.sector[cfg.sector] + ' | AI operating posture: ' + LABELS.posture[cfg.posture] + ' | Markets: ' + markets;
    article.appendChild(config);

    const disclaimer = make('p', 'om-doc-disclaimer', personalizeText(OPERATING_MODEL_DATA.front.disclaimer, cfg.company));
    article.appendChild(disclaimer);

    const contents = make('nav', 'om-doc-contents');
    contents.setAttribute('aria-label', 'Document contents');
    contents.appendChild(make('h2', '', 'Contents'));
    const ol = document.createElement('ol');
    OPERATING_MODEL_DATA.sections.forEach(section => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = '#' + section.id;
      a.textContent = section.number + '. ' + section.title;
      li.appendChild(a);
      ol.appendChild(li);
    });
    contents.appendChild(ol);
    article.appendChild(contents);

    OPERATING_MODEL_DATA.sections.forEach(section => {
      const sec = make('section', 'om-section');
      sec.id = section.id;
      sec.appendChild(make('div', 'om-section-mark', 'Section ' + section.number));
      sec.appendChild(make('h2', '', section.title));
      appendSectionBlocks(sec, section.blocks.filter(block => visible(block, cfg)), cfg);
      appendSectionExhibit(sec, section.number);
      article.appendChild(sec);
    });

    const foot = make('div', 'om-doc-identity');
    foot.appendChild(make('strong', '', 'Julio Macedo'));
    foot.appendChild(make('span', '', 'Senior Attorney | AI Governance & Legal Ops'));
    const site = document.createElement('a');
    site.href = '/ai/';
    site.textContent = 'jhmacal.com';
    foot.appendChild(site);
    article.appendChild(foot);

    let externalActions = qs('om-external-actions');
    if (!externalActions && article.parentElement) {
      externalActions = make('div', 'om-external-actions');
      externalActions.id = 'om-external-actions';
      article.insertAdjacentElement('afterend', externalActions);
    }
    if (externalActions) {
      externalActions.innerHTML = '';
      const btn = make('button', 'om-print-button');
      btn.type = 'button';
      btn.title = 'Download the configured operating model as a clean PDF.';
      btn.setAttribute('aria-label', 'Download configured operating model as PDF');
      btn.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 3v11"></path><path d="m7 10 5 5 5-5"></path><path d="M5 21h14"></path></svg><span class="om-visually-hidden">Download configured operating model as PDF</span>';
      btn.addEventListener('click', () => window.print());
      externalActions.appendChild(btn);
    }

    updateActiveToc();
    window.dispatchEvent(new CustomEvent('imtheom:rendered'));
    if (anchor) {
      const target = document.getElementById(anchor);
      if (target) target.scrollIntoView({ block: 'start' });
    }
  }

  function updateActiveToc(){
    const links = Array.from(document.querySelectorAll('#om-rail-toc a'));
    const id = currentSectionId();
    links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === '#' + id));
  }

  function bindLanding(){
    const form = qs('om-config-form');
    if (!form) return;
    const sector = qs('sector');
    const posture = qs('posture');
    let userChangedPosture = false;
    posture.addEventListener('change', () => { userChangedPosture = true; });
    sector.addEventListener('change', () => {
      if (!userChangedPosture) posture.value = DEFAULT_POSTURE[sector.value] || 'both';
    });
    form.addEventListener('submit', event => {
      event.preventDefault();
      const params = new URLSearchParams();
      const company = cleanCompany(qs('company').value);
      if (company) params.set('company', company);
      params.set('sector', sector.value);
      params.set('posture', posture.value);
      params.set('ny', form.elements.ny.checked ? '1' : '0');
      params.set('ca', form.elements.ca.checked ? '1' : '0');
      params.set('eu', form.elements.eu.checked ? '1' : '0');
      window.location.href = '/imtheom/document/?' + params.toString();
    });
  }

  function bindDocument(){
    if (!qs('om-document')) return;
    const cfg = configFromParams();
    renderToc(qs('om-rail-toc'));
    qs('rail-company').value = cfg.company;
    qs('rail-sector').value = cfg.sector;
    qs('rail-posture').value = cfg.posture;
    qs('rail-ny').checked = cfg.ny;
    qs('rail-ca').checked = cfg.ca;
    qs('rail-eu').checked = cfg.eu;

    function readCfg(){
      return {
        company: cleanCompany(qs('rail-company').value),
        sector: qs('rail-sector').value,
        posture: qs('rail-posture').value,
        ny: qs('rail-ny').checked,
        ca: qs('rail-ca').checked,
        eu: qs('rail-eu').checked
      };
    }

    function rerender(){
      const next = readCfg();
      updateUrl(next);
      renderDocument(next, true);
    }

    ['rail-company','rail-sector','rail-posture','rail-ny','rail-ca','rail-eu'].forEach(id => {
      qs(id).addEventListener(id === 'rail-company' ? 'input' : 'change', rerender);
    });
    window.addEventListener('scroll', updateActiveToc, { passive: true });
    renderDocument(cfg, false);
  }

  bindLanding();
  bindDocument();
  window.OPERATING_MODEL_TEST = { data: OPERATING_MODEL_DATA, visible, personalizeText };
})();
