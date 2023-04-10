import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import companyLogo from '../assets/icons/logo.png'
function CompanyCard({ logoUrl, menuItems, name }: any) {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 2,
        }}
      >
        <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={logoUrl} alt="Logo" style={{ height: '32px' }} />
        </Box>
        <Typography variant="body1">{name}</Typography>
      </Box>
      <Box sx={{ display: 'flex' }}>
        {menuItems.map((menuItem: any, index: any) => (
          // <Button key={index} variant="outlined" color="primary" size="small" sx={{ ml: 1 }}>
          <div key={index}>{menuItem}</div>
          // </Button>
        ))}
      </Box>
    </Box>
  )
}

export default CompanyCardContainer

function CompanyCardContainer() {
  const companyData = [
    {
      name: 'Facebook',
      logoUrl: companyLogo,
      menuItems: ['Home', 'About', 'Contact'],
    },
    {
      name: 'Youtube',
      logoUrl: companyLogo,
      menuItems: ['Home', 'Products', 'Services', 'Contact'],
    },
    {
      name: 'Instagram',
      logoUrl: companyLogo,
      menuItems: ['Home', 'About', 'Services', 'Contact'],
    },
  ]

  const platforms = {
    FACEBOOK: { label: 'Facebook', value: 'FACEBOOK', logo: '' },
    TWITTER: { label: 'Twitter', value: 'TWITTER', logo: '' },
    GOOGLE: { label: 'Google', value: 'GOOGLE', logo: '' },
    YAHOO: { label: 'Yahoo', value: 'YAHOO', logo: '' },
    LINKEDIN: { label: 'Linkedin', value: 'LINKEDIN', logo: '' },
    MICROSOFT: { label: 'Microsoft', value: 'MICROSOFT', logo: '' },
    YOUTUBE: { label: 'Youtube', value: 'YOUTUBE', logo: '' },
    INSTAGRAM: { label: 'Instagram', value: 'INSTAGRAM', logo: '' },

    // Ecommerce
    AMAZON: { label: 'Amazon', value: 'AMAZON', logo: '' },
    EBAY: { label: 'Ebay', value: 'EBAY', logo: '' },
    WALLMART: { label: 'Wallmart', value: 'WALLMART', logo: '' },
    DEPOP: { label: 'Depop', value: 'DEPOP', logo: '' },
    // ETSY: { label: 'Etsy', value: 'ETSY', logo: '' },
    WHATSAPP: { label: 'Whatsapp', value: 'WHATSAPP', logo: '' },
    SMS: { label: 'SMS', value: 'SMS', logo: '' },
    WEB: { label: 'Web', value: 'WEB', logo: '' },
  }

  const types = {
    // Yahoo mail, gmail
    EMAIL: { label: 'Email', value: 'EMAIL' },
    // adsence, facebook, twitter, instagram
    ADS_COPY: { label: 'Ads Copy', value: 'ADS_COPY' },
    // amazon, ebay, wallmart, depop, etsy
    ECOMMERCE: { label: 'Ecommerce', value: 'ECOMMERCE' },
    // facebook, instagram, youtube, tiktok
    SOCIAL_MEDIA: { label: 'Social Media', value: 'SOCIAL_MEDIA' },
    LANDING_PAGE: { label: 'Landing Page', value: 'LANDING_PAGE' },
    // essay, paragraph, paraphrasing, comprehension, summarizer, articles/blog
    BLOG_POST: { label: 'Blog Post', value: 'BLOG_POST' },
    // sms, whatsapp, discord
    MESSAGING_CAMPAIGN: { label: 'Messaging Campaign', value: 'MESSAGING_CAMPAIGN' },
    // affiliate articales, kindle book, SEO/ meta description,scripts for short and long videos and podcasts
    CONTENT_WRITING: { label: 'Content Writing', value: 'CONTENT_WRITING' },
    GENERAL: { label: 'General', value: 'GENERAL' },
  }

  const objGenerator = (
    title: string,
    tagline: string,
    type: string,
    platform: string,
    logoUrl: string,
    inputs = {},
    response = {},
  ) => {
    return {
      title,
      tagline,
      type,
      platform,
      logoUrl,
      inputs,
      response,
      favourite: false,
    }
  }

  const email = [
    objGenerator(
      'Yahoo Mail',
      'Yahoo Mail Generator',
      types.EMAIL.value,
      platforms.YAHOO.value,
      'yahoomaillogo.png',
      {
        description: '',
      },
      {
        subject: '',
        body: '',
      },
    ),
    objGenerator(
      'Gmail',
      'Gmail Generator',
      types.EMAIL.value,
      platforms.GOOGLE.value,
      'gmaillogo.png',
      {
        description: '',
      },
      {
        subject: '',
        body: '',
      },
    ),
  ]
  const adsCopy = [
    objGenerator(
      'Facebook Ad',
      'Facebook Ad Generator',
      types.ADS_COPY.value,
      platforms.FACEBOOK.value,
      'facebookads.png',
      {
        productName: '',
        productDescription: '',
      },
      {
        headline: '',
        description: '',
      },
    ),
    objGenerator(
      'Adsence Ad',
      'Adsence Ad Generator',
      types.ADS_COPY.value,
      platforms.GOOGLE.value,
      'adsencelogo.png',
      {
        productName: '',
        productDescription: '',
      },
      {
        headline: '',
        description: '',
      },
    ),
    objGenerator(
      'Twitter Ad',
      'Twitter Ad Generator',
      types.ADS_COPY.value,
      platforms.TWITTER.value,
      platforms.TWITTER.logo,
      {
        productName: '',
        productDescription: '',
      },
      {
        headline: '',
        description: '',
      },
    ),
  ]
  const ecommerce = [
    objGenerator(
      'Amazon Product',
      'Amazon Product Generator',
      types.ECOMMERCE.value,
      platforms.AMAZON.value,
      platforms.AMAZON.logo,
      {
        productName: '',
        productDescription: '',
      },
      {
        headline: '',
        description: '',
      },
    ),
    objGenerator(
      'Ebay Description',
      'Ebay Description Generator',
      types.ECOMMERCE.value,
      platforms.EBAY.value,
      platforms.EBAY.logo,
      {
        productName: '',
        productDescription: '',
      },
      {
        headline: '',
        description: '',
      },
    ),
    objGenerator(
      'Facebook Markeplace',
      'Facebook Markeplace Generator',
      types.ECOMMERCE.value,
      platforms.FACEBOOK.value,
      platforms.FACEBOOK.logo,
      {
        productName: '',
        productDescription: '',
      },
      {
        headline: '',
        description: '',
      },
    ),
    objGenerator(
      'Depop Description',
      'Depop Description Generator',
      types.ECOMMERCE.value,
      platforms.DEPOP.value,
      platforms.DEPOP.logo,
      {
        productName: '',
        productDescription: '',
      },
      {
        headline: '',
        description: '',
      },
    ),
    objGenerator(
      'Wallmart Description',
      'Wallmart Description Generator',
      types.ECOMMERCE.value,
      platforms.WALLMART.value,
      platforms.WALLMART.logo,
      {
        productName: '',
        productDescription: '',
      },
      {
        headline: '',
        description: '',
      },
    ),
  ]
  const socialMedia = [
    objGenerator(
      'Facebook Story',
      'Facebook Story Generator',
      types.SOCIAL_MEDIA.value,
      platforms.FACEBOOK.value,
      platforms.FACEBOOK.logo,
      {
        description: '',
      },
      {
        caption: '',
      },
    ),
    objGenerator(
      'Facebook Post',
      'Facebook Post Generator',
      types.SOCIAL_MEDIA.value,
      platforms.FACEBOOK.value,
      platforms.FACEBOOK.logo,
      {
        productName: '',
      },
      {
        post: '',
      },
    ),
    objGenerator(
      'Instagram Story',
      'Instagram Story Generator',
      types.SOCIAL_MEDIA.value,
      platforms.INSTAGRAM.value,
      platforms.INSTAGRAM.logo,
      {
        description: '',
      },
      {
        caption: '',
      },
    ),
    objGenerator(
      'Instagram Post',
      'Instagram Post Generator',
      types.SOCIAL_MEDIA.value,
      platforms.INSTAGRAM.value,
      platforms.INSTAGRAM.logo,
      {
        description: '',
      },
      {
        post: '',
      },
    ),
    objGenerator(
      'Linkedin Post',
      'Linkedin Post Generator',
      types.SOCIAL_MEDIA.value,
      platforms.LINKEDIN.value,
      platforms.LINKEDIN.logo,
      {
        description: '',
      },
      {
        post: '',
      },
    ),
  ]
  const allServices = [...email, ...adsCopy, ...ecommerce, ...socialMedia]
  // const offeredProducts = [
  //   {
  //     title: 'Blog Post',
  //     tagline: 'Blog Post Generator',
  //     typeTags: [types.BLOG_POST.value],
  //     platformTags: [platforms.WEB.value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Amazon Product Description',
  //     tagline: '',
  //     typeTags: [types.BLOG_POST.value],
  //     platformTags: [platforms.WEB.value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Email Copy',
  //     tagline: '',
  //     typeTags: [types.EMAIL.value],
  //     platformTags: [platforms.GOOGLE.value,platforms.YAHOO.value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Landing Page',
  //     tagline: '',
  //     typeTags: [types.LANDING_PAGE.value],
  //     platformTags: [platforms.WEB.value],
  //     logoUrl: '',
  //     category: '',
  //   },

  //   {
  //     title: 'Ad Copy',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'AI Writer',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Sentence Rewriter',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Social Post',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Meta Description',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Instagram Caption',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Facebook Post',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Paraphrasing',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Paragraph',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Linkedin Post',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Text Summaraizer',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'SMS Campaign',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  //   {
  //     title: 'Whatsapp Campaign',
  //     tagline: '',
  //     typeTags: [types..value],
  //     platformTags: [platforms..value],
  //     logoUrl: '',
  //     category: '',
  //   },
  // ]
  return (
    <Box>
      {companyData.map((company, index) => (
        <CompanyCard
          key={index}
          logoUrl={company.logoUrl}
          menuItems={company.menuItems}
          name={company.name}
        />
      ))}
    </Box>
  )
}
