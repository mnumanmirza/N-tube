import React from 'react'

function EmptyVideoPage() {
  return (
    <>
      <div className="h-screen overflow-y-auto bg-[#121212] text-white ">
        <div className="flex min-h-[calc(100vh-66px)] sm:min-h-[calc(100vh-82px)] ">

          <section className="w-full pl-4 pb-4 sm:pl-6 sm:pb-6 md:pl-8 md:pb-8 lg:pl-12 lg:pb-12 xl:pl-16 xl:pb-16">
            <div className="flex h-full items-center justify-center">
              <div className="w-full max-w-sm text-center">
                <p className="mb-3 w-full">
                  <span className="inline-flex rounded-full bg-[#E4D3FF] p-2 text-[#AE7AFF]">
                    {/* svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
                      />
                    </svg>
                  </span>
                </p>
                <h5 className="mb-2 font-semibold">No videos available</h5>
                <p>There are no videos here available. Please try to search some thing else.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    

    </>
  )
}

export default EmptyVideoPage
