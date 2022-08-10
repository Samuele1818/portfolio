import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow } from 'swiper'
import BlogPost from '../../components/BlogPost'
import PostsList from '../../data/posts.json'

const Posts: FC = () => {
  return (
    <section className="text-center layout mt-24">
       <h1 className="text-center mx-auto text-4xl font-bold">Blog Posts</h1>
       <h2 className="text-2xl text-center mt-8 font-normal">Explore my blog articles, discover my tutorials and
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
         className="w-full !pt-16 !pb-32"
       >
          {
             PostsList.map((post, index) => {
                return (
                  <SwiperSlide key={index} className="!w-80 !shadow-2xl !rounded-xl">
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
