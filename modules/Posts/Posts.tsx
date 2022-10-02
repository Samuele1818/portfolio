import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper'
import BlogPost from '../../components/BlogPost'
import PostsList from '../../data/posts.json'

const Posts: FC = () => {
  return (
    <section className="layout mt-24">
      <h1 className="center xl-text">Blog Posts</h1>
      <h2 className="center lg-text mt-4">Explore my blog articles, discover my tutorials and
        reflections</h2>
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          scale: 0.8,
          stretch: 50,
          depth: 200,
          modifier: 1,
          slideShadows: false
        }}
        modules={[EffectCoverflow]}
        className="w-full !my-16 !py-2"
      >
        {
          PostsList.map((post, index) => {
            return (
              <SwiperSlide key={index} className="!w-80 !shadow-lg !rounded-xl">
                <BlogPost title={post.title} description={post.description} date={post.date}
                          author={post.author} timeToRead={post.timeToRead}/>
              </SwiperSlide>)
          })
        }
      </Swiper>
    </section>
  )
}

export default Posts
