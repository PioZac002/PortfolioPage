import { useState, useCallback, useRef, useEffect } from 'react';
import { CopyProvider } from './context/CopyContext';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/language';
import RecordHeader from './components/RecordHeader/RecordHeader';
import Subject from './components/Subject/Subject';
import Diagnosis from './components/Diagnosis/Diagnosis';
import Competence from './components/Competence/Competence';
import Construction from './components/Construction/Construction';
import Qualifications from './components/Qualifications/Qualifications';
import Closure from './components/Closure/Closure';

const EMAIL = 'piotrek.zacminski2002@gmail.com';

const Record = () => {
  const { t } = useLanguage();
  const [emailCopied, setEmailCopied] = useState(false);
  const timer = useRef(null);

  /* Sections mount after the document is parsed, so the browser has already
     given up on any fragment in the URL by the time they exist. A deep link
     someone was sent — .../#construction — has to be re-applied once. */
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    const node = document.getElementById(id);
    if (!node) return;
    window.scrollTo({ top: node.offsetTop - 74, behavior: 'auto' });
  }, []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      /* Older browsers and insecure contexts have no clipboard API; the
         address is printed beside the control either way, so the reader can
         always take it by hand. */
      const field = document.createElement('textarea');
      field.value = EMAIL;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.opacity = '0';
      document.body.appendChild(field);
      field.select();
      try {
        document.execCommand('copy');
      } catch {
        /* nothing further to try */
      }
      document.body.removeChild(field);
    }

    setEmailCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setEmailCopied(false), 2600);
  }, []);

  return (
    <div className="sheet">
      <a className="skip" href="#subject">
        {t.index.skip}
      </a>

      <RecordHeader />

      <main>
        <div className="sheet__inner">
          <Subject onCopyEmail={copyEmail} emailCopied={emailCopied} />
          <Diagnosis />
          <Competence />
          <Construction />
          <Qualifications />
        </div>

        <Closure onCopyEmail={copyEmail} emailCopied={emailCopied} />
      </main>

      <p className="vh" role="status" aria-live="polite">
        {emailCopied ? `${t.closure.emailCopied}: ${EMAIL}` : ''}
      </p>
    </div>
  );
};

const App = () => (
  <CopyProvider>
    <LanguageProvider>
      <Record />
    </LanguageProvider>
  </CopyProvider>
);

export default App;
