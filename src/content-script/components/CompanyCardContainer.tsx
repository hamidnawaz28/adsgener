import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { Input, Select, TextArea } from '../components'
import { pngIcons } from '../components/Icons'
function CompanyCard({ itemLogo, menuItems, name }: any) {
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
          <img src={itemLogo} alt="Logo" style={{ height: '32px' }} />
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
      itemLogo: pngIcons.chatgpt,
      menuItems: ['Home', 'About', 'Contact'],
    },
    {
      name: 'Youtube',
      itemLogo: pngIcons.chatgpt,
      menuItems: ['Home', 'Products', 'Services', 'Contact'],
    },
    {
      name: 'Instagram',
      itemLogo: pngIcons.chatgpt,
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
    itemLogo: string,
    featureLogo: string,
    inputs: any,
    response = {},
  ) => {
    return {
      title,
      tagline,
      type,
      platform,
      itemLogo,
      featureLogo,
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
      pngIcons.yahoo,
      pngIcons.yahoo,
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
      pngIcons.gmail,
      pngIcons.gmail,
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
      pngIcons.facebook,
      pngIcons.facebook,

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
      pngIcons.adsense,
      pngIcons.adsense,

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
      pngIcons.twitter,
      pngIcons.twitter,

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
      pngIcons.amazon,
      pngIcons.amazon,

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
      pngIcons.ebay,
      pngIcons.ebay,

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
      pngIcons.facebook,
      pngIcons.facebook,

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
      pngIcons.depop,
      pngIcons.depop,

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
      pngIcons.walmart,
      pngIcons.walmart,

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
      pngIcons.facebook,
      pngIcons.facebook,

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
      pngIcons.facebook,
      pngIcons.facebook,

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
      pngIcons.instagram,
      pngIcons.instagram,

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
      pngIcons.instagram,
      pngIcons.instagram,

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
      pngIcons.linkedin,
      pngIcons.linkedin,

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
  const [value, setValue] = useState('')
  const [input, setInput] = useState('')
  const display = false
  return (
    <Box
      sx={{
        overflow: 'auto',
        height: '75vh',
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
      }}
    >
      {display && (
        <>
          {allServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
          <Select options={[{ value: 1, label: 'One' }]} value={value} setValue={setValue} />
          <Input label={'input'} value={input} setValue={setInput} />
          <TextArea label="Text area" text="Sample text" />
        </>
      )}

      {/* {companyData.map((company, index) => (
        <CompanyCard
          key={index}
          itemLogo={company.itemLogo}
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
  itemLogo: string
  inputs: any
  response: any
}

type ServicesInterface = ServiceInterface[]

const ServiceCard = ({
  title,
  tagline,
  type,
  platform,
  itemLogo,
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
      onClick={() => console.log(title, ' Clicked')}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={itemLogo} alt="Logo" style={{ height: '32px' }} />
      </Box>
      <Typography variant="body1" sx={{ fontSize: 9, pt: 1, pl: 1, pr: 1 }}>
        {title}
      </Typography>
      {/* <Typography variant="body1">{tagline}</Typography> */}
    </Box>
  )
}
