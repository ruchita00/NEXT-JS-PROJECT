# Next js advantages:

1. next js perform server side
2. NEXT js - this issue is resolved by sending pre rendered code directly to the client
3. this enables:

- easy crawling
- indexing
- leading to improved seo

2. why should i priotize seo
   seo is cruicial for optimizing a website visiblity and ranking in search engine results

   you can achieve several benefits including-

   - increased organic traffic
   - enhanced user experience
   - credibility and trustworthiness
   - competitive advantage
   - priotizing sec of your website and its online presence

3. Routing:

- next js uses file based routing system

4. Next js use to create fullstack application

- from next js version 9 it introduce new feature which is API ROUTES - it enabling the creation of serverless functions to handle api requests
- serverless apis in next js are a way of creating api endpoints without the need for tradional server
- it allows us to build and deploy apis without managing server infrastructure and worring about scaling their server as traffic increases
- with this feature we can create api endpoints

5. automatic code spliting:

- code spliting is a technique that breaks down large bundles of javascripts code into smaller more manageable chunks that can be loaded as needed

when needed this reduces the initial load time of website
and optimizing the user experience while browsing

2 methods: - const about =lazy(()=>import("./about))

const app=()=>{
return(
<Suspense fallback={<div>loading</div>}>
<Text>Hello world</Text>
</Suspense>
)
}

but in next js this process is entirely automatic

- next js uses automatic code splitting by default to split pages into seperate chunks

6. automating most of the remaining processes

- leting us focus on building the essential business logic of the application

7. it still just react js

# next js manage variety of features

1. routing
2. code spliting
3. search engine optimization
4. rendering automatically

# folder structure

- by default the page.js is server side page but if want to make it as client side then you have to use at the top "use client"
- layout page is the main page where whole application is render
- page.js is a normal home page which is render on ui

1. client and server side components
2. routing
3. Nexted routing
4. dynamic routing
5. loading
6. error handing
7. data fetching:
   - 1. server side rending(ssr)
   - 2. static site generation (ssg)
   - 3. Incremental static generation (isr)

- using this metadata we can improve the application seo we can define metadata in two ways static and dynamic
