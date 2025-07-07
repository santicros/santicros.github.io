export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ 'public/': '.' })
}

export const config = {
  dir: {
    input: 'src',
  },
  templateFormats: ['html', 'njk', 'md'],
  markdownTemplateEngine: 'njk',
  htmlTemplateEngine: 'njk',
}
