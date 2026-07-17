# resume

This folder contains the public jhmacal.com resume page and its page-specific script.

Controlling governance:

`/Users/macal/Documents/JHMACAL MASTER FOLDER/PRODUCTION_GOVERNANCE_STANDARD.md`

No push, deploy, publish, promote, live replacement, or external release is authorized unless Julio explicitly approves after the required proof.

Every task touching this folder must start with a Task Charter and Instruction Fidelity Packet, then end with a Gate Report or HOLD.

If this folder contains sources, evidence, assets, renders, redactions, tables, flowcharts, print files, or downloadable files, preserve source files separately from derived display or output files.

Validate a changed resume page before release:

```bash
python3 ../scripts/validate-production-governance.py index.html --render-dir /path/to/render/proofs --touched-dir .
```
