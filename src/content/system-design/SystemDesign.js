import './SystemDesign.css';
import Glossary from './systems/glossary/Glossary';
import SampleDesigns from './systems/sample-designs/SampleDesigns';
import Practice from './systems/practice/Practice';

function SystemDesign() {
  return (
    <div className="system-design">
      <div className="sub-content-item">
        <Glossary />
      </div>
      <div className="sub-content-item">
        <SampleDesigns />
      </div>
      <div className="sub-content-item">
        <Practice />
      </div>
    </div>
  );
}

export default SystemDesign;

// how the internet works: https://explained-from-first-principles.com/internet/
// what happens when: https://github.com/alex/what-happens-when
