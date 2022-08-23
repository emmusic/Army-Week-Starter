import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const links = [
  {
    text: "Army Week on Sharepoint",
 url: "https://acims.mil.ca/plan/AGM/Pages/welcome.aspx",
    // description:
    //   "Army Week on Sharepoint",
  }
]

const samplePageLinks = [
  {  text: "All Events", url: "allevents" },
{ text: "Venue", url: "venueinfo"},
{ text: "Calendar", url: "calendar" },
{ text: "FAQ", url: "faq" }
]

const moreLinks = [

]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />

    <div className={styles.textCenter}>
      <StaticImage
        src="../images/army-week-logo-black-font.svg"
        loading="eager"
        width={350}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginTop: `var(--space-1)` }}
      />

      <h1>
      <b> Welcome to Army Week</b>
      </h1>

      <p className={styles.intro}>
       {" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </p>
    </div>

    <ul className={styles.intro}>
      {links.map(link => (
        <li key={link.url} className={styles.intro}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}
          >{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
         <p className={styles.intro}></p>
        <a href={`${link.url}${utmParameters}`}
        >
          {link.text}
        </a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}

  </Layout>
)

// const Head = () => <Seo title="Home" />

export default IndexPage
