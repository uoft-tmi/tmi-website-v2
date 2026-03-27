export default function Home() {
    return (
          <main className="min-h-dvh w-full bg-background flex flex-col items-center justify-center px-6 pt-40 py-16 gap-16">
              <section className="text-center space-y-6 -translate-y-6 sm:-translate-y-8">
                  <h1 className="text-8xl font-extrabold tracking-tight text-primary sm:text-9xl">UofT TMI</h1>
                  <p className="text-xl text-text-muted sm:text-2xl">Building Trustworthy Machine Intelligence</p>
                  <div className="mt-8 flex items-center justify-center gap-3">
                      <a
                          href="#learn-more"
                          className="rounded-md bg-secondary px-5 py-2.5 text-sm font-semibold text-on-accent shadow-sm
                          transition hover:bg-hover-teal focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                      >
                          Join Us
                      </a>
                  </div>
              </section>
              <section id="learn-more" className="max-w-3xl pt-20 space-y-4 text-center">
                  <h2 className="text-3xl font-bold text-secondary sm:text-4xl">Our Mission</h2>
                  <p className="text-lg leading-relaxed text-text-primary">
                                          Our mission is to empower students to build and understand AI systems that are reliable,
                      interpretable, and aligned with human values. Through collaboration, education, and community
                      engagement, we work to ensure that machine intelligence benefits society responsibly.
                  </p>
              </section>
              <section className="w-full px-6 py-10">
                  <h2 className="mb-12 text-center text-4xl font-bold text-secondary">
                  Get Involved
                  </h2>
              <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                  <div className="rounded-2xl bg-white dark:bg-card p-8 shadow-sm transition hover:shadow-md">
                      <h3 className="mb-3 text-xl font-semibold text-text-primary">Join Mailing List</h3>
                      <p className="text-text-muted">
                          Stay updated with our latest research and projects
                      </p>
                  </div>
                  <div className="rounded-2xl bg-white dark:bg-card p-8 shadow-sm transition hover:shadow-md">
                      <h3 className="mb-3 text-xl font-semibold text-text-primary">Discord</h3>
                      <p className="text-text-muted">
                        Connect with us
                      </p>
                  </div>
                  <div className="rounded-2xl bg-white dark:bg-card p-8 shadow-sm transition hover:shadow-md">
                     <h3 className="mb-3 text-xl font-semibold text-text-primary">Upcoming Events</h3>
                     <p className="text-text-muted">
                       Join us in our next workshop, seminar, or event
                     </p>
                  </div>
              </div>
              </section>
          </main>
    );
}