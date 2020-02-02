export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e366ac7c2ca75b5d58669b3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-d4i9wodh',
                  apiId: 'eb358cc5-9cf8-4aeb-bc1e-863ca08bcce0'
                },
                {
                  buildHookId: '5e366ac779dfa8fbb9b0580a',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-uajdf4qo',
                  apiId: '0c2bbed6-7d3c-4b78-88e4-d754d6ab58d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/chriswitko/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-uajdf4qo.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
