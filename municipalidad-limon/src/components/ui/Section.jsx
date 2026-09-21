// src/components/ui/Section.jsx

import Container from './Container';

function Section({ children, title, className = '' }) {
  return (
    <section className={`section ${className}`}>
      <Container>
        {title && <h2>{title}</h2>}
        {children}
      </Container>
    </section>
  );
}

export default Section;