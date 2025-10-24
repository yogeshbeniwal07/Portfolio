import React from 'react'
import WorkCard from './workCard'

const Work = () => {
  return (
    <div className='flex flex-col items-center mt-50'>
      <h1 className='text-4xl font-bold mt-4 mb-4'>Proof of Work</h1>
      <div className='grid grid-cols-2 gap-4 items-center max-xl:grid-cols-1 w-1/2'>
        <WorkCard
          imageUrl="/exchange_icon.png"
          title="Exchange Monitor"
          description="A real-time currency exchange rate monitor that fetches data from a public API and displays it in an easy-to-read format."
          techStack={["Next.js", "React", "Tailwind CSS", "Websockets", "API Integration", "Express", "Charts library"]}
          liveLink="https://example.com"
          gitHubLink="https://github.com/yogeshbeniwal07/exchange.git"
        />
        <WorkCard
          imageUrl="/logo_icon.jpg"
          title="Image It"
          description="A text to image generation app. Users can input descriptive text prompts to generate unique images using AI models."
          techStack={["React", "Node.js", "Express", "Tailwind CSS", "OpenAI API", "MongoDB", "JWT Authentication", "Framer Motion"]}
          liveLink="https://image-it-sbfr.vercel.app"
          gitHubLink="https://github.com/yogeshbeniwal07/Image-It.git"
        />
        <WorkCard
          imageUrl="/payment_icon.jpg"
          title="Payment Wallet"
          description="A digital wallet application that allows users to store, send, and receive money securely. It includes features like transaction history, balance tracking, and QR code payments."
          techStack={["Next.js", "React", "Tailwind CSS", "Express", "PostgreSQL", "Prisma", "Monorepo", "JWT Authentication", "Connection Pooling"]}
          liveLink="https://example.com"
          gitHubLink="https://github.com/yogeshbeniwal07/Wallet.git"
        />
        <WorkCard
          imageUrl="/blogs-icon-8.jpg"
          title="Blogs App"
          description="A blogging platform where users can create, edit, and publish blog posts. It includes features like user authentication, comments, and categories."
          techStack={["React", "Node.js", "Express", "Tailwind CSS", "MongoDB", "JWT Authentication"]}
          liveLink="https://example.com"
          gitHubLink="https://github.com/yogeshbeniwal07/Medium-web.git"
        />
      </div>
    </div>
  )
}

export default Work
