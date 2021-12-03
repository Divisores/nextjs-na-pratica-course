import { NextSeo } from 'next-seo'
import LinkWrapper from 'components/LinkWrapper'
import dynamic from 'next/dynamic'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import { MapProps } from 'components/Map'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A project to show the places that I've traveled"
        canonical="https://my-trips.julianovendramini.com.br/"
        openGraph={{
          url: 'https://my-trips.julianovendramini.com.br/',
          title: 'My Trips',
          description: "A project to show the places that I've traveled"
          //imagem
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
