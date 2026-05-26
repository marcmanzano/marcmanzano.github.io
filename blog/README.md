# Blog Posts

This directory contains all blog post HTML files.

## How to Add a New Blog Post

### Step 1: Create Your Post File

1. **Copy the template:**
   - Duplicate `post-template.html`
   - Rename it to match your post (e.g., `my-first-post.html`)

2. **Edit the HTML file:**
   - Update the `<title>` tag
   - Update the meta description
   - Change the post date in `<div class="post-date">`
   - Update the post tags (quantum, security, cryptography, personal, etc.)
   - Replace "Your Blog Post Title Goes Here" with your actual title
   - Write your content!

### Step 2: Add Your Post to the Blog Listing

1. **Open `blog.html`** (in the parent directory)

2. **Find the posts grid** (around line 60)

3. **Copy an existing post card** and modify it:

```html
<article class="post-card" data-category="your-tags-here">
    <div class="post-header">
        <div class="post-tags">
            <span class="post-tag">your-tag</span>
        </div>
        <div class="post-date">2026-05-25</div>
    </div>
    <h2 class="post-title">
        <a href="blog/your-post-filename.html">Your Post Title</a>
    </h2>
    <p class="post-excerpt">
        A brief excerpt of your post to entice readers...
    </p>
    <div class="post-footer">
        <span class="read-time">X min read</span>
        <a href="blog/your-post-filename.html" class="read-more">
            read more →
        </a>
    </div>
</article>
```

4. **Update the details:**
   - `data-category`: Space-separated tags (e.g., "quantum security")
   - `post-tag`: Individual tag labels
   - `post-date`: Publication date
   - `post-title`: Your post title
   - `post-excerpt`: A 1-2 sentence teaser
   - `read-time`: Estimated reading time
   - Link URLs: Point to your new post file

### Step 3: Commit and Push

```bash
git add blog/your-new-post.html blog.html
git commit -m "Add new blog post: Your Title"
git push origin main
```

Your post will be live in 2-5 minutes!

## Writing Tips

- **Use headings** (`<h2>`, `<h3>`) to structure your content
- **Break up text** with short paragraphs
- **Add code blocks** for technical examples
- **Include links** to reference materials
- **Use blockquotes** for emphasis
- **Keep it conversational** - write like you're explaining to a friend

## Available Tags

- `cryptography` - Cryptographic algorithms, protocols
- `quantum` - Post-quantum cryptography, quantum computing
- `security` - Cybersecurity topics, best practices
- `personal` - Running, history, life experiences
- `research` - Academic work, publications

## Post Structure Example

```html
<h1>Main Title</h1>
<p class="lead">Compelling introduction...</p>

<h2>First Major Section</h2>
<p>Content here...</p>

<h3>Subsection</h3>
<p>More detailed content...</p>

<pre><code>// Code example</code></pre>

<blockquote>Important quote</blockquote>

<h2>Conclusion</h2>
<p>Wrap up...</p>
```

## Need Help?

If you run into issues or want to add features like:
- Image support
- Social sharing buttons
- Comments section
- Author bio box

Just ask! The template is flexible and can be extended.
