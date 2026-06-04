(function(){
  const originalTitle = document.title;
  const terms = [
    ['ISO/IEC 42001', 'World’s first certifiable international standard for an Artificial Intelligence Management System (AIMS).'],
    ['NIST Generative AI Profile', 'NIST profile applying the AI Risk Management Framework to generative AI systems.'],
    ['EU AI Act', 'European Union artificial intelligence regulation, with risk-tiered obligations for AI systems.'],
    ['NYDFS', 'New York Department of Financial Services.'],
    ['NYC', 'New York City.'],
    ['AB 2013', 'California law requiring generative AI training-data transparency for covered developers.'],
    ['SB 942', 'California AI Transparency Act.'],
    ['TFAIA', 'California Transparency in Frontier Artificial Intelligence Act.'],
    ['RAISE Act', 'New York frontier AI safety and disclosure statute.'],
    ['LOADinG Act', 'New York law governing automated decision systems used by state agencies.'],
    ['AML', 'Anti-money laundering.'],
    ['AEDT', 'Automated employment decision tool.'],
    ['HIPAA', 'Health Insurance Portability and Accountability Act.'],
    ['FDA', 'U.S. Food and Drug Administration.'],
    ['SaMD', 'Software as a Medical Device.'],
    ['PHI', 'Protected health information.'],
    ['NPI', 'Nonpublic information.'],
    ['RAG', 'Retrieval-augmented generation.'],
    ['DPA', 'Data processing agreement.'],
    ['SOW', 'Statement of work.'],
    ['API', 'Application programming interface.'],
    ['NIST', 'National Institute of Standards and Technology.']
  ];

  function cleanPrintTitle(){
    const heading = document.querySelector('.playbook-title, .playbook-annex-title');
    const title = heading && heading.textContent ? heading.textContent.replace(/\s+/g, ' ').trim() : 'AI Governance Playbook';
    return title + ' | Julio Macedo';
  }

  function termRegex(term){
    return new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  }

  function shouldSkip(node){
    const parent = node.parentElement;
    if (!parent) return true;
    return Boolean(parent.closest('script, style, a, button, select, input, textarea, .playbook-term, .playbook-cover'));
  }

  function findNext(value, seen){
    let best = null;
    terms.forEach(([term, definition]) => {
      if (seen.has(term)) return;
      const match = termRegex(term).exec(value);
      if (!match) return;
      if (!best || match.index < best.index || (match.index === best.index && term.length > best.term.length)) {
        best = { term, definition, index: match.index };
      }
    });
    return best;
  }

  function decorateTerms(){
    const root = document.querySelector('.playbook-sheet, .playbook-annex-sheet');
    if (!root) return;
    root.querySelectorAll('.playbook-term').forEach(el => {
      el.replaceWith(document.createTextNode(el.textContent));
    });
    const seen = new Set();
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node){
        if (shouldSkip(node) || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => {
      let current = node;
      while (current && current.nodeValue) {
        const found = findNext(current.nodeValue, seen);
        if (!found) break;
        const value = current.nodeValue;
        const before = value.slice(0, found.index);
        const matchText = value.slice(found.index, found.index + found.term.length);
        const after = value.slice(found.index + found.term.length);
        const frag = document.createDocumentFragment();
        if (before) frag.appendChild(document.createTextNode(before));
        const span = document.createElement('span');
        span.className = 'playbook-term';
        span.tabIndex = 0;
        span.setAttribute('role', 'note');
        span.dataset.definition = found.definition;
        span.textContent = matchText;
        frag.appendChild(span);
        const afterNode = after ? document.createTextNode(after) : null;
        if (afterNode) frag.appendChild(afterNode);
        current.parentNode.replaceChild(frag, current);
        seen.add(found.term);
        current = afterNode;
      }
    });
  }

  window.addEventListener('beforeprint', () => {
    document.title = cleanPrintTitle();
  });

  window.addEventListener('afterprint', () => {
    document.title = originalTitle;
  });

  window.addEventListener('playbook:rendered', decorateTerms);
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', decorateTerms);
  } else {
    decorateTerms();
  }
})();
