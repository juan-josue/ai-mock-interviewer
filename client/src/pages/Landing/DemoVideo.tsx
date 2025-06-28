import HeroVideoDialog from "@/components/magicui/hero-video-dialog";

function DemoVideo() {
  return (
    <section className="relative flex justify-center w-full pb-8">
        <div className="max-w-5xl">
          <HeroVideoDialog
            className="block"
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </div>
      </section>
  )
}

export default DemoVideo