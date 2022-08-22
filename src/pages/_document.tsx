import Document, {Html, Head, Main, NextScript} from 'next/document'

export default class MyDocument extends Document {
   render() {
      return (
         <Html>
         <Head>
          {/* <!-- HTML Meta Tags --> */}
          {/* <meta name="description" content="Empresa fundada para levar comprometimento, eficácia e qualidade aos nossos clientes."/> */}

         {/* <!-- Facebook Meta Tags --> */}
         {/* <meta property="og:url" content="https://www.blendquimica.com.br/"/>
         <meta property="og:type" content="website"/>
         <meta property="og:title" content="Blend Química - Química com essência!"/>
         <meta property="og:description" content="Empresa fundada para levar comprometimento, eficácia e qualidade aos nossos clientes."/>
         <meta property="og:image" content="https://www.blendquimica.com.br/static/img/blend-meta.png"/> */}

         {/* <!-- Twitter Meta Tags --> */}
         {/* <meta name="twitter:card" content="summary_large_image"/>
         <meta property="twitter:domain" content="blendquimica.com.br"/>
         <meta property="twitter:url" content="https://www.blendquimica.com.br/"/>
         <meta name="twitter:title" content="Blend Química - Química com essência!"/>
         <meta name="twitter:description" content="Empresa fundada para levar comprometimento, eficácia e qualidade aos nossos clientes."/>
         <meta name="twitter:image" content="https://www.blendquimica.com.br/static/img/blend-meta.png"/> */}

         <link href="https://fonts.googleapis.com/css2?family=Courgette&family=Heebo:wght@200;300;400;500;600&family=Poiret+One&family=Quicksand:wght@300;400&display=swap" rel="stylesheet"></link>
         <link rel="shortcut icon" href="/static/img/icon.png" /> 
         </Head>
            <body>
               <Main/>
               <NextScript/>
            </body>
         </Html>
      )
   }
}