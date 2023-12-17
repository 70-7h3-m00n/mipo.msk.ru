import { handleGetStaticProps } from '@/helpers/index'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { usePageHandleContext } from '@/hooks/index'
import { routeReviews } from '@/data/routes'
import companyName from '@/data/companyName'
import Reviews from '@/components/sections/all/Reviews'

const ReviewsPage = ({ programs, reviews }) => {
  usePageHandleContext({ programs })

  return (
    <>
      {/*//@ts-ignore */}
      <NextSeo
        title={`Отзывы и статьи наших студентов | ${companyName}`}
        description={truncate(
          `${reviews[reviews.length - 1]?.title}, ${
            reviews[reviews.length - 1]?.name
          } | ${reviews[reviews.length - 2]?.title}, ${
            reviews[reviews.length - 2]?.name
          }`,
          120
        )}
        canonical={`${routesFront.root}${routeReviews}`}
      />
      <Reviews standalone reviews={reviews} />
    </>
  )
}

export const getStaticProps = async () =>
  await handleGetStaticProps({ page: '/reviews' })

export default ReviewsPage
