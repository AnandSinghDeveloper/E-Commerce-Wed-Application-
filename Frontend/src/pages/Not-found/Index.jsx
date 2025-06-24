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
                  href="/shop/home"
                  className="inline-block rounded-lg border border-black px-8 py-3 text-center text-base font-semibold text-black transition hover:bg-black hover:text-white "
                >
                  Go To Home
                </a>
              </div>
            </div>
          </div>
        </div>

      
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
