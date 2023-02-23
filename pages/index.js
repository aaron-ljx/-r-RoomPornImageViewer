import React from 'react'
import Script from 'next/script'

function Home(props) {
    return (
		    <>
			<div id="wrapper">
					<header id="header">
						<h1><strong>/r/RoomPorn</strong> Image Viewer</h1>
						<nav>
						</nav>
					</header>

					<div id="main">
						{
							props.img.map(i => {
								return (
								<article key = {i.data.id} class="thumb">
									<a href={i.data.url} class="image"><img src={i.data.url} alt="" /></a>		
									<h2>{i.data.title}</h2>
									<a className = "link" href = {`https://reddit.com/${i.data.permalink}`}> 
									View Original</a> 
								</article>
								)
							})
        				}
					</div>

              <Script src="assets/js/jquery.min.js" strategy='beforeInteractive' />
              <Script src="assets/js/jquery.poptrox.min.js"/>
			  <Script src="assets/js/browser.min.js"/>
			  <Script src="assets/js/breakpoints.min.js"/>
			  <Script src="assets/js/util.js"/>
			  <Script src="assets/js/main.js"/>
			</div>
		</>
    )
}

export default Home
export async function getStaticProps() {
    const response = await fetch('https://www.reddit.com/r/RoomPorn.json?limit=52')
    const data = await response.json()
    return {
        props: {
            img: data.data.children
        }
    }
  }