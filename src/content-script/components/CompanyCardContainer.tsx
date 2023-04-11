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
    // essay,  articles, blog, paragraph, paraphrasing, comprehension, summarizer
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
    inputs: any,
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
      [
        {
          name: 'description',
          label: 'Description',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'description',
          label: 'Description',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'productName',
          label: 'productName',
          caption: '',
          example: '',
        },
        {
          name: 'productDescription',
          label: 'productDescription',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'productName',
          label: 'productName',
          caption: '',
          example: '',
        },
        {
          name: 'productDescription',
          label: 'productDescription',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'productName',
          label: 'productName',
          caption: '',
          example: '',
        },
        {
          name: 'productDescription',
          label: 'productDescription',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'productName',
          label: 'productName',
          caption: '',
          example: '',
        },
        {
          name: 'productDescription',
          label: 'productDescription',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'productName',
          label: 'productName',
          caption: '',
          example: '',
        },
        {
          name: 'productDescription',
          label: 'productDescription',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'productName',
          label: 'productName',
          caption: '',
          example: '',
        },
        {
          name: 'productDescription',
          label: 'productDescription',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'productName',
          label: 'productName',
          caption: '',
          example: '',
        },
        {
          name: 'productDescription',
          label: 'productDescription',
          caption: '',
          example: '',
        },
      ],
    ),
    objGenerator(
      'Wallmart Description',
      'Wallmart Description Generator',
      types.ECOMMERCE.value,
      platforms.WALLMART.value,
      platforms.WALLMART.logo,
      [
        {
          name: 'productName',
          label: 'productName',
          caption: '',
          example: '',
        },
        {
          name: 'productDescription',
          label: 'productDescription',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'description',
          label: 'Description',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'productName',
          label: 'productName',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'description',
          label: 'Description',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'description',
          label: 'Description',
          caption: '',
          example: '',
        },
      ],
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
      [
        {
          name: 'description',
          label: 'Description',
          caption: '',
          example: '',
        },
      ],
      {
        post: '',
      },
    ),
  ]
  const allServices = [...email, ...adsCopy, ...ecommerce, ...socialMedia]

  return (
    <Box
      sx={{
        overflow: 'auto',
        height: '70vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
      }}
    >
      {allServices.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
      {/* {companyData.map((company, index) => (
        <CompanyCard
          key={index}
          logoUrl={company.logoUrl}
          menuItems={company.menuItems}
          name={company.name}
        />
      ))} */}
    </Box>
  )
}

interface ServiceInterface {
  title: string
  tagline: string
  type: string
  platform: string
  logoUrl: string
  inputs: any
  response: any
}

type ServicesInterface = ServiceInterface[]

const ServiceCard = ({
  title,
  tagline,
  type,
  platform,
  logoUrl,
  inputs,
  response,
}: ServiceInterface) => {
  return (
    <Box
      sx={[
        {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          aspectRatio: '1',
          flexDirection: 'column',
          borderRadius: 2,
          boxShadow: 'rgba(0, 0, 0, 0.15) 0px 5px 15px',
          margin: 1,
        },
        (theme: any) => ({
          '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.04)',
          },
        }),
      ]}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={companyLogo} alt="Logo" style={{ height: '32px' }} />
      </Box>
      <Typography variant="body1" sx={{ fontSize: 10, pt: 1, pl: 1, pr: 1 }}>
        {title}
      </Typography>
      {/* <Typography variant="body1">{tagline}</Typography> */}
    </Box>
  )
}
