import "./Section.sass";

function Section({ children, name, title, subtitle = null }) {
  return (
    <section className={`section section_${name}`}>
      <h2 className='section__title'>{title}</h2>
      {subtitle && <p className='section__subtitle'>{subtitle}</p>}
      {children}
    </section>
  );
}
export default Section;
