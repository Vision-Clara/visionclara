import Head from "next/head";
import styles from "@/styles/Home.module.css";

import FeatureList from "@/components/FeatureList";
import ServiceList from "@/components/ServiceList";
import Slider from "@/components/Slider";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>VisionClara | Your Vision Our Mission</title>
        <meta
          name="description"
          content="
                  1. Website development : We offers customized website development services that cater to the unique needs of businesses. We specialize in designing and developing user-friendly, visually appealing, and SEO optimized websites.
                  2. SEO :Our professional SEO services that can help improve your website's search engine ranking and drive more traffic to your site. Our team of experts uses proven techniques and strategies to optimize your website for search engines.
                  3. Cloud migration : We can move your existing applications, data, and infrastructure to the cloud securely and seamlessly. Our team of experts ensures that your migration is efficient and cost-effective.
                  4. UI/UX design: Our IT firm offers UI/UX Design services that can help improve your website or application's user experience and overall design. Our team of experienced designers and developers creates intuitive, visually appealing, and user-friendly interfaces that enhance your brand's image and user engagement.
                  5. Graphic designing : We have professional Graphic Design services that can help improve your brand's visual identity and communication through compelling graphics and visual designs. Our team of experienced designers creates custom graphics that represent your brand's personality and messaging, helping you stand out in the crowded marketplace.
                  6. Social media : We can help your business establish a strong online presence, increase engagement with your target audience, and grow your brand's reach. Our team of social media experts creates and executes customized social media strategies that align with your business goals and target audience, delivering measurable results.
                  7. Content writing : Content Writing services that can help your business create engaging, informative, and SEO-friendly content for your website, blog, and marketing campaigns. Our team of experienced writers develops content that aligns with your brand's messaging and voice, ensuring that it resonates with your target audience and drives traffic to your website.
                  8. Automation of project : Automation services that can help streamline your business processes and increase efficiency through the automation of repetitive and time-consuming tasks. Our team of experts uses cutting-edge technology to design and implement customized automation solutions that help you save time and reduce costs, enabling you to focus on core business activities.
                  9. Progressive app : Progressive Apps can help your business develop responsive and engaging web applications that can work seamlessly across multiple platforms and devices. Our team of experienced developers uses the latest tools and technologies to create customized, fast-loading, and user-friendly web apps that enhance your brand's reach and user engagement.
                "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/logo.jpg" rel="icon"></link>
      </Head>
      <div>
        <h1>Home Page</h1>
        <Slider></Slider>
        <FeatureList></FeatureList>
        <ServiceList></ServiceList>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </div>
    </>
  );
}
