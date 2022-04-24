import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (
  <header
    style={{
      backgroundColor: `white`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        paddingTop: `1.45rem`,
        align: `center`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{

            textDecoration: `none`,
          }}
        >
        <StaticImage
          src="../images/td-color.png"
          width={100}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Tom & Derry Logo"
          style={{ marginBottom: `1.45rem` }}
        />
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
