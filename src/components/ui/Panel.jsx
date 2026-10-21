import useInView from '../../hooks/useInView';

export default function Panel({ id, image, children, className = '' }) {
  const [ref, visible] = useInView();

  return (
    <section
      id={id}
      ref={ref}
      className={`relative flex min-h-svh snap-start items-center overflow-hidden bg-gradient-to-br from-ink via-ink-soft to-crimson-dark/40 ${className}`}
    >
      {image && (
        <>
          <img
            src={image}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-transform duration-[1800ms] ease-soft motion-reduce:transition-none ${
              visible ? 'scale-100' : 'scale-110'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/60" />
        </>
      )}

      <div
        className={`relative z-10 mx-auto w-full max-w-7xl px-6 py-24 transition-all duration-1000 ease-soft md:px-12 motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        {children}
      </div>
    </section>
  );
}   