import React from 'react'
import styled from 'styled-components'

const Index = () => {
  return (
      
    <StyledWrapper>
    <section className=" relative z-10 bg-primary py-[120px] h-screen background ">
        <div className="container mx-auto">
          <div className="-mx-4 flex">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[400px] text-center">
                <h2 className="mb-2 text-[50px] font-bold leading-none text-black sm:text-[80px] md:text-[100px]">
                  404
                </h2>
                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-black">
                  Oops! That page can't be found
                </h4>
                <p className="mb-8 text-lg text-black">
                  The page you are looking for it maybe deleted
                </p>
                <a
                  href="javascript:void(0)"
                  className="inline-block rounded-lg border border-black px-8 py-3 text-center text-base font-semibold text-black transition hover:bg-black hover:text-white "
                >
                  Go To Home
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="absolute left-0 top-0 -z-10 flex h-full w-full items-center justify-between space-x-5 md:space-x-8 lg:space-x-14">
          <div className="h-full w-1/3 bg-gradient-to-t from-[#f9f8f814] to-[#C4C4C400]"></div>
          <div className="flex h-full w-1/3">
            <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
            <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]"></div>
          </div>
          <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]"></div>
        </div> */}
      </section>
      
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  .background {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    background: white;
    background: radial-gradient(125% 125% at 50% 10%, #fff 40%, #c173c6 100%);
    z-index: -10;
  }`;

export default Index
