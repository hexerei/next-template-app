import Head from 'next/head'
import Image from 'next/image'
import {
  DocumentTextIcon,
  AcademicCapIcon,
  CollectionIcon,
  PhotographIcon,
  GlobeAltIcon
} from '@heroicons/react/outline'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <p className="mt-3 text-2xl">
          Get started by editing{' '}
          <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
            pages/index.js
          </code>
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <DocumentTextIcon className="w-8 h-8 float-left mr-2 text-gray-400" />
            <h2 className="text-2xl font-bold">Documentation &rarr;</h2>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <AcademicCapIcon className="w-8 h-8 float-left mr-2 text-gray-400" />
            <h2 className="text-2xl font-bold">Learn &rarr;</h2>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>

          <a
            href="https://tailwindcss.com/docs"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <DocumentTextIcon className="w-8 h-8 float-left mr-2 text-gray-400" />
            <h2 className="text-2xl font-bold">Tailwind CSS &rarr;</h2>
            <p className="mt-4 text-xl">
              Find in-depth information about Tailwind CSS features and usage.
            </p>
          </a>

          <a
            href="https://heroicons.com"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <PhotographIcon className="w-8 h-8 float-left mr-2 text-gray-400" />
            <h2 className="text-2xl font-bold">heroicons &rarr;</h2>
            <p className="mt-4 text-xl">
              Beautiful hand-crafted SVG icons by the makers of Tailwind CSS.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <CollectionIcon className="w-8 h-8 float-left mr-2 text-gray-400" />
            <h2 className="text-2xl font-bold">Examples &rarr;</h2>
            <p className="mt-4 text-xl">
              Discover and deploy boilerplate example Next.js projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
          >
            <GlobeAltIcon className="w-8 h-8 float-left mr-2 text-gray-400" />
            <h2 className="text-2xl font-bold">Deploy &rarr;</h2>
            <p className="mt-4 text-xl">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <div className="h-4 w-20 ml-2 relative">
            <Image src="/vercel.svg" alt="Vercel Logo" layout="fill" objectFit="cover" />
          </div>
        </a>
      </footer>
    </div>
  )
}
