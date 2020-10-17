<template>
  <Layout>
    <div class="pt-8 md:pt-16">
      <div class="flex flex-col items-center">
        <div class="flex flex-col items-center mb-2 text-ui-primary">
          <img src="banner.png" width="50%" style="margin-bottom: 5rem" />
          <!-- <Logo :width="80" /> -->
          <h2 class="text-3xl text-6xl font-black tracking-tighter border-none text-ui-secondary">
            <span style="color: #0C266A">Circles</span>
            <span style="color: #143486">Protocol</span>
          </h2>
        </div>
        <div class="flex">
          <a href="/docs/">
            <h1
              class="text-lg text-center lg:text-xl uppercase mr-4 hover:text-white hover:bg-ui-primary text-ui-primary border border-ui-primary rounded py-1 px-3"
            >Whitepaper</h1>
          </a>
                <a href="https://dashboard.circles.garden">
            <h1
              class="text-lg text-center lg:text-xl uppercase mr-4 hover:text-white hover:bg-ui-primary text-ui-primary border border-ui-primary rounded py-1 px-3"
            >Dashboard</h1>
          </a>
          <a href="https://t.me/CirclesUBI">
            <h1
              class="text-lg text-center lg:text-xl uppercase mr-4 hover:text-white hover:bg-ui-primary text-ui-primary border border-ui-primary rounded py-1 px-3"
            >Chat</h1>
          </a>
              <!-- <a href="http://aboutcircles.com">
            <h1
              class="text-lg text-center lg:text-xl uppercase mr-4 hover:text-white hover:bg-ui-primary text-ui-primary border border-ui-primary rounded py-1 px-3"
            >Forum</h1>
          </a> -->
        </div>
        <p class="text-xl font-medium text-center">
          A decentralized universal basic income currency protocol based on
          personal currencies and self-sovereign web-of-trust identities
          <br />
          <!-- <p class="text-md text-center">The Circles Protocol will governed by the Circles DAO a decentralized autonomous organization. <br>The DAO develops, grows and invests in the UBI-Economy of tomorrow</p> -->
        </p>

        <!-- <div class="py-4">
          <code
            class="block px-4 py-1 select-all bg-ui-border text-ui-typo"
          >how to start</code>
        </div>-->

        <div class="flex justify-center mt-8">
          <g-link
            to="/tutorials/tutorial1/"
            class="flex items-center px-6 py-4 ml-auto text-2xl font-bold leading-none text-white border rounded-lg shadow-lg bg-ui-primary border-ui-primary transition-all duration-200 ease-out transform hover:shadow-xl hover:-translate-y-1"
          >
            Get started
            <ArrowRightCircleIcon class="ml-4" size="1x" />
          </g-link>
        </div>

        <p class="mt-8 text-center">
          Open Source. AGPL
          <br />
          <span class="border-b border-dashed border-ui-primary text-ui-primary">Deployed on xDAI</span>.
        </p>
      </div>

      <div
        class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"
      ></div>
      <h2
        class="flex justify-center text-2xl lg:text-4xl pt-12 font-black tracking-tighter border-none text-ui-secondary"
      >
        <span style="color: #0C266A">What is the protocol about?</span>
      </h2>

      <a href="http://aboutcircles.com" class="my-8 flex justify-center text-center">
        <span class="border-b border-dashed border-ui-primary text-ui-primary">
          The circles protocol is a P2P credit based set of currency rules to
          standardize and ensure interoperability between ubi networks on a
          global scale
        </span>
      </a>

      <div class="bg-white flex justify-center">
        <div class="flex content-start flex-wrap">
          <div class="lg:w-1/3 p-6 m-auto content-center text-center">
            <img
              src="deploy.svg"
              class="object-center m-auto px-10"
              style="height: 20rem"
              alt="image"
            />
            <div
              class="text-xl text-center text-ui-primary my-2 flex flex-wrap justify-center content-center font-title uppercase font-bold"
            >1. People Powered Money</div>
            <div class="text-gray-600">
              Each human issues and grows their own personal currency, where the
              minting rate is tightly coupled to the human time alive
            </div>
          </div>
          <div class="lg:w-1/3 p-6 m-auto content-center text-center">
            <img
              src="trust.svg"
              class="object-center m-auto px-10"
              style="height: 20rem"
              alt="image"
            />
            <div
              class="text-xl text-center text-ui-primary my-2 flex flex-wrap justify-center content-center font-title uppercase font-bold"
            >2. Self-sovereign identities</div>
            <div class="text-gray-600">
              Unique self-sovereign humans verified by web-of-trust networks
              make the personal currencies interchangeable between real world
              trust relationships
            </div>
          </div>
          <div class="lg:w-1/3 p-6 m-auto content-center text-center">
            <img
              src="grow.svg"
              class="object-center m-auto px-10"
              style="height: 20rem"
              alt="image"
            />
            <div
              class="text-xl text-center text-ui-primary my-2 flex flex-wrap justify-center content-center font-title uppercase font-bold"
            >3. Symmetric Growth</div>
            <div class="text-gray-600">
              human life expectancy is used to deduce the monetary growth rate
              which imply a monetary symmetry, spatially and temporally, between
              the individuals
            </div>
          </div>
        </div>
      </div>
      <div
        class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"
      ></div>
      <h2
        class="flex justify-center text-2xl lg:text-4xl pt-12 font-black tracking-tighter border-none text-ui-secondary"
      >
        <span style="color: #0C266A">Projects building on the Circles Protocol</span>
      </h2>

      <a href="http://aboutcircles.com" class="my-8 flex justify-center text-center">
        <span
          class="border-b border-dashed border-ui-primary text-ui-primary"
        >Got an idea for an app? Let us know!</span>
      </a>

      <div class="flex flex-wrap justify-center -mx-4">
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <div class="rounded border border-gray-300 text-gray-700 w-full bg-white">
            <div class="h-full border-1 border-gray-200 overflow-hidden">
              <img
                class="rounded-t lg:h-64 md:h-48 w-full object-cover object-center"
                src="/circles.png"
                alt="circles"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-title uppercase text-gray-500 mb-1"
                >Wallet</h2>
                <h1
                  class="title-font font-title text-lg font-medium text-primary mb-3"
                >Myxogastria (beta)</h1>
                <p class="leading-relaxed mb-3">First implementation of the Circles Protocol</p>
              </div>
              <a href="https://circles.garden">
                <div
                  class="rounded-b py-3 font-bold text-white uppercase text-center bg-ui-primary hover:bg-blue-600 cursor-pointer"
                >Go To Circles Garden</div>
              </a>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-center w-full px-4 mb-8 text-center md:w-1/3">
          <div class="rounded border border-gray-300 text-gray-700 w-full bg-white">
            <div class="h-full border-1 border-gray-200 overflow-hidden">
              <img
                class="rounded-t lg:h-64 md:h-48 w-full object-cover object-center"
                src="/omo.png"
                alt="omo"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-title uppercase text-gray-500 mb-1"
                >Wallet</h2>
                <h1 class="title-font font-title text-lg font-medium text-primary mb-3">Circles Lite</h1>
                <p class="leading-relaxed mb-3">Simple IPFS DAPP Circles Client</p>
              </div>
              <a href>
                <div
                  class="rounded-b py-3 font-bold text-white uppercase text-center bg-gray-400"
                >Not active yet</div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        class="pt-8 mx-auto mt-8 border-t md:mt-16 md:pt-16 border-top border-ui-border max-w-screen-sm"
      ></div>
      <h2
        class="flex justify-center text-2xl lg:text-4xl pt-12 font-black tracking-tighter border-none text-ui-secondary"
      >
        <span style="color: #0C266A">Key protocol characteristics</span>
      </h2>

      <!-- <a href="http://aboutcircles.com" class="my-8 flex justify-center text-center">
        <span class="border-b border-dashed border-ui-primary text-ui-primary">
          The circles protocol is a P2P credit based set of currency rules to
          standardize and ensure interoperability between ubi networks on a
          global scale
        </span>
      </a>-->

      <div class="bg-white flex justify-center">
        <div class="flex content-start flex-wrap">
          <div class="lg:w-1/3 p-6 m-auto content-center text-center">
            <div
              class="text-xl text-center text-ui-primary my-2 flex flex-wrap justify-center content-center font-title uppercase font-bold"
            >Credit based</div>
            <div
              class="text-gray-600"
            >In traditional debt-based currencies one sells goods, borrows money, or invests working power to receive money. With Circles, one receives money unconditionally to engage with their community, creating value through offering goods or services.</div>
          </div>
          <div class="lg:w-1/3 p-6 m-auto content-center text-center">
            <div
              class="text-xl text-center text-ui-primary my-2 flex flex-wrap justify-center content-center font-title uppercase font-bold"
            >Decentralized</div>
            <div
              class="text-gray-600"
            >A worldwide basic income is something so powerful that no single entity should have control over the money or its recipients. Using blockchain technology, Circles is independent of any central issuing authority or institution.</div>
          </div>
          <div class="lg:w-1/3 p-6 m-auto content-center text-center">
            <div
              class="text-xl text-center text-ui-primary my-2 flex flex-wrap justify-center content-center font-title uppercase font-bold"
            >Resilience</div>
            <div
              class="text-gray-600"
            >Circles runs on the blockchain, a secure, decentralised, autonomously managed database. Since the system's money emerges from a network of peer-to-peer relationships, it maintains stability on a local level, regardless of the national or global scale.</div>
          </div>
        </div>
      </div>
      <div class="bg-white flex justify-center">
        <div class="flex content-start flex-wrap">
          <div class="lg:w-1/3 p-6 m-auto content-center text-center">
            <div
              class="text-xl text-center text-ui-primary my-2 flex flex-wrap justify-center content-center font-title uppercase font-bold"
            >P2P Relationships</div>
            <div
              class="text-gray-600"
            >Circles runs on the blockchain, a secure, decentralised, autonomously managed database. Since the system's money emerges from a network of peer-to-peer relationships, it maintains stability on a local level, regardless of the national or global scale.</div>
          </div>
          <div class="lg:w-1/3 p-6 m-auto content-center text-center">
            <div
              class="text-xl text-center text-ui-primary my-2 flex flex-wrap justify-center content-center font-title uppercase font-bold"
            >Seigniorage</div>
            <div
              class="text-gray-600"
            >Seigniorage is the profit made from the difference between the production costs and the value of money. As Circles is a credit-based currency that costs little to create, you retain most of this value as first spender.</div>
          </div>
          <div class="lg:w-1/3 p-6 m-auto content-center text-center">
            <div
              class="text-xl text-center text-ui-primary my-2 flex flex-wrap justify-center content-center font-title uppercase font-bold"
            >Hoarding Resistance</div>
            <div
              class="text-gray-600"
            >Circles has an inbuilt inflation target of 10% per annum to discourage hoarding. This also increases the velocity of money in circulation, creating more opportunities for exchange and economic activity.</div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import Logo from "@/components/Logo";
import {
  ArrowRightCircleIcon,
  ZapIcon,
  CodeIcon,
  MoonIcon,
  SearchIcon,
} from "vue-feather-icons";

export default {
  components: {
    Logo,
    ArrowRightCircleIcon,
    ZapIcon,
    CodeIcon,
    MoonIcon,
    SearchIcon,
  },

  metaInfo() {
    const title = "Great Documentation starts here";
    const description =
      "DOCC is a starter theme with instant search and dark mode for writing great technical documentation. Based on Gridsome!";

    return {
      title: title,
      meta: [
        {
          name: "description",
          content: description,
        },
        {
          key: "og:title",
          name: "og:title",
          content: title,
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          key: "og:description",
          name: "og:description",
          content: description,
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: description,
        },
      ],
    };
  },
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
