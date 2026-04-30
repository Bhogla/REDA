import { useNavigation } from '../context/NavigationContext';
import { blogPosts, categoryColors } from '../data/blogData';

export default function Blog() {
  const { navigate } = useNavigation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-14 bg-gradient-to-br from-green-deep via-green-deep/95 to-green-deep/90 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-green-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/15 backdrop-blur rounded-full text-white/90 text-sm font-medium mb-6 animate-on-scroll">
            Our Blog
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-on-scroll">
            Insights &amp; Stories
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto animate-on-scroll">
            Stay updated with the latest trends, research, and stories from the
            world of renewable energy and sustainable development.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-14 bg-bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                onClick={() => navigate('blogDetail', post.slug)}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1.5 cursor-pointer animate-on-scroll flex flex-col"
              >
                {/* Image */}
                <div className="h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-lg font-bold text-brand-primary mb-2 group-hover:text-green-deep transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  <p className="text-sm text-brand-secondary leading-relaxed mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <time className="text-xs text-gray-400">{post.date}</time>
                    <span className="text-sm font-semibold text-green-deep group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center gap-1">
                      Read more
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-green-deep to-green-deep/90">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-on-scroll">
            Stay in the Loop
          </h2>
          <p className="text-lg text-white/80 mb-8 animate-on-scroll">
            Subscribe to our newsletter and never miss an update on renewable
            energy insights and REDA initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-on-scroll">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30 sm:w-80"
            />
            <button className="px-8 py-3 rounded-xl bg-white text-green-deep font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
