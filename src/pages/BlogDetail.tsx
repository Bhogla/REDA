import { useNavigation } from '../context/NavigationContext';
import { getBlogBySlug, categoryColors, blogPosts } from '../data/blogData';

export default function BlogDetail() {
  const { blogSlug, navigate } = useNavigation();
  const post = blogSlug ? getBlogBySlug(blogSlug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg-warm">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-brand-primary mb-4">
            Post Not Found
          </h1>
          <p className="text-brand-secondary mb-6">
            The blog post you're looking for doesn't exist.
          </p>
          <button
            onClick={() => navigate('blog')}
            className="px-6 py-3 bg-green-deep text-white rounded-xl font-semibold hover:bg-green-deep/90 transition-colors"
          >
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  // Simple markdown-like rendering for content
  const renderContent = (raw: string) => {
    const lines = raw.trim().split('\n');
    const elements: JSX.Element[] = [];
    let tableRows: string[][] = [];
    let tableHeaders: string[] = [];
    let inTable = false;
    let listItems: string[] = [];
    let inList = false;
    let orderedItems: string[] = [];
    let inOrderedList = false;

    const flushList = () => {
      if (inList && listItems.length > 0) {
        elements.push(
          <ul key={`ul-${elements.length}`} className="list-disc list-inside space-y-2 text-brand-secondary leading-relaxed mb-6 pl-2">
            {listItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ul>
        );
        listItems = [];
        inList = false;
      }
    };

    const flushOrderedList = () => {
      if (inOrderedList && orderedItems.length > 0) {
        elements.push(
          <ol key={`ol-${elements.length}`} className="list-decimal list-inside space-y-2 text-brand-secondary leading-relaxed mb-6 pl-2">
            {orderedItems.map((item, i) => (
              <li key={i} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ol>
        );
        orderedItems = [];
        inOrderedList = false;
      }
    };

    const flushTable = () => {
      if (inTable && tableHeaders.length > 0) {
        elements.push(
          <div key={`tbl-${elements.length}`} className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-green-deep/5">
                  {tableHeaders.map((h, i) => (
                    <th key={i} className="text-left px-4 py-3 font-semibold text-brand-primary border-b-2 border-green-deep/20">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, ri) => (
                  <tr key={ri} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    {row.map((cell, ci) => (
                      <td key={ci} className="px-4 py-3 text-brand-secondary">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
        tableHeaders = [];
        tableRows = [];
        inTable = false;
      }
    };

    const formatInline = (text: string) => {
      return text
        .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-brand-primary">$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>');
    };

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmed = line.trim();

      // Empty line
      if (trimmed === '') {
        flushList();
        flushOrderedList();
        flushTable();
        continue;
      }

      // Table separator row (---|---)
      if (/^\|[\s\-:|]+\|$/.test(trimmed)) {
        continue;
      }

      // Table row
      if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
        const cells = trimmed.slice(1, -1).split('|').map((c) => c.trim());
        if (!inTable) {
          tableHeaders = cells;
          inTable = true;
        } else {
          tableRows.push(cells);
        }
        continue;
      }

      // Headings
      if (trimmed.startsWith('## ')) {
        flushList();
        flushOrderedList();
        flushTable();
        elements.push(
          <h2 key={`h2-${elements.length}`} className="text-2xl font-bold text-brand-primary mt-10 mb-4">
            {trimmed.slice(3)}
          </h2>
        );
        continue;
      }
      if (trimmed.startsWith('### ')) {
        flushList();
        flushOrderedList();
        flushTable();
        elements.push(
          <h3 key={`h3-${elements.length}`} className="text-xl font-semibold text-brand-primary mt-8 mb-3">
            {trimmed.slice(4)}
          </h3>
        );
        continue;
      }

      // Unordered list
      if (trimmed.startsWith('- ')) {
        flushOrderedList();
        flushTable();
        inList = true;
        listItems.push(trimmed.slice(2));
        continue;
      }

      // Ordered list
      const orderedMatch = trimmed.match(/^(\d+)\.\s+/);
      if (orderedMatch) {
        flushList();
        flushTable();
        inOrderedList = true;
        orderedItems.push(trimmed.slice(orderedMatch[0].length));
        continue;
      }

      // Paragraph
      flushList();
      flushOrderedList();
      flushTable();
      elements.push(
        <p
          key={`p-${elements.length}`}
          className="text-brand-secondary leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
        />
      );
    }

    flushList();
    flushOrderedList();
    flushTable();

    return elements;
  };

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-bg-warm">
      {/* Hero Image */}
      <section className="relative pt-20">
        <div className="h-64 md:h-96 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      </section>

      {/* Article Content */}
      <section className="relative -mt-20 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            {/* Meta */}
            <div className="flex items-center gap-3 mb-6">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  categoryColors[post.category] ?? 'bg-gray-100 text-gray-600'
                }`}
              >
                {post.category}
              </span>
              <span className="text-sm text-gray-400">{post.date}</span>
              <span className="text-sm text-gray-400">·</span>
              <span className="text-sm text-gray-400">{post.readTime}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-lg text-brand-secondary leading-relaxed mb-8 pb-8 border-b border-gray-100">
              {post.excerpt}
            </p>

            {/* Content */}
            <div className="prose-custom">
              {renderContent(post.content)}
            </div>

            {/* Back to Blog */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <button
                onClick={() => navigate('blog')}
                className="inline-flex items-center gap-2 text-green-deep font-semibold hover:gap-3 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to all articles
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="pb-20 bg-bg-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-brand-primary mb-8">
              More Articles
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  onClick={() => navigate('blogDetail', related.slug)}
                  className="group bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-1 cursor-pointer flex flex-col"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span
                      className={`self-start px-2 py-0.5 rounded-full text-xs font-semibold mb-2 ${
                        categoryColors[related.category] ?? 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {related.category}
                    </span>
                    <h3 className="text-base font-bold text-brand-primary group-hover:text-green-deep transition-colors line-clamp-2 mb-2">
                      {related.title}
                    </h3>
                    <p className="text-xs text-gray-400 mt-auto">{related.date}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
