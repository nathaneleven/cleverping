import React from "react"
import BestProvidersCleverping from "../src/components/Cleverping/components/organisms/BestProviders"
import CtaCleverping from "../src/components/Cleverping/components/organisms/Cta"
import HeroCleverping from "../src/components/Cleverping/components/organisms/Hero"
import ServicesCleverping from "../src/components/Cleverping/components/organisms/Services"
import ServiceTypeCleverping from "../src/components/Cleverping/components/organisms/ServiceType"
import WhyUseCleverping from "../src/components/Cleverping/components/organisms/WhyUseCP"
import { ChakraProvider } from "@chakra-ui/react"
import HeaderCleverping from "../src/components/Cleverping/components/default/Header"

const HomePage = () => {
  return (
    <ChakraProvider>
        <HeaderCleverping />
        <HeroCleverping />
        <CtaCleverping />
        <WhyUseCleverping />
        <BestProvidersCleverping />
        <ServiceTypeCleverping />
        <ServicesCleverping />
    </ChakraProvider>
  )
}

export default HomePage
