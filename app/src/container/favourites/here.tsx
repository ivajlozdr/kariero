import { FC } from "react";

const Favourites: FC = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-white">
        <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#25665b]"></div>
            <span className="text-xl font-bold">Teal Brand</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#"
              className="text-sm font-medium hover:text-[#4cb5ae] transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-[#4cb5ae] transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-[#4cb5ae] transition-colors"
            >
              Services
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-[#4cb5ae] transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#"
              className="text-sm font-medium hover:text-[#4cb5ae] transition-colors"
            >
              Contact
            </a>
          </nav>
          <button className="rounded-md bg-[#25665b] px-4 py-2 text-sm font-medium text-white hover:bg-[#1d514a] transition-colors">
            Get Started
          </button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#25665b]">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Modern Solutions for Your Business Needs
                </h1>
                <p className="text-[#e0e0e0] md:text-xl">
                  We provide innovative solutions to help your business grow and
                  succeed in today's competitive market.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <button className="rounded-md bg-[#4cb5ae] px-4 py-2 text-sm font-medium text-white hover:bg-[#3da19b] transition-colors">
                    Learn More
                  </button>
                  <button className="rounded-md border border-white px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                    Contact Us
                  </button>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <img
                  src="https://placehold.co/500x400"
                  alt="Hero Image"
                  className="rounded-lg object-cover w-full max-w-[500px] h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4cb5ae]/20 px-3 py-1 text-sm text-[#25665b]">
                  Our Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What We Offer
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Discover the range of services designed to take your business
                  to the next level.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm"
                >
                  <div className="rounded-full bg-[#25665b] p-3">
                    <i className="ti ti-chevron-right h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Feature {i}</h3>
                  <p className="text-center text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                  <a href="#" className="text-[#4cb5ae] hover:underline">
                    Learn more
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-[#4cb5ae]/20 px-3 py-1 text-sm text-[#25665b]">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  What Our Clients Say
                </h2>
                <p className="max-w-[700px] text-gray-500 md:text-xl">
                  Don't just take our word for it. Here's what our clients have
                  to say.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex flex-col space-y-4 rounded-lg border p-6 shadow-sm bg-white"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-[#25665b]"></div>
                    <div>
                      <h4 className="font-bold">Client Name</h4>
                      <p className="text-sm text-gray-500">Company {i}</p>
                    </div>
                  </div>
                  <p className="text-gray-500">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#25665b]">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-white">
                  Ready to Get Started?
                </h2>
                <p className="max-w-[700px] text-[#e0e0e0] md:text-xl">
                  Join hundreds of satisfied customers who have transformed
                  their business with our solutions.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <button className="rounded-md bg-white px-4 py-2 text-sm font-medium text-[#25665b] hover:bg-gray-100 transition-colors">
                  Get Started
                </button>
                <button className="rounded-md border border-white px-4 py-2 text-sm font-medium text-white hover:bg-white/10 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-12 md:py-16 lg:py-20">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-[#25665b]"></div>
                <span className="text-xl font-bold">Teal Brand</span>
              </div>
              <p className="text-sm text-gray-500">
                Providing innovative solutions since 2010. We help businesses
                grow and succeed.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-[#4cb5ae]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-[#4cb5ae]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-[#4cb5ae]"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-[#4cb5ae]"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-[#4cb5ae]"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-[#4cb5ae]"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-[#4cb5ae]"
                  >
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-[#4cb5ae]"
                  >
                    UI/UX Design
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-[#4cb5ae]"
                  >
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-[#4cb5ae]"
                  >
                    Consulting
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <i className="ti ti-map-pin h-4 w-4 text-[#25665b]" />
                  <span className="text-sm text-gray-500">
                    123 Business Street, City, Country
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ti ti-phone h-4 w-4 text-[#25665b]" />
                  <span className="text-sm text-gray-500">
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <i className="ti ti-mail h-4 w-4 text-[#25665b]" />
                  <span className="text-sm text-gray-500">
                    info@tealbrand.com
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Teal Brand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Favourites;
